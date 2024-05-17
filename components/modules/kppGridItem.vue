<template>
  <NuxtLink :to="content._path" :id="slug" class="kpp-update-grid-item | frame" :content="content" :has-bg="coverImageUrl ? true : false">
    <div class="kpp-update-grid-item__content" :bg="coverImageUrl">
      <kpp-headers :content="headerContent" :color="coverImageUrl ? 'white' : 'primary'"/>
    </div>
  </NuxtLink>
</template>

<script setup>
import { toRefs } from 'vue'

const props = defineProps({
  content: {
    type: Object,
    default: {}
  },
});

const { content } = toRefs(props)

const bgImage = "var(--base-color)";

if (content.value.cover_image) {
  bgImage = `url(${content.value.cover_image})`
} 

const headerContent = computed(() => {
  return {
    brow: content.value.brow,
    title: content.value.title,
    tagline: content.value.tagline,
    date: content.value.date,
    author: content.value.author
  }
})

const coverImageUrl = computed(() => {
  return content.value.image ? `url(https://cms.thegovlab.com/assets/${content.value.image.id})` : false;
})

</script>

<style lang="scss" scoped>

.kpp-update-grid-item {
  display: inline-block;
}


.frame {
  --n: 1;
  --d: 1;
  container-type: inline-size;
}

.kpp-update-grid-item__content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: var(--s1);

  * { color: white; }
}

@container (min-width: 500px) {
  .kpp-update-grid-item__content {
    padding: var(--s2);
  }
}

.kpp-update-grid-item[has-bg="true"] {
  background-image: v-bind(coverImageUrl);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.kpp-update-grid-item[has-bg="true"]:after {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, transparent, 55%, hsla(var(--base-hsl), 0.75));
  @media (max-width: 768px) { background: linear-gradient(to bottom, transparent, 25%, hsla(var(--base-hsl), 0.75)); }
}

.kpp-update-grid-item[has-bg="true"] .kpp-update-grid-item__content > * {
  position: relative;
  z-index: 1;
}

.kpp-update-grid-item[has-bg="false"] {
  // temp
  background-color: var(--base-color);
}


// temp
.kpp-update-grid-item:nth-child(odd) {
  opacity: .9;
}


</style>

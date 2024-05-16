<template>
  <NuxtLink :to="content._path" :id="slug" class="kpp-update-grid-item | frame" :content="content" :has-bg="coverImageUrl ? true : false">
    <div class="kpp-update-grid-item__content" :bg="coverImageUrl">
      <kpp-headers :content="headerContent"/>
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
.frame {
  --n: 1;
  --d: 1;
}

.kpp-update-grid-item__content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: var(--s3);

  * { color: white; }
}

.kpp-update-grid-item[has-bg="true"] {
  background-image: v-bind(coverImageUrl);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.kpp-update-grid-item[has-bg="false"] {
  // temp
  background-color: var(--base-color);
}

h3, h4, h5 {
  text-align: left;
}

// temp
.kpp-update-grid-item:nth-child(odd) {
  opacity: .9;
}


</style>

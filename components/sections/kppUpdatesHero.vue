<template>
  <kpp-hero 
    class="kpp-hero--updates" 
    :color="bg != '' ? 'white' : 'primary'"
    :has-background="hasBackground"
  >
    <slot>
      <center-l size="wide" class="width:100%">
        <kpp-headers class="headers" :content="headerContent" :color="bg != '' ? 'white' : 'primary'" />
      </center-l>
    </slot>
    
  </kpp-hero>
</template>

<script setup>
import { toRefs, reactive, computed } from 'vue'

const props = defineProps({
  content: {
    type: Object,
    default: {}
  }
});

// const { content, height } = toRefs(props)


const route = useRoute()
const blogData = await queryContent('updates').where({
    slug: route.params.slug
}).find();

const data = reactive({
    blog: blogData[0]
});

const headerContent = computed(() => {
  return {
    brow: data.blog.brow,
    title: data.blog.heading,
    tagline: data.blog.tagline,
    date: data.blog.date,
    author: data.blog.author
  }}
)

const hasBackground = computed(() => {
  return props.bg !== '';
});


</script>

<style lang="scss" scoped>
.kpp-hero--updates {
  min-height: 70svh;
  background-image: v-bind(bgPath);
  background-size: cover;
  position: relative;
  @media (max-width: 768px) {
    padding-bottom: var(--s2);
  }
}

.kpp-hero--updates[has-background=true]:after {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, transparent, 55%, hsla(var(--base-hsl), 0.75));
  
  @media (max-width: 768px) { background: linear-gradient(to bottom, transparent, 25%, hsla(var(--base-hsl), 0.75)); }
}

.headers {
  position: relative;
  z-index: 100;
}

</style>

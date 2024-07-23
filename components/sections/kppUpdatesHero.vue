<template>
  <kpp-hero 
    class="kpp-hero--updates" 
    :color="primary"
    :has-background="hasBackground"
    :bg="content.image"
  >
    <slot>
      <center-l size="wide" class="width:100%">
        <NuxtLink v-if="showHeroBackButton" to="/updates">
          <kpp-button class="back-button" is="NuxtLink" visual="unstyled" icon-before="arrow_back" :color="primary" >Back to Updates
          </kpp-button>
        </NuxtLink>
        <kpp-headers class="headers" :content="headerContent" :color="content.image != '' ? 'white' : 'primary'" />
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
const showHeroBackButton = computed(() => {
  return route.hasOwnProperty('params') && route.params.hasOwnProperty('slug')
})

const blogData = await queryContent('updates').where({
    slug: route.params.slug
}).find();

const data = reactive({
    blog: blogData[0]
});

const headerContent = computed(() => {
  return {
    brow: data.blog && data.blog.brow ? data.blog.brow : '',
    title: data.blog && data.blog.heading ? data.blog.heading : '',
    tagline: data.blog && data.blog.tagline ? data.blog.tagline : '',
    date: data.blog && data.blog.date ? data.blog.date : '',
    author: data.blog && data.blog.author ? data.blog.author : ''
  }}
)

// const hasBackground = computed(() => {
//   return props.content.image !== '';
// });

const hasBackground = false;

const bgPath = computed(() => {
  return props.content.image ? `url(${props.content.image})` : '';
});

</script>

<style lang="scss" scoped>
.kpp-hero--updates {
  min-height: 20svh;
  background-image: v-bind(bgPath);
  background-color: var(--tertiary-color);
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
  background: linear-gradient(to bottom, hsla(var(--primary-hsl), 0.85), 55%, hsla(var(--base-hsl), 0.85));
  
  @media (max-width: 768px) { background: linear-gradient(to bottom, hsla(var(--primary-hsl), 0.85), 55%, hsla(var(--base-hsl), 0.85)); }
}

.headers,
.back-button {
  position: relative;
  z-index: 1;
}

.back-button {
  margin-bottom: var(--s2);
}

</style>

<template>
  <kpp-hero class="headers" :cover-image="coverImageUrl" :height="height" :color="coverImageUrl ? 'white' : 'primary'">
    <center-l size="wide">
      <stack-l>
        <slot>
          <h4 class="brow">{{ data.blog.brow ? data.blog.brow : formatDate(data.blog.date) }}</h4>
          <h2 class="heading">{{ data.blog.heading }}</h2>
          <h4 class="tagline">{{ data.blog.tagline }}</h4>
          <p class="authors">By {{ data.blog.author }}</p>
        </slot>
      </stack-l>
    </center-l>
  </kpp-hero>
</template>

<script setup>
import { toRefs, reactive, computed } from 'vue'
import useFormatDate from '@/composables/useFormatDate.js'

const props = defineProps({
  content: {
    type: Object,
    default: {}
  },
  height: {
    type: String,
    default: '70svh'
  },
});

const { content, height } = toRefs(props)
const { formatDate } = useFormatDate();

const route = useRoute()
const blogData = await queryContent('updates').where({
    slug: route.params.slug
}).find();

const data = reactive({
    blog: blogData[0]
});

const coverImageUrl = computed(() => {
  return data.blog.image ? `url(https://cms.thegovlab.com/assets/${data.blog.image.id})` : false;
})
</script>
<style lang="scss" scoped>
// .kpp-hero-updates {
//   display: flex;
//   justify-content: space-between;
//   flex-direction: column;
//   padding: var(--s1) var(--s3) var(--s3);
// }

// .kpp-hero-updates__content {
//   max-width: 40svw;
//   * { 
//     text-align: left; 
//   }
// }

// .brow {
//   font-weight: 800;
//   text-transform: uppercase;
//   font-size: 1rem;
// }

// .heading { margin-top: 0; }

.headers :deep(.authors) {
  font-weight: 400;  
  font-style: italic;
  color: hsla(var(--base-hsl), 0.5);  
}

@media (max-width: 768px) {
  .headers :deep(.brow   ) { font-size: 0.75rem;}
  .headers :deep(.heading) { font-size: 1.5rem; }
  .headers :deep(.tagline) { font-size: .85rem; }
  .headers :deep(.authors) { font-size: .75rem; }
}

.headers {
  min-height: 70svh;
  display: flex;
  align-items: flex-end;
  background-image: v-bind(coverImageUrl);
  background-size: cover;
  position: relative;

  &:deep(.brow),
  &:deep(.heading),
  &:deep(.tagline),
  &:deep(.authors) { 
    color: var(--white-color); 
    position: relative;
    z-index: 1;
  }
}

.headers:after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    
    background: linear-gradient(to bottom, transparent, 55%, hsla(var(--base-hsl), 0.75));
    
    @media (max-width: 768px) { background: linear-gradient(to bottom, transparent, 25%, hsla(var(--base-hsl), 0.75)); }
  }

.headers[cover-image="false"] { background: hsla(var(--base-hsl), 0.1);   
  .brow,
  .heading,
  .tagline { color: var(--primary-color); }
}
</style>

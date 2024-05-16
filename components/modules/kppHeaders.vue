<template>
  <hgroup class="headers | stack" :content="content">
    <h5 class="brow"    v-if="content.brow">{{ content.brow }}</h5>
    <h3 class="title">{{ content.title }}</h3>
    <h4 class="tagline" v-if="content.tagline">{{ content.tagline }}</h4>
    <h5 class="date"    v-if="content.date">{{ formatDate(content.date) }}</h5>
    <p class="authors"  v-if="content.author">By {{ content.author }}</p>
  </hgroup>
</template>

<script setup>
import useFormatDate from '@/composables/useFormatDate.js'
const { formatDate } = useFormatDate();

const props = defineProps({
  content: {
    type: Object,
    default: () => ({
      brow: 'This is the brow',
      title: 'This is the title',
      tagline: 'This is the tagline',
      author: 'This is the author',
      date: ''
    })
  },
});

</script>

<style lang="scss" scoped>
// .headers {
//   width: 100%;
// }

// .headers :deep(.authors) {
//   font-weight: 400;  
//   font-style: italic;
//   color: hsla(var(--base-hsl), 0.5);  
// }

// @media (max-width: 768px) {
//   .headers :deep(.brow   ) { font-size: 0.75rem;}
//   .headers :deep(.heading) { font-size: 1.5rem; }
//   .headers :deep(.tagline) { font-size: .85rem; }
//   .headers :deep(.authors) { font-size: .75rem; }
// }

// .headers {


//   &:deep(.brow),
//   &:deep(.heading),
//   &:deep(.tagline),
//   &:deep(.authors) { 
//     color: var(--white-color); 
//     position: relative;
//     z-index: 1;
//   }
// }

// .headers:after {
//     position: absolute;
//     content: "";
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
    
//     background: linear-gradient(to bottom, transparent, 55%, hsla(var(--base-hsl), 0.75));
    
//     @media (max-width: 768px) { background: linear-gradient(to bottom, transparent, 25%, hsla(var(--base-hsl), 0.75)); }
//   }

// .headers[cover-image="false"] { background: hsla(var(--base-hsl), 0.1);   
//   .brow,
//   .heading,
//   .tagline { color: var(--primary-color); }
// }
</style>

<template>
  <hgroup class="headers" :content="content" :color="color">
    <h5 class="brow" v-if="content.brow">{{ content.brow }}</h5>
    <h3 class="title">{{ content.title }}</h3>
    <h4 class="tagline" v-if="!hideTagline">{{ content.tagline }}</h4>
    <h5 class="date" v-if="content.date">{{ computedDate }}</h5>
    <p class="authors" v-if="content.author">By {{ content.author }}</p>
    
    <slot name="action">
      <kpp-button 
        visual="unstyled"
        icon-after="arrow_forward"
        size="xl"
        el="a" 
        :label="content.action ? content.action : 'Learn more'" 
        :href="`${content.path}`" 
        v-if="content.path" 
      />
    </slot>
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
      date: 'Mon DD, YYYY',
      image: 'Image URL'
    })
  },
  hideTagline: {
    type: Boolean,
    default: false
  },
  color: {
    type: String,
    default: 'primary'
  },
});

const computedDate = computed(() => {
  const datePattern = /^\d{4}-\d{2}-\d{2}$/; // Basic YYYY-MM-DD pattern check
  return datePattern.test(props.content.date) ? formatDate(props.content.date) : props.content.date;
});


</script>

<style lang="scss" scoped>
.headers { 
  container-type: inline-size; 
  width: 100%;
  --header-hsl: var(--base-hsl);
}

.headers * + * { margin-top: var(--s-2); }

.headers > * {
  position: relative;
  z-index: 1;
  color: hsla(var(--header-hsl), 1);
}

// Increasing specificity here to override the Hero Styles
.headers .brow, 
.headers .title, 
.headers .tagline, 
.headers .authors, 
.headers .date { color: hsla(var(--header-hsl), 1); }

.brow {
  font-weight: 600;  
  line-height: 1.4;
  text-transform: uppercase;
  
}

.title {
  font-weight: 200;  
  line-height: 1.2;
  @media (max-width: 768px) {
    line-height: 1.3;
   }
}

.tagline {
  font-weight: 200;  
  line-height: 1.62;
  margin-block: var(--s0);
}

.date { 
  font-weight: 400;  
  text-transform: uppercase;
  margin-top: var(--s0);
}

.authors { 
  font-weight: 400;  
  font-style: italic;
  color: hsla(var(--header-hsl), 0.75);  
}

.brow    { font-size: .75rem; }
.title   { font-size: 1.6rem; }
.tagline { font-size: .9rem;  }
.authors { font-size: .85rem; }
.date    { font-size: .75rem; }

.headers[color="base"] *      { --header-hsl: var(--base-hsl); }
.headers[color="white"] *     { --header-hsl: var(--white-hsl); }
.headers[color="primary"] *   { --header-hsl: var(--primary-hsl); }
.headers[color="secondary"] * { --header-hsl: var(--secondary-hsl); }
.headers[color="accent"] *    { --header-hsl: var(--accent-hsl); }

@container (min-width: 900px) {
  .headers .brow    { font-size: 1rem;   }
  .headers .title   { font-size: 3rem;   }
  
  .headers .tagline { 
    font-size: 1.5rem; 
    display: block;
  } 
  
  .headers .author  { font-size: 1rem;   } 
  .headers .date    { font-size: 1rem;   } 
} 



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
</style>

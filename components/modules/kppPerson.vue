<template>
  <section class="kpp-person" :content="content" :base-path="base_path" :title="`${content.name} | ${content.title}`">
    <slot>
      <div class="frame">
        <slot name="image">
          <img v-if="imgSrc" :src="imgSrc" :alt="`${content.name} | ${content.title}`">
          <img v-else :src="content.image" :alt="`${content.name} | ${content.title}`">
        </slot>
      </div>

      <h5><a :href="content.url">{{ content.name }}</a></h5>
      <h6>{{ content.title.length > 55 ? content.title.slice(0, 55) + '...' : content.title }}</h6>
    </slot>
  </section>
</template>

<script setup>
const props = defineProps({
  content: {
    type: Object,
    default: {}
  },
  base_path: {
    type: String,
    default: ''
  },
});

const imgSrc = computed(() => {
  return `${ props.base_path }${ props.content.image }`;
});


</script>

<style lang="scss" scoped>
.kpp-person {

  h5, h6 { 
    margin-block: 0; 
    text-align: center;
  }
  
  h5 { font-weight: 400; }
  h6 { font-size: .75rem; }

  .frame {
    --n: 1;
    --d: 1;
    border-radius: 50%;
    overflow: hidden;
    margin-block: var(--s-2);
    margin-inline: auto;
    transition: transform .3s ease-in; 
  }

  img { 
    transition: transform .3s ease-in; 
    transform-origin: top center;
    
  }


  &:hover {
    .frame { transform: scale(1.05); }
    img { transform: scale(1.1); }
  }

  
  
}
</style>

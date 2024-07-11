<template>
  <component 
    :content="content" 
    :is="isVideo" 
    class="winner-image" 
    :src="`/assets/images/winners/${slug}/${content}`" 
    alt=""
    :controls="isVideo === 'video'"
    :muted="isVideo === 'video'"
  >
  </component>
</template>

<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
  content: {
    type: String,
    default: ""
  },
  slug: {
    type: String,
    default: ""
  }
});

const isVideo = computed(() => {
  return props.content.endsWith('.mp4') ? 'video' : 'img';
});

</script>

<style lang="scss" scoped>
.winner-image {
  max-height: 400px;
}
</style>

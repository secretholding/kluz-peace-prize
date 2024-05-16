<template>
  <div class="kpp-hero kpp-hero-homepage" :height="height" :color="color">
    <kpp-top-bar :color="color" />
    <slot>
      <h1 class="text-align:center">Hero - Slider</h1>
    </slot>
  </div>
</template>

<script setup>    
const props = defineProps({
  height: {
    type: String,
    default: '90svh'
  },
  color: {
    type: String,
    default: 'white'
  }
});

</script>

<style lang="scss" scoped>

.kpp-hero {
  min-height: v-bind(height);
  background-color: hsla(var(--primary-hsl), .1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: var(--s1);
  
  @media (min-width: 768px) {
    padding: var(--s1) var(--s3) var(--s3);
  }

  h1 { color: var(--primary-color); }
}


</style>

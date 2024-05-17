<template>
  <section class="kpp-base-section" :height="height" :padding="padding">
    <slot></slot>
  </section>
</template>

<script setup>
const props = defineProps({
  height: {
    type: String,
    default: 'auto'
  },
  padding: {
    type: String,
    default: 'var(--s3)'
  }
});

</script>

<style lang="scss" scoped>
.kpp-base-section {
  min-height: v-bind(height);
  padding-block: v-bind(padding);

  @media (max-width: 768px) {
    padding-block: var(--s1);
  }
}
</style>

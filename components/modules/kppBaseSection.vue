<template>
  <base-section class="kpp-base-section" :height="height">
    <slot></slot>
  </base-section>
</template>

<script setup>
const props = defineProps({
  height: {
    type: String,
    default: 'auto'
  }
});

</script>

<style lang="scss" scoped>
.kpp-base-section {
  padding: var(--s2);
  min-height: v-bind(height);
}
</style>

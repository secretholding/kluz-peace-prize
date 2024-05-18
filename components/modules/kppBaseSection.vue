<template>
  <section class="kpp-base-section" :height="height" :padding="padding" :color="color">
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
  },
  color: {
    type: String,
    default: ''
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

.kpp-base-section[color="primary"] {
  background-color: hsla(var(--primary-hsl), 1);
  :deep(*) { color: var(--white-color); }
}

.kpp-base-section[color="base"] {
  background-color: hsla(var(--base-hsl), 1);
  :deep(*) { color: var(--white-color); }
}
</style>

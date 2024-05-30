<template>
  <kluz-prose>
    <slot >
      <div v-html="htmlContent"></div>
    </slot>
  </kluz-prose>
</template>

<script setup>
  defineProps({
    htmlContent: {
      type: String,
      default: ''
    }
  })

</script>

<style lang="scss" scoped>
:deep(h2),
:deep(h3),
:deep(h4) { color: var(--accent-color) !important; }
</style>

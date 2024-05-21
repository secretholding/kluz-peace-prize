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

</style>

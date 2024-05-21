<template>
  <kluz-prose>

    <slot>
      <span v-html="vHtmlContent"></span>
    </slot>
  </kluz-prose>
</template>

<script setup>
  defineProps({
    vHtmlContent: {
      type: String,
      default: ''
    }
  })

</script>

<style lang="scss" scoped>

</style>

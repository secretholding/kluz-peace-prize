<template>
  <kluz-prose>
    <slot >
      <div v-html="HtmlContent"></div>
    </slot>
  </kluz-prose>
</template>

<script setup>
  defineProps({
    HtmlContent: {
      type: String,
      default: ''
    }
  })

</script>

<style lang="scss" scoped>

</style>

<template>
  <div class="kpp-top-bar" :color="color">
    <h1 class="kpp-top-bar__logo">
      <NuxtLink to="/">
        <kluz-logo :color="color" />
      </NuxtLink>
    </h1>
    <div class="kpp-top-bar__nav">
      <slot>
        <kpp-main-menu :color="color"/>
      </slot>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  color: {
    type: String,
    default: "" 
  },
});

const { color } = toRefs(props);
</script>

<style lang="scss" scoped>
.test {}
</style>

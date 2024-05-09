<template>
  <div>
    <kpp-winners /> <!-- Year Filter -->
    <kpp-winners /> <!-- Year Filter -->
  </div>
</template>

<script setup>
useHead({
  title: 'PeaceTech Prize',
})

definePageMeta({
  layout: "base",
});
</script>

<style lang="scss" scoped>
.test {
  color: red;
}
</style>

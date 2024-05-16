<template>
    <kpp-hero color="primary"/>
    <kpp-highlight-event />
    <kpp-highlight-prizes />
    <kpp-highlight-about />
    <kpp-highlight-updates />
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

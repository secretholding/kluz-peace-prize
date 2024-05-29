<template>
  <kpp-hero 
    height="auto"
    title="Updates"
    color="primary"
  />
  <kpp-grid-updates>
    <kpp-grid-item v-for="i in blogData" :content="i" />
  </kpp-grid-updates>
</template>

<script setup>
useHead({
  title: 'Kluz Prize for PeaceTech - Updates',
})

const route = useRoute()

const blogData = await queryContent('updates').sort({date: -1}).find();
</script>

<style scoped lang="scss">

</style>

<template>
  <kpp-hero 
    height="10svh"
    title="Updates"
    color="primary"
  />
  
  <kpp-grid-updates>
    <kpp-grid-item v-for="i in blogData" :content="i" />
  </kpp-grid-updates>
</template>

<script setup>
useHead({
  title: 'PeaceTech Prize - Updates and Announcements',
})

const route = useRoute()

const blogData = await queryContent('updates').sort({date: -1}).find();
</script>

<style scoped lang="scss">

</style>

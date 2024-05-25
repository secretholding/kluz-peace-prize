<template>
  <!-- ToDo: Esse Hero deveria pegar o item mais recente da lista de Posts do Directus -->
  <!-- <kpp-updates-hero :content="blogData[0]" /> -->
  <kpp-hero 
    height="20svh"
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

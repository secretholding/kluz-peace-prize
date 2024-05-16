<template>
  <kpp-updates-hero :content="blogData[0]" color="primary"/>
  <kpp-grid-updates>
    <kpp-grid-item v-for="i in blogData" :content="i" />
  </kpp-grid-updates>
</template>

<script setup>
useHead({
  title: 'PeaceTech Prize - Updates and Announcements',
})

definePageMeta({
  layout: "default",
});


const route = useRoute()

const blogData = await queryContent('updates').sort({date: -1}).find();
</script>

<style scoped lang="scss">

</style>

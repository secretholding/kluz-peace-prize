<template>
  <div>
    <li v-for="i in blogData">{{ i.heading }}</li>
  </div>
  
</template>

<script setup>
const route = useRoute()

const blogData = await queryContent('blog').where({
    slug: route.params.slug
}).find();
</script>

<style scoped lang="scss">

</style>

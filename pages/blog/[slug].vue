<template>
  <div>
    <textarea name="" id="" cols="30" rows="10" >{{ data.blog }}</textarea>
    <contentDoc />
  </div>
</template>

<script setup>
  const route = useRoute()

  const blogData = await queryContent('blog').where({
      slug: route.params.slug
  }).find();
  const data = reactive({
      blog: blogData[0]
  });
</script>

<style lang="scss" scoped>

</style>

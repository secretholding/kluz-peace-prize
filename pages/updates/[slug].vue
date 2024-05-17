<template>
  <Head>
    <Title>{{ data.blog.heading }}</Title>
  </Head>
  <kpp-updates-hero class="headers" :cover-image="coverImageUrl" height="70svh" :color="coverImageUrl ? 'white' : 'primary'" />
  
  <section class="body">
    <center-l size="wide">
      <ccm-prose-2 v-html="data.blog.main_content" />
    </center-l>
  </section>

</template>

<script setup>
  import useFormatDate from '@/composables/useFormatDate.js'

  definePageMeta({
    layout: "base",
  });

  const route = useRoute()
  const blogData = await queryContent('updates').where({
      slug: route.params.slug
  }).find();

  const data = reactive({
      blog: blogData[0]
  });

  const coverImageUrl = computed(() => {
    return data.blog.image ? `url(https://cms.thegovlab.com/assets/${data.blog.image.id})` : false;
  })

</script>

<style lang="scss" scoped>

.body { padding-block: var(--s2); }

</style>

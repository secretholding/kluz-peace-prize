<template>
  <Head>
    <Title>{{ data.blog.heading }}</Title>
  </Head>
  <kpp-updates-hero 
    class="headers" 
    :bg="bgUrl" 
    height="70svh" 
    :color="bgUrl ? 'white' : 'primary'" 
  />
  <kpp-base-section color="base" padding="var(--s0)">
    <center-l size="wide">
      <kpp-button el="NuxtLink" visual="ghost" icon-before="arrow_back">Back to Updates</kpp-button>
    </center-l>
  </kpp-base-section>
  
  <kpp-base-section class="body">

    <center-l size="wide">
      <client-only>
        <kpp-prose v-html="data.blog.main_content" class="blog-post"/>
      </client-only>
    </center-l>
  </kpp-base-section>

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

  const bgUrl = computed(() => {
    return data.blog.image ? `https://cms.thegovlab.com/assets/${data.blog.image.id}` : false;
  })

</script>

<style lang="scss" scoped>

.body { padding-block: var(--s2); }
.blog-post {
  padding-bottom: var(--s3);
}


</style>

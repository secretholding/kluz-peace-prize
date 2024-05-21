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
  <kpp-base-section class="tagline-section" color="base" padding="var(--s0)">
    <center-l size="wide" >
      <p>{{ data.blog.tagline }}</p>
    </center-l>
  </kpp-base-section>
  
  <kpp-base-section class="body">
    <center-l size="wide">
      <kpp-prose :html-content="data.blog.main_content" class="blog-post"/>
    </center-l>
  </kpp-base-section>

</template>

<script setup>
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

.tagline-section {

}

.tagline-section {
  @media screen and (min-width: 768px){
    display: none;
  }
  font-size: 1.2rem;
  font-weight: 200;
}


</style>

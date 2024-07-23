<template>
  <Head>
    <Title>{{ data.blog && data.blog.heading ? data.blog.heading : '' }}</Title>
  </Head>
  <kpp-updates-hero 
    class="headers" 
    :bg="bgUrl" 
    height="70svh" 
    :color="bgUrl ? 'white' : 'primary'" 
  />
  
  
  <kpp-base-section class="body">
    <center-l size="wide">
      <kpp-prose :html-content="data.blog && data.blog.main_content ? data.blog.main_content : ''" class="blog-post"/>
    </center-l>
  </kpp-base-section>

</template>

<script setup>

useHead({
  title: "Kluz Prize for PeaceTech",
})
  const route = useRoute()
  const blogData = await queryContent('updates').where({
      slug: route.params.slug
  }).find();

  const data = reactive({
      blog: blogData[0]
  });

  // const bgUrl = computed(() => {
  //   return data.blog && data.blog.image ? data.blog.image : false;
  // })

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

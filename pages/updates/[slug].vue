<template>
  <div>
    <base-section class="headers">
      <center-l>
        <stack-l>
          <h4 class="brow">{{ data.blog.brow ? data.blog.brow : formatDate(data.blog.date) }}</h4>
          <h2 class="heading">{{ data.blog.heading }}</h2>
          <h4 class="tagline">{{ data.blog.tagline }}</h4>
        </stack-l>
      </center-l>
    </base-section>
    <base-section class="body">
      <center-l>
        <stack-l>
          <img v-if="data.blog.image" :src="`https://cms.thegovlab.com/assets/${data.blog.image.id}`" alt="">
          <ccm-prose-2 v-html="data.blog.main_content" class="stack" style="--space: var(--s0)" />
        </stack-l>        
      </center-l>
    </base-section>
  </div>
</template>

<script setup>
  const route = useRoute()
  const blogData = await queryContent('updates').where({
      slug: route.params.slug
  }).find();
  const data = reactive({
      blog: blogData[0]
  });

  const formatDate = (date) => {
  const dateObj = new Date(date)
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return dateObj.toLocaleDateString('en-US', options)
}
</script>

<style lang="scss" scoped>
.brow {
  font-weight: 800;
  text-transform: uppercase;
  font-size: 1rem;
  color: var(--accent-color);
}

</style>

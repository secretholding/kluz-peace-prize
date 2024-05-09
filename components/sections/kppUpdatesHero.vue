<template>
  <kpp-base-section :bg="content.cover_image" :content="content" class="kpp-hero-updates">
    <kpp-top-bar color="red" />
    <hgroup class="kpp-hero-updates__content">
      <h4 v-if="content.brow">{{ content.brow }}</h4>
      <h4 v-else>{{ formatDate(content.date) }}</h4>
      <h2>{{ content.heading }}</h2>
      <h3>{{ content.tagline }}</h3>
      <h5 v-if="content.brow">{{ formatDate(content.date) }}</h5>
      <base-button el="NuxtLink" :id="slug" :to="content._path">Read More</base-button>
    </hgroup>
    <!-- <pre>
      {{ blogData[0] }}
    </pre> -->
  </kpp-base-section>
</template>

<script setup>
import { toRefs } from 'vue'

const props = defineProps({
  content: {
    type: Object,
    default: {}
  },
});

const { content } = toRefs(props)

const bgImage = "hsla(var(--base-hsl), .3)";

if (content.value.cover_image) {
  bgImage = `url(${content.value.cover_image})`
} 


  const route = useRoute()
  const blogData = await queryContent('updates').where({
      slug: route.params.slug
  }).find();
  const data = reactive({
      blog: blogData[0]
  });

  const formatDate = (date) => {
    const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    const dateObj = new Date(date)

    return `${month[dateObj.getUTCMonth()]} ${dateObj.getUTCDate()}, ${dateObj.getUTCFullYear()}`
  }
</script>
<style lang="scss" scoped>
.kpp-hero-updates {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: var(--s1) var(--s3) var(--s3);
  
  background: v-bind(bgImage);
  // temp
}

.kpp-hero-updates__content {
  max-width: 40svw;
  * { 
    text-align: left; 
  }
}
</style>

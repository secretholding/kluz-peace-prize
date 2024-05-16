<template>
  <kpp-hero class="kpp-hero--updates" :cover-image="coverImageUrl" :height="height" :color="coverImageUrl ? 'white' : 'primary'">
    <center-l size="wide">
      <stack-l>
        <slot>
          <kpp-headers :content="headerContent"/>
        </slot>
      </stack-l>
    </center-l>
  </kpp-hero>
</template>

<script setup>
import { toRefs, reactive, computed } from 'vue'

const props = defineProps({
  content: {
    type: Object,
    default: {}
  },
  height: {
    type: String,
    default: '70svh'
  },
});

const { content, height } = toRefs(props)


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

const headerContent = computed(() => {
  return {
    brow: data.blog.brow,
    title: data.blog.heading,
    tagline: data.blog.tagline,
    date: data.blog.date,
    author: data.blog.author
  }}
)

</script>

<style lang="scss" scoped>
.kpp-hero--updates {
  min-height: 70svh;
  display: flex;
  align-items: flex-end;
  background-image: v-bind(coverImageUrl);
  background-size: cover;
  position: relative;
}

.kpp-hero-updates {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: var(--s1) var(--s3) var(--s3);
}
</style>

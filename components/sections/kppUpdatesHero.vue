<template>
  <kpp-hero class="kpp-hero--updates" :cover-image="coverImageUrl" :height="height" :color="coverImageUrl ? 'white' : 'primary'">
    <slot>
      <center-l size="wide" class="center--forced">
        <kpp-headers :content="headerContent" :color="coverImageUrl ? 'white' : 'primary'" />
      </center-l>
    </slot>
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
  background-image: v-bind(coverImageUrl);
  background-size: cover;
  position: relative;

}

.kpp-hero--updates[cover-image=true]:after {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  
  background: linear-gradient(to bottom, transparent, 55%, hsla(var(--base-hsl), 0.75));
  
  @media (max-width: 768px) { background: linear-gradient(to bottom, transparent, 25%, hsla(var(--base-hsl), 0.75)); }
}

</style>

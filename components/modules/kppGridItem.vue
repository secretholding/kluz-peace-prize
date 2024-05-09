<template>
  <NuxtLink :to="content._path" :id="slug" class="kpp-update-grid-item | frame" :content="content">
    <div class="kpp-update-grid-item__content" :bg="content.cover_image">
      <h4 v-if="content.brow">{{content.brow}}</h4>
      
      <h3>{{ content.heading }}</h3>
      <!-- <h5 v-if="content.tagline">{{ content.tagline }}</h5> -->
      <h5>{{formatDate(content.date)}}</h5>
    </div>
    
  </NuxtLink>
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

const bgImage = "var(--base-color)";

if (content.value.cover_image) {
  bgImage = `url(${content.value.cover_image})`
} 


// Function that receives a date like this 2021-01-30 and formats it like this January 30, 2021
const formatDate = (date) => {
  const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const dateObj = new Date(date)

  return `${month[dateObj.getUTCMonth()]} ${dateObj.getUTCDate()}, ${dateObj.getUTCFullYear()}`
}


</script>

<style lang="scss" scoped>
.frame {
  --n: 1;
  --d: 1;
}

.kpp-update-grid-item__content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: var(--s3);
  background: v-bind(bgImage);

  * { color: white; }
}

h3, h4, h5 {
  text-align: left;
}

// temp
.kpp-update-grid-item:nth-child(odd) {
  opacity: .9;
}


</style>

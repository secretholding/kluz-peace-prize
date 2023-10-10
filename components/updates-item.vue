<template>
  <NuxtLink :to="content._path" :id="slug" class="update-item">
    <h4 v-if="content.brow">{{content.brow}}</h4>
    <h4 v-else>{{formatDate(content.date)}}</h4>
    <h3>{{ content.heading }}</h3>
    <h5 v-if="content.tagline">{{ content.tagline }}</h5>
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

// Function that receives a date like this 2021-01-30 and formats it like this January 30, 2021
const formatDate = (date) => {
  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const dateObj = new Date(date)

  return `${month[dateObj.getUTCMonth()]} ${dateObj.getUTCDate()}, ${dateObj.getUTCFullYear()}`
}


</script>

<style lang="scss" scoped>
.update-item {
  display: block;
  padding: var(--s1) var(--s2);
  // border: 1px solid var(--base-color-20);
  border-left: 4px solid var(--accent-color);
  text-decoration: none;
  box-shadow: 0 0 16px var(--base-color-10);
  transition: transform 0.2s ease-in-out;
  
  * { text-align: left; }

  h4 {
    font-weight: 800;
    text-transform: uppercase;
    font-size: 1rem;
    color: var(--accent-color);
  }
}

.update-item:hover { transform: scale(1.02); }


</style>

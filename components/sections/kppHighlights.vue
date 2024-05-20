<template>
  <kpp-base-section :content="content">
    <center-l size="wide">
      <h2>{{ content.title }}</h2>
    </center-l>
    <div class="updates-highlights | margin-top:s2">
      <kpp-grid-item v-for="i in content.posts" class="updates-highlights__item" :content="i" />
    </div>
    <center-l class="margin-top:s2 text-align:center">
      <nuxt-link :to="content.action.url">
          <base-button el="NuxtLink" size="l">{{ content.action.label }}</base-button>
      </nuxt-link>
    </center-l>
  </kpp-base-section>
  
</template>

<script setup>
const props = defineProps({
  content: {
    type: Object,
    default: {}
  },
});

</script>

<style lang="scss" scoped>
.updates-highlights {
  display: grid;
  grid-template-columns: repeat(3, minmax(300px, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
}

.highlights-reel__item {
  --n: 1;
  --d: 1;
}


</style>

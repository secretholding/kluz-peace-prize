<template>
  <kpp-base-section :content="content">
    <center-l size="wide">
      <h2 class="text-align:center">{{ content.title }}</h2>
      <div class="updates-highlights | margin-top:s2">
        <kpp-grid-item v-for="i in content.posts" class="updates-highlights__item" :content="{ ...i, type: content.type }" :hide-tagline="hideTagline" />
      </div>
    </center-l>
    
    <center-l class="margin-top:s2 text-align:center" v-if="!hideAction">
      <nuxt-link :to="content.action.url" unstyled="color">
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
  hideAction: {
    type: Boolean,
    default: false
  },
  hideTagline: {
    type: Boolean,
    default: false
  },
});

</script>

<style lang="scss" scoped>
.updates-highlights {
  display: grid;
  gap: var(--s1);
  grid-template-columns: repeat(2, minmax(300px, 1fr));
  @media (max-width: 768px) { grid-template-columns: repeat(1, 1fr); }
}

.highlights-reel__item {
  --n: 1;
  --d: 1;
}
</style>

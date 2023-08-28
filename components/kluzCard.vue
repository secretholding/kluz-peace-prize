<template>
  <person-card
    :person-name="card.name"
    :tagline="card.job"
    :url="card.linkedin"
    :imageUrl="card.headshot"
  />
</template>

<script setup>
import { toRefs } from 'vue'

const props = defineProps({
  card: {
    type: Object,
    default: {}
  },
});

const { card } = toRefs(props)
</script>

<style lang="scss" scoped>

</style>

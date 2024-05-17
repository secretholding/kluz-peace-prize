<template>
  <div>
    <h2>{{ event.year }}</h2>
    <pre>
      <!-- Event YEAR -->
      {{ event.title }}
    </pre>

    <pre>
      <!-- Lista de Winners com o attr winner.YEAR == event.YEAR -->
    </pre>
  </div>
</template>

<script setup>

const route = useRoute()

const event = await queryContent('events').where({
    year: Number(route.params.slug)
}).findOne();

</script>

<style lang="scss" scoped>

</style>

<template>
  <kpp-hero title="Prizes" height="auto" color="primary"/>
  <kpp-base-section class="winners-panel" padding="var(--s1)">
    <kpp-winners v-for="event in events" :key="event.slug" :event="event"/>
  </kpp-base-section>
</template>

<script setup>
useHead({
  title: 'PeaceTech Prize',
})

definePageMeta({
  layout: "base",
});


const events = await queryContent('events').sort({year: -1}).find();

</script>

<style lang="scss" scoped>
.winners-panel {
  display: flex;
  width: max-content;
  margin-inline: auto;
  gap: var(--s0);
}

</style>

<template>
  <kpp-hero title="Prizes" height="auto" color="primary"  hide-on-wide="true"/>
  <kpp-base-section>
    <center-l size="wide" class="winners-panel">
      <kpp-winners v-for="event in events" :key="event.slug" :event="event"/>
    </center-l>
  </kpp-base-section>
</template>

<script setup>
useHead({
  title: 'Kluz Prize for PeaceTech',
})

const events = await queryContent('events').sort({year: -1}).find();

</script>

<style lang="scss" scoped>
.winners-panel {
  margin-top: var(--s2);
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  gap: var(--s2);
}

</style>

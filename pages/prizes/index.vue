<template>
  <kpp-hero title="Prizes" color="primary"/>
  <kpp-base-section>
    <center-l size="wide">
      <kpp-winners v-for="event in events" :key="event.slug" :event="event"/> <!-- Year Filter -->
    </center-l>
  </kpp-base-section>
  <kpp-base-section>
    <center-l size="wide">
      <!-- <kpp-winners /> Year Filter -->
    </center-l>
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
</style>

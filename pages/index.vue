<template>
    <kpp-slider />
    
    <kpp-highlight-event />

    <kpp-highlights :content="eventsHighlights" />

    <kpp-highlights :content="updatesHighlights" />

    <kpp-highlight-about />
    
</template>

<script setup>
useHead({
  title: 'PeaceTech Prize',
})

definePageMeta({
  layout: "base"
});

const updatesHighlights = {
  title: 'Updates Highlights',
  posts: await queryContent('updates').sort({date: -1}).limit(3).find(),
  action: {
    label: 'View All Updates',
    url: '/updates'
  }
}

const events = await queryContent('events').find();
const groupedByYear = (events.reduce((grouped, event) => {
  const year = event.year; // replace 'year' with the actual attribute name in your event object
  if (!grouped[year]) {
    grouped[year] = {};
  }
  grouped[year] = event;
  return grouped;
}, {}));


const eventsHighlights = {
  title: 'Events Highlights',
  posts: groupedByYear,
  action: {
    label: 'View All Events',
    url: '/events'
  }
}

</script>

<style lang="scss" scoped>



</style>

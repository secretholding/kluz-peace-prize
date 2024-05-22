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
  posts: await queryContent('updates').sort({date: -1}).limit(2).find(),
  action: {
    label: 'View All Updates',
    url: '/updates'
  }
}
let posts = {}
const events = await queryContent('events').find();
let groupedByYear = (events.reduce((grouped, event) => {
  const year = event.year; // replace 'year' with the actual attribute name in your event object
  if (!grouped[year]) {
    grouped[year] = {};
  }
  grouped[year] = event;
  return grouped;
}, {}));

let order = Object.keys(groupedByYear).sort((a, b) => b - a)
order.forEach((year) => {
  posts[`'${year}'`] = groupedByYear[year]
})

const eventsHighlights = {
  title: 'Events Highlights',
  // ToDo: Inverter a ordem dos eventos. 2023 primeiro, 2022 depois.
  posts: posts,
  action: {
    label: 'View All Events',
    url: '/events'
  }
}

</script>

<style lang="scss" scoped>



</style>

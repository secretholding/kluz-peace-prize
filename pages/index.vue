<template>
  <main>
    <kpp-slider />
    <!-- <kpp-highlight-event /> -->
    <kpp-cta color="tertiary"/>

    <kpp-highlights :content="updatesHighlights" />

    <kpp-highlights :content="eventsHighlights" hide-action hide-tagline/>

    <kpp-highlight-about />
  </main>
</template>

<script setup>
useHead({
  title: "Kluz Prize for PeaceTech",
})


const updatesHighlights = {
  title: 'Updates',
  type: 'posts',
  posts: await queryContent('updates').sort({date: -1}).limit(2).find(),
  action: {
    label: 'View All Updates',
    url: '/updates'
  }
}
let posts = {}
// Get all events and sort by year descending
const allEvents = await queryContent('events').sort({year: -1}).find();
// Get current year
const currentYear = new Date().getFullYear();
// Filter out the most recent year and take only 2 events
const events = allEvents.filter(event => event.year < currentYear).slice(0, 2);
let groupedByYear = (events.reduce((grouped, event) => {
  const year = event.year; // replace 'year' with the actual attribute name in your event object
  grouped[year] = event;
  return grouped;
}, {}));

let order = Object.keys(groupedByYear).sort((a, b) => b - a);
order.forEach((year) => {
  posts[`'${year}'`] = groupedByYear[year];
});

const eventsHighlights = {
  title: 'Events',
  type: 'events',
  posts: posts,
  action: {
    label: 'View All Events',
    url: '/events'
  }
}

</script>

<style lang="scss" scoped>
.test {
  color: red;
}
</style>

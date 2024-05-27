<template>
  <main>
    <kpp-slider />
    <!-- <kpp-highlight-event /> -->
    <kpp-cta color="tertiary"/>

    <kpp-highlights :content="updatesHighlights" />

    <kpp-highlights :content="eventsHighlights" hide-action />

    <kpp-highlight-about />
  </main>
</template>

<script setup>
useHead({
  title: 'PeaceTech Prize',
})


const updatesHighlights = {
  title: 'Updates Highlights',
  type: 'posts',
  posts: await queryContent('updates').sort({date: -1}).limit(2).find(),
  action: {
    label: 'View All Updates',
    url: '/updates'
  }
}
let posts = {}
const events = await queryContent('events').limit(2).find();
let groupedByYear = (events.reduce((grouped, event) => {
  const year = event.year; // replace 'year' with the actual attribute name in your event object
  grouped[year] = event;
  return grouped;
}, {}));

let order = Object.keys(groupedByYear).sort((a, b) => b - a);
order.forEach((year) => {
  posts[year] = groupedByYear[year];
});


const eventsHighlights = {
  title: 'Events Highlights',
  type: 'events',
  posts: posts,
  action: {
    label: 'View All Events',
    url: '/events'
  }
}

</script>

<style lang="scss" scoped>
</style>

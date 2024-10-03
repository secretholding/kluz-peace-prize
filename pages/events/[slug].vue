<template>
  <kpp-hero height="50svh" :color="event.cover_image ? 'white' : 'primary'" :title="event.heading" :bg="event.cover_image" :year="event.year">
    <center-l v-if="noBg" size="wide" class="width:100%">
      <kpp-headers :content="headerContent" color="primary" />
    </center-l>
  </kpp-hero>
  
  <!-- <kpp-base-section class="tagline" color="primary">
   <center-l size="wide">
      <span v-html="headerContent.tagline"></span>
    </center-l>
  </kpp-base-section> -->

  <kpp-winners-section :content="event.winners" />

  <!-- <kpp-base-section>
    <center-l size="wide">
      <div class="panel-grid" >
        <h2 class="header header--1">Overview</h2>
        <kpp-prose class="description" :html-content="event.description_html" />
        <h2 class="header header--2 header--centered">Awarded Organizations</h2>
        <div class="winners">
          <kpp-winners :event="event" :header=false />
        </div>
      </div>
    </center-l>
  </kpp-base-section> -->

  <kpp-base-section class="ceremony-section" padding="0" v-if="event.images">
    <center-l size="wide">
      <h2 class="section-title">Event</h2>
      <stack-l v-if="event.ceremony_video">
        <div class="ceremony-video | frame">
          <iframe width="560" height="315" :src="event.ceremony_video" title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </stack-l>
    </center-l>
    <reel-l v-if="event.images" class="ceremony-reel">
      <img class="ceremony-image" v-for="i in event.images" :key="i" :src="i" alt="" />
    </reel-l>
  </kpp-base-section>

  <kpp-base-section class="jury-section">
    <center-l size="wide">
      <h2 class="section-title">Selection Committee</h2>
      <div class="grid">
        <kpp-person v-for="i in event.jury" :content="i" />
      </div>
    </center-l>
  </kpp-base-section>

  <!-- <pre>{{ event }}</pre> -->
</template>

<script setup>

const route = useRoute()

const event = await queryContent('events').where({
    year: Number(route.params.slug)
}).findOne();

useHead({
  title: "Kluz Prize for PeaceTech",
})

const headerContent = {
  brow: 'Winners',
  title: `Kluz Prize for PeaceTech ${event.year}`,
  tagline: `${event.tagline}`,
  // author: 'This is the author',
  // date: 'Mon DD, YYYY'
}

const noBg = computed(() => {
  return !event.cover_image;
});


</script>

<style lang="scss" scoped>

.tagline {
  display: none;
  @media (max-width: 768px) {
    display: block;
    font-size: 110%; 
  }
}

.panel-grid {
  display: grid;
  grid-template-rows: auto auto auto 1fr;
  grid-template-columns: 1fr;
  gap: var(--s2);
  grid-template-areas: 
      "header1"
      "description"
      "header2"
      "winners";

  @media (min-width: 768px) {
    grid-template-rows: auto 1fr;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 
      "header1 header2"
      "description winners";
  }
}

.header {
  align-items: baseline;
  justify-items: baseline;
  display: flex;
  align-items: flex-end;
  justify-content: stretch;

  &--centered { 
    @media (min-width: 768px) { justify-content: center; }
  }
}

.header--2 {
  font-size: 1.75rem;
}

.description {
  width: 100%;
  height: auto;
}

.grid {
  --itemWidth: 200px;
  gap: var(--s3);
  @media (max-width: 768px) { 
    padding-inline: var(--s2);
  }
}

.ceremony-section {
  // background-color: hsla(var(--primary-hsl), .15);

}

.ceremony-video {
  width: 100%;
  height: 100%;

}

.header--1   { grid-area: header1; }
.header--2   { grid-area: header2; }
.description { grid-area: description; }
.winners     { grid-area: winners; }

.intro * { --space: var(--s2); }

.ceremony-reel {
  margin-top: var(--s2);
  padding-inline: 0;
}

.ceremony-image {
  max-height: 400px;
  --n: 9;
  --d: 16;
}



</style>

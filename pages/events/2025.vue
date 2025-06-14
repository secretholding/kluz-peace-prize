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

  <kpp-base-section v-if="event.description_html">
    <center-l size="wide">
      <kpp-prose :html-content="event.description_html" />
    </center-l>
  </kpp-base-section>

  <kpp-winners-section :content="event.winners" v-if="event.winners && event.winners.winner" />

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

const event = await queryContent('events').where({
    year: 2025
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

/* 2025 Application Styles */
:deep(.application-notice) {
  background: linear-gradient(135deg, hsla(var(--primary-hsl), 0.1) 0%, hsla(var(--primary-hsl), 0.05) 100%);
  padding: var(--s3);
  border-radius: 8px;
  text-align: center;
  margin-bottom: var(--s3);
  border: 1px solid hsla(var(--primary-hsl), 0.2);
}

:deep(.application-notice h2) {
  color: var(--primary-color);
  margin-bottom: var(--s1);
}

:deep(.cta-button) {
  display: inline-block;
  background-color: var(--primary-color);
  color: white;
  padding: var(--s0) var(--s2);
  border-radius: 4px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

:deep(.cta-button:hover) {
  background-color: var(--primary-dark, #0056b3);
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

:deep(.deadline) {
  font-size: 0.9em;
  color: var(--secondary-color);
  margin-top: var(--s0);
  font-weight: 500;
}

:deep(.timeline) {
  list-style: none;
  padding-left: 0;
  margin: var(--s2) 0;
}

:deep(.timeline li) {
  padding: var(--s1) 0;
  border-left: 3px solid var(--primary-color);
  padding-left: var(--s2);
  margin-left: var(--s0);
  position: relative;
}

:deep(.timeline li:before) {
  content: '';
  position: absolute;
  left: -8px;
  top: var(--s2);
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: var(--primary-color);
  border: 3px solid white;
  box-shadow: 0 0 0 2px var(--primary-color);
}

:deep(.btn-primary) {
  display: inline-block;
  background-color: var(--primary-color);
  color: white;
  padding: var(--s0) var(--s2);
  border-radius: 4px;
  text-decoration: none;
  font-weight: 600;
  margin-top: var(--s1);
}

:deep(.apply-cta) {
  text-align: center;
  margin-top: var(--s2);
}


</style>
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

  <kpp-base-section v-if="event.description_html" class="description-section">
    <center-l size="wide">
      <kpp-prose :html-content="event.description_html" />
    </center-l>
  </kpp-base-section>

  <!-- Roadmap Section -->
  <kpp-base-section>
    <center-l size="wide">
      <h2 class="section-title">2025 Timeline</h2>
      <ul class="roadmap">
        <li class="roadmap__item" active="true">
          <h4>Applications Are Now Open</h4>
          <p>Submit your application for the 2025 Kluz Prize for PeaceTech.</p>
        </li>
        <li class="roadmap__item">
          <h4>July 20<sup>th</sup>, 2025<span> | Application Deadline</span></h4>
          <p>Apply by 11:59 PM EDT</p>
        </li>
        <li class="roadmap__item">
          <h4>Beginning of September, 2025<span> | Final Decision</span></h4>
          <p>Communication of the final decision to the winner(s) and invitation to the award ceremony</p>
        </li>
        <li class="roadmap__item">
          <h4>September 19<sup>th</sup>, 2025 <span> | Award ceremony</span></h4>
          <p>Winner will be honored at an award ceremony</p>
        </li>
      </ul>
    </center-l>
  </kpp-base-section>

  <!-- Privacy Policy and Final CTA -->
  <kpp-base-section>
    <center-l size="wide" class="final-section">
      <kpp-prose><p>For information regarding privacy, please review the Kluz Prize's Privacy Policy <a href="/privacy-policy">here</a>.</p></kpp-prose>
      <div class="final-cta">
        <a href="/application">
          <kpp-button class="button" visual="primary" size="xl">Apply Now</kpp-button>
        </a>
      </div>
    </center-l>
  </kpp-base-section>

  <kpp-winners-section :content="event.winners" v-if="event.winners && event.winners.winner" />

  <kpp-base-section class="ceremony-section" padding="0" v-if="event.images && event.images.length > 0">
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

  <kpp-base-section class="jury-section" v-if="event.jury && event.jury.length > 0">
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
  brow: event.brow || 'Event',
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

/* Description section to handle overflow */
.description-section {
  @media (max-width: 768px) {
    overflow-x: hidden;
  }
}

/* 2025 Application Styles */
:deep(.application-notice) {
  background-color: var(--primary-color);
  color: var(--white-color);
  padding: var(--s3);
  margin: calc(var(--s3) * -1);
  margin-bottom: var(--s3);
}

:deep(.notice-content) {
  text-align: center;
  max-width: 60ch;
  margin: 0 auto;
}

:deep(.application-notice h2) {
  font-size: 330%;
  font-weight: 200;
  line-height: 1.2;
  color: var(--white-color);
  margin-bottom: var(--s1);
  @media screen and (max-width: 768px) { font-size: 200%; }
}


:deep(.deadline) {
  font-size: 125%;
  color: var(--white-color);
  margin-top: var(--s2);
  font-weight: 500;
  opacity: 0.9;
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

:deep(.faq-button-wrapper) {
  text-align: center;
  margin: var(--s2) 0;
}

:deep(.top-apply-cta) {
  text-align: center;
  margin-top: var(--s2);
}

:deep(.top-apply-cta *) {
  color: white !important;
}

.final-section {
  text-align: center;
  padding: var(--s2) 0;
}

.final-cta {
  margin-top: var(--s2);
}


/* Roadmap Styles from roadmap.vue */
.roadmap {
  display: flex;
  flex-direction: column;
  gap: var(--s3);
  align-items: flex-start;
  position: relative;

  &__item { 
    padding: var(--s0) var(--s1); 
    position: relative;
  }

  &__item:before {
    content: 'radio_button_unchecked';
    font-family: var(--icon-font);
    position: absolute;
    left: -1.5rem;
    top: 19px;
    font-size: 1.5rem;
    line-height: 1;
    color: var(--secondary-color);
    background-color: #fff;
    border-radius: 50%;
  }

  &__item:not(:last-child):after {
    content: '';
    position: absolute;
    top: 45px;
    bottom: -83px;
    left: -13px;
    width: 2px;
    background-color: var(--secondary-color);
  }

  &__item[active] {
    background: linear-gradient(to right, transparent 0%, hsla(var(--primary-hsl), .1) 10%, transparent 100%);
  }
  
  &__item[active]:not(:last-child):after {
    background: linear-gradient(to bottom, var(--primary-color), var(--secondary-color));
    animation: animateGradient 1s linear infinite reverse;
  }

  h4 {
    font-size: 1.25rem;
    font-weight: 400;
    color: var(--primary-color);

    sup { 
      color: var(--primary-color); 
      font-weight: 400;
      font-size: .85rem;
    }
  }
  
  span {
    font-size: 1rem;
    font-weight: 400;
    color: var(--base-color);
  }

  .roadmap__item[active='true']:before {
    content: 'radio_button_checked';
    color: var(--primary-color);
  }
}


</style>
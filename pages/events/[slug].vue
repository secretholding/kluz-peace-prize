<template>
  <kpp-hero height="35svh" color="primary">
    <center-l size="wide" class="width:100%">
      <kpp-headers :content="headerContent" color="primary" />
    </center-l>
  </kpp-hero>

  <kpp-base-section class="tagline" color="base">
    <!-- ToDo: v-html não renderiza corretamente na página. Esse client-only foi uma sugestão do ChatGPT -->
    <client-only><center-l size="wide" v-html="headerContent.tagline"></center-l></client-only>
  </kpp-base-section>

  <kpp-base-section>
    <center-l size="wide">
      <div class="panel-grid" >
        <h2 class="header header--1">Overview</h2>
        
        <!-- ToDo: v-html não renderiza corretamente na página. Esse client-only foi uma sugestão do ChatGPT -->
        <client-only>
          <kpp-prose class="description" v-html="event.description_html" />
        </client-only>
        
        
        <h2 class="header header--2 header--centered">Awarded Organizations</h2>
        
        <div class="winners">
          <kpp-winners :event="event" header=false />
        </div>
      </div>
    </center-l>
  </kpp-base-section>

  <kpp-base-section class="ceremony-section">
    <center-l size="wide">
      <h2>Ceremony</h2>
    </center-l>
    
    <center-l size="wide">
      <reel-l class="ceremony-reel" itemWidth="90%" >
        <figure class="ceremony-image | frame" v-for="i in event.images">
          <img :src="i" alt="">
        </figure>
      </reel-l>
    </center-l>

      <!-- <pre>{{event.images}}</pre> -->
  </kpp-base-section>

  <kpp-base-section class="jury-section">
    <center-l size="wide">
      <h2 class="jury-section__title">Jury</h2>
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

const headerContent = {
  brow: 'Kluz Peace Prize',
  title: `${event.year} Winners`,
  tagline: 'The 2022 Kluz Prize for PeaceTech was facilitated by the Global PeaceTech Hub at the Florence School of Transnational Governance (European University Institute), and awarded at the Global PeaceTech Conference.',
  // author: 'This is the author',
  // date: 'Mon DD, YYYY'
}
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
  background-color: hsla(var(--primary-hsl), .15);

}

.jury-section {
  background-color: hsla(var(--primary-hsl), .05);

  &__title {
    text-align: center;
    padding-bottom:var(--s2);

    @media (max-width: 768px) { font-size: 300%; }
  }
}

.header--1   { grid-area: header1; }
.header--2   { grid-area: header2; }
.description { grid-area: description; }
.winners     { grid-area: winners; }

.intro * { --space: var(--s2); }

.ceremony-reel {
  margin-top: var(--s2);
}

.ceremony-image {
  --n: 9;
  --d: 16;
}



</style>

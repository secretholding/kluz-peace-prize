<template>
  <div class="winners-grid" :header="header" :n="winners.length">
    <hgroup v-if="header == true" class="winners-grid__title | text-align:center">
      <h3 class="">{{ event.year }}</h3>  
      <NuxtLink :to="`/events/${event.year}`" class="button" color="primary">View Ceremony</NuxtLink>
    </hgroup>
    
    <NuxtLink :to="`/prizes/${winner.slug}`" class="winner" v-for="(winner, index) in winners" :key="winner.slug" :index="index">
      <img v-if="winner.images.logo != ''" :src="`/assets/images/winners/${winner.images.logo}`" :alt="winner.title">
      <h3 v-else>{{ winner.title }}</h3>
    </NuxtLink>
  </div>
</template>

<script setup>

const props = defineProps({
  event: {
    type: Object,
    required: true
  },
  header: {
    type: Boolean,
    default: true
  }
})

// Commit Global, Didi, Palantir, and HRDAG.
const winners = await queryContent('winners').where({ year: props.event.year }).sort({ order: 1 }).find();

</script>

<style lang="scss" scoped>
.winners-grid {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto repeat(4, auto);
  align-items: start;
  justify-content: center;
  grid-template-areas: 
    "title"
    "winner1"
    "winner2"  
    "winner3"
    "winner4";
  gap: 0;
  
  @media (min-width: 1000px) {
    grid-template-columns: auto auto;
    grid-template-rows: auto minmax(360px, auto) minmax(360px, auto);
    grid-template-areas: 
        "title title"
        "winner1 winner2"  
        "winner3 winner4";
  }
}

.winners-grid[n="1"] {
  grid-template-rows: auto repeat(2, auto);
  grid-template-areas: 
    "title"
    "winner1";
}

.winners-grid__title {
  padding-bottom: var(--s1);
  h3 {
    border-bottom: 2px solid hsla(var(--primary-hsl), .3);


    @media (max-width: 768px) {
      padding-bottom: var(--s-4);
      margin-bottom: var(--s0);  
      font-size: 300%;
      margin-top: var(--s3);
    }

    @media (min-width: 768px) {
      padding-bottom: var(--s0);
      margin-bottom: var(--s0);  
    }
  }
}

.winner {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: var(--s0);
  max-height: 360px;
  max-width: 360px;
  min-height: 180px;
  margin-inline: auto;
  transition: all .5s ease;

  > img {
    width: 100%;
    max-width:  200px;
    max-height: 200px;
    mix-blend-mode: multiply;
    transition: all .8s ease;
  }

  @media (min-width: 1080px) {
    min-height: 360px;
    min-width: 360px;
  }

  @media (min-width: 768px) {
    min-height: 270px;
    min-width: 270px;
  }
  
  &:hover {
    background-color: hsla(var(--primary-hsl), .03);
    color: var(--color-white);

    img { transform: scale(1.1); }
  }
}

.winners-grid__title { grid-area: title; }
.winner[index="0"] { grid-area: winner1; }
.winner[index="1"] { grid-area: winner2; }
.winner[index="2"] { grid-area: winner3; }
.winner[index="3"] { grid-area: winner4; }

</style>

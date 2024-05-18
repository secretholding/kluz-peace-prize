<template>
  <div class="winners-grid">
    <h3 class="winners-grid__title text-align:center">{{ event.year }}</h3>
    <NuxtLink :to="`prizes/${winner.slug}`" class="winner" v-for="(winner, index) in winners" :key="winner.slug" :index="index">
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
  }
})

const winners = await queryContent('winners').where({ year: props.event.year }).find();

</script>

<style lang="scss" scoped>
.winners-grid {
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto auto;
  gap: 0;
  grid-template-areas: 
      "title title"
      "winner1 winner2"  
      "winner3 winner4";  
}

.winners-grid__title {
  font-weight: 400;
  border-bottom: 2px solid hsla(var(--primary-hsl), .3);
  padding-bottom: var(--s0);
}

.winner {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: var(--s0);
  height: 360px;
  width: 360px;
  transition: all .5s ease;

  > img {
    width: 100%;
    max-width:  200px;
    max-height: 200px;
    mix-blend-mode: multiply;
    transition: all .8s ease;
  }
  
  &:hover {
    background-color: hsla(var(--primary-hsl), .03);
    color: var(--color-white);

    img {
      transform: scale(1.1);
    }
  }
}

.winners-grid__title { grid-area: title; }
.winner[index="0"] { grid-area: winner1; }
.winner[index="1"] { grid-area: winner2; }
.winner[index="2"] { grid-area: winner3; }
.winner[index="3"] { grid-area: winner4; }

</style>

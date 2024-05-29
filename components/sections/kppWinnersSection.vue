<template>
  <kpp-base-section class="kpp-winners-section">
    <center-l size="wide">
      <div class="kpp-winners-section__grid">
        <div class="overview">
          <stack-l>
            <h2 class="overview__title">Overview</h2>
            <div v-html="content.overview"></div>
          </stack-l>
          
        </div>

        <div class="winner">
          <h2 class="winner__title">Winner</h2>
          <NuxtLink :to="`/prizes/${content.winner.slug}`" class="winner__logo">
            <img :src="content.winner.logo" alt="">
            <!-- {{ content.winner }} -->
          </NuxtLink>
          
        </div>
        
        <h2 v-if="hasHonorableMentions" class="honorable-mentions-title">Distinctions</h2>
        <NuxtLink :to="`/prizes/${content.ai_ml.slug}`" v-if="content.ai_ml" class="mention honorable-mention__logo mention__ai-ml">
          <img :src="content.ai_ml.logo" :alt="`${content.ai_ml.name} | ${content.ai_ml.prize}`">
        </NuxtLink>
        <NuxtLink :to="`/prizes/${content.non_profit.slug}`" v-if="content.non_profit" class="mention honorable-mention__logo mention__non-profit">
          <img :src="content.non_profit.logo" :alt="`${content.non_profit.name} | ${content.non_profit.prize}`">
        </NuxtLink>
        <NuxtLink :to="`/prizes/${content.big_tech.slug}`" v-if="content.big_tech" class="mention honorable-mention__logo mention__big-tech">
          <img :src="content.big_tech.logo" :alt="`${content.big_tech.name} | ${content.big_tech.prize}`">
        </NuxtLink>
      </div>
      <!-- <pre>{{ content }}</pre> -->
    </center-l>
  </kpp-base-section>
</template>

<script setup>
const props = defineProps({
  content: {
    type: Object,
    required: true
  }
})

const hasHonorableMentions = computed(() => {
  return props.content.ai_ml || props.content.non_profit || props.content.big_tech;
});


</script>

<style lang="scss" scoped>
.kpp-winners-section__grid {
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: minmax(100px, auto);
  gap: var(--s2);

  @media screen and (min-width: 800px) {
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: auto auto auto;
    grid-template-areas: 
      "overview overview overview winner winner winner"
      "title title title title title title"
      "mentions1 mentions1 mentions2 mentions2 mentions3 mentions3";
    }
  }

@media screen and (min-width: 800px) {
  .overview { grid-area: overview; }
  .winner { grid-area: winner; }
  .honorable-mentions-title { grid-area: title; }
  .mention__ai-ml { grid-area: mentions1; }
  .mention__non-profit { grid-area: mentions2; }
  .mention__big-tech { grid-area: mentions3; }
}

.overview__title,
.winner__title,
.honorable-mentions-title { 
  font-size: 200%; 
  margin-bottom: var(--s0);
}

.winner__title,
.honorable-mentions-title {
  @media screen and (min-width: 800px) { text-align: center; }
}

.winner__logo,
.honorable-mention__logo {
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  padding: var(--s0);
  max-height: 260px;
  max-width: 260px;
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
  
  &:hover {
    background-color: hsla(var(--primary-hsl), .03);
    color: var(--color-white);

    img { transform: scale(1.1); }
  }
}

.winner__logo {
  max-height: 320px;
  max-width: 320px;
  min-height: 180px;

  > img {
    max-width:  280px;
    max-height: 280px;
  }

  @media (min-width: 1000px) {
    min-height: 400px;
    min-width: 400px;
  }
}

</style>

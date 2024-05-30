<template>
  <div>
    <kpp-hero height="auto" color="primary">
      <center-l size="wide" class="width:100%">
        <kpp-headers :content="headerContent" color="primary" /> 
      </center-l>
    </kpp-hero>
    
    <kpp-base-section>
        <center-l size="wide">
          <div class="has-sidebar">
            <div class="description" v-if="winner.content_html">
              <h2>Overview</h2>

              <kpp-prose :html-content="winner.content_html" />
            </div>

            <aside class="winners__sidebar">
              <h2 class="text-align:center">Winners</h2>
              <div>
                <kpp-person v-for="i in winner.people" :content="i" :base-path="base_path">
                  <template v-slot:image>
                    <img slot="image" :src="`${base_path}${i.image}`" alt="">
                  </template> 
                </kpp-person>
                <p class="text-align:center margin-top:s2">
                  <base-button size="l" color="primary" :href="winner.connect.url">{{ winner.connect.label }}</base-button>
                </p>
              </div>
            </aside>
          </div>
        </center-l>
    </kpp-base-section>
    
    <kpp-base-section v-if="winner.youtube_video">
      <center-l size="wide" class="width:100%">
        <div class="frame">
          <iframe width="560" height="315" :src="winner.youtube_video" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </center-l>
    </kpp-base-section>

    <kpp-base-section v-if="winner.images.ceremony">
      <center-l size="wide">
        <h2 class="margin-bottom:s2">Prize Announcement</h2>
        <div class="frame">
          <img :src="`${ base_path }${ winner.images.ceremony }`" alt="">
        </div>
      </center-l>
    </kpp-base-section>

    <kpp-base-section class="impact" v-if="hasImpact">
      <center-l size="wide">
        <h2 visual="h1" v-if="winner.impact.description_html">Impact</h2>
        <kpp-prose class="impact__description" :html-content="winner.impact.description_html" />
        
        <div v-if="winner.impact.metrics" class="metrics | margin-top:s2">
          <img :src="`${base_path}${winner.images.impact}`" alt="">
          <h3 visual="h2" class="text-align:center">Metrics</h3>
          <ul class="metrics__panels">
            <li v-for="i in winner.impact.metrics">
              <span class="metrics__value">{{ i.value }}</span>
              <span class="metrics__label">{{ i.label }}</span>
            </li>
          </ul>
          <p v-if="winner.impact.metrics_source" class="metrics_source | text-align:center">Source: <a :href="winner.impact.metrics_source.url" target="_blank">{{ winner.impact.metrics_source.label }}</a></p>
        </div>
      </center-l>
    </kpp-base-section>
    
    <kpp-base-section v-if="hasQuote">
      <center-l size="wide">
        <div class="quote">
          <img :src="winner.quote.text" :alt="winner.quote.cite">
          <blockquote>
            <p>{{ winner.quote.text }}</p>
            <cite>{{ winner.quote.cite }}</cite>
          </blockquote>
        </div>
      </center-l>
    </kpp-base-section>

    <!-- <kpp-base-section>
      <center-l size="wide">
        <h2>Connect</h2>
        <p>{{ winner.message }}</p>
        <div>
          
        </div>
      </center-l>
    </kpp-base-section> -->
    <!-- <center-l size="wide">
      <pre>
        {{ winner }}
      </pre>
      
    </center-l> -->
      
    
  </div>
</template>

<script setup>
useHead({
  title: "Kluz Prize for PeaceTech",
})

const base_path = "/assets/images/winners/";


const route = useRoute()

// winner is the obj already
const winner = await queryContent('winners').where({
    slug: route.params.slug
}).findOne();


const headerContent = {
  brow: winner.prize  + ' | ' + winner.year,
  title: winner.title,
  tagline: winner.country,
  date: winner.applicant
}

const hasImpact = computed(() => {
  return winner.impact.description_html || winner.impact.metrics ? true : false;
});

const hasQuote = computed(() => {
  return winner.quote.text && winner.quote.cite && winner.quote.image ? true : false;
});


</script>

<style lang="scss" scoped>
.description {
  h2 + * { padding-top: var(--s1);}
}
.winners__sidebar {  
  > div {
    padding-top: var(--s1);
    display: flex;
    flex-direction: column;
    gap: var(--s1);
  }
  
  @media screen and (max-width: 768px) {
    padding-top: var(--s1);
    margin-inline: auto;

    div { 
      flex-direction: column; 
      gap: var(--s1);
    }  
  }

  @media screen and (min-width: 768px) { 
    padding-left: var(--s2); 
  }
}

.metrics__panels {
  display: flex;
  gap: var(--s2);
  justify-content: center;
  flex-direction: column;

  @media screen and (min-width: 768px) { flex-direction: row; }

  li {
    flex: 1;
    padding: var(--s1);
    background-color: var(--tertiary-color);
    font-size: 2rem;
    text-align: center;
  }

  .metrics__value {
    font-size: 3rem;
    font-weight: 200;
    display: block;
  }

  .metrics__label {
    font-size: 1.25rem;
    line-height: 1.2;
    font-weight: 800;
    display: block;
  }
}

.quote {
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) { flex-direction: row; }
  gap: var(--s2);
  margin-block: var(--s2);

  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin-inline: auto;
    margin-block: var(--s0);
  }

  blockquote {
    border-left: 4px solid var(--accent-color);
    padding-left: var(--s1);
    font-size: 1.32rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  cite {
    font-size: 1rem;
    font-weight: bold;
  }
}

.impact__description {
  max-width: 80ch;
  margin-top: var(--s0);
}

.metrics_source {
  text-align: center;
  font-style: italic;
  font-size: 75%;
  opacity: .4;
}


</style>

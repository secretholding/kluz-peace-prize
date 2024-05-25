<template>
  <div>
    <kpp-hero height="80svh" :bg="`${base_path}${winner.images.hero}`">
      <center-l size="wide" class="width:100%">
        <kpp-headers :content="headerContent" color="white" /> 
      </center-l>
    </kpp-hero>
    
    <kpp-base-section>
        <center-l size="wide">
          <div class="has-sidebar">
            <div class="description">
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
    
    <kpp-base-section>
      <center-l size="wide">
        <h2 class="margin-bottom:s2">Prize Announcement</h2>
        <div class="frame">
          <img :src="`${ base_path }${ winner.images.ceremony }`" alt="">
        </div>
      </center-l>
    </kpp-base-section>

    <kpp-base-section class="impact">
      <center-l size="wide">
        <h2 visual="h1">Impact</h2>
        <kpp-prose class="impact__description">
          {{ winner.impact.description }}
        </kpp-prose>
        <div v-if="winner.impact.metrics" class="metrics">
          <img :src="`${base_path}${winner.images.impact}`" alt="">
          <h3 visual="h2" class="text-align:center">Metrics</h3>
          <ul class="metrics__panels">
            <li v-for="i in winner.impact.metrics">
              <span class="metrics__value">{{ i.value }}</span>
              <span class="metrics__label">{{ i.label }}</span>
            </li>
          </ul>
        </div>
      </center-l>
    </kpp-base-section>
    
    <kpp-base-section>
      <center-l size="wide">
        <h2>Quotes</h2>
        <div class="quote">
          <img src="/assets/images/jury/artur-kluz.jpg" alt="">
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
  title: 'PeaceTech Prize',
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


</style>

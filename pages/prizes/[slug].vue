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
              <h2>Winners</h2>
              <div>
                <kpp-person v-for="i in winner.people" :content="i" :base-path="base_path">
                  <template v-slot:image>
                    <img slot="image" :src="`${base_path}${i.image}`" alt="">
                  </template> 
                </kpp-person>
              </div>
              
            </aside>
          </div>
        </center-l>
    </kpp-base-section>
    
    <kpp-base-section>
      <center-l size="wide">
        <h2>Prize Announcement</h2>
        <div class="frame">
          <img :src="`${ base_path }${ winner.images.ceremony }`" alt="">
        </div>
      </center-l>
    </kpp-base-section>

    <kpp-base-section>
      <center-l size="wide">
        <h2>Impact</h2>
        <kpp-prose>
          {{ winner.impact.text }}
        </kpp-prose>
        <div v-if="winner.impact.metrics" class="metrics">
          <h3>Metrics</h3>
          <img :src="`${base_path}${winner.impact.image}`" alt="">
          <ul>
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
        <blockquote> 
          <p>{{ winner.quote.text }}</p>
          <cite>{{ winner.quote.cite }}</cite>
        </blockquote>
      </center-l>
    </kpp-base-section>

    <kpp-base-section>
      <center-l size="wide">
        <h2>Connect</h2>
        <p>{{ winner.message }}</p>
        <div>
          <base-button :href="winner.connect.url">{{ winner.connect.label }}</base-button>
        </div>
      </center-l>
    </kpp-base-section>
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
</style>

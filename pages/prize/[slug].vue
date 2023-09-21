<template>
  <div>
    <base-section>
      <center-l size="wide">
        <div class="wrapper">
          <div class="prize | g1">
            <span v-if="data.winner.prize == 'Kluz Prize for PeaceTech'" class="prize-item__trophy | material-symbols-outlined">trophy</span>
            <span v-else class="prize-item__award | material-symbols-outlined">award_star</span>
          </div>
          <aside class="g2">
            <stack-l class="meta">
              <h2>{{ data.winner.title }}</h2>
              <span class="applicant">Submitted by {{ data.winner.applicant }}</span>
              <span class="country">{{ data.winner.country }}</span>

              <div class="margin-top:s3">
                <base-button class="margin-left:auto" color="accent" el="a" target="_blank" :href="data.winner.project_url">Project Website</base-button>
                <base-button class="margin-left:auto margin-top:s-1" color="accent" v-if="data.winner.alt_url != null" target="_blank" el="a" :href="data.winner.alt_url">Alternate Website</base-button>
              </div>
            </stack-l>
          </aside>
          <div class="g4">
            <h4>{{ data.winner.prize }}</h4>
          </div>
          <div class="content | g3">
            <section>
              <h3>Overview</h3>
              <div v-html="data.winner.intro"></div>
            </section>

            <section>
              <h4>What is the potential of your work for widespread impact? How do you meaningfully improve the lives of people?</h4>
              <div v-html="data.winner.impact"></div>
            </section>
            
            <section>
              <h4>How does your project support peacebuilding and/or conflict resolution efforts in the context of a humanitarian crisis or developmental context?</h4>
              <div v-html="data.winner.relevance"></div>
            </section>
            
            <section>
              <h4>In what ways does your project contribute to the existing PeaceTech ecosystem and research efforts in a compelling way?</h4>
              <div v-html="data.winner.innovation"></div>
            </section>
            
            <section>
              <h4>With the award funds, how would you expand the scope and applicability of your project or research beyond its initial pilot?</h4>
              <div v-html="data.winner.scalability"></div>
            </section>
            
            <section>
              <h4>How does your work leverage collaborations and partnerships to unlock new opportunities and maximize impact?</h4>
              <div v-html="data.winner.collaboration"></div>
            </section>
            
            <pre>{{ data.winner }}</pre>
          </div>
        </div>
      </center-l>
    </base-section>
  </div>
</template>

<script setup>
  const route = useRoute()
  const winnersData = await queryContent('prize').where({
      slug: route.params.slug
  }).find();
  const data = reactive({
      winner: winnersData[0]
  });
</script>

<style lang="scss" scoped>
.brow {
  font-weight: 800;
  text-transform: uppercase;
  font-size: 1rem;
  color: var(--accent-color);
}

.heading { --space: var(--s-3); }

.prize-item__trophy { font-size: 3.5rem; }
.prize-item__award { font-size: 2.4rem; }
.prize-item__trophy,
.prize-item__award { 
  text-align: right; 
}


.prize {
  display: flex;
  flex-direction: column;
  color: var(--accent-color);
  align-items: flex-end;

  * { text-align: right; }

  h4 { 
    font-size: 1.25rem; 
    font-weight: 600;
  }
}

.wrapper { 
  display: grid; 
  grid-template-columns: minmax(auto, 300px) 1fr;
  grid-template-rows: auto auto;
  grid-gap: var(--s3);
  grid-template-areas: 
  'g1 g4' 
  'g2 g3';
}

.g1 { grid-area: g1; }
.g2 { grid-area: g2; }
.g3 { grid-area: g3; }
.g4 { 
  grid-area: g4; 
  margin-block: auto;
}

.meta  { flex: 0; }
.content  { flex: 1; }


.content section {
  padding-block: var(--s2);
  &:not(:last-of-type) {border-bottom: 1px solid var(--primary-color-10);}
  &:first-of-type{ padding-top: 0; }
}
.content :deep(* + *) { margin-top: var(--s-1); }

.meta {
  * { text-align: right; }
  
  span {
    display: inline-block;
    font-weight: 600;
  }

  .applicant { color: var(--accent-color); }
  .country { color: var(--primary-color); }
  * { --space: var(--s-3); }
  
}

h2 {
  font-size: 2rem;
}

h3 {
  font-family: var(--body-font);
  text-align: left;
  font-size: var(--s2);
  --space:0;
  line-height: 1;
  margin-bottom: 2rem;
}

h4 {
  font-family: var(--body-font);
  color: var(--accent-color) !important;
}
</style>

<template>
  <base-section>
    <center-l>
      <stack-l>
        <h2>Prize</h2>
        <ul class="prize-list">
          <stack-l>
            <li class="prize-item" v-for="i in winnersData" :content="i">
              <span v-if="i.prize == 'Kluz Prize for PeaceTech'" class="prize-item__trophy | material-symbols-outlined">trophy</span>
              <span v-else class="prize-item__award | material-symbols-outlined">award_star</span>
              <stack-l>
                <h4>{{ i.prize }}</h4>
                <h3>{{ i.title }}</h3>
                <div class="prize-item__content" v-html="i.intro"></div>
                <!-- <pre>{{ i }}</pre> -->
                <p><NuxtLink class="button margin-left:auto" color="accent" :to="`/prize/${i.slug}`">Project Website</NuxtLink></p>
              </stack-l>
            </li>
          </stack-l>
        </ul>
      </stack-l>
      
    </center-l>
  </base-section>
</template>

<script setup>
useHead({
  title: 'PeaceTech Prize - Prize',
})

definePageMeta({
  layout: "base",
});

  const route = useRoute()
  const winnersData = await queryContent('prize').where({
      slug: route.params.slug
  }).find();
</script>

<style scoped lang="scss">
.prize-list { --space: var(--s2); }
.prize-item {
  position: relative;
  border-bottom: 1px solid var(--primary-color-10);
  padding-bottom: var(--s2);
  margin-bottom: var(--s2);
}

.prize-item__trophy, .prize-item__award {
  position: absolute;
  left: -5rem;
  top: 0;
}


.prize-item__trophy { font-size: 3.5rem; }
.prize-item__award { font-size: 2.4rem; }

.prize-item__content :deep(* + *) {
  margin-top: var(--s-1);
}


h2 {
  
}

h3 {
  font-family: var(--body-font);
  text-align: left;
  font-size: var(--s2);
  --space:0;
}

h4 {
  font-family: var(--body-font);
  font-weight: bold;
  text-transform: uppercase;
  color: var(--accent-color) !important;
}
</style>

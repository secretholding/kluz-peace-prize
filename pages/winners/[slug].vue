<template>
  <div>
    <kpp-hero>
      <!-- <kpp-headers :content="headerContent" color="primary" />  -->
    </kpp-hero>
    <center-l size="wide">
      <pre>
        {{ data.winner }}
        {{ blogData }}
      </pre>



      <kpp-prose>

      </kpp-prose>
  </center-l>
      
    <kpp-ceremony>
      <h2 class="text-align:center">Ceremony</h2>
    </kpp-ceremony>
    <kpp-impact>
      <h2 class="text-align:center">Impact</h2>
    </kpp-impact>
    <kpp-quotes>
      <h2 class="text-align:center">Quotes</h2>
    </kpp-quotes>
    <kpp-connect>
      <h2 class="text-align:center">Connect</h2>
    </kpp-connect>
  </div>
</template>

<script setup>
useHead({
  title: 'PeaceTech Prize',
})

definePageMeta({
  layout: "base",
});

const route = useRoute()
const blogData = await queryContent('winners').where({
    slug: route.params.slug
}).find();

const data = reactive({
  winner: blogData[0]
});

// const headerContent = {
//   brow: data.winner.prize  + ' | ' + data.winner.year,
//   title: data.winner.title,
//   tagline: data.winner.country,
//   dateString: data.winner.applicant
// }
</script>

<style lang="scss" scoped>

</style>

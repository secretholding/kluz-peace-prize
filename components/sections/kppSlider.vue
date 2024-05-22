<template>
  <kpp-hero color="primary" height="70svh">
    <div class="slider">
      <div class="slide">
        <center-l size="wide" class="center--forced">
          <kpp-headers :content="headerContent" color="base" />
        </center-l>
      </div>
    </div>
  </kpp-hero>
</template>

<script setup>
const route = useRoute()

// Vamos precisar ligar o objeto Winner com o slide. 
const winner = await queryContent('winners').where({
    slug: route.params.slug
}).findOne();


const headerContent = {
  brow: "Kluz Prize for PeaceTech | 2024",
  title: "Save the Date",
  tagline: "September 20, 2024",
  date: "New York City"
  // brow: winner.prize  + ' | ' + winner.year,
  // title: winner.title,
  // tagline: winner.country,
  // dateString: winner.applicant
}
</script>

<style lang="scss" scoped>
.slider {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}

.slide {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: flex-end;
  padding-bottom: var(--s4);
  // animation: slide 12s infinite alternate;
  background-size: cover;
  background-position: center center;
  padding-inline: var(--s2);
  background-image: url('/assets/images/slides/satelitte-watercolor.png');
}


// @keyframes slide {
//   0% {
//     background-image: url('/assets/images/slides/drone-watercolor.png');
//   }
//   50% {
//     background-image: url('/assets/images/slides/data-watercolor.png');
//   }
//   100% {
//     background-image: url('/assets/images/slides/satelitte-watercolor.png');
//   }
// }
</style>

<template>
  <kpp-hero color="white" height="60svh">
    <div class="slider">
      <div class="slide">
        <center-l size="wide" class="center--forced">
          <kpp-headers :content="headerContent" color="white" />
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
  brow: winner.prize  + ' | ' + winner.year,
  title: winner.title,
  tagline: winner.country,
  dateString: winner.applicant
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
  animation: slide 8s infinite alternate;
  background-size: cover;
  background-position: center center;
}


@keyframes slide {
  0% {
    background-image: url('/assets/images/slider-spacex.png');
  }
  100% {
    background-image: url('/assets/images/slider-spacex-2.png');
  }
}
</style>

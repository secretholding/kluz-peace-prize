<template>
  <kpp-hero color="primary" height="70svh">
    <div class="slider">
      <div class="slide" :style="`background-image: url('${headerContent.activeImage}');`">
        <center-l size="wide" class="center--forced slide__content">
          <kpp-headers :content="headerContent.activeWinner" color="base" />
        </center-l>
        <div class="slider-nav">
          <button @click="position = index" class="slider-nav__trigger" :class="{'slider-nav__trigger--active': position == index}" v-for="(w, index) in headerContent.winners" v-bind:key="w.slug"></button>
        </div>
      </div>
    </div>
  </kpp-hero>
</template>

<script setup>
import { reactive, ref, watch, onUnmounted } from 'vue'
const route = useRoute()
const images =  [
  '/assets/images/slides/slider-spacex.png',
  '/assets/images/slides/slider-spacex-2.png',
  '/assets/images/slides/satelitte-watercolor.png',
  '/assets/images/slides/drone-watercolor.png'
]

// Vamos precisar ligar o objeto Winner com o slide. 
const winners = await queryContent('winners').find();
const headerContent = reactive({
  winners: [],
  activeWinner: {},
  activeImage: images[0]
});
const position = ref(0)
const imagePosition = ref(0)

winners.forEach(w => {
  const winner = {
    slug: w.slug,
    brow: `Kluz Prize for PeaceTech | ${w.year}`,
    title: w.title,
    tagline: w.quote.text,
    date: w.quote.cite,
    image: w.images.hero
  }
  headerContent.winners.push(winner)
});

headerContent.activeWinner = headerContent.winners[0];

const getRandomIndex = () => {
  const newIndex = imagePosition.value >= (images.length - 1) ? 0 : imagePosition.value + 1;
  console.log(newIndex, imagePosition.value, images.length - 1)
  // Update imagePosition with the new index
  imagePosition.value = newIndex;
  headerContent.activeImage = images[newIndex];
  
  return newIndex;
}

watch(position, (newValue, oldValue) => {
  headerContent.activeImage = images[getRandomIndex()]
  const content = document.querySelector('.slide__content');
  content.classList.add('slide__content--left');
  window.setTimeout(() => {
    headerContent.activeWinner = headerContent.winners[newValue]
    content.classList.remove('slide__content--left');
    content.classList.add('slide__content--right');
  }, 200);
  window.setTimeout(() => {
    content.classList.remove('slide__content--right');
  }, 400);
});

let sliderTimer = setInterval(() => {
  // Your code here
  position.value = position.value >= (headerContent.winners.length - 1) ? 0 : position.value + 1;
}, 3000);

onUnmounted(() => {
  clearInterval(sliderTimer);
});

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
  transition: background-image 0.5s ease-in-out;
}

  .slide__content {
    transform: translateX(0);
    opacity: 1;
    transition: all 0.2s ease-in-out;
  }

    .slide__content--left {
      opacity: 0;
      transform: translateX(-30%);
    }

    .slide__content--right {
      opacity: 0;
      transform: translateX(30%);
    }

.slider-nav {
  position: absolute;
  bottom: var(--s2);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: var(--s0);
}

  .slider-nav__trigger {
    width: var(--s0);
    height: var(--s0);
    border: none;
    border-radius: 50%;
    background-color: var(--base-color-30);
    transition: all 0.2s ease-in-out;
  }

    .slider-nav__trigger--active {
      background-color: var(--secondary-color);
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

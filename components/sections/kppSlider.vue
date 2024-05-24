<template>
  <kpp-hero color="primary" height="max(70svh, 650px)" bg="linear-gradient(0deg, var(--white-color) 0%, var(--white-color) 100%)">
    <div class="slider">
      <div class="slider__background" :style="`background-image: url('${headerContent.activeWinner.image}');`"></div>
      <div class="slide">
        <center-l size="wide" class="center--forced slide__content">
          <kpp-headers :content="headerContent.activeWinner" color="white" />
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
  '/assets/images/slides/slider-atlas.png',
  '/assets/images/slides/slider-drone.png',
  '/assets/images/slides/slider-spacex.png',
  '/assets/images/slides/slider-starlink.png',
  '/assets/images/slides/slider-drone.png'
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

winners.forEach((w, index) => {
  const winner = {
    slug: w.slug,
    brow: `Kluz Prize for PeaceTech | ${w.year}`,
    title: w.title,
    tagline: w.quote.text,
    date: w.quote.cite,
    image: images[index]
  }
  headerContent.winners.push(winner)
});

headerContent.activeWinner = headerContent.winners[0];


/*watch(position, (newValue, oldValue) => {
  const slider = document.querySelector('.slider');
  const content = document.querySelector('.slide__content');
  content.classList.add('slide__content--left');
  slider.classList.add('slider--transitioning');
  window.setTimeout(() => {
    headerContent.activeWinner = headerContent.winners[newValue]
    content.classList.remove('slide__content--left');
    content.classList.add('slide__content--right');
  }, 200);
  window.setTimeout(() => {
    content.classList.remove('slide__content--right');
  }, 400);
  window.setTimeout(() => {
    slider.classList.remove('slider--transitioning');
  }, 800);
});*/

watch(position, (newValue, oldValue) => {
  const slider = document.querySelector('.slider');
  slider.classList.add('slider--transitioning');
  window.setTimeout(() => {
    headerContent.activeWinner = headerContent.winners[newValue]
  }, 500);
  window.setTimeout(() => {
    slider.classList.remove('slider--transitioning');
  }, 800);
});

let sliderTimer = setInterval(() => {
  // Your code here
  position.value = position.value >= (headerContent.winners.length - 1) ? 0 : position.value + 1;
}, 5000);

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
  opacity: 1;
  transition: opacity 0.4s ease-in-out;
}

  .slider--transitioning {
    opacity: 0;
  }

.slider__background {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background-size: cover;
  background-position: center center;
  transition: background-image 0.5s ease-in-out;
  animation: scale 20s infinite alternate;
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
  padding-inline: var(--s2);
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background-image: linear-gradient(180deg, transparent 0%, var(--base-color-70) 70%, var(--base-color-70) 100%);
  }
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
    background-color: var(--white-color-70);
    transition: all 0.4s ease-in-out;
  }

    .slider-nav__trigger--active {
      background-color: var(--secondary-color);
    }

    @keyframes scale {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.1);
      }
      100% {
        transform: scale(1);
      }
    }

</style>

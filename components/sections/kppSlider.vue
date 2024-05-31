<template>
  <kpp-hero color="white" height="70svh" class="hero__slider">
    <div class="slider">
      <div class="slider__background" :style="`background-image: url('${headerContent.activeWinner.image}');`"></div>
      <div class="slide">
        <center-l size="wide" class="slide__content | width:100%">
          <kluz-logo v-if="headerContent.activeWinner.image == 'logo'" color="white" maxWidth="320px" class="logo-hero"/>
          <div class="width:100%">
            <kpp-headers :content="headerContent.activeWinner" color="white" class="hero__headers" hide-tagline/>
            <h4 visual="h5" class="tagline | color:white">Applications 2024 are open</h4>
          </div>
          
        </center-l>
        <div class="slider-nav">
          <button 
            @click="position = index" 
            class="slider-nav__trigger" 
            :class="{'slider-nav__trigger--active': position == index}" 
            v-for="(w, index) in headerContent.winners" 
            v-bind:key="w.slug"
          ></button>
        </div>
      </div>
    </div>
  </kpp-hero>
</template>

<script setup>
import { reactive, ref, watch, onMounted, onUnmounted } from 'vue'
const route = useRoute()
const images =  [
  '/assets/images/slides/slider-atlas.webp',
  '/assets/images/slides/slider-drone.webp',
  '/assets/images/slides/slider-spacex.webp',
  '/assets/images/slides/slider-starlink.webp',
  '/assets/images/slides/slider-drone.webp'
]

// Vamos precisar ligar o objeto Winner com o slide. 
//const winners = await queryContent('winners').find();
const headerContent = reactive({
  winners: [
    {
      title: 'Unlocking Power of PeaceTech',
      tagline: 'Applications are Open | 2024',
      image: 'logo',
      action: 'Apply now',
      path: '/application',
    },
    // {
    //   slug: 'commit-global',
    //   title: 'Commit Global',
    //   tagline: 'A first of its kind Humanitarian Digital Civic Infrastructure for Refugees',
    //   image: images[0]
    // },
    // {
    //   slug: 'human-rights-analysis-group',
    //   title: 'Human Rights Data Analysis Group',
    //   tagline: 'Using data science to track patterns of violence during armed conflict',
    //   image: images[1]
    // },
    // {
    //   slug: 'palantir-foundry',
    //   title: 'Palantir Foundry',
    //   tagline: 'A decentralised immigration scheme that helped ensure the safe matching and resettlement of Refugees',
    //   image: images[2]
    // },
    // {
    //   slug: 'project-didi',
    //   title: 'Project Didi',
    //   tagline: 'Operationalizing peacebuilding theory using artificial intelligence, machine learning, and big data',
    //   image: images[3]
    // },
    // {
    //   slug: 'magnolia-foundation',
    //   title: 'The Magnolia Foundation',
    //   tagline: 'A multidisciplinary approach to teaching peace, mediation, and rehabilitation',
    //   image: images[4]
    // },
  ],
  activeWinner: {},
  activeImage: images[0]
});
const position = ref(0)
const imagePosition = ref(0)

/*winners.forEach((w, index) => {
  const winner = {
    slug: w.slug,
    brow: `Kluz Prize for PeaceTech | ${w.year}`,
    title: w.title,
    tagline: w.quote.text,
    date: w.quote.cite,
    image: images[index]
  }
  headerContent.winners.push(winner)
});*/

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
  }, 500);
});

let sliderTimer = null;
onMounted(() => {
  sliderTimer = setInterval(() => {
    // This controls the time interval for each slide
    position.value = position.value >= (headerContent.winners.length - 1) ? 0 : position.value + 1;
  }, 8000);
});

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
  transition: opacity .5s ease-in-out;
  overflow: hidden;
}

.hero__slider {
  // temporary. Client didn't understand the white transition. 
  background-color: var(--primary-color);
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
  transition: background-image .5s ease-in-out;
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
    transform: translateY(10%);
    opacity: 1;
    transition: all 0.2s ease-in-out;
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
    height: 100%;
    align-items: center;
    justify-items: start;
  }

    .slide__content--left {
      opacity: 0;
      transform: translateY(0%);
    }

    .slide__content--right {
      opacity: 0;
      transform: translateX(30%);
    }

.slider-nav {
  position: absolute;
  bottom: var(--s2);
  right: 0;
  transform: translateX(-50%);
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: var(--s0);
}

  .slider-nav__trigger {
    width: 14px;
    height: 14px;
    border: 1px solid hsla(var(--white-hsl), .2);
    border-radius: 50%;
    background-color: hsla(var(--white-hsl), 0);
    transition: all 0.4s ease-in-out;
  }

  .slider-nav__trigger:only-child { display: none; }
  .slider-nav__trigger--active { background-color: hsla(var(--white-hsl), .2); }

    @keyframes scale {
      0% {   transform: scale(1);   }
      50% {  transform: scale(1.1); }
      100% { transform: scale(1);   }
    }

    .hero__headers {
      justify-self: flex-end;
    }

    .logo-hero {
      margin-bottom: var(--s2);
      width: auto;
      
      @media screen and (max-width: 768px) { 
        max-width: 180px;
        transform: translateX(-5%);
      }
      @media screen and (min-height: 640px) { margin-left: -2.75%; }
    }
</style>

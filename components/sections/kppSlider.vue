<template>
  <kpp-hero color="white" height="50svh" class="hero__slider">
    <div class="slider">
      <div class="slider__background" :style="`background-image: url('${headerContent.activeWinner.image}');`"></div>
      <div class="slide">
        <center-l size="wide" class="slide__content | width:100%">
          <kluz-logo v-if="headerContent.activeWinner.image == 'logo'" color="white" maxWidth="220px" class="logo-hero"/>
          <div class="width:100%">
            <kpp-headers :content="headerContent.activeWinner" color="white" class="hero__headers" hide-tagline >
              <template #action>
                <kpp-button
                  class="margin-top:s1"
                  visual="unstyled"
                  icon-after="arrow_forward"
                  size="xxl"
                  color="white"
                  el="a" 
                  label="Apply Now" 
                  href="/application" 
                />
                <h4 visual="h5" class="tagline | color:white">Applications 2024 are open</h4>
              </template>
            </kpp-headers>
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
      title: 'Unlocking the Power of PeaceTech',
      tagline: 'Applications are Open | 2024',
      image: 'logo',
      action: 'Apply now',
      path: '/application',
    },
    {
      slug: 'commit-global',
      brow: 'Winner of the Kluz Prize of PeaceTech | 2023',
      title: 'Commit Global',
      image: "/assets/images/winners/commit-global/commit-global-in-action-3.jpg",
      path: '/prizes/commit-global/'
    },
    {
      slug: 'project-didi',
      brow: 'Innovative Uses of AI/ML | 2023',
      title: 'Project Didi',
      image: "/assets/images/winners/project-didi/didi-in-action-8.jpg",
      path: '/prizes/project-didi/'
    },
    {
      slug: 'palantir-foundry',
      brow: "Big Tech Building Peace | 2023",
      title: 'Palantir Foundry',
      image: "/assets/images/winners/palantir-foundry/palantir-foundry-in-action-3.webp",
      path: '/prizes/palantir-foundry/'
    },
    // {
    //   slug: 'human-rights-analysis-group',
    //   brow: "Nonprofit Organization Advancing Peace | 2023",
    //   title: 'Human Rights Data Analysis Group',
    //   image: "",
    //   path: '/prizes/human-rights-analysis-group/'
    // },
    {
      slug: 'magnolia-foundation',
      brow: "Winner of the Kluz Prize for PeaceTech | 2022",
      title: 'The Magnolia Foundation',
      image: "/assets/images/winners/magnolia-foundation/magnolia-foundation-slider.jpg",
      path: '/prizes/magnolia-foundation/'
    }
    
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
  min-height: 500px;
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
    grid-template-rows: 1fr;
    height: 100%;
    align-items: flex-end;
    justify-items: start;
    gap: var(--s1);
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
      align-self: flex-end;
      
      @media screen and (max-width: 768px) { 
        max-width: 180px;
        // transform: translateX(-5%);
      }
      // @media screen and (min-height: 640px) { margin-left: -1.75%; }
    }
</style>

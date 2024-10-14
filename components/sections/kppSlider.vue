<template>
  <kpp-hero color="white" height="auto" class="slider__wrapper">
    <div class="slider" :activeIndex="activeIndex">
      <transition-group name="slide-fade" tag="div" class="slider__track">
        <div :id="`slide-${index+1}`" class="slide" v-for="(slide, index) in slides" :index="index+1" :class="{ active: index + 1 === activeIndex }" :key="slide.slug">
          <center-l size="wide" class="slide__content | width:100%">
            <stack-l>
              <h4>{{ slide.brow }}</h4>
              <h2>{{ slide.title }}</h2>
              <div class="slide__action">
                <nuxt-link class="button" data-size="l" icon-after="arrow_forward" :to="slide.path">{{ slide.action }}</nuxt-link>
              </div>
            </stack-l>
          </center-l>
        </div>
      </transition-group>
    </div>
    <div class="slider__nav">
      <a v-for="i in slides.length" el="a" :index="i" @click="setActiveIndex(i)">
        <span class="icon" :active="i == activeIndex ? true : false">{{ i == activeIndex ? 'radio_button_checked' : 'radio_button_unchecked' }}</span>
      </a>
    </div>
  </kpp-hero>
</template>

<script setup>
const activeIndex = ref(1);

const setActiveIndex = (index) => {
  activeIndex.value = index;
};

const triggerNavigation = (index) => {
  const slideElement = document.getElementById(`slide-${index}`);
  if (slideElement) {
    slideElement.scrollIntoView({ behavior: 'smooth' });
  }

  // Check if the URL contains /#slide-N and clear it if it does
  const url = new URL(window.location);
  if (url.hash.startsWith('#slide-')) {
    url.hash = '';
    history.replaceState(null, '', url.toString());
  }
};

let intervalId;

onMounted(() => {
  const startAnimation = () => {
    intervalId = setInterval(() => {
      activeIndex.value = activeIndex.value < slides.length ? activeIndex.value + 1 : 1;
    }, 4000);
  };

  const stopAnimation = () => {
    clearInterval(intervalId);
  };

  startAnimation();

  const heroElement = document.querySelector('.slider__wrapper');
  if (heroElement) {
    heroElement.addEventListener('mouseenter', stopAnimation);
    heroElement.addEventListener('mouseleave', () => {
      // Ensure any existing interval is cleared before starting a new one
      clearInterval(intervalId);
      startAnimation();
    });
  }
});

onBeforeUnmount(() => {
  clearInterval(intervalId);
});

let slides = [];
const highlights = await queryContent('highlights').where({ event_year: { $exists: true } }).sort({ event_year: -1 }).find();
highlights.forEach((hl) => {
  slides = hl.winners.map((winner) => {
    return {
      slug: winner.slug,
      brow: winner.brow,
      title: winner.title,
      path: `/prizes/${winner.slug}`, 
      action: "Learn More",
    }
  });
  slides.unshift({
    slug: 'winners',
    brow: hl.brow,
    title: hl.title,
    image: "/assets/images/kluz-prize-slide.jpg",
    action: "Learn More",
    path: `/events/${hl.event_year}` 
  })

});

// const slides = [
//   {
//     slug: 'winners',
//     brow: 'Kluz Prize for PeaceTech | 2024',
//     title: 'Winners of the Kluz Prize for PeaceTech',
//     image: "/assets/images/kluz-prize-slide.jpg",
//     action: "Learn More",
//     path: '/events/2024'
//   },
//   {
//     slug: 'aerobatics7',
//     brow: 'Winner of the Kluz Prize for PeaceTech | 2024',
//     title: 'Aerobotics7',
//     action: "Learn More",
//     path: 'prizes/aerobotics7'
//   },
//   {
//     slug: 'deep',
//     brow: 'Distinction for Humanitarian Impact | 2024',
//     title: "The Danish Refugee Council's DEEP",
//     action: "Learn More",
//     path: 'prizes/deep/'
//   },
//   {
//     slug: 'views',
//     brow: "Distinction for Use of AI for Peace | 2024",
//     title: "VIEWS",
//     action: "Learn More",
//     path: 'prizes/views/'
//   },
//   {
//     slug: 'lunasonde',
//     brow: "Special Distinction for Space Technology | 2024",
//     title: 'Lunasonde',
//     action: "Learn More",
//     path: 'prizes/lunasonde/'
//   }
// ]
</script>
<style lang="scss" scoped>
.slider__nav {
  position: absolute;
  bottom: var(--s1);
  
  @media screen and (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
  
  @media screen and (min-width: 768px) { right: var(--s1); }
  z-index: 10;
  color: white;
  display: flex;
  gap: var(--s-2);

  a {
    all: unset;
    cursor: pointer;
  }

  span[active=false] {
    opacity: .5;
  }
}

.slider__wrapper {
  min-height: min(500px, 80svh);
}

.slider {
  height: 100%;
  width: 100vw;
  position: absolute;
  z-index: 9;
  overflow: hidden;
}

.slider__track {
  position: relative;
  height: 100%;
  background: var(--primary-color);
}

.slide {
  width: 100%;
  background-color: var(--primary-color);

  @media screen and (max-width: 768px) {
    background-image: linear-gradient(transparent 0%, hsla(var(--base-hsl), .3) 50%);
    background-position: center;
  }

  background-image: linear-gradient(transparent 0%, hsla(var(--base-hsl), .3) 50%);
  background-blend-mode: multiply;
  background-position: center;
  height: 100%;
  flex-direction: column;
  justify-content: flex-end;
  padding: var(--s2) 0;
  @media screen and (max-width: 768px) { padding-bottom: calc(var(--s3) + 1rem);  }
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transition: opacity 1s ease-in-out, visibility 1s ease-in-out;
  visibility: hidden;
  align-content: end;

  &.active {
    opacity: 1;
    visibility: visible;
  }
}

.slide__content {
  z-index: 2;

  h4 {
    font-weight: bold;
    text-transform: uppercase;
    opacity: .5;
  }

  h2 {
    --space: 0;
    font-size: 350%;
    @media screen and (max-width: 768px) {
      font-size: 250%;
    }
  }

  * {
    color: white !important;
  }
}

.slide__action {
  --space: var(--s2);
}
</style>

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

const slides = [
  {
    brow: 'Application Deadline Extended',
    title: 'Apply Now for the 2024 Kluz Prize for PeaceTech',
    image: "/assets/images/kluz-prize-slide.jpg",
    action: 'Apply now',
    path: '/application',
  },
  {
    slug: 'commit-global',
    brow: 'Winner of the Kluz Prize of PeaceTech | 2023',
    title: 'Commit Global',
    image: "/assets/images/winners/commit-global/commit-global-in-action-3.jpg",
    action: "Learn More",
    path: '/prizes/commit-global/'
  },
  {
    slug: 'project-didi',
    brow: 'Innovative Uses of AI/ML | 2023',
    title: 'Project Didi',
    image: "/assets/images/winners/project-didi/didi-in-action-8.jpg",
    action: "Learn More",
    path: '/prizes/project-didi/'
  },
  {
    slug: 'palantir-technologies',
    brow: "Big Tech Building Peace | 2023",
    title: 'Palantir Technologies',
    image: "/assets/images/winners/palantir-technologies/palantir-foundry-slider.jpg",
    action: "Learn More",
    path: '/prizes/palantir-technologies/'
  },
  {
    slug: 'human-rights-analysis-group',
    brow: "Nonprofit Organization Advancing Peace | 2023",
    title: 'Human Rights Data Analysis Group',
    image: "/assets/images/winners/human-rights-analysis-group/hdrag-slider.jpg", 
    action: "Learn More",
    path: '/prizes/human-rights-analysis-group/'
  },
  {
    slug: 'magnolia-foundation',
    brow: "Winner of the Kluz Prize for PeaceTech | 2022",
    title: 'The Magnolia Foundation',
    image: "/assets/images/winners/magnolia-foundation/magnolia-foundation-slider.jpg",
    action: "Learn More",
    path: '/prizes/magnolia-foundation/'
  }
]
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

  span[active=false] { opacity: .3; }
}

.slider__wrapper {
  height: min(800px, 80svh);
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
  background: linear-gradient(45deg, var(--primary-color) 0%, hsl(230, 35%, 33%) 100%);
  background-size: cover;
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

.slide-fade-enter-active, .slide-fade-leave-active {
  transition: opacity 1s;
}

.slide-fade-enter, .slide-fade-leave-to /* .slide-fade-leave-active in <2.1.8 */ {
  opacity: 0;
}

.slide-fade-enter-active {
  animation: fadeIn 2s forwards;
}

.slide-fade-leave-active {
  animation: fadeOut 2s forwards;
}

@keyframes fadeIn {
  to {
    visibility: visible;
  }
}

@keyframes fadeOut {
  to {
    visibility: hidden;
  }
}
</style>

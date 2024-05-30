<template>
  <div 
    class="kpp-hero" 
    :height="height" 
    :color="color" 
    :title="title" 
    :bg="bg"
    :has-background="hasBackground"
  >
    <kpp-top-bar class="kpp-hero__top-bar" :color="color" />
    <slot>
      <center-l size="wide" class="width:100%">
        <h2 class="title-only">{{title}}</h2>
      </center-l>
    </slot>
  </div>
</template>

<script setup>    
const props = defineProps({
  height: {
    type: String,
    default: '90svh'
  },
  color: {
    type: String,
    default: 'white'
  },
  bg: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  }
});

const bgPath = computed(() => {
  return props.bg ? `url(${props.bg})` : '';
});

const hasBackground = computed(() => {
  return props.bg ? true : false;
});


</script>

<style lang="scss" scoped>

.kpp-hero {
  --height: v-bind(height);
  background-color: var(--tertiary-color);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  padding-bottom: var(--s3);
  height: var(--height);
  
  @media (min-width: 768px) { min-height: max(var(--height)); }

  .title-only { 
    color: var(--primary-color); 
    font-size: 3rem;
    font-weight: 100;
  }
}

.kpp-hero:not[collapse] {

  @media (min-aspect-ratio: 3/4) and (max-height: 1000px) {
    height: 60vh;
    min-height: 0;
  }
  @media (max-aspect-ratio: 3/4) {
    height: 50vh;
    min-height: 0;
  }
  @media (max-height: 700px) {
    height: 60vh;
  }

  @media (min-aspect-ratio: 4/3) {
    &[hide-on-wide] { 
      height: auto;
      min-height: 0;
      padding-block: 0;
      background: var(--primary-color);
      &[bg] {
        background-image: none;
      }
      & > :not(.kpp-top-bar) {
        display: none;
      }
      &:before {
       display: none;
      }
     }
  }
}

.kpp-hero__top-bar {
  position: relative;
  z-index: 10;
}

.kpp-hero[has-background="true"] {
  background-image: v-bind(bgPath);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: linear-gradient(180deg, transparent 0%, hsla(var(--base-hsl), 1) 100%);
  }
  > .center * {
    position: relative;
    z-index: 1;
  }
}

.title-only {
  font-size: 6rem;
  font-weight: 400;
  line-height: 1.2;
  color: var(--primary-color);

}

// :deep(.brow) { color: var(--primary-color); }
// :deep(.tagline) { color: var(--base-color); }

.kpp-hero[color="white"] h2 { color: var(--white-color); }
.kpp-hero[color="primary"] h2 { color: var(--primary-color); }
.kpp-hero[color="secondary"] h2 { color: var(--secondary-color); }
.kpp-hero[color="tertiary"] h2 { color: var(--tertiary-color); }
.kpp-hero[color="accent"] h2 { color: var(--accent-color); }
.kpp-hero[color="base"] h2 { color: var(--base-color); }


</style>

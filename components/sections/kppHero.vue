<template>
  <div class="kpp-hero" :height="height" :color="color" :title="title" :bg="bg">
    <kpp-top-bar class="kpp-hero__top-bar" :color="color" />
    <slot>
      <center-l size="wide" class="center--force">
        <h2 class="text-align:center">{{title}}</h2>
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


</script>

<style lang="scss" scoped>

.kpp-hero {
  --height: v-bind(height);
  min-height: max(var(--height));
  background-color: hsla(var(--primary-hsl), .1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  
  @media (min-width: 768px) {
    padding: var(--s1) var(--s1) var(--s3);
  }

  h1 { color: var(--primary-color); }
}

.kpp-hero__top-bar {
  position: relative;
  z-index: 100;
}

.kpp-hero[bg] {
  background-image: v-bind(bgPath);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}


</style>

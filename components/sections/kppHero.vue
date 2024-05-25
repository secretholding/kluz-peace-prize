<template>
  <div 
    class="kpp-hero" 
    :height="height" 
    :color="color" 
    :title="title" 
    :bg="bg"
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


</script>

<style lang="scss" scoped>

.kpp-hero {
  --height: v-bind(height);
  min-height: max(var(--height));
  background-color: var(--tertiary-color);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  padding-bottom: var(--s3);

  h1 { color: var(--primary-color); }
}

.kpp-hero__top-bar {
  position: relative;
  z-index: 10;
}

.kpp-hero[bg] {
  background-image: v-bind(bgPath);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
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

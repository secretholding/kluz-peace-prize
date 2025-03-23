<template>
  <kpp-base-section v-if="route.path !== content.action.url" class="kpp-cta" height="auto" :color="color" :content="content">
    <center-l size="wide">
      <div class="wrapper">
        <stack-l class="panel panel--header">
          <h3 class="brow">{{ content.brow }}</h3>
          <h2 class="title">{{ content.title }}</h2>
          <div class="margin-top:s1">
            <p>{{ content.text }}</p>
            <p v-if="content.extra"><strong>{{ content.extra }}</strong></p>
          </div>
        </stack-l>
        <stack-l class="panel panel--action">
          <nuxt-link  :to="content.action.url" unstyled="color">
            <kpp-button class="button" visual="primary" :to="content.action.url" size="xl">{{ content.action.label }}</kpp-button>
          </nuxt-link>
        </stack-l>
      </div>
    </center-l>
  </kpp-base-section>
</template>


<script setup>
const route = useRoute();

const props = defineProps({
  color: {
    type: String,
    default: 'base'
  },
  content: {
    type: Object,
    default: {
      brow: 'Kluz Prize for PeaceTech 2024',
      title: 'Meet the Winners',
      text: 'Explore the groundbreaking innovations recognized at the 2024 Kluz Prize for PeaceTech.',
      action: {
        label: 'Learn More',
        url: '/events/2024'
      }
    }
  }
});

const isCurrentUrl = computed(() => {
  return route.path === content.action.url;
});


</script>

<style lang="scss" scoped>
.kpp-cta {
  padding-block: var(--s3);
  @media (min-width: 768px) { padding-block: var(--s3); }
}

.wrapper {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: var(--s2);
  @media (min-width: 768px) { flex-direction: row; }
}

.panel--header {
  --space: var(--s-2);
  flex: 5;
}

.kpp-cta {
  .brow {
    font-size: 150%;
    line-height: 1.2;
    font-weight: 800;
    text-transform: uppercase;
    color: var(--primary-color);
    @media screen and (max-width: 768px) { font-size: 100%; }
    @media (max-aspect-ratio: 3/4) { font-size: 85%; }
  }
  .title {
    font-size: 330%;
    font-weight: 200;
    line-height: 1.2;
    --space: 0;
    @media screen and (max-width: 768px) { font-size: 200%; }
    @media (max-aspect-ratio: 3/4) { font-size: 175%; }
  }

  p { 
    --space: var(--s1); 
    font-size: 125%;
    @media (max-aspect-ratio: 3/4) { font-size: 100%; }
  }
}

.panel--action {
  flex: 2;
  > * { margin-left: auto; }
}

.kpp-cta[color="base"] {
  background-color: var(--base-color);
  color: var(--white-color);
  .button { 
    background-color: var(--accent-color);
    border-color: var(--accent-color);
    color: var(--white-color);
  }
}

.kpp-cta[color="primary"] {
  background-color: var(--primary-color);
  color: var(--white-color);

  .brow { color: var(--white-color); }

  .button { 
    background-color: var(--tertiary-color);
    border-color: var(--tertiary-color);
    color: var(--base-color);
  }
}
.kpp-cta[color="tertiary"] {
  background-color: var(--tertiary-color);
  color: var(--primary-color);
  .button { 
    background-color: var(--accent-color);
    border-color: var(--accent-color);
    color: var(--white-color);
  }
}
</style>

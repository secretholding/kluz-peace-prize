<template>
  <div class="kpp-top-bar" :color="color">

    <NuxtLink to="/">
      <h1 class="kpp-top-bar__logo">
        <kluz-logo :color="color" />
      </h1>
    </NuxtLink>

    <div class="kpp-top-bar__nav">
      <slot>
        <kpp-main-menu :color="color"/>
      </slot>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  color: {
    type: String,
    default: "" 
  },
});

const { color } = toRefs(props);
</script>

<style lang="scss" scoped>
.kpp-top-bar {
  display: flex;
  justify-content: space-between;
  align-items: felx-start;
  width: 100%;
}



.kpp-top-bar__logo {
  max-width: 160px;
  padding: var(--s1);

  @media (min-width: 768px) {
    max-width: 200px;
  }
}
</style>

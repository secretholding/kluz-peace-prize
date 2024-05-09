<template>
  <div class="kpp-hero kpp-hero-homepage">
    <kpp-top-bar color="base" />
    <h1 class="text-align:center">Hero</h1>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

.kpp-hero {
  height: 90svh;
  background-color: hsla(var(--primary-hsl), .1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: var(--s1) var(--s3) var(--s3);
  
  h1 { color: var(--primary-color); }
}


</style>

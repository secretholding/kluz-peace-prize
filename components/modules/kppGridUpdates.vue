<template>
  <ul class="kpp-grid">
    <slot></slot>
  </ul>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.kpp-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(300px, 1fr));
  gap: 0;
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>

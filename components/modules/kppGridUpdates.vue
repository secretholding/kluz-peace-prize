<template>
  <ul class="kpp-grid">
    <slot>
      
    </slot>
  </ul>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.kpp-grid {
  display: grid;
  gap: 0;
  list-style: none;
  padding: 0;
  margin: 0;

  grid-template-columns: repeat(1, 1fr);

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(300px, 1fr));
  }

}
</style>

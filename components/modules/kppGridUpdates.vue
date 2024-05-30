<template>
  <center-l size="wide">
    <ul class="kpp-grid">
        <slot>
          
        </slot>
    </ul>
  </center-l>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.kpp-grid {
  display: grid;
  // gap: var(--s1);
  list-style: none;
  padding-block: var(--s1);
  margin: 0;

  grid-template-columns: repeat(1, 1fr);

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(300px, 1fr));
  }

}
</style>

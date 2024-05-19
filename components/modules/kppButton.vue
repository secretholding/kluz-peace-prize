<template>
  <base-button class="kpp-button">
    <slot></slot>
  </base-button>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.kpp-button[visual="ghost"] {
  transform: translateX(calc(var(--button-padding-inline)*-1));
}
.kpp-button[visual="ghost"]:active { 
  border: 2px solid transparent;
  transform: scale(.95);
}


</style>

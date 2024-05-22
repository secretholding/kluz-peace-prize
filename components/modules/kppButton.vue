<template>
  <base-button class="kpp-button">
    <slot></slot>
  </base-button>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.kpp-button[visual="unstyled"] {
  transform: translateX(calc(var(--button-padding-inline)*-1));
}

.kpp-button[visual="unstyled"]:active { 
  border: 2px solid transparent;
  transform: scale(.95);
}

.kpp-button[visual="primary"] {
  background-color: hsla(var(--primary-hsl), 1);
  color: var(--white-color);
}

.kpp-button[color="accent"] {
  background-color: hsla(var(--accent-hsl), 1);
  color: var(--base-color) !important;
}


</style>

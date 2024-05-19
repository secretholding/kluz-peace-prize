<template>
  <base-button class="kpp-button">
    <slot></slot>
  </base-button>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.kpp-button[visual="ghost"] { padding-inline: 0; }
.kpp-button[visual="ghost"]:active { 
  border: 2px solid transparent;
  transform: scale(.95);
}
</style>

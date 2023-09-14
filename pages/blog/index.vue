<template>
  <div>
    {{ test }}
  </div>
  
</template>

<script setup>
const test = await queryContent('test').find();
</script>

<style scoped lang="scss">

</style>

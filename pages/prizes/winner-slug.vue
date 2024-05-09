<template>
  <div>
    <kpp-hero />
    <kpp-prose>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, pariatur laudantium adipisci assumenda labore repellat corporis praesentium fugit. Pariatur, repellendus? Nemo nam totam consequuntur aliquid. Repudiandae hic nam illum et!
    </kpp-prose>
    <kpp-ceremony>
      <h2 class="text-align:center">Ceremony</h2>
    </kpp-ceremony>
    <kpp-impact>
      <h2 class="text-align:center">Impact</h2>
    </kpp-impact>
    <kpp-quotes>
      <h2 class="text-align:center">Quotes</h2>
    </kpp-quotes>
    <kpp-connect>
      <h2 class="text-align:center">Connect</h2>
    </kpp-connect>
  </div>
</template>

<script setup>
useHead({
  title: 'PeaceTech Prize',
})

definePageMeta({
  layout: "base",
});
</script>

<style lang="scss" scoped>

</style>

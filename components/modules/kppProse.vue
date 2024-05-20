<template>
  <!-- 
    ToDo: 
    Alguma coisa está impedindo esse componente "ccm-prose" de carregar quando damos refresh na página. 
    Se eu salvo do arquivo aqui no IDE, ele renderiza no hot reload, mas se eu dou refresh na página, ele não renderiza.
  -->
  <kluz-prose>

    <slot>
      <span v-html="vHtmlContent"></span>
    </slot>
  </kluz-prose>
</template>

<script setup>
  defineProps({
    vHtmlContent: {
      type: String,
      default: ''
    }
  })

</script>

<style lang="scss" scoped>

</style>

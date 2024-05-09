<template>
  <article>
    <base-section>
      <center-l class="margin-bottom:s3">
        <stack-l space="var(--s2)">
          <h1 class="color:primary text-align:center">Jury & Panelists</h1>
          <p>The Selection Committee consists of the founding donor, and a group of distinguished international experts and recognized leaders in the fields of peace, technology, investments, and international affairs. Learn more about the members of the Selection Committee below (listed alphabetically).</p>
        </stack-l>
      </center-l>  

      <people-grid />
      
    </base-section>
  </article>
</template>

<script setup>
useHead({
  title: 'PeaceTech Prize - Jury & Panelists',
})

definePageMeta({
  layout: "base",
});
</script>

<style scoped>

</style>

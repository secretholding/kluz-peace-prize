<template>
  <base-section>
    <center-l>
      <stack-l>
        <h4>{{ contentData.brow }}</h4>
        <h3>{{ contentData.title }}</h3>
        <div class="description | stack" v-html="contentData.description"></div>
      </stack-l>
      <peace-tech-table :content="agendaData" />
    </center-l>
  </base-section>
</template>

<script setup>
useHead({
  title: 'PeaceTech Prize - Agenda',
})

definePageMeta({
  layout: "default",
});

const agendaData = await queryContent('agenda').find()

const contentData = {
  brow: '2023 Kluz Prize for PeaceTech', 
  title: 'Celebrating Innovation for a Peaceful World', 
  description: "<p>Join us for the KluzPrize for PeaceTech 2023 on Wednesday, September 20, 2023, from 3:30–7:00 pm — Location: Midtown, New York City. If you want to attend, please send us an email to <a mailto:info@kluzprize.org>info@kluzprize.org.</a></p><p>The Kluz Prize for PeaceTech 2023 celebrates, recognizes, and propels the groundbreaking use of emerging technologies in fostering peace, reducing conflict, and safeguarding human dignity and universal human rights across the globe.</p>",
}
</script>

<style lang="scss" scoped>
h4 {
  font-size: 1.2rem;
  text-align: left;
  color: var(--primary-color) !important;
  text-transform: uppercase;
}

h3 {
  font-size: 1.75rem;
  text-align: left;
  font-weight: 600;
  color: var(--accent-color) !important;
  --space: 0;
}

.description {
  --space: var(--s2);
  padding-bottom: var(--s2);
  margin-bottom: var(--s2);
  border-bottom: 1px solid var(--accent-color-30);

  :deep(p) { --space: var(--s-1); }
  :deep(a) { color: var(--accent-color);; }
}


</style>

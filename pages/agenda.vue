<template>
  <base-section>
    <center-l>
      <stack-l>
        <h4>{{ contentData.brow }}</h4>
        <h3>{{ contentData.title }}</h3>
        <div class="description | stack" v-html="contentData.description"></div>
      </stack-l>
      <peace-tech-table :content="contentData.agenda" />
    </center-l>
  </base-section>
</template>

<script setup>
definePageMeta({
  layout: "default",
});

const contentData = {
  brow: '2023 Kluz Prize for PeaceTech', 
  title: 'Celebrating Innovation for a Peaceful World', 
  description: "<p>Join us for the KluzPrize for PeaceTech 2023 on Wednesday, September 20, 2023, from 3:30–7:00 pm — Location: Midtown, New York City. If you want to attend, please send us an email to <a mailto:info@kluzprize.org>info@kluzprize.org.</a></p><p>The Kluz Prize for PeaceTech 2023 celebrates, recognizes, and propels the groundbreaking use of emerging technologies in fostering peace, reducing conflict, and safeguarding human dignity and universal human rights across the globe.</p>",
  agenda: [
    {
      time: "3:00 – 3:30 pm",
      activity: "<p><strong>Arrivals & Registration</strong></p>"
    },
    {
      time: "3:30 – 3:40 pm",
      activity: "<p><strong>Welcome</strong></p>"
    },
    {
      time: "3:40 – 3:50 pm",
      activity: "<p><strong>Opening Remarks by Artur Kluz</strong></p>"
    },
    {
      time: "3:50 – 4:05 pm",
      activity: "<p><strong>Selection Committee:</strong> Introduction and keynote address on the potential of PeaceTech and recent innovations in the field.</p>"
    },
    {
      time: "4:05 – 4:20 pm",
      activity: "<p><strong>Panel: Welcome & Introduction by Stefaan Verhulst</strong></p>"
    },
    {
      time: "4:20 – 5:10 pm",
      activity: "<p><strong>Panel: The Role of Technology in Peacebuilding</strong></p><ul><li><a href='https://www.linkedin.com/in/sara-rendtorff-smith/' target='_blank'>Sara Rendtorff-Smith</a>, Chief Policy Advisor, Foreign Ministry of Denmark, Tech Peace & Security Permanent Mission of Denmark to the UN</li><li><a href='https://urldefense.proofpoint.com/v2/url?u=https-3A__www.microsoft.com_en-2Dus_research_people_jlavista_&d=DwMFaQ&c=slrrB7dE8n7gBJbeO0g-IQ&r=5Drl5v9kH-oXozEEIq4CHg&m=Jl2n-RLVfROhNuX19tRQPVv2o22gEns6VYqot6oMQd2AeUkpNNn6LrfgTpU1EIUf&s=wl8l6jusR9_cj4yhyf6hhAaxLSyBkcDDy_yGHdrcYzk&e=' target='_blank'>Juan M. Lavista Ferres</a>, VP & Chief Data Scientist, Microsoft </li><li><a href='https://urldefense.proofpoint.com/v2/url?u=https-3A__andrewzolli.com_about-2Dme_&d=DwMFaQ&c=slrrB7dE8n7gBJbeO0g-IQ&r=5Drl5v9kH-oXozEEIq4CHg&m=Jl2n-RLVfROhNuX19tRQPVv2o22gEns6VYqot6oMQd2AeUkpNNn6LrfgTpU1EIUf&s=g0wmyKadi9ogbAO0FALKxCYkFRMjj_5OTeXP9-lbYV0&e=' target='_blank'>Sara Rendtorff-Smith</a>, Andrew Zolli, Chief Impact Officer, Planet</li></ul>"
    },
    {
      time: "5:10 – 5:15 pm",
      activity: "<p><strong>Panel: Closing Remarks by Stefaan Verhulst</strong></p>"
    },
    {
      time: "5:15 – 5:25 pm",
      activity: "<p><strong>Award Ceremony:</strong> Award Presentation & Acceptance Speech</p>"
    },
    {
      time: "5:25 – 5:30 pm",
      activity: "<p><strong>Closing Remarks by Artur Kluz</strong></p>"
    },
    {
      time: "5:30 – 7:00 pm",
      activity: "<p><strong>Networking Reception</strong></p>"
    },
  ]
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

<template>
  <div v-for="(event, val) in groupedByYear">
    <h2>Event {{ val }}</h2>
    <pre>
      <!-- Dados do Event -->
      {{ event }}
    </pre>
    
    <hr>
  </div>
</template>

<script setup>

const events = await queryContent('events').find();
const groupedByYear = (events.reduce((grouped, event) => {
  const year = event.year; // replace 'year' with the actual attribute name in your event object
  if (!grouped[year]) {
    grouped[year] = {};
  }
  grouped[year] = event;
  return grouped;
}, {}));

// event example
// 2022: {
//     "brow": "Event",
//     "title": "Kluz Peace Prize 2022",
//     "tagline": "Celebrating those who promote peace and resolve conflicts",
//     "year": 2022,
//     "description": "The Kluz Peace Prize is awarded annually to individuals or groups who have made a significant contribution to the promotion of peace and the resolution of conflicts. The prize was established in 2020 by the Kluz Foundation, a non-profit organization dedicated to promoting peace and social justice around the world.",
//     "jury": [
//         {
//             "name": "Andrea Renda",
//             "position": "Head of Global Governance, Regulation, Innovation and the Digital Economy (GRID) at CEPS and Professor of Digital Policy at the School of Transnational Governance (EUI)"
//         },
//         {
//             "name": "Artur Kluz",
//             "position": "Founder & CEO of Kluz Ventures",
//             "image": "/images/jury/artur_kluz.jpg"
//         },
//         {
//             "name": "Evelyne Tauchnitz",
//             "position": "Senior Research Fellow at Lucerne Graduate School in Ethics"
//         },
//         {
//             "name": "Kalypso Nicolaïdis",
//             "position": "Chair of Global Affairs at the School of Transnational Governance (EUI)"
//         },
//         {
//             "name": "Michele Giovanardi",
//             "position": "Coordinator of the Global PeaceTech Hub at the School of Transnational Governance (EUI)"
//         },
//         {
//             "name": "Stefaan Verhulst",
//             "position": "Co-Founder & Chief Research & Development Officer of The GovLab",
//             "image": "/images/jury/stefaan_verhulst.jpg"
//         }
//     ],
// }

</script>

<style lang="scss" scoped>

</style>

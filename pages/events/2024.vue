<template>
  <kpp-hero height="min(40svh, 900px)" title="" color="primary">
    <center-l size="wide" class="kpp-hero__content">
      <h4 class="kpp-hero__brow">New York City</h4>
      <h2 class="margin-bottom:s2">2024 Kluz Prize for PeaceTech Event</h2>
    </center-l>
  </kpp-hero>
  <!-- <kpp-cta color="primary" :content="ctaContent" /> -->



  <kpp-base-section color="white">
    <center-l class="padding-bottom:s2" size="wide">
      <div class="columns">
        <kpp-prose class="custom">
          <p>The Kluz Prize for PeaceTech is an annual initiative designed to celebrate, recognize, and propel the
            innovative use of emerging technologies to foster peace, reduce conflict, and safeguard human dignity and
            universal human rights across the globe.</p>

          <p>The 2024 Kluz Prize for PeaceTech award ceremony will take place on Friday, September 20<sup>th</sup> in
            New York
            City. This event will take place as part of the broader 79<sup>th</sup> UN General Assembly events.</p>

          <p>The event seeks to bring together global leaders, policymakers, entrepreneurs, engineers, programmers,
            scientists, Big-Tech, startups, accelerators, and venture capitalists, as well as scholars and public
            officials who are committed to using technology to create a peaceful world.</p>

          <p>The event will include presentations from The Kluz Prize for PeaceTech winners and discussions on the
            critical role of technology in peacebuilding efforts around the world. The ceremony will be followed by a
            cocktail reception where you will have the chance to meet the award winner, as well as other leaders in the
            ecosystem.</p>

          <p>Speakers will be announced in September 2024.</p>

          <p>If you are interested in attending the award ceremony, please contact the organizers via email at
            <a href="mailto:info@kluzprize.org">info@kluzprize.org</a> to learn more.
          </p>
        </kpp-prose>
      </div>

    </center-l>
  </kpp-base-section>

  <kpp-base-section color="tertiary">
    <center-l class="padding-bottom:s2" size="wide">
      <kpp-prose class="custom">
        <h3 class="color:primary">About the Kluz Prize for PeaceTech</h3>
        <p>The Kluz Prize for PeaceTech presents an exceptional opportunity to become recognized for your contribution
          to the evolving field of technologies for peace. We are seeking distinguished and accomplished PeaceTech
          initiatives and innovative solutions that leverage technology, including but not limited, to:</p>
      </kpp-prose>
    </center-l>
    <center-l size="wide">
      <div class="split-panel">
        <div class="panel">
          <kpp-prose>
            <ul class="custom-list">
              <li>Supporting, building and keeping peace;</li>
              <li>Protecting human dignity and universal human rights written in universal moral law;</li>
              <li>Preventing military conflicts within and between nations;</li>
              <li>Facilitating dialogue between conflicting parties;</li>
              <li>Addressing conflict, violence and social issues across local, national and international contexts;
              </li>
            </ul>
          </kpp-prose>
        </div>
        <div class="panel">
          <kpp-prose>
            <ul class="custom-list">
              <li>Protecting and supporting those impacted by conflict;</li>
              <li>Mobilizing disaster relief efforts more rapidly;</li>
              <li>Providing humanitarian aid to solve welfare conflicts;</li>
              <li>Monitoring human rights violations and peacekeeping efforts; and</li>
              <li>Solving the most basic human problems and needs such as poverty, access to water, food, healthcare,
                and connectivity.</li>
            </ul>
          </kpp-prose>
        </div>
      </div>
    </center-l>
  </kpp-base-section>

  <kpp-base-section class="jury-section">
    <center-l size="wide">
      <h2 class="jury-section__title">Selection Committee</h2>
      <div class="grid">
        <kpp-person v-for="i in jury" :content="i" />
      </div>
    </center-l>
  </kpp-base-section>
</template>

<script setup>
const route = useRoute()
const event = await queryContent('events');

useHead({
  title: "Kluz Prize for PeaceTech",
})

// const ctaContent = {
//   brow: 'Call for Applications',
//   title: 'Applications Open',
//   text: 'The Kluz Prize for PeaceTech is pleased to announce its Call for Applications, inviting individuals, organizations, peacebuilding enthusiasts, inventors, and tech entrepreneurs to submit their PeaceTech achievements and/or innovative projects that harness the power of emerging technologies to foster peace.',
//   extra: 'Applications are due by 11:59 PM EDT on X Date.',
//   action: {
//     label: 'Apply Now',
//     url: '/application'
//   }
// } 
const jury = [
    {
      "name": "Ana Carolina González Peña",
      "title": "Co-Founder and Director of the Magnolia Foundation",
      "image": "/assets/images/jury/ana-carolina-gonzalez-pena.jpg",
      "url": "https://www.linkedin.com/in/anacaro26/"
    },
    {
      "name": "Andrew Schroeder",
      "title": "Vice President of Research and Analysis at Direct Relief",
      "image": "/assets/images/jury/andrew-schroeder.jpg",
      "url": "https://www.linkedin.com/in/aischroeder"
    },
    {
      "name": "Artur Kluz",
      "title": "Founder & CEO of Kluz Ventures",
      "image": "/assets/images/jury/artur-kluz.jpg",
      "url": "https://www.linkedin.com/in/akluz"
    },
    {
      "name": "Bradley Tusk",
      "title": "Co-Founder & Managing Partner of Tusk Venture Partners, Founder of Tusk Strategies",
      "image": "/assets/images/jury/bradley-tusk.jpg",
      "url": "https://www.bradleytusk.com/"
    },
    {
      "name": "Fatima Roumate",
      "title": "Professor of International Law at Mohammed V University, President of the International Institute of Scientific Research, Member of the Ad Hoc Expert Group for the Recommendation on the Ethics of Artificial Intelligence UNESCO",
      "image": "/assets/images/jury/fatima-roumate.jpg",
      "url": "https://www.linkedin.com/in/fatima-roumate-phd-17193920/"
    },
    {
      "name": "François Chopard",
      "title": "CEO of Starburst Aerospace",
      "image": "/assets/images/jury/francois-chopard.png",
      "url": "https://www.linkedin.com/in/francoischopard"
    },
    {
      "name": "Ivan Martinovic",
      "title": "Professor of Computer Science (Cybersecurity) at University of Oxford",
      "image": "/assets/images/jury/ivan-martinovic.png",
      "url": "https://www.linkedin.com/in/ivan-martinovic-5b47761a8/"
    },
    {
      "name": "Kay Firth-Butterfield",
      "title": "Executive Director of the Centre for Trustworthy Technology",
      "image": "/assets/images/jury/kay-firth-butterfield.png",
      "url": "https://en.m.wikipedia.org/wiki/Kay_Firth-Butterfield"
    },
    {
      "name": "Matthew Sanders",
      "title": "CEO of Humanity 2.0 and Longbeard",
      "image": "/assets/images/jury/matthew-sanders.jpg",
      "url": "https://www.linkedin.com/in/matthew-harvey-sanders/?originalSubdomain=ca"
    },
    {
      "name": "Stefaan Verhulst",
      "title": "Co-Founder & Chief Research & Development Officer of The GovLab ",
      "image": "/assets/images/jury/stefaan-verhulst.jpg",
      "url": "https://www.linkedin.com/in/stefaan-verhulst"
    },
    {
      "name": "Stuart E. Eizenstat",
      "title": "Senior Counsel at Covington & Burling",
      "image": "/assets/images/jury/stuart-eizenstat.webp",
      "url": "https://en.m.wikipedia.org/wiki/Stuart_E._Eizenstat"
    },
    {
      "name": "Zara Khan",
      "title": "Strategic Partnerships Lead at X, the moonshot factory",
      "image": "/assets/images/jury/zara-khan.jpg",
      "url": "https://www.linkedin.com/in/khanzara/"
    }
  ]
</script>

<style lang="scss" scoped>
.custom {
  a { text-decoration: underline; }
  sup { font-size: 0.75em; }
}

.columns {
  display: flex;
  @media screen and (min-width: 768px) { gap: var(--s2); }
  @media screen and (max-width: 768px) { flex-direction: column; }

  aside {
    width: 100%;
    box-shadow: 4px 4px 8px hsla(var(--base-hsl), 0.2);

    @media screen and (max-width: 768px) { height: 350px; }
    @media screen and (min-width: 768px) { max-width: 350px; }
    
  }
}

.callout {
  font-size: 1.25rem;
  @media screen and (min-width: 768px) { font-size: 1.5rem; }
}

.split-panel { 
  @media screen and (min-width: 768px) { gap: var(--s3); }
}

.panel { 
  flex: 1; 
}

.custom-list {
  margin: inherit;
  @media screen and (min-width: 768px) { margin: 0; }
}

.grid {
  --itemWidth: 200px;
  gap: var(--s3);
  @media (max-width: 768px) { 
    padding-inline: var(--s2);
  }
}

.jury-section {

  &__title {
    text-align: center;
    padding-bottom:var(--s2);
    @media (max-width: 768px) { font-size: 300%; }
  }
}

</style>

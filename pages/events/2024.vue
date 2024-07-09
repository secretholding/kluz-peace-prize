<template>
  <kpp-hero height="min(40svh, 900px)" title="" color="white" bg="/assets/images/the-century.jpg">
    <center-l size="wide" class="kpp-hero__content">
      <h4 class="kpp-hero__brow | color:white ">New York City</h4>
      <h2 class="color:white margin-bottom:s2">2024 Kluz Prize for PeaceTech Event</h2>
    </center-l>
  </kpp-hero>
  <!-- <kpp-cta color="primary" :content="ctaContent" /> -->



  <kpp-base-section color="white">
    <center-l class="padding-bottom:s2" size="wide">
      <div class="columns">
        <kpp-prose class="custom">
          <p>Join us for the <strong>2024 Kluz Prize for PeaceTech award ceremony on Friday, September 20 from 5 - 7 pm at <a href="https://www.thecentury.org/Club/Scripts/Home/home.asp" target="_blank">the Century Association</a> in New York City</strong> (<a href="https://maps.app.goo.gl/yzg9qA8sb3H8v7Ze8">7 West 43rd Street, New York, NY 10036</a>). This event will take place as part of the broader 79th UN General Assembly events.</p>

          <p>The Kluz Prize for PeaceTech is an annual initiative designed to celebrate, recognize, and propel the innovative use of emerging technologies to foster peace, reduce conflict, and safeguard human dignity and universal human rights across the globe.</p>

          <p>This event seeks to bring together global leaders, policymakers, entrepreneurs, engineers, programmers, scientists, Big-Tech, startups, accelerators, and venture capitalists, as well as scholars and public
            officials who are committed to using technology to create a peaceful world.</p>

          <p>The event will include presentations from The Kluz Prize for PeaceTech winners and discussions on the critical role of technology in peacebuilding efforts around the world. The ceremony will be followed by a cocktail reception where you will have the chance to meet the award winner, as well as other leaders in the ecosystem.</p>

          <p>Speakers will be announced in September 2024.</p>

          <p>Please RSVP by filling out the form below no later than September 15<sup>th</sup>.</p>

          <p>We hope you can join!</p>

          <p>* Please note, the Century Association requires guests to abide by their dress code of jackets for
            gentlemen and appropriate equivalent dress for women.</p>
        </kpp-prose>
        <aside class="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.336167780134!2d-73.9810342!3d40.7546304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2590026f6f3f1%3A0x675d21233fdf9006!2s7%20W%2043rd%20St%2C%20New%20York%2C%20NY%2010036%2C%20USA!5e0!3m2!1sen!2sca!4v1720558119118!5m2!1sen!2sca"
            width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </aside>
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
  a {text-decoration: underline;}
}

.columns {
  display: flex;
  gap: var(--s1);
  @media screen and (max-width: 768px) {
      flex-direction: column;
    }

  aside {
    @media screen and (max-width: 768px) { 
      height: 350px;
    }
    @media screen and (min-width: 768px) { max-width: 350px; }
    width: 100%;
    box-shadow: 4px 4px 8px hsla(var(--base-hsl), 0.2);
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

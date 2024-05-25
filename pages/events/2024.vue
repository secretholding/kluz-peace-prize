<template>
  <kpp-hero height="50svh" title="2024" color="white" bg="/assets/images/events/2022/kluz-peace-tech-prize-2022-01.jpg"/>
  <kpp-cta color="base" :content="ctaContent"/>
  <kpp-base-section color="secondary">
    <center-l size="wide">
      <p class="callout">Applications are due by 11:59 PM EDT on <time datetime="YYYY-MM-DD">X Date</time>.</p>
    </center-l>
  </kpp-base-section>
  <kpp-base-section color="tertiary">
    <center-l class="padding-bottom:s2" size="wide">
      <kpp-prose class="custom">
        <p>This presents an exceptional opportunity to become recognized for your contribution to the evolving field of technologies for peace. We are seeking distinguished and accomplished PeaceTech initiatives and innovative solutions that leverage technology, including but not limited, to:</p>
      </kpp-prose>
    </center-l>
    <center-l size="wide">      
      <div class="split-panel">
        <div class="panel">
          <kpp-prose>
            <ul class="custom-list">
              <li>Supporting, building and keeping peace;</li>
              <li>Preventing military conflicts within and between nations;</li>
              <li>Facilitating dialogue between conflicting parties;</li>
              <li>Protecting human dignity and universal human rights written in universal moral law;</li>
              <li>Addressing conflict, violence and social issues across local, national and international contexts;</li>
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
            <li>Solving the most basic human problems and needs such as poverty, access to water, food, healthcare, and connectivity.</li>
          </ul>
          </kpp-prose>
        </div>
      </div>
      </center-l>
    </kpp-base-section>
    
    <kpp-base-section>
      <center-l size="wide">
        <div class="split-panel">
          <div class="panel">
            <kpp-prose>
              <p><em>The GovLab and its partners are committed to respecting your privacy. We abide by all the practices and principles outlined by New York University in its Digital Privacy Statement. For more information, please <a href="https://www.nyu.edu/footer/privacy-policy.html">review the full statement here</a>.</em></p>
            </kpp-prose>
          </div>
          <div class="panel">
            <kpp-prose>
              <p>If you have any questions, please visit our <a href="/faq">FAQs page</a> or contact the organizers at: <a href="mailto:info@kluzprize.org">info@kluzprize.org</a>.</p>
              <p><NuxtLink to="/faq" class="button">FAQs</NuxtLink></p>
              <p><NuxtLink to="/events/2024/timeline" class="button">2024 Roadmap</NuxtLink></p>
            </kpp-prose>
          </div>
        </div>
      </center-l>
    </kpp-base-section>
</template>

<script setup>
const ctaContent = {
  brow: 'Call for Applications',
  title: 'Applications Open',
  text: 'The Kluz Prize for PeaceTech is pleased to announce its Call for Applications, inviting individuals, organizations, peacebuilding enthusiasts, inventors, and tech entrepreneurs to submit their PeaceTech achievements and/or innovative projects that harness the power of emerging technologies to foster peace.',
  action: {
    label: 'Apply Now',
    url: '/application'
  }
} 
</script>

<style lang="scss" scoped>
.custom {
  @media screen and (min-width: 768px) { max-width: 80ch; }
}

.callout {
  font-size: 1.25rem;
  @media screen and (min-width: 768px) { font-size: 1.5rem; }
}

.split-panel { 
  @media screen and (min-width: 768px) { gap: var(--s3); }
}

.panel { flex: 1; }

ul {
  @media screen and (min-width: 768px) { margin: 0; }
}
</style>

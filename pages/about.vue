<template>
  <kpp-hero title="About" height="auto" color="accent" />

  <kpp-base-section class="about-section">
    <center-l size="wide">
      <div class="split-panel">
        <p>The Kluz Prize for PeaceTech is an initiative to celebrate, distinguish, and promote the use of new technologies in fostering peace, reducing conflict, and protecting human dignity and universal human rights across the globe. The Prize is dedicated to individuals, organizations, or initiatives for their distinguished achievements in peacebuilding, peacemaking, peacekeeping, or peace enforcement efforts. The goal of the Prize is to engage individuals, societies, and states in building up a local, national, and global PeaceTech movement.</p>
        <img src="/assets/images/map.svg" alt="">
      </div>
    </center-l>
  </kpp-base-section>

  <kpp-base-section id="prize-seeks-section" class="prize-seeks-section" color="">
    <center-l size="wide">
      <stack-l>
        <h2>What we are looking for</h2>
        <p>In particular, the Prize seeks to:</p>
        <ol class="numbers">
          <li>
            <span>1</span>
            <p>Recognize and reward groundbreaking PeaceTech achievements</p></li>
          <li>
            <span>2</span>
            <p>Encourage collaboration among global leaders, peacebuilders, technologists, entrepreneurs, investors, and policymaker</p></li>
          <li>
            <span>3</span>
            <p>Raise awareness about the potential of technology in fostering peace</p></li>
          <li>
            <span>4</span>
            <p>Engage individuals, societies, states, international organizations, and by and large new generations of young people in building up a local, national, and global PeaceTech movement</p></li>
        </ol>
      </stack-l>
      
    </center-l>
  </kpp-base-section>

  <kpp-base-section id="quote" class="quote-section">
    <center-l size="wide">
      <div class="split-panel" align-items="center">
        
        <img src="/assets/images/jury/artur-kluz.jpg" alt="Artur Kluz">
        
        <blockquote>
          <p>Technology holds the key to unlocking a more peaceful world, and PeaceTech is the driving force behind this transformative opportunity. Together, by showcasing groundbreaking applications of technology to foster peace, we can accelerate the PeaceTech movement and create tangible, life-changing impact on a global scale.</p>
          <cite><strong>Artur Kluz</strong>, Founder and CEO of Kluz Ventures</cite>
        </blockquote>
      </div>  
    </center-l>
  </kpp-base-section>
  <kpp-base-section id="strategy-section" class="strategy-section">
    <center-l size="wide">
      <div class="span-content">
        <h2>Innovative technologies for peace</h2>
        <p></p>
      </div>

      <div class="split-panel" align-items="center" >
        <kluz-about-logo />
        <div class="margin-top:s1">
          <p>PeaceTech is a rapidly growing field that leverages technology to prevent, mitigate, and resolve conflicts, and to build sustainable peace. It encompasses a wide range of technologies and methodologies, including:</p>
          <ul class="custom-list | stack">
            <li>Artificial Intelligence (AI) and Machine Learning (ML), predicting conflicts, enhancing decision-making, facilitating mediation, and assessing responses to societal issues</li>
            <li>Predictive modeling, spotting early conflict indicators for timely interventions</li>
            <li>Satellite and drone imaging, serving multifaceted roles from conflict prevention to post-war reconstruction</li>
            <li>Social media, monitoring for potential social unrest, and providing vital communication in conflict zones</li>
            <li>Digital communication platforms, fostering dialogue, promoting understanding, and mediating conflicts</li>
            <li>Crowdsourcing and citizen reporting, tapping into collective intelligence for conflict mapping, violence reporting, and peace initiatives</li>
            <li>Digital educational tools, spreading knowledge on peacebuilding and conflict resolution</li>
            <li>3D printing, meeting essential supply demands swiftly in conflict-stricken regions</li>
            <li>Biometrics, enabling fair democratic processes like elections and referenda, and facilitating targeted aid distribution</li>
            <li>Robotics, offering surveillance capabilities, and aid delivery to displaced populations, minimizing wars and fostering peace</li>
          </ul>
          <p>These are just a few examples of PeaceTech. The field is continually evolving as new technologies and methodologies are developed. Learn more about the key themes and challenges of technologies used by and created for peace efforts in “PeaceTech Topic Map: A Research Base for an Emerging Field”.</p>
        </div>
      </div>
    </center-l>
  </kpp-base-section>
</template>

<script setup>
useHead({
  title: "Kluz Prize for PeaceTech",
})
</script>
<style lang="scss" scoped>
.about-section {
  overflow: hidden;
}

.about-section p {
  font-size: 1.25rem; 
  @media (max-width: 768px) { color: var(--primary-color) !important; }
}

.about-section {
  img {
    align-self: center;
    transform: scale(1.8);
    opacity: .6;
    @media (max-width: 768px) { display: none; }
  }
}

.about-logo path {
  fill: var(--primary-color);
}


.prize-seeks-section {
  .numbers { list-style-type: none; }

  .numbers { 
    @media (min-width: 768px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto auto;
      align-items: center;
      /* gap: var(--s0); */
    }
  }

  .numbers li {
    display: flex;
    align-items: center;
    gap: var(--s0);
    @media (min-width: 768px) { max-width: 50ch;}
  }

  .numbers li span {
    font-size: 4rem;
    font-weight: 800;
    align-self: center;
    min-width: 50px;
    text-align: center;
    color: var(--secondary-color) !important;
  }
}

.quote-section .split-panel {
  @media (max-width: 768px) { padding-block: var(--s0); }
  @media (min-width: 768px) {  > * { padding-inline: var(--s2); } }

  > img { 
    width: 100%;
    max-width: 200px;
    border-radius: 50%;
    margin-inline: auto;
    margin-block: var(--s2);
   }

   blockquote {
    border-left: 4px solid var(--accent-color);
    padding-left: var(--s1);  
  }

  blockquote p {
    font-style: italic;
    font-size: 1.25rem;
  }

  cite { font-size: 1rem; }
  strong { color: var(--primary-color); }
}

.strategy-section .split-panel {


  @media (max-width: 768px) { 
    padding-block: var(--s2); 
  }
  @media (min-width: 768px) {  
    > * { padding-inline: var(--s2); } 
    > *:last-child { padding-left: var(--s3); } 
  }

  > *:first-child { 
    max-width: 60%;

    @media (max-width: 768px) { 
      align-self: center;
      justify-self: center;
      padding-block: var(--s2);
    }
  }
  > *:last-child { 
    @media (min-width: 768px) {
      background-image: linear-gradient(to bottom, transparent, var(--secondary-color), transparent);
      background-repeat: no-repeat;
      background-size: 2px 100%;
      background-position: left;
    }
   }

   ul li + li { margin-top: var(--s-2);}
   li { line-height: 1.5; }
}






</style>

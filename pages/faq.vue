<template>
  <kpp-hero title="FAQ" color="primary" height="20svh"/>
  <kpp-base-section>
    <center-l class="faq-wrapper" size="wide">
      <ul class="faq-list | stack">
        <li class="faq-item">
          <p class="question">What do we mean by PeaceTech?</p>
          <div class="answer">
            <p>"PeaceTech" encapsulates the strategic deployment of innovative technologies to reinforce peace, prevent conflicts, and steer peacebuilding initiatives. It harnesses, for instance:</p>
            <ul class="custom-list | stack">
              <li>Artificial Intelligence (AI) and Machine Learning (ML) to predict conflicts, enhance decision-making, facilitate mediation, and assess responses to societal issues like infrastructure damage or poverty.</li>
              <li>Predictive modeling, spotting early conflict indicators for timely interventions.</li>
              <li>Satellite and drone imaging, serving multifaceted roles from conflict prevention to post-war reconstruction, social media monitoring for potential social unrest, and providing vital communication in conflict zones.</li>
              <li>Digital communication platforms, fostering dialogue, promoting understanding, and mediating conflicts.</li>
              <li>Digital educational tools, spreading knowledge on peacebuilding and conflict resolution.</li>
              <li>Crowdsourcing and citizen reporting, tapping into collective intelligence for conflict mapping, violence reporting, and peace initiatives.</li>
              <li>3D printing, meeting essential supply demands swiftly in conflict-stricken regions.</li>
              <li>Biometrics, enabling fair democratic processes like elections and referenda, and facilitating targeted aid distribution.</li>
              <li>Robotics, offering surveillance capabilities and aid delivery to displaced populations, thereby minimizing wars and fostering peace.</li>
            </ul>
            <p class="answer">These are just a few examples of PeaceTech. The field is continually evolving as new technologies and methodologies are developed. Learn more about the key themes and challenges of technologies used by and created for peace efforts in “PeaceTech Topic Map: A Research Base for an Emerging Field”.</p>
          </div>
        </li>
        <li class="faq-item">
          <p class="question">What does the Prize entail?</p>
          <p class="answer">The award grants the selected winner $20,000 for their accomplishments in the field and to support the further advancement of their project in the emerging field of technologies for peace.</p>
        </li>
        <li class="faq-item">
          <p class="question">What are the criteria used for selection?</p>
          <div class="answer">
            <p>The Selection Committee will use the following achievement-oriented criteria for selection:</p>
            <ul class="custom-list | stack">
              <li>Demonstrated Impact: Evidence of the achievements or project's tangible improvement on a significant number of lives;</li>
              <li>Proven Relevance: Examples of how the achievements or project has effectively supported, built, kept peace or addressed an urgent need in a humanitarian or developmental context;</li>
              <li>Novelty and Innovation: Instances where the achievements or project has employed a unique approach contributing to solutions in a remarkable way;</li>
              <li>Scalability and Sustainability: Illustrations of successful expansions beyond the initial pilot, demonstrating the project's growth potential;</li>
              <li>Collaborative Success: Instances of leveraging collaboration and partnerships that have unlocked new opportunities or enhanced the project's impact.</li>
            </ul>
          </div>
        </li>
        <li class="faq-item">
          <p class="question">Who is on the Selection Committee?</p>
          <p class="answer">The Selection Committee will consist of the founding donor, and a group of distinguished international experts and recognized leaders in the fields of peace, technology, investments, and international affairs.</p>
        </li>
        <li>
          <p class="question">Who’s eligible to apply?</p>
          <div class="answer">
            <p>The Kluz Prize for PeaceTech welcomes individuals and organizations worldwide, who have distinguished themselves through proven achievements or accomplishments, or innovative projects related to application of transformative technologies in building, supporting, keeping, and promoting peace.</p>
            <p>Applications can be submitted individually or as a group, with the organization's name and legal representative indicated.</p>
            <p>Please note, we are not seeking applications proposing new projects. This grant will only be awarded to established projects which have had an impact in the field.</p>
          </div>
          </li>
          <li class="faq-item">
          <p class="question">Who is Kluz Ventures?</p>
          <p class="answer">Kluz Ventures is a values-driven investment firm with a long-term vision of empowering human flourishing and technological development by investing in the exceptional entrepreneurs and technologies of tomorrow. Investments in these technologies can promote a global culture of genuine human growth that meets the current and future needs of all people, serving as an inspiration for future generations. Founded by Artur Kluz. Learn more at www.kluzventures.com.</p>
        </li>
        <li class="faq-item">
          <p class="question">What is The GovLab?</p>
          <p class="answer">The GovLab at New York University’s Tandon School of Engineering is an action research center that aims to improve people's lives by changing the way we govern. The GovLab seeks to strengthen the ability of institutions — including but not limited to governments — and people to work more openly, collaboratively, effectively, and legitimately to make better decisions and solve public problems. For more information, visit www.thegovlab.org.</p>
        </li>
      </ul>
    </center-l>
  </kpp-base-section>
</template>

<script setup>
useHead({
  title: 'PeaceTech Prize',
})

</script>

<style lang="scss" scoped>
.faq-wrapper {
}

.faq-list { --space: var(--s1); }

.faq-item:not(:last-child) {
  border-bottom: 1px solid var(--secondary-color);
  padding-bottom: var(--space);
 
  li {
    list-style-type: none;
    --space: var(--s-2);
    padding-left: var(--s0);
    position: relative;
  }
}

.question {
  font-weight: bold;
  color: var(--primary-color);
}
</style>

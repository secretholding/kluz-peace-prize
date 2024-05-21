<template>
  <kpp-base-section height="auto" class="about">
    <center-l size="wide">
      <h2 class="section-title">About</h2>
      <div class="wrapper">
        <div class="panel">
          <img class="logo logo--kluz" src="/assets/images/kluz-prize-for-peacetech-horizontal.svg" alt="">
          <h3>About Kluz Ventures</h3>
          <p>Kluz Ventures is a values-driven investment firm with a long-term vision of empowering human flourishing and technological development by investing in the exceptional entrepreneurs and technologies of tomorrow. Investments in these technologies can promote a global culture of genuine human growth that meets the current and future needs of all people, serving as an inspiration for future generations. Founded by Artur Kluz.</p>
          <base-button el="a" href="http://www.kluzventures.com" size="l" class="margin-top:s2">Learn More</base-button>
        </div>

        <div class="panel">
          <img class="logo logo--govlab" src="/assets/images/govlab-logo.svg" alt="">
          <h3>About The Govlab</h3>
          <p>The GovLab is the main partner supporting the Kluz Prize for PeaceTech, and is an action research center based at New York University that aims to improve people's lives by changing the way we govern. The GovLab seeks to strengthen the ability of institutions — including but not limited to governments — and people to work more openly, collaboratively, effectively, and legitimately to make better decisions and solve public problems.</p>
          <base-button el="a" href="http://www.thegovlab.org" size="l" class="margin-top:s2">Learn More</base-button>
        </div>
      </div>
    </center-l>
  </kpp-base-section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.section-title {
  padding-bottom: var(--s-1);
  text-align: center;
  margin-bottom: var(--s2);
}

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: var(--s2);

  @media (min-width: 768px) { flex-direction: row; }
}

.panel {
  @media (min-width: 768px) {
    flex: 1;
  }

}

.logo {
  margin-block: var(--s1);
  height: 155px;
  &--govlab { max-width: 350px; }
  &--kluz { max-width: 350px; }
}


</style>

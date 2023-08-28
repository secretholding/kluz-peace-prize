<template>
  <ccm-hero class="peacetech-hero">
    <template #top-bar>
      <center-l>
        <nav class="main-menu">
          <cluster-l>
            <a class="main-menu__item" href="https://www.kluzprize.org/">Home</a>
            <a class="main-menu__item" href="https://www.kluzprize.org/applications">Applications</a>
            <a class="main-menu__item active" href="https://www.kluzprize.org/jury-and-panelists">Jury & Panelists</a>
          </cluster-l>
        </nav>
      </center-l>
    </template>

    <div class="peacetech-hero__main">
      <img src="assets/images/kluz-peace-prize-logo.svg" alt="">
      <base-button 
        class="margin-top:s4"
        color="accent"
        visual="primary"
        size="l"
        href="https://docs.google.com/forms/d/e/1FAIpQLSd8CgtAlsnCpD1w5lR5ykQpER6EESyItVpnldHSB0sV1qmo_g/viewform">Apply Now</base-button>
    </div>

    

    <template #bottom>
      <p class="peacetech-hero__bottom | color:white text-align:center">Applications open: August 1st, 2023 - September 1st, 2023 11:59 PM EDT</p>
    </template>
  </ccm-hero>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.peacetech-hero {
  background-color: var(--white-color);
  min-height: 700px;
}

.peacetech-hero__main {
  text-align: center;

  img {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    display: block;
  }
}

.peacetech-hero__bottom {
  background-color: var(--primary-color);
  padding: var(--s0);
  font-weight: 600;
}

.main-menu {
  padding: var(--s0);
  
  > * {
    gap: var(--s2);
    justify-content: center;
  }
}

.main-menu__item {
  font-weight: 400;
  color: var(--accent-color);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  &.active {
    color: var(--primary-color);
    text-decoration: underline;
  }
}

</style>

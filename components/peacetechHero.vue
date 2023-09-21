<template>
  <ccm-hero class="peacetech-hero">
    <template #top-bar>
      <center-l>
        <nav class="main-menu">
          <cluster-l>
            <NuxtLink class="main-menu__item" to="/">Home</NuxtLink>
            <NuxtLink class="main-menu__item" to="/prize">Prize Winners</NuxtLink>
            <NuxtLink class="main-menu__item" to="/jury-and-panelists">Jury & Panelists</NuxtLink>
            <NuxtLink class="main-menu__item" to="/updates">Updates</NuxtLink>
          </cluster-l>
        </nav>
      </center-l>
    </template>

    <div class="peacetech-hero__main">
      <img src="/assets/images/kluz-prize-for-peacetech-dark.svg" alt="">
      <base-button v-if="isHomepage" class="margin-top:s3" :to="prizes" size='l' visual='primary' color="accent">Winners and Special Distinctions</base-button>
    </div>

    <template #bottom>
      <p class="peacetech-hero__bottom | color:white text-align:center">&nbsp;</p>
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
    max-width: 220px;
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

  &.router-link-active {
    color: var(--primary-color);
    text-decoration: underline;
  }
}

.pill {
  display: inline-block;
  width: auto;
  padding: var(--s0) var(--s3);
  background-color: var(--primary-color-10);
  margin-inline: auto;
  border-radius: 40px;
  font-weight: 600;
  color: var(--primary-color);
}

</style>

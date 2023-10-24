<template>
  <ccm-hero class="peacetech-hero">
    <template #top-bar>
      <main-nav />
    </template>

    <div class="peacetech-hero__main">
      <img src="/assets/images/kluz-prize-for-peacetech-dark.svg" alt="">
      <base-button v-if="isHomepage()" class="winners-button | margin-top:s3" :to="prizes" size='m' visual='primary' color="accent"><nuxt-link to="/prize">Winners and Special Distinctions</nuxt-link></base-button>
    </div>

    <template #bottom>
      <p class="peacetech-hero__bottom | color:white text-align:center">&nbsp;</p>
    </template>


  </ccm-hero>


</template>

<script setup>
// import route to make the function below work
const route = useRoute()

// write a function that returns true if the current route is the homepage
const isHomepage = () => {
  return route.path === '/'
}

</script>

<style lang="scss" scoped>

.peacetech-hero {
  background-color: var(--white-color);
  height: 60vh;
  max-height: 500px;
}

.peacetech-hero__main {
  text-align: center;

  img {
    width: 45vh;
    height: auto;
    max-width: 220px;
    @media screen and (min-width: 768px) { max-width: 320px; }
    margin: 0 auto;
    display: block;
  }
}

.winners-button {
  & > a {
    text-decoration: none;
    color: var(--white-color);
  }
  @media (max-height: 660px) { display: none; }
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

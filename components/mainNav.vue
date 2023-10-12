<template>
    <div class="nav">
      <NuxtLink to="/" class="logo" v-if="!isHomepage()">
        <img class="nav-logo" src="/assets/images/kluz-prize-for-peacetech-dark.svg" alt="" >
      </NuxtLink>

      <span v-else>&nbsp;</span>
      
      <nav class="main-menu">
        <cluster-l>
          <NuxtLink class="main-menu__item" to="/">Home</NuxtLink>
          <NuxtLink class="main-menu__item" to="/prize">Prize Winners</NuxtLink>
          <NuxtLink class="main-menu__item" to="/jury-and-panelists">Jury & Panelists</NuxtLink>
          <NuxtLink class="main-menu__item" to="/updates">Updates</NuxtLink>
        </cluster-l>
      </nav>
    </div>
</template>

<script setup>
// import route to make the function below work
const route = useRoute()

// write a function that returns true if the current route is the homepage
const isHomepage = () => {
  return route.path === '/'
}

console.log(isHomepage());

</script>

<style lang="scss" scoped>

.logo {
  padding: var(--s0);  
  display: block;
  width: 100%;
  max-width: 140px;
}

.nav {
  padding: 0 var(--s0);
  display: flex;
  justify-content: space-between;
}
.nav-logo { max-width: 100px; }

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

</style>

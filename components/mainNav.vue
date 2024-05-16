<template>
    <div class="nav" :is-homepage="isHomepage()" :color="color">
      <NuxtLink to="/" class="logo" v-if="!isHomepage()">
        <img class="nav-logo" src="/assets/images/kluz-prize-for-peacetech-dark.svg" alt="" >
      </NuxtLink>

      <span v-else>&nbsp;</span>
      
      <nav class="main-menu" :is-open="isOpen">
        <base-button class="mobile-trigger" icon-only icon-before="menu" :color="color" @click="toggleMenu"/>
        <NuxtLink class="main-menu__item" to="/">Home</NuxtLink>
        <NuxtLink class="main-menu__item" to="/prize">Prize Winners</NuxtLink>
        <NuxtLink class="main-menu__item" to="/jury-and-panelists">Jury & Panelists</NuxtLink>
        <NuxtLink class="main-menu__item" to="/updates">Updates</NuxtLink>
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

const isOpen = ref(false);

function toggleMenu() {
  isOpen.value = !isOpen.value;
  console.log(isOpen.value);
}


const props = defineProps({
  color: {
    type: String,
    default: 'white'
  }
});


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
  display: flex;
  gap: var(--s2);
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

[is-homepage="true"] .main-menu__item { color: white; }

@media screen and (min-width: 768px) {
  .mobile-trigger {display: none;}
}

@media screen and (max-width: 768px) {
  .main-menu {
    position: fixed;
    background-color: var(--primary-color);
    width: 100%;
    z-index: 1000;
    left: 0;
    flex-direction: column;
    gap: var(--s0);
    padding: var(--s0);
    align-items: center;
    --height: 200px;
    transition: bottom 0.3s ease-in-out;
  }

  .main-menu__item { color: var(--white-color) !important;}

  .main-menu[is-open="false"] { bottom: calc(calc(var(--height) - 32px)*-1); }
  .main-menu[is-open="true"] { bottom: 0; }

  
  .mobile-trigger {
    align-self: auto;
    border: 0 !important;
  }
}

</style>

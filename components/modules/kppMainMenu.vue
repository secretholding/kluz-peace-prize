<template>
  <div class="main-menu" :color="color">
    <base-button icon-only icon-before="menu" class="menu-trigger" :color="color" @click="isOpen = !isOpen" v-if="!isOpen"/>

    <nav v-if="isOpen" class="main-menu__panel" :is-open="isOpen">
      <base-button icon-only icon-before="close" class="menu-trigger | margin-left:auto" color="base" @click="isOpen = !isOpen" />

      <ul>
        <li><NuxtLink class="main-menu__item" @click="isOpen = false" to="/">Home</NuxtLink></li>
        <li><NuxtLink class="main-menu__item" @click="isOpen = false" to="/events/2025">Event</NuxtLink></li>
        <li><NuxtLink class="main-menu__item" @click="isOpen = false" to="/prizes/">Prizes</NuxtLink></li>
        <li><NuxtLink class="main-menu__item" @click="isOpen = false" to="/updates/">Updates</NuxtLink></li>
        <li><NuxtLink class="main-menu__item" @click="isOpen = false" to="/about">About</NuxtLink></li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
const isOpen = ref(false);

const props = defineProps({
  color: {
    type: String,
    default: "white" 
  }
});

const { color } = toRefs(props)
</script>

<style lang="scss" scoped>
.menu-trigger {
  --button-border-width: 0;
  --button-font-size: 1.5rem;
}

.main-menu { position: relative; }

.menu-trigger {
  // position: fixed;
  // top: 0;
  // right: 0;

  z-index: var(--main-menu-trigger-z-index, 10001);
  transition: all 0.3s;
  cursor: pointer;
  --button-padding-v: var(--s1);

  @media (max-width: 768px) { }
  @media (min-width: 768px) { 
    top: var(--s-1);
    right: var(--s1); 
  }
}

.main-menu__panel {
  // core positioning of the menu
  position: fixed;
  z-index: var(--main-menu-menu-z-index, 10000);
  background-color: hsla(var(--white-hsl), 0.95);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: right;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.main-menu ul {
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  list-style: none;
  padding: 0;
  
  @media screen and (min-width: 768px){
    padding-block: var(--s4);  
  }
}

.main-menu li {
  padding: 0;
  width: 100%;
  text-align: center;
  flex: 1;
}

.main-menu__item {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  text-decoration: none;
  text-transform: uppercase;
  color: var(--menu-color);
  font-size: 2rem;
  font-weight: 100;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to right, transparent, hsla(var(--accent-hsl), 0), transparent);
  transition: all 3s;
  
  @media screen and (min-width: 768px) { font-size: 4rem; }
}

.main-menu__item:hover {
  color: var(--primary-color);
  background-image: linear-gradient(to right, transparent, hsla(var(--accent-hsl), .2), transparent);
}

.main-menu[is-open=false] {
  display: none;
}

.main-menu[is-open=true] {
  display: block;
}

// .main-menu[color="base"]    { 
//   --menu-color: var(--base-color);
  
// }
// .main-menu[color="white"]   { 
//   --menu-color: var(--white-color);
  
// }
// .main-menu[color="primary"] { 
//   --menu-color: var(--primary-color);
  
// }

</style>

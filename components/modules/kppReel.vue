<template>
  <reel-l>
      <slot>
        <div v-for="i in 6">
          <div class="base-card | frame">
            <div class="base-card__content">
              <h2>Card {{i}}</h2>
            </div>
          </div>
        </div>
      </slot>
  </reel-l>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.base-card {
  --n: 2;
  --d: 1;
  background-color: hsla(var(--base-hsl), .1);
  
  width: 60svw;

  @media screen and (min-width: 768px) {
    --n: 3;
    --d: 4;
    width: 40svw;
  }
}
</style>

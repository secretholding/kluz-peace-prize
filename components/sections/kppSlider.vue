<template>
  <kpp-hero color="white">
    <div class="slider">
      <div class="slide">
        <center-l size="wide" class="center--forced">
          <kpp-headers :content="headerContent" color="white" />
        </center-l>
      </div>
    </div>
  </kpp-hero>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.slider {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}

.slide {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: flex-end;
  padding-block: var(--s4);
  animation: slide 8s infinite alternate;
}


@keyframes slide {
  0% {
    background-image: url('/assets/images/slider-spacex.png');
  }
  100% {
    background-image: url('/assets/images/slider-spacex-2.png');
  }
}
</style>

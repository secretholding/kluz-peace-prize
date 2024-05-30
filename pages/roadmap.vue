<template>
  <kpp-hero title="Roadmap" height="20svh" color="accent"/> <!-- bg="/assets/images/slides/slider-atlas.png" -->
  <kpp-base-section>
    <center-l size="wide">
      <ul class="roadmap">
        <li class="roadmap__item" active="true">
          <h4>MM DD YYYY <span>| Applications Open</span></h4>
          <p>Submit your application for the 2024 Kluz PeaceTech Prize.</p>
        </li>
        <li class="roadmap__item">
          <h4>MM DD YYYY <span>| Applications Deadline</span></h4>
          <p>Apply by 11:59 PM EDT</p>
        </li>
        <li class="roadmap__item">
          <h4>MM DD YYYY <span>Final Decision</span></h4>
          <p>Communication of the final decision to the winner(s) and invitation to the award ceremony</p>
        </li>
        <li class="roadmap__item">
          <h4>September 20, 2024 <span>| Award ceremony</span></h4>
          <p>Communication of the final decision to the winner(s) and invitation to the award ceremony</p>
        </li>
        <li class="roadmap__item">
          <h4>March, 2025 <span>| Winner’s official presentation</span></h4>
          <p>Project/initiative final report in a dedicated in-person or online event</p>
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
.roadmap {
  display: flex;
  flex-direction: column;
  gap: var(--s3);
  align-items: flex-start;
  position: relative;

  

  &__item { 
    padding: var(--s0) var(--s1); 
    position: relative;
  }

  &__item:before {
    content: 'radio_button_unchecked';
    font-family: var(--icon-font);
    position: absolute;
    left: -1.5rem;
    top: 19px;
    font-size: 1.5rem;
    line-height: 1;
    color: var(--secondary-color);
    background-color: #fff;
    border-radius: 50%;
  }

  &__item:not(:last-child):after {
    content: '';
    position: absolute;
    top: 45px;
    bottom: -83px;
    left: -13px;
    width: 2px;
    background-color: var(--secondary-color);
  }

  &__item[active] {
    background: linear-gradient(to right, transparent 0%, hsla(var(--primary-hsl), .1) 10%, transparent 100%);

  }
  &__item[active]:not(:last-child):after {
    background: linear-gradient(to bottom, var(--primary-color), var(--secondary-color));
    animation: animateGradient 1s linear infinite reverse;
  }

  h4 {
    font-size: 1.25rem;
    font-weight: 400;
    color: var(--primary-color);
  }
  
  span {
    font-size: 1rem;
    font-weight: 400;
    color: var(--base-color);
  }

  .roadmap__item[active='true']:before {
    content: 'radio_button_checked';
    color: var(--primary-color);
  }
}


</style>

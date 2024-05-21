<template>
  <kpp-base-section class="kpp-cta" height="auto" :color="color">
    <center-l size="wide">
      <div class="wrapper">
        <stack-l class="panel panel--header">
          <h3 class="brow">Prize 2024</h3>
          <h2 class="title">Applications Open</h2>
          <p>Apply for the 2024 Kluz Prize for PeaceTech by X date and be recognized for your achievements and contributions to the evolving field of technologies for peace.</p>
        </stack-l>
        <stack-l class="panel panel--action">
          <nuxt-link to="/application" unstyled="color">
            <kpp-button color="accent" visual="primary" to="/application" size="xl">Apply Now</kpp-button>
          </nuxt-link>  
        </stack-l>
      </div>
    </center-l>
  </kpp-base-section>
</template>

<script setup>
const props = defineProps({
  color: {
    type: String,
    default: 'base'
  }
});

</script>

<style lang="scss" scoped>
.kpp-cta {
  padding-block: var(--s3);
  @media (min-width: 768px) { padding-block: var(--s3); }
}

.wrapper {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: var(--s2);
  @media (min-width: 768px) { flex-direction: row; }
}

.panel--header {
  --space: var(--s-2);
  flex: 5;
}

.kpp-cta {
  .brow {
    font-size: 150%;
    @media screen and (max-width: 768px) { font-size: 100%; }
    line-height: 1;
    font-weight: 800;
    text-transform: uppercase;
    color: var(--primary-color);
  }
  .title {
    font-size: 400%;
    @media screen and (max-width: 768px) { font-size: 200%; }
    line-height: 1;
    --space: 0;
  }

  p { --space: var(--s1); }
}





.panel--action {
  flex: 2;
  > * { margin-left: auto; }
}

.kpp-cta[color="base"] {
  background-color: var(--base-color);
  color: var(--white-color);
}

.kpp-cta[color="primary"] {
  background-color: var(--primary-color);
  color: var(--white-color);
}
.kpp-cta[color="secondary"] {
  background-color: var(--secondary-color);
  color: var(--base-color);
  
}
.kpp-cta[color="tertiary"] {
  background-color: var(--tertiary-color);
  color: var(--primary-color);
  
}
.kpp-cta[color="accent"] {
  background-color: var(--accent-color);
  color: var(--base-color);
}
</style>

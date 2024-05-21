<template>
  <kpp-base-section class="event-cta" height="auto" color="primary">
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

</script>

<style lang="scss" scoped>
.event-cta {
  padding-block: var(--s3);
  @media (min-width: 768px) { padding-block: var(--s3); }
}

.wrapper {
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (min-width: 768px) { flex-direction: row; }
}

.panel {
//  flex: 1; // max-width: 50%;
}

.panel--header {
  --space: var(--s-2);
  flex: 5;
}

.panel--action {
  flex: 2;
  > * { margin-left: auto; }
}
</style>

<template>
  <article>
    <stack-l>

      <center-l>
        <base-card heading="Heading" />
      </center-l>

      <base-section>
        <div class="center stack">
          <popup-trigger target="001">Open Dialog 1</popup-trigger>
          <popup-trigger target="002">Open Dialog 2</popup-trigger>

          <base-popup dialog-id="001">
            <h1>Dialog 1</h1>
          </base-popup>
          <base-popup dialog-id="002">
            <h1>Dialog 2</h1>
          </base-popup>
        </div>
      </base-section>

    </stack-l>

  </article>
</template>

<script>
</script>

<style scoped>

</style>

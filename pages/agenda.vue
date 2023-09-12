<template>
  <article>
    <center-l>
      <div class="embed-wrapper">
        <iframe src="https://docs.google.com/document/d/e/2PACX-1vRPID4mT-vvRwFppAQsT6KoOK2OcQFLJknhm0BqqVPmWNWeyEDq-KRdv7244CwqjiAMfnETS42DQdkQ/pub?embedded=true"></iframe>
      </div>
    </center-l>
  </article>
</template>

<script setup>
definePageMeta({
  layout: "default",
});
</script>

<style lang="scss" scoped>

.embed-wrapper {
  position: relative;
  overflow: hidden;
  height: 1000px;
}

iframe {
  margin-top: -60px;
  width: 960px;
  border: 0;
  overflow: hidden;
  height: 1200px;
}
</style>

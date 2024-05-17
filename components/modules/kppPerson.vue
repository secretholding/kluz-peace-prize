<template>
  <section class="kpp-person" :content="content" :padding="padding" :base-path="base_path">
    <slot>
      <slot name="image">
        <img :src="imgSrc" :alt="`${content.name} | ${content.title}`">
      </slot>
      <h5>{{ content.name  }}</h5>
      <h6>{{ content.title  }}</h6>
    </slot>
  </section>
</template>

<script setup>
const props = defineProps({
  content: {
    type: Object,
    default: {}
  },
  base_path: {
    type: String,
    default: ''
  },
  padding: {
    type: String,
    default: '0'
  }
});

const computed = {
  imgSrc() {
    return `${this.base_path}${this.content.image}`;
  }
};


</script>

<style lang="scss" scoped>
.kpp-base-section {
  min-height: v-bind(height);
  padding-block: v-bind(padding);

  @media (max-width: 768px) {
    padding-block: var(--s1);
  }
}
</style>

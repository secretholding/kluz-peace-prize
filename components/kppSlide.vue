<template>
  <div class="winner-image">
    <component :content="content" :is="isVideo" :src="`/assets/images/winners/${slug}/${content}`" alt=""
      :controls="isVideo === 'video'" :muted="isVideo === 'video'" @click="openLightbox">
    </component>

    <div v-if="isLightboxOpen" class="lightbox" @click.self="closeLightbox">
      <div class="lightbox-content">
        <kpp-button class="close-button" @click="closeLightbox" icon-only icon-after="close"></kpp-button>
        <component :content="content" :is="isVideo" class="lightbox-image"
          :src="`/assets/images/winners/${slug}/${content}`" alt="" :controls="isVideo === 'video'"
          :muted="isVideo === 'video'">
        </component>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed, ref } from 'vue';

const props = defineProps({
  content: {
    type: String,
    default: ""
  },
  slug: {
    type: String,
    default: ""
  }
});

const isVideo = computed(() => {
  return props.content.endsWith('.mp4') ? 'video' : 'img';
});

const isLightboxOpen = ref(false);

const openLightbox = () => {
  isLightboxOpen.value = true;
};

const closeLightbox = () => {
  isLightboxOpen.value = false;
};
</script>

<style lang="scss" scoped>
.winner-image {
  // height: 400px;
  cursor: pointer;
  background-color: var(--primary-color);
  aspect-ratio: 16/9;
  box-shadow: 4px 4px 8px hsla(var(--base-hsl), .1);
  transition: all 0.3s ease-in-out;

  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }

  &:hover {
    box-shadow: 0 0 16px hsla(var(--base-hsl), .3);
  }
}

.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.lightbox-content {
  position: relative;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
}

.lightbox-image {
  max-height: 80vh;
  max-width: 80vw;
}
</style>

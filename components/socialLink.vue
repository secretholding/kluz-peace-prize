<template>
  <a :href="url" :icon="icon" :size="size" :color="color" class="social-link">
    <svg v-if="icon == 'linkedin'" class="linkedin" xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none">
      <path class="color" opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z" fill="white"/>
      <path class="color" d="M8.65948 7.41135C8.64183 6.6102 8.06892 6 7.13861 6C6.2083 6 5.6001 6.6102 5.6001 7.41135C5.6001 8.1959 6.19033 8.82367 7.10331 8.82367H7.12069C8.06892 8.82367 8.65948 8.1959 8.65948 7.41135Z" fill="white"/>
      <path class="color" d="M8.48037 9.93896H5.76091V18.1098H8.48037V9.93896Z" fill="white"/>
      <path class="color" d="M15.1567 9.74707C16.9462 9.74707 18.2878 10.9151 18.2878 13.4249L18.2877 18.1098H15.5683V13.7384C15.5683 12.6404 15.1748 11.8911 14.1904 11.8911C13.4391 11.8911 12.9915 12.3962 12.795 12.8841C12.7231 13.0589 12.7054 13.3025 12.7054 13.5467V18.11H9.98566C9.98566 18.11 10.0215 10.7059 9.98566 9.93915H12.7054V11.0965C13.0664 10.5401 13.7128 9.74707 15.1567 9.74707Z" fill="white"/>
    </svg>
    <svg v-else-if="icon == 'youtube'" xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none">
      <path class="color" opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z" fill="white"/>
      <path class="color" fill-rule="evenodd" clip-rule="evenodd" d="M17.0009 7.87464C17.5517 8.02577 17.9854 8.47108 18.1326 9.03659C18.4001 10.0615 18.4001 12.2 18.4001 12.2C18.4001 12.2 18.4001 14.3384 18.1326 15.3634C17.9854 15.9289 17.5517 16.3742 17.0009 16.5254C16.0028 16.8 12.0001 16.8 12.0001 16.8C12.0001 16.8 7.99741 16.8 6.99923 16.5254C6.44846 16.3742 6.01472 15.9289 5.86752 15.3634C5.6001 14.3384 5.6001 12.2 5.6001 12.2C5.6001 12.2 5.6001 10.0615 5.86752 9.03659C6.01472 8.47108 6.44846 8.02577 6.99923 7.87464C7.99741 7.59998 12.0001 7.59998 12.0001 7.59998C12.0001 7.59998 16.0028 7.59998 17.0009 7.87464ZM10.8001 10.3999V14.3999L14.0001 12.4L10.8001 10.3999Z" fill="white"/>
    </svg>
  </a>
</template>

<script setup>
const props = defineProps({
  color: {
    type: String,
    default: '' // Default color value
  },
  size: {
    type: String,
    default: '24' // Default size value
  },
  icon: {
    type: String,
    default: 'linkedin' // Default icon value | Options: linkedin, youtube
  },

  url: {
    type: String,
    default: ''
  }
});

const { color, size, icon, url } = toRefs(props)
</script>

<style lang="scss" scoped>
.social-link[color="base"]    .color { fill: var(--base-color); }
.social-link[color="white"]   .color { fill: var(--white-color); }
.social-link[color="primary"] .color { fill: var(--primary-color); }

.social-link {
  width: v-bind(size);
}
</style>

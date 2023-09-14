<template>
  <base-section>
    <center-l size="wide">
      <stack-l>
        <h2>Updates and Announcements</h2>
        <ul class="updates-list">
          <stack-l>
            <updates-item v-for="i in blogData" :content="i" />
          </stack-l>
        </ul>
      </stack-l>
      
    </center-l>
  </base-section>
  
  <div>
    
  </div>
  
</template>

<script setup>
const route = useRoute()

const blogData = await queryContent('updates').where({
    slug: route.params.slug
}).find();
</script>

<style scoped lang="scss">
.updates-list {
  --space: var(--s2);
}
</style>

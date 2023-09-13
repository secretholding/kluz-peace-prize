<template>
  <ccm-table :content="content">
    <thead>
      <th>Time</th>
      <th>Activity</th>
    </thead>
    <tr v-for="i in content">
      <td>{{ i.time }}</td>
      <td v-html="i.activity"></td>
    </tr>
  </ccm-table>
</template>

<script setup>
import { toRefs } from 'vue'

const props = defineProps({
  content: {
    type: Object,
    default: {}
  },
});

const { content } = toRefs(props)
</script>

<style lang="scss" scoped>
th {
  text-align: left;
  border: 0;
  border-bottom: 1px solid var(--base-color-20);
  color: var(--accent-color) !important;
}

td {
  vertical-align: top;
  border: 0;
  border-bottom: 1px solid var(--base-color-20);
}

td:first-of-type { white-space: nowrap; }
td { padding: var(--s-2); }

:deep(ul) { 
  list-style-type: none;
  padding-left: 0;
}

:deep(li) {
  line-height: 1.35;
  margin-bottom: var(--s-2);
}

:deep(li a) { 
  color: var(--accent-color) !important;
  text-decoration: underline; 
}

</style>

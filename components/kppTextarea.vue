<template>
  <base-field>
    <base-textarea
      class="kpp-textarea"
      :id="textareaId" 
      :resizeX="resizeX"
      :textareaHeight="textareaHeight"
      :rows="textareaHeight"
      :name="textareaName"
      :placeholder="textareaPlaceholder"
      :wordcount="wordcount"
    ></base-textarea>
    <p class="wordcount">{{ wordcount }}</p>
  </base-field>
</template>

<script setup>
import { toRefs } from 'vue'

const props = defineProps({
  resizeX: {
    type: String,
    default: 'false'
  },
  textareaId: {
    type: String,
    default: '01'
  },
  textareaName: {
    type: String,
    default: 'textarea-01'
  },
  wordcount: {
    type: String,
    default: ''
  },
  textareaPlaceholder: {
    type: String,
    default: ''
  },
  textareaHeight: {
    type: String,
    default: '8' // The height of the textarea in lines of text
  },
});

const { resizeX, textareaId, textareaName, textareaPlaceholder, textareaHeight } = toRefs(props);

</script>

<style scoped>
.kpp-textarea { padding-inline: var(--s0); }
.kpp-textarea:placeholder { color: red !important;}

.wordcount {
  position: relative;
  font-size: 75%;
  text-align: right;
}

.wordcount::before {
  content: '';  
  width: var(--ratio);
  position: absolute;
  top: 0;
  left: 0;
  height: 2px;
  background-color: var(--form-color);
  --ratio: v-bind(ratio);
}
</style>

<template>
  <kpp-field :validate="validate" :maxWords="maxWords" :errorMessage="errorMessage">
    <base-textarea
      class="kpp-textarea"
      :id="inputId" 
      :resizeX="resizeX"
      :textareaHeight="textareaHeight"
      :rows="textareaHeight"
      :placeholder="textareaPlaceholder"
      :wordcount="wordcount"
      :name="inputName"
    ></base-textarea>
    <p class="wordcount">{{ wordcount }}</p>
  </kpp-field>
</template>

<script setup>
import { toRefs } from 'vue'

const props = defineProps({
  resizeX: {
    type: String,
    default: 'false'
  },
  inputId: {
    type: String,
    default: '01'
  },
  inputName: {
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
  validate: {
    type: String,
    default: ''
  },
  maxWords: {
    type: String,
    default: ''
  },
  errorMessage: {
    type: String,
    default: ''
  }
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

<template>
  <kpp-field :validate="validate" :maxWords="maxWords" :errorMessage="errorMessage">
    <textarea
      class="base-textarea kpp-textarea"
      :id="inputId" 
      :resizeX="resizeX"
      :textareaHeight="textareaHeight"
      :rows="textareaHeight"
      :placeholder="textareaPlaceholder"
      :wordcount="wordcount"
      :name="inputName"
      :maxlength="maxlength"
      v-model="data.textarea"
    ></textarea>
    <p class="wordcount" v-if="maxlength">{{ data.characterCount }} / {{ maxlength }}</p>
  </kpp-field>
</template>

<script setup>
import { toRefs, ref, watch, reactive } from 'vue'

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
  },
  maxlength: {
    type: String,
    default: '2000'
  }
});

const { resizeX, textareaId, textareaName, textareaPlaceholder, textareaHeight } = toRefs(props);


const data = reactive({
  characterCount: 0,
  textarea: ''
});

const textarea = ref(null);

watch(() => data.textarea, (newValue) => {
  if(newValue) {
    data.characterCount = newValue.length;
  } else {
    data.characterCount = 0;
  }
});

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

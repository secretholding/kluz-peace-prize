<template>
  
  <div class="base-field" :status="status" :more-info="moreInfo.status" :id=fieldId>
    <stack-l>
      <label 
        class="base-field__label" 
        :for="fieldId"
        v-if="label != ''" 
        >{{label}}
          <i v-if="labelExtra != ''" 
             class="more-info icon" 
             @click="(moreInfo.status = !moreInfo.status)">info</i></label>
      
      <p class="error-message" v-if="errorMessage"><i class="icon">close</i>{{errorMessage}}</p>

      <slot>
        <base-input :type="type" :placeholder="placeholder" :value="value" :inputId="inputId" :name="inputName" />
      </slot>
      
      <p v-if="labelExtra != ''" class="label-extra" :visible="moreInfo.status">{{labelExtra}}</p>
      
    </stack-l>

  </div>
</template>

<script setup>
  import { toRefs, reactive } from 'vue';
  import { uuid } from 'vue-uuid';

  
  const props = defineProps({
    status: {
      type: String,
      default: '' // empty, 'error', 'success'
    },
    label: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    value: { // This will replace the placeholder if not empty
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: 'Placeholder for the field'
    },
    errorMessage: {
      type: String,
      default: ''
    },
    labelExtra: {
      type: String,
      default: ''
    },
    inputName: {
      type: String,
      default: ''
    },
    inputId: {
      type: String,
      default: ''
    }
  })

  const fieldId = uuid.v4();
  let moreInfo = reactive({ status: true })

  const { status, label, type, value, placeholder, errorMessage, labelExtra } = toRefs(props)
</script>

<style scoped lang="scss">
.base-field {
  --field-label-extra-font-style: var(--form-label-extra-font-style);
  --field-label-extra-text-color: var(--form-label-extra-text-color);
}

.base-field > * { --space: var(--s-2); }

.base-field__label {
  display: flex;
}

.more-info { 
  cursor: pointer; 
  opacity: .5;
}

.more-info:hover { opacity: 1; }

label .icon { margin-left: auto; }

.label-extra { 
  padding: var(--form-padding-block) var(--form-padding-inline); 
  font-style: var(--field-label-extra-font-style);
  color: var(--field-label-extra-text-color);
}

.label-extra[visible='false'] { display: none; }
.label-extra[visible='true'] { display: flex; }

input:invalid,
.base-field[status="error"] :slotted(*) { border-color: var(--error-color); }

input:invalid + p,
.base-field .error-message {
  padding: var(--s-1) var(--s-2);
  display: flex; 
  align-items: center;
  gap: var(--s-1); /* Sets the space between the icon and the text in the error message */
  --space: var(--s-3); 
  color: var(--white-color); 
  background-color: var(--error-color);
  .icon {
    color: var(--white-color); 
  }
}

.base-field[status='error'] .error-message { display: flex; }

.base-field[status="success"] :slotted(*) { border-color: var(--success-color); }

</style>

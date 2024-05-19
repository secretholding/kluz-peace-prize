<template>
  <label class="kpp-switch" :native-ui="nativeUi" :required="required">
    <input id="switch-01" type="checkbox" :checked="checked" :required="required">
    <i class="icon"></i>
    <slot>
      {{label}}
    </slot>
  </label>
</template>

<script>

export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    inputLabelExtra: {
      type: String,
      default: ''
    },
    errorMessage: {
      type: String,
      default: ''
    },
    nativeUi: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    },
    checked: {
      type: Boolean,
      default: false
    }
  },
}
</script>

<style scoped>
.kpp-switch {
  cursor: pointer;
  display: flex;
  gap: var(--s1);
  --space: var(--s-2);
}

.kpp-switch[native-ui="false"] .icon { 
  color: var(--form-color);
  transform: scale(1.5) translate(3px, 10px);
}

.kpp-switch[native-ui="false"] input[type="checkbox"] + .icon:before { content: 'toggle_off'; }
.kpp-switch[native-ui="false"] input[type="checkbox"]:checked + .icon:before { content: 'toggle_on'; }

.kpp-switch[native-ui="false"] input[type="checkbox"] {
  transform: scale(1.5);
  margin: 5px;
  opacity: 0;
  position: absolute;
 }

 .kpp-switch[native-ui="false"] input[type="checkbox"]:checked + .icon:before { 
  opacity: 1; 
  color: var(--primary-color);
}

 
</style>

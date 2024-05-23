
import { ref } from 'vue'

export const useValidation = () => {
  const errors = ref([])
  const hasErrors = ref(false)

  const validateInput = (inputField) => {
    // Find the parent div with the class 'base-field'
    const baseField = inputField.closest('.base-field');
  
    // Retrieve the validate attribute from the parent div
    const validators = baseField ? baseField.attributes.validate : null;
    errors.value[inputField.name] = '';
  
    if (!validators) return;
  
    if (validators.value.includes('required') && !inputField.value) {
      hasErrors.value = true;
      errors.value[inputField.name] = 'Please fill out this field';
    }
  
    if (validators.value.includes('email') && !/^\S+@\S+\.\S+$/.test(inputField.value)) {
      hasErrors.value = true;
      errors.value[inputField.name] = 'Please provide a valid email address';
    }
  
    if (validators.value.includes('min') && inputField.value.length < inputField.min) {
      hasErrors.value = true;
      errors.value[inputField.name] = `The minimum value is ${inputField.min}`;
    }
  
    if (validators.value.includes('max') && inputField.value.length > inputField.max) {
      hasErrors.value = true;
      errors.value[inputField.name] = `The maximum value is ${inputField.max}`;
    }
  
    if (validators.value.includes('alpha') && !/^[a-zA-Z]*$/.test(inputField.value)) {
      hasErrors.value = true;
      errors.value[inputField.name] = 'Only alphabetic characters are allowed';
    }
  
    if (validators.value.includes('alpha_dash') && !/^[a-zA-Z0-9-_]*$/.test(inputField.value)) {
      hasErrors.value = true;
      errors.value[inputField.name] = 'Only alphabetic characters, numbers, dashes, and underscores are allowed';
    }
  
    if (validators.value.includes('alpha_num') && !/^[a-zA-Z0-9]*$/.test(inputField.value)) {
      hasErrors.value = true;
      errors.value[inputField.name] = 'Only alphabetic characters and numbers are allowed';
    }
  
    if (validators.value.includes('alpha_spaces') && !/^[a-zA-Z\s]*$/.test(inputField.value)) {
      hasErrors.value = true;
      errors.value[inputField.name] = 'Only alphabetic characters and spaces are allowed';
    }
  
    const maxWordsValidator = validators.value.match(/maxWords:(\d+)/);
    if (maxWordsValidator) {
      const maxWords = parseInt(maxWordsValidator[1], 10);
      
      if (inputField.value.split(' ').length > maxWords) {
        hasErrors.value = true;
        errors.value[inputField.name] = `The maximum number of words is ${maxWords}`;
      }
    }
  }
  
  const validateForm = (form) => {
    hasErrors.value = false;
  
    // Iterate over all elements within the form
    for (const field of form.elements) {
      // Only validate input elements and textareas that have a parent with the class 'base-field'
      if ((field.tagName === 'INPUT' || field.tagName === 'TEXTAREA') && field.closest('.base-field')) {
        validateInput(field);
      }
    }
  }
  

  return { errors, validateForm, hasErrors }
}

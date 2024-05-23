import { ref } from 'vue';

export function useSubmitForm() {
  const success = ref(false);
  const payload = ref({});

  async function onSubmit(form) {

    try {
      // Handle form submission here
      for (const field of form.elements) {
        payload.value[field.name] = field.value;
      }

      const body = JSON.stringify(payload.value);

      const response = await fetch('https://formspree.io/f/xzbnqego', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: body,
      });

      if (response.ok) {
        console.log('Form submitted successfully');
        success.value = true;
      } else {
        console.error('Form submission failed');
      }
    } catch (e) {
      console.error('Form submission error:', e);
    }
  }

  return {
    success,
    onSubmit,
  };
}
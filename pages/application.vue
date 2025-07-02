<template>
<div>
  <kpp-hero height="auto" color="primary">
    <slot>
      <center-l size="wide">
        <h2 class="text-align:center">Application for 2025</h2>
      </center-l>
    </slot>
  </kpp-hero> 
    <kpp-base-section>
      <center-l size="wide">
        <form id="appForm" ref="appForm">
          <stack-l>
            <p class="success-message" v-if="success"><span class="material-symbols-outlined">check</span>Application submitted successfully</p>
            
            <kpp-field type="email" inputName="email" inputId="email" label="Email*" validate="required email" placeholder="" :errorMessage="errors.email" />
            <kpp-field type="text" inputName="applicant" inputId="applicant" label="Name of Applicant*" validate="required" placeholder="" :errorMessage="errors.applicant" />
            <kpp-field type="text" inputName="affiliation" inputId="affiliation" label="Affiliation*" validate="required" placeholder="" :errorMessage="errors.affiliation" />
            <kpp-field type="text" inputName="location" inputId="location" label="Where is the project or research based?*" validate="required" placeholder="" :errorMessage="errors.location" />
            
            <h3 class="margin-top:s1">Overview</h3>
            <kpp-textarea 
              ref="summary"
              label="Please provide a brief summary of your project or research.*" 
              validate="required"
              max="300"
              inputName="summary"
              inputId="summary"
              :errorMessage="errors.summary"
            />
            
            <h3 class="margin-top:s1">Impact</h3>
            <kpp-textarea 
              class="margin-top:0" 
              label="What is the potential of your work for widespread impact? How do you meaningfully improve the lives of people?" 
              max="200" 
              inputName="impact"
              inputId="impact"
              :errorMessage="errors.impact"
            />

            <h3 class="margin-top:s1">Relevance</h3>
            <kpp-textarea
              class="margin-top:0" 
              label="How does your project support peacebuilding and/or conflict resolution efforts in the context of a humanitarian crisis or developmental context?" 
              max="200"
              inputName="relevance"
              inputId="relevance"
              :errorMessage="errors.relevance"
            />
            
            <h3 class="margin-top:s1">Innovation</h3>
            <kpp-textarea 
              class="margin-top:0" 
              label="In what ways does your project contribute to the existing PeaceTech ecosystem and research efforts in a compelling way?" 
              max="200"
              inputName="innovation"
              inputId="innovation"
              :errorMessage="errors.innovation"
            />
            
            <h3 class="margin-top:s1">Scalability</h3>
            <kpp-textarea 
              class="margin-top:0" 
              label="With the award funds, how would you expand the scope and applicability of your project or research beyond its initial pilot?" 
              max="200"
              inputName="scalability"
              inputId="scalability"
              :errorMessage="errors.scalability"
            />
            
            <h3 class="margin-top:s1">Collaboration</h3>
            <kpp-textarea 
              class="margin-top:0" 
              label="How does your work leverage collaborations and partnerships to unlock new opportunities and maximize impact?" 
              max="200"
              inputName="collaboration"
              inputId="collaboration"
              :errorMessage="errors.collaboration"
            />

            <kpp-field type="url" inputName="link" inputId="link" label="Link to your project or research*" validate="required" placeholder="" :errorMessage="errors.link" />

            <div class="radio-group margin-top:s1">
              <label class="radio-label">If you are awarded the KluzPrize, would you be available to attend an awards ceremony in New York City on Friday, September 19th?*</label>
              <div class="radio-options">
                <label class="radio-option">
                  <input type="radio" name="attendance" value="yes" id="attendance-yes" required>
                  <span>Yes</span>
                </label>
                <label class="radio-option">
                  <input type="radio" name="attendance" value="no" id="attendance-no" required>
                  <span>No</span>
                </label>
              </div>
              <p v-if="errors.attendance" class="error-message">
                <span class="material-symbols-outlined">error</span>
                {{ errors.attendance }}
              </p>
            </div>

            <h3 visual="h1" class="margin-top:s1">Terms and Conditions</h3>
            <p>By submitting this form, you are agreeing to the <a href="https://docs.google.com/document/d/1r6WoQyFCJvFU9BslERkot4ERzq4HML0GqGCKIAY9GY0" target="_blank">Terms and Conditions</a>. Please check the box below to confirm that you have read and agree to the terms and conditions.</p>
            
            <p class="checkbox-wrapper">
              <label class="checkbox-label">
                <input type="checkbox" name="terms" id="terms" required>
                <span>I agree to the terms and conditions as they are outlined above.</span>
              </label>
              <span v-if="errors.terms" class="error-message">
                <span class="material-symbols-outlined">error</span>
                {{ errors.terms }}
              </span>
            </p>

            <kpp-button class="margin-top:s1" el="button" size="l" color="primary" visual="primary" @click.prevent="handleSubmit">Submit</kpp-button>
          </stack-l>
        </form>
      </center-l>
    </kpp-base-section>
  </div>
</template>

<script setup>
  import { useValidation } from "~/composables/useFormValidation";
  import { useSubmitForm } from "~/composables/useSubmitForm";
  const { validateForm, errors, hasErrors } = useValidation()

  useHead({
    title: "Kluz Prize for PeaceTech",
  })


  const {
      success,
      onSubmit,
  } = useSubmitForm();

  const appForm = ref()
  const handleSubmit = async () => {
    validateForm(appForm.value)
    
    // Check if attendance radio is selected
    const attendanceChecked = appForm.value.querySelector('input[name="attendance"]:checked')
    if (!attendanceChecked) {
      hasErrors.value = true
      errors.value.attendance = 'Please select an option'
    }
    
    // Check if terms checkbox is checked
    const termsCheckbox = appForm.value.querySelector('#terms')
    if (!termsCheckbox.checked) {
      hasErrors.value = true
      errors.value.terms = 'You must agree to the terms and conditions'
    }
    
    document.getElementById('appForm').scrollIntoView()
    if (!hasErrors.value) { 
      await onSubmit(appForm.value)
    }
  }
</script>

<style lang="scss" scoped>
.success-message {
  padding: var(--s-1) var(--s-2);
  display: flex; 
  align-items: center;
  gap: var(--s-1); /* Sets the space between the icon and the text in the error message */
  --space: var(--s-3); 
  color: var(--white-color); 
  background-color: var(--success-color);
  .material-symbols-outlined {
    color: var(--white-color);
  }
}

p a {
  text-decoration: underline;
}

/* Radio Button Styles */
.radio-group {
  display: flex;
  flex-direction: column;
  gap: var(--s-2);
}

.radio-label {
  font-weight: 600;
  margin-bottom: var(--s-2);
}

.radio-options {
  display: flex;
  gap: var(--s1);
}

.radio-option {
  display: flex;
  align-items: center;
  gap: var(--s-3);
  cursor: pointer;
  padding: var(--s-2);
  border: 1px solid var(--border-color, #e0e0e0);
  border-radius: 4px;
  transition: all 0.2s ease;
}

.radio-option:hover {
  background-color: var(--hover-bg, #f5f5f5);
  border-color: var(--primary-color, #007bff);
}

.radio-option input[type="radio"] {
  margin: 0;
  cursor: pointer;
}

.radio-option input[type="radio"]:checked + span {
  font-weight: 600;
  color: var(--primary-color, #007bff);
}

.radio-option input[type="radio"]:checked ~ .radio-option {
  border-color: var(--primary-color, #007bff);
  background-color: var(--selected-bg, #f0f7ff);
}

.error-message {
  color: var(--error-color, #d32f2f);
  font-size: 0.875rem;
  margin-top: var(--s-3);
  display: flex;
  align-items: center;
  gap: var(--s-3);
}

.error-message .material-symbols-outlined {
  font-size: 1.2rem;
}

/* Checkbox Styles */
.checkbox-wrapper {
  display: flex;
  flex-direction: column;
  gap: var(--s-2);
}

.checkbox-label {
  display: flex;
  align-items: flex-start;
  gap: var(--s-2);
  cursor: pointer;
}

.checkbox-label input[type="checkbox"] {
  margin-top: 0.25rem;
  cursor: pointer;
}

.checkbox-label span {
  flex: 1;
}
</style>
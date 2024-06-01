<template>
<div>
  <kpp-hero height="auto" color="primary">
    <slot>
      <center-l size="wide">
        <h2 class="text-align:center">Application for 2024</h2>
      </center-l>
    </slot>
  </kpp-hero> 
    <kpp-base-section>
      <center-l>
        <form id="appForm" ref="appForm">
          <stack-l>
            <p class="success-message" v-if="success"><span class="material-symbols-outlined">check</span>Application submitted successfully</p>
            
            <kpp-field type="email" inputName="email" inputId="email" label="Email*" validate="required email" placeholder="" :errorMessage="errors.email" />
            <kpp-field type="text" inputName="applicant" inputId="applicant" label="Name of Applicant*" validate="required" placeholder="" :errorMessage="errors.applicant" />
            <kpp-field type="text" inputName="affiliation" inputId="affiliation" label="Affiliation*" validate="required" placeholder="" :errorMessage="errors.affiliation" />
            <kpp-field type="text" inputName="location" inputId="location" label="Where is the project based?*" validate="required" placeholder="" :errorMessage="errors.location" />
            <kpp-field type="url" inputName="link" inputId="link" label="Link to your project or research*" validate="required" placeholder="" :errorMessage="errors.link" />
            <kpp-textarea 
              label="Please provide a brief summary of your project or research.*" 
              validate="required maxWords:300"
              wordcount="Max. 300 words"
              maxlength="2000"
              inputName="summary"
              inputId="summary"
              :errorMessage="errors.summary"
            />
            
            <h3 class="margin-top:s1">Impact</h3>
            <kpp-textarea 
              class="margin-top:0" 
              label="What is the potential of your work for widespread impact? How do you meaningfully improve the lives of people?" 
              wordcount="Max. 200 words" 
              maxlength="1300" 
              validate="maxWords:200"
              inputName="impact"
              inputId="impact"
              :errorMessage="errors.impact"
            />

            <h3 class="margin-top:s1">Relevance</h3>
            <kpp-textarea
              class="margin-top:0" 
              label="How does your project support peacebuilding and/or conflict resolution efforts in the context of a humanitarian crisis or developmental context?" 
              wordcount="Max. 200 words" 
              validate="maxWords:200"
              maxlength="1300"
              inputName="relevance"
              inputId="relevance"
              :errorMessage="errors.relevance"
            />
            
            <h3 class="margin-top:s1">Innovation</h3>
            <kpp-textarea 
              class="margin-top:0" 
              label="In what ways does your project contribute to the existing PeaceTech ecosystem and research efforts in a compelling way?" 
              wordcount="Max. 200 words" 
              validate="maxWords:200"
              maxlength="1300"
              inputName="innovation"
              inputId="innovation"
              :errorMessage="errors.innovation"
            />
            
            <h3 class="margin-top:s1">Scalability</h3>
            <kpp-textarea 
              class="margin-top:0" 
              label="With the award funds, how would you expand the scope and applicability of your project or research beyond its initial pilot?" 
              wordcount="Max. 200 words" 
              validate="maxWords:200"
              maxlength="1300"
              inputName="scalability"
              inputId="scalability"
              :errorMessage="errors.scalability"
            />
            
            <h3 class="margin-top:s1">Collaboration</h3>
            <kpp-textarea 
              class="margin-top:0" 
              label="How does your work leverage collaborations and partnerships to unlock new opportunities and maximize impact?" 
              wordcount="Max. 200 words" 
              validate="maxWords:200"
              maxlength="1300"
              inputName="collaboration"
              inputId="collaboration"
              :errorMessage="errors.collaboration"
            />

            <h3 visual="h1" class="margin-top:s1">Terms and Conditions</h3>
            <p>By submitting this form, you are agreeing to the <a href="https://docs.google.com/document/d/1BzQvuLokS3dRBt9c4mz3f8qQnQlNoVdBkjtOFSLPlO4/edit?usp=sharing">Terms and Conditions</a>. Please check the box below to confirm that you have read and agree to the terms and conditions.</p>

            <kpp-button class="margin-top:s1" el="button" size="l" color="primary" visual="primary" @click.prevent="handleSubmit" >Submit</kpp-button>
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
  color: var(--success-color); 
  background-color: hsla(var(--success-hsl), .05);
  .material-symbols-outlined {
    color: var(--success-color); 
  }
}
</style>

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
      <center-l>
        <form id="appForm" ref="appForm">
          <stack-l>
            <p class="success-message" v-if="success"><span class="material-symbols-outlined">check</span>Application submitted successfully</p>
            
            <kpp-field type="email" inputName="email" inputId="email" label="Email*" validate="required email" placeholder="" :errorMessage="errors.email" />
            <kpp-field type="text" inputName="applicant" inputId="applicant" label="Name of Applicant*" validate="required" placeholder="" :errorMessage="errors.applicant" />
            <kpp-field type="text" inputName="affiliation" inputId="affiliation" label="Affiliation*" validate="required" placeholder="" :errorMessage="errors.affiliation" />
            <kpp-field type="text" inputName="location" inputId="location" label="Where is the project or research based?*" validate="required" placeholder="" :errorMessage="errors.location" />
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

            <legend>If you are awarded the KluzPrize, would you be available to attend an awards ceremony in New York City on Friday, September 19th?</legend>
            <div>
              <input type="radio" id="attendance" value="yes" checked />
              <label for "yes">Yes</label>
            </div>
            <div>
              <input type="radio" id="attendance value="no" />
              <label for "no">No</label>
            </div>

            <p class="margin-bottom:s2"><strong class="color:primary">Do you have any pictures or videos that support making your technology come to life? Please email them to us at <a href="mailto:info@kluzprize.org" target="_blank" class="color:primary">info@kluzprize.org</a> with your name as the subject line.</strong></p>

            <h3 visual="h1" class="margin-top:s1">Terms and Conditions</h3>
            <p>By submitting this form, you are agreeing to the <a href="https://docs.google.com/document/d/1zla85Quk9FQqpZkUwpV2fSFwvFYHr-wkgydt-z3a4qk" target="_blank">Terms and Conditions</a>. The GovLab and its partners are committed to respecting your privacy. We abide by all the practices and principles outlined by New York University in its Digital Privacy Statement. For more information, please <a href="https://www.nyu.edu/footer/copyright-and-fair-use/digital-privacy-statement.html" target="_blank">review the full statement here</a>.</p>
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
</style>

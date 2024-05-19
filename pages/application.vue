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
        <form action="">
          <stack-l>
            
            <base-field type="email" name="email" id="email" label="Email" placeholder="" />
            <base-field type="text" name="applicant" id="email" label="Name of Applicant" placeholder="" />
            <base-field type="text" name="affiliation" id="email" label="Affiliation" placeholder="" />
            <base-field type="text" name="location" id="email" label="Where is the project based?" placeholder="" />
            <base-field type="url" name="link" id="email" label="Link to your project or research" placeholder="" />
            <kpp-textarea 
              label="Please provide a brief summary of your project or research." 
              wordcount="Max. 300 words"
              maxlength="2000" />
            
            <h3 class="margin-top:s1">Impact</h3>
            <kpp-textarea class="margin-top:0" label="What is the potential of your work for widespread impact? How do you meaningfully improve the lives of people?" wordcount="Max. 200 words" maxlength="1300" />

            <h3 class="margin-top:s1">Relevance</h3>
            <kpp-textarea
              id="relevance-field"
              class="margin-top:0" 
              label="How does your project support peacebuilding and/or conflict resolution efforts in the context of a humanitarian crisis or developmental context?" 
              wordcount="Max. 200 words" 
              maxlength="1300" 
            />
            
            <h3 class="margin-top:s1">Innovation</h3>
            <kpp-textarea 
              class="margin-top:0" 
              label="In what ways does your project contribute to the existing PeaceTech ecosystem and research efforts in a compelling way?" 
              wordcount="Max. 200 words" 
              maxlength="1300" 
            />
            
            <h3 class="margin-top:s1">Scalability</h3>
            <kpp-textarea 
              class="margin-top:0" 
              label="With the award funds, how would you expand the scope and applicability of your project or research beyond its initial pilot?" 
              wordcount="Max. 200 words" 
              maxlength="1300" 
            />
            
            <h3 class="margin-top:s1">Collaboration</h3>
            <kpp-textarea 
              class="margin-top:0" 
              label="How does your work leverage collaborations and partnerships to unlock new opportunities and maximize impact?" 
              wordcount="Max. 200 words" 
              maxlength="1300" 
            />

            <h3 class="margin-top:s1">Terms and Conditions</h3>
            
            <p>By submitting this form, you are agreeing to the <a href="https://docs.google.com/document/d/1BzQvuLokS3dRBt9c4mz3f8qQnQlNoVdBkjtOFSLPlO4/edit?usp=sharing">Terms and Conditions</a>. Please check the box below to confirm that you have read and agree to the terms and conditions.</p>

            <kpp-button class="margin-top:s2" el="submit" size="l" color="primary" visual="primary" >Submit</kpp-button>
          </stack-l>
        </form>
      </center-l>
    </kpp-base-section>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>

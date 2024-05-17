<template>
  <stack-l>
    <h2 class="text-align:center">Winners 202X</h2>
    <div class="winners-grid">
      <stack-l class="intro">
        <h3>Winners and Mentions</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem adipisci molestiae esse iusto repellat consequatur quis ea quod eos, consequuntur perspiciatis laborum tempore quia ipsam omnis, sapiente animi quam nostrum.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem adipisci molestiae esse iusto repellat consequatur quis ea quod eos, consequuntur perspiciatis laborum tempore quia ipsam omnis, sapiente animi quam nostrum.</p>
      </stack-l>
      <div class="winner winner--1">
        <img src="https://via.placeholder.com/150" alt="Winner 1">
      </div>
      <div class="winner winner--2">
        <img src="https://via.placeholder.com/150" alt="Winner 2">
      </div>
      <div class="winner winner--3">
        <img src="https://via.placeholder.com/150" alt="Winner 3">
      </div>
      <div class="winner winner--4">
        <img src="https://via.placeholder.com/150" alt="Winner 4">
      </div>
    </div>
  </stack-l>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.winners-grid {
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto auto;
  grid-template-areas: 
      "intro intro "
      "winner1 winner2"  
      "winner3 winner4";  
  gap: var(--s0);

  @media screen and (min-width: 768px){
    grid-template-columns: auto minmax(1fr, 320px) minmax(1fr, 320px);
    grid-template-rows: 1fr 1fr;
    grid-template-areas: 
      "intro winner1 winner2"
      "intro winner3 winner4";  
  }
}

.intro {
  grid-area: intro;
  max-width: 60ch
}



.winner {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: hsla(var(--base-hsl), .1);
}

.winner--1 { grid-area: winner1; }
.winner--2 { grid-area: winner2; }
.winner--3 { grid-area: winner3; }
.winner--4 { grid-area: winner4; }

</style>

<template>
  <kpp-base-section class="kpp-footer | padding-top:s2 padding-bottom:s2" height="auto">
    <center-l size="wide">
    <div class="kpp-footer__content">
      <div class="about | stack">
        <NuxtLink to="/"><kluz-logo color="white" max-width="100px"/></NuxtLink>
        <p>The Kluz Prize for PeaceTech is an initiative to celebrate, distinguish, and promote the use of new technologies in fostering peace, reducing conflict, and protecting human dignity and universal human rights across the globe.</p>
        <ul class="kpp-footer__social-media">
          <li><social-link icon="linkedin" color="white" size="28px" url="https://www.linkedin.com/company/kluz-prize/about/" /></li>
          <li><social-link icon="x" color="white" size="28px" url="https://x.com/KluzPrize" /></li>
        </ul>
      </div>
      <nav class="menu menu-1 | stack">
        <h4>Quick Links</h4>
        <ul class="stack">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/events/2024">Event</NuxtLink></li>
          <li><NuxtLink to="/prizes/">Prizes</NuxtLink></li>
          <li><NuxtLink to="/updates/">Updates</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
        </ul>
      </nav>
      <nav class="menu menu-2 | stack">
        <h4>Applications</h4>
        <ul class="stack">
          <li><NuxtLink to="/events/2024">2024 (Open)</NuxtLink></li>
          <li><NuxtLink to="/events/2023">2023 (See Winners)</NuxtLink></li>
          <li><NuxtLink to="/events/2022">2022 (See Winners)</NuxtLink></li>
          <li><NuxtLink to="/faq">FAQ</NuxtLink></li>
          <li><NuxtLink to="/roadmap">Roadmap</NuxtLink></li>
        </ul>
      </nav>
      <nav class="menu menu-3 | stack">
        <h4>Contact</h4>
        <ul class="stack">
          <li><a href="mailto:info@kluzprize.org">info@kluzprize.org</a></li>
        </ul>
      </nav>
    </div>

    <p class="copyright | margin-top:s2">
      <em>The GovLab and its partners are committed to respecting your privacy. We abide by all the practices and principles outlined by New York University in its Digital Privacy Statement. For more information, please <a href="https://www.nyu.edu/footer/privacy-policy.html">review the full statement here</a>. </em>&copy; 2024 Kluz Prize for PeaceTech. All rights reserved
    </p> 
  </center-l>

  </kpp-base-section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.kpp-footer__content {
  // Structure
  display: flex;
  justify-content: flex-start;
  flex-direction: column;

  @media (min-width: 768px) { 
    flex-direction: row; 
    gap: var(--s2);
    justify-content: space-between;
  }
}



@media (max-width: 768px) {
  .menu { margin-top: var(--s1); }
}

.about, .menu > * { --space: var(--s0); } // Space between header and list
.menu .stack * { --space: var(--s-2);  }  // Space between items in the list


@media (min-width: 768px) {
  .about { max-width: 60ch; }
  .menu-1, .menu-2, .menu-3 { max-width: 26ch; }

  .menu-1 { 
    flex: 1;
    margin-left: auto;
  }
  .menu-2 { flex: 1; }
  .menu-3 { flex: 1; }

  .about, .menu > * { --space: var(--s1); } // Space between header and list
  .menu .stack * { --space: var(--s0);  }  // Space between items in the list
}


// Skin
.kpp-footer {
  background-color: var(--primary-color);
  * { color: var(--white-color); }

  h4 { font-weight: 400; }
  li { font-weight: 100; }

  a:hover {
    text-decoration: underline;
  }
}

.kpp-footer__social-media {
  display: flex;
  gap: var(--s0);
}

// ul { list-style: none; }
// ul, li { 
//   margin: 0; 
//   padding: 0;
// }

.menu a { text-decoration: none; }

.copyright {
  border-top: 1px solid hsla(var(--white-hsl), .2);
  padding-top: var(--s1);
  font-size: 85%;
  * { color: hsla(var(--white-hsl), .6); }

  a { 
    color: inherit; 
    text-decoration: underline;

    &:hover { color: var(--white-color);}
  }
}

</style>

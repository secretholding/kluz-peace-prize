<template>
  <base-section id="footer" color="primary-05">
      <center-l size="wide">
        <div class="twin-panel">
          <stack-l class="footer-menu">
            <img src="/assets/images/kluz-prize-for-peacetech-dark.svg" alt="">
            <ul>
              <li><NuxtLink to="/">Home</NuxtLink></li>
              <li><NuxtLink to="/prize">Prize Winners</NuxtLink></li>
              <li><NuxtLink to="/jury-and-panelists">Jury and Panelists</NuxtLink></li>
              <li><NuxtLink to="/updates">Updates</NuxtLink></li>
            </ul>
          </stack-l>
          <stack-l>
            <p><strong>Applications are closed</strong></p>
            <p>For more information, please get in touch with <a href="mailto:info@kluzprize.org">info@kluzprize.org</a></p>
            <p>The GovLab and its partners are committed to respecting your privacy. We abide by all the practices and principles outlined by New York University in its Digital Privacy Statement. For more information, please <a href="https://www.nyu.edu/footer/copyright-and-fair-use/digital-privacy-statement.html" target="_blank">review the full statement here</a>.</p>
          </stack-l>
        </div>
      </center-l>    
  </base-section>
  <footer class="background-color:primary padding:s0">
    <p class="text-align:center color:white"><strong>© 2023 by Kluz Ventures</strong></p>
  </footer>
</template>

<script setup>

</script>

<style lang="scss" scoped>
#footer {
  .twin-panel {
    @media screen and (max-width: 768px) {
      flex-direction: column-reverse;
    }
  }

  a { text-decoration: underline; }

  img { max-width: 210px; }

  .footer-menu {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .footer-menu ul {
    padding: 0;
    margin-top: var(--s1);
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 768px) { flex-direction: row; }
    align-items: center;
    justify-content: center;
  }

  .footer-menu li {
    @media screen and (max-width: 768px) { display: inline-block; }
    text-align: center;
    list-style: none;
    
    margin-right: var(--s0);

    a { 
      color: var(--accent-color); 
      font-weight: 400;
      text-decoration: none;
    }
  }
}
</style>

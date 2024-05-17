<template>
  <article class="prose" >
    <slot></slot>
  </article>
</template>

<script>
</script>

<style scoped lang="scss">
/* Fallback vertical rhythm */
.prose { 
  --space: var(--s-1); 
  --prose-vertical-space: var(--s-1);
  --prose-caption-font-style: italic;
  --prose-figure-vertical-space: var(--s2);
  --prose-gap: var(--base-gap);
  --max-width: 720px;
  --font-size: 1.1rem;
}

.prose :deep(* + *) {
  margin-top: var(--prose-vertical-space);
}

.prose :deep(*) {
  max-width: var(--max-width);
  margin-left: auto;
  font-size: var(--font-size);
}

.prose :deep(a) {
  color: var(--accent-color);
  text-decoration: none;
}

.prose:deep(a:hover) {
  text-decoration: underline;
}

.prose :deep(figure) { margin-block: var(--prose-figure-vertical-space); }
.prose :deep(figure),
.prose :deep(figure *) {
  width: 100%;
  max-width: 100%;
}

.prose :deep(h1),
.prose :deep(h2),
.prose :deep(h3),
.prose :deep(h4),
.prose :deep(h5),
.prose :deep(h6) { 
  color: var(--heading-color);
}

@media (max-width: 768px) {
  .prose :deep(h2) { font-size: 1.35rem; }
  .prose :deep(h3) { font-size: 1.15rem; }
  .prose :deep(h4) { font-size: 1rem; }
  .prose :deep(h5) { font-size: 1rem; }
}

@media (min-width: 768px) {
  .prose :deep(h2) { font-size: 2.45rem !important; }
  .prose :deep(h3) { font-size: 2rem !important; }
  .prose :deep(h4) { font-size: 1.4rem !important; }
  .prose :deep(h5) { font-size: 1.1rem !important; }
}

/* Styles for .brow */
.prose :deep(.brow) {
  text-transform: uppercase;
  font-weight: bold;
  color: var(--accent-color);
}

.prose :deep(blockquote) {
  font-size: 1.4em;
  border-left: 4px solid var(--accent-color);
  padding-left: var(--s1);
  font-style: italic;
}

.prose :deep(cite) {
  font-style: italic;
  font-size: 1rem;
}

.prose :deep(figcaption) {
  color: hsla(var(--base-hsl), 0.5);
}
.prose :deep(img) {
  max-width: 100%;
  width: 100%;
  height: auto;
  margin-top: var(--prose-figure-vertical-space);
}

// /* Font Size for Headings */
.prose :deep(h1 ~ .brow) { font-size: 1.5em; }
.prose :deep(h2 ~ .brow) { font-size: 1.15em; }
.prose :deep(h3 ~ .brow) { font-size: 1em; }
.prose :deep(h4 ~ .brow) { font-size: .8em; }
.prose :deep(h5 ~ .brow) { font-size: .6em; }


/* Spacing for headings */
.prose :deep(h2) { margin-top: var(--prose-figure-vertical-space); }
.prose :deep(h3) { margin-top: var(--prose-figure-vertical-space); }
.prose :deep(h4) { margin-top: var(--prose-figure-vertical-space); }
.prose :deep(h5) { margin-top: var(--prose-figure-vertical-space); }

/* Spacing for headings with brow */
.prose :deep(.brow + h2),
.prose :deep(.brow + h3),
.prose :deep(.brow + h4),
.prose :deep(.brow + h5) { margin-top: 0; }


.prose :deep(.brow),  /* Spacing for .brow */   
.prose :deep(figure), /* Spacing for figure */
.prose :deep(blockquote), /* Spacing for blockquote */
.prose :deep(blockquote + *),  /* Spacing for blockquote */
.prose :deep(hr), /* Spacing for other horizontal ruler */
.prose :deep(hr + *) { margin-top: var(--prose-figure-vertical-space); }


/* Colors */
.prose :deep(h2),
.prose :deep(h2 strong) { 
  color: var(--primary-color); 
  font-weight: 400 !important;
}
.prose :deep(h3) { --heading-color: var(--primary-color); }
.prose :deep(h4) { --heading-color: var(--primary-color); }
.prose :deep(h5) { --heading-color: var(--primary-color); }

.prose :deep(h2) { font-size: 1.8rem; }
.prose :deep(h3) { 
  font-size: 1.3rem; 
  text-align: left;
}

</style>

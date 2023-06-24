<script>
  import Link from '$lib/components/Link.svelte'
</script>

<section id="hero" style:margin-bottom="2rem">
  <h1 class="title">Cooper is a <span class="colored">full-stack</span> developer</h1>
  <p class="description">Crafting unique and innovative website experiences for all</p>
  <Link href="https://www.google.com">Contact Me</Link>
</section>

<style lang="scss">
  .title {
    font-weight: 600;
    font-size: 2rem;
  }
  .description {
    color: var(--color-gray);
  }
  .colored {
    color: var(--color-primary);
  }
</style>

<script>
  import headshot from '$lib/images/headshot.jpg?width=1500&webp'
  import Link from '$lib/components/Link.svelte'
</script>

<section>
  <div class="text">
    <h1 class="title">Cooper is a <span class="colored">full-stack web</span> developer</h1>
    <p class="description">Crafting unique and innovative website experiences for all</p>
    <Link href="https://www.google.com">Contact Me</Link>
  </div>
  <img class="headshot" src={headshot} alt="headshot" />
</section>

<style lang="scss">
  section {
    margin-bottom: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .text {
      width: 45ch;
    }
    .headshot {
      width: 20rem;
      border-radius: 1rem;
    }
  }
  .title {
    font-weight: 600;
    font-size: 2rem;
    .colored {
      color: var(--color-primary);
    }
  }
  .description {
    margin-top: 2rem;
    color: var(--color-gray);
    margin-bottom: 1.5rem;
  }
</style>

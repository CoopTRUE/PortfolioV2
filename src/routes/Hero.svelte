<script>
  import headshot from '$lib/images/headshot-nobg.png?w=1500&format=webp'
  import Link from '$lib/components/Link.svelte'
</script>

<section>
  <div class="text">
    <h1 class="title">Cooper is a <span class="colored">full-stack web</span> developer</h1>
    <p class="description">Crafting unique and innovative website experiences for all</p>
    <Link href="https://www.google.com">Contact Me</Link>
  </div>
  <img class="headshot" src={headshot} alt="Headshot of Cooper Oliff" />
</section>

<style lang="scss">
  section {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    margin-bottom: 3.75rem;
    .text {
      width: 45ch;
    }
    .headshot {
      width: clamp(10rem, 40vw, 25rem);
      height: clamp(10rem, 40vw, 25rem);
      // make image centered
      object-fit: contain;
    }
    @media (max-width: 768px) {
      flex-direction: column;
      .text {
        width: 100%;
        text-align: center;
      }
      .headshot {
        width: clamp(10rem, 80vw, 25rem);
        height: clamp(10rem, 80vw, 25rem);
      }
    }
  }
  .title {
    font-weight: 600;
    font-size: 2rem;
    color: white;
    .colored {
      color: var(--color-primary);
    }
  }
  .description {
    margin-top: 2rem;
    margin-bottom: 1.5rem;
  }
</style>

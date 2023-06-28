<script lang="ts">
  import Link from '$lib/components/Link.svelte'
  import projects from '$lib/data/projects'
</script>

<section>
  <h2>projects</h2>
  <div class="projects">
    {#each projects as { title, description, toolsUsed, link, src }}
      <div class="project" aria-labelledby="title">
        <img {src} alt={title} loading="lazy" />
        <p class="tools-used">{toolsUsed.join(', ')}</p>
        <div class="content">
          <h3 class="title" id="title">{title}</h3>
          <p class="description">{description}</p>
          <Link href={link}>Live</Link>
        </div>
      </div>
    {/each}
  </div>
</section>

<style lang="scss">
  .projects {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
  .project {
    display: grid;
    grid-template-rows: 12.25rem 1fr auto;
    grid-template-columns: 20.5rem;
    border: solid 1px var(--color-gray);
    display: grid;
    overflow: hidden;
    img {
      // image should be contained with the top left corner visible
      object-fit: cover;
      object-position: top left;
      width: 100%;
      height: 12.25rem;
      border-bottom: solid 1px var(--color-gray);
    }
    .tools-used {
      padding: 0.5rem;
      border-bottom: solid 1px var(--color-gray);
      display: flex;
      align-items: center;
    }
    .content {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      .title {
        font-size: 1.5rem;
        font-weight: 500;
        color: white;
      }
      .description {
      }
    }
  }
</style>

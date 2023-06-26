<script lang="ts">
  import Link from '$lib/components/Link.svelte'
  import alphag3n from '$lib/images/projects/alphag3n.png?width=1500&webp'
  import grapeCasino from '$lib/images/projects/grape-casino.png?width=1500&webp'
  import maven from '$lib/images/projects/maven.png?width=1500&webp'
  import mvCasino from '$lib/images/projects/mv-casino.png?width=1500&webp'

  interface Project {
    title: string
    description: string
    toolsUsed: string[]
    link: string
    src: string
  }
  const projects: Project[] = [
    {
      title: 'AlphaG3n',
      description: 'A website for a music producer',
      toolsUsed: ['Svelte', 'SvelteKit', 'TypeScript', 'Tailwind CSS'],
      link: 'https://alphag3n.com',
      src: alphag3n,
    },
    {
      title: 'Grape Casino',
      description: 'A website for a casino',
      toolsUsed: ['Svelte', 'SvelteKit', 'TypeScript'],
      link: 'https://grape-casino.com',
      src: grapeCasino,
    },
    {
      title: 'Maven',
      description: 'A website for a music produceasdfasdjfhjkasdfkjasr',
      toolsUsed: ['Svelte', 'SvelteKit', 'TypeScript'],
      link: 'https://mavenmusic.net',
      src: maven,
    },
    {
      title: 'MV Casino',
      description: 'A website for a casino',
      toolsUsed: ['Svelte', 'SvelteKit', 'TypeScript'],
      link: 'https://mv-casino.com',
      src: mvCasino,
    },
  ]
</script>

<section>
  <h2>projects</h2>
  <div class="projects">
    {#each projects as { title, description, toolsUsed, link, src }}
      <div class="project" aria-label={title}>
        <img {src} alt={title} loading="lazy" />
        <p class="tools-used">{toolsUsed.join(', ')}</p>
        <div class="content">
          <h3 class="title">{title}</h3>
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
      display: grid;
      place-items: center;
      padding: 0.5rem;
      color: var(--color-gray);
      border-bottom: solid 1px var(--color-gray);
    }
    .content {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      .title {
        font-size: 1.5rem;
        font-weight: 500;
      }
      .description {
        color: var(--color-gray);
      }
    }
  }
</style>

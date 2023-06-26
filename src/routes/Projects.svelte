<script lang="ts">
  import Link from '$lib/components/Link.svelte'

  interface Project {
    title: string
    description: string
    used: string[]
    link: string
  }
  const projects: Project[] = [
    {
      title: 'AlphaG3n',
      description: 'A website for a music producer',
      used: ['Svelte', 'SvelteKit', 'TypeScript'],
      link: 'https://alphag3n.com',
    },
    {
      title: 'Grape Casino',
      description: 'A website for a casino',
      used: ['Svelte', 'SvelteKit', 'TypeScript'],
      link: 'https://grape-casino.com',
    },
    {
      title: 'Maven',
      description: 'A website for a music producer',
      used: ['Svelte', 'SvelteKit', 'TypeScript'],
      link: 'https://mavenmusic.net',
    },
    {
      title: 'MV Casino',
      description: 'A website for a casino',
      used: ['Svelte', 'SvelteKit', 'TypeScript'],
      link: 'https://mv-casino.com',
    },
  ]
  const images = import.meta.glob<{ default: string }>('/src/lib/images/projects/*', {
    query: {
      width: 1500,
      webp: true,
    },
  })
</script>

<section>
  <h2>projects</h2>
  <div class="projects">
    {#each projects as { title, description, used, link }}
      {@const src = `/src/lib/images/projects/${title.toLowerCase().replace(' ', '-')}.png`}
      {@const image = images[src]()}
      <div class="project" aria-label={title}>
        {#await image then { default: src }}
          <img {src} alt={title} />
        {/await}
        <p>{used.join(', ')}</p>
        <div class="description">
          <p class="used">{used}</p>
          <h3>{title}</h3>
          <p>{description}</p>
          <Link href={link}>Live</Link>
        </div>
      </div>
    {/each}
  </div>
</section>

<style lang="scss">
  .projects {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
    gap: 1rem;
  }
  .project {
    border: solid 1px var(--color-gray);
    display: grid;
    grid-template-rows: 12.5rem auto;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
</style>

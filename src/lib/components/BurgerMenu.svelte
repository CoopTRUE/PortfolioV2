<script lang="ts">
  import { page } from '$app/stores'
  import { Hamburger } from 'svelte-hamburgers'
  import { fly, slide } from 'svelte/transition'

  let burgerMenuOpen: boolean
  const links = {
    '/': 'home',
    '/works': 'works',
    '/about-me': 'about-me',
    '/contacts': 'contacts',
  }
  $: ({ pathname } = $page.url)
  $: void document.documentElement.style.setProperty(
    '--overflow-y',
    burgerMenuOpen ? 'hidden' : 'visible'
  ) || console.log(`burgerMenuOpen: ${burgerMenuOpen}`)
</script>

<svelte:window
  on:keydown={(d) => {
    if (d.key === 'Escape') burgerMenuOpen = false
  }}
/>
<Hamburger
  bind:open={burgerMenuOpen}
  --color="white"
  --hover-opacity="1"
  --layer-height="2px"
  --layer-spacing="5px"
  --padding="none"
/>
{#if burgerMenuOpen}
  <nav transition:slide={{ duration: 500 }}>
    <ul class="links">
      {#each Object.entries(links) as [link, name], i}
        {@const active = pathname === link}
        <li class="link" class:active in:fly|global={{ y: -15, duration: 500, delay: i * 100 }}>
          <a href={link}>{name}</a>
        </li>
      {/each}
    </ul>
  </nav>
{/if}

<style lang="scss">
  nav {
    position: absolute;
    top: 5.9375rem;
    left: 0;
    width: 100%;
    padding: 2rem;
    height: 100vh;
    background-color: var(--color-bg);
    z-index: 1;
  }
  .links {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  .link {
    font-size: 2rem;
    font-weight: 500;
    &.active {
      a {
        color: white;
      }
    }
    a {
      color: var(--color-gray);
      text-decoration: none;
      transition: color 0.2s ease-in-out;
      &:hover {
        color: white;
      }
    }
    &::before {
      content: '#';
      color: var(--color-primary);
    }
  }
</style>

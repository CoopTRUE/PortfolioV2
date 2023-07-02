<script lang="ts">
  import { page } from '$app/stores'
  import Logo from './Logo.svelte'

  let innerWidth: number

  const links = {
    '/': 'home',
    '/works': 'works',
    '/about-me': 'about-me',
    '/contacts': 'contacts',
  }
  $: ({ pathname } = $page.url)
</script>

<svelte:window bind:innerWidth />
<header>
  <nav>
    <Logo />
    {#if innerWidth > 768}
      <ul class="links">
        {#each Object.entries(links) as [link, name]}
          {@const active = pathname === link}
          <li class="link" class:active>
            <a href={link}>{name}</a>
          </li>
        {/each}
      </ul>
    {:else}
      <!-- burger -->
      <svg />
    {/if}
  </nav>
</header>

<style lang="scss">
  nav {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
    margin-bottom: 7.5rem;
  }
  .links {
    display: flex;
    gap: 2rem;
  }
  .link {
    &.active {
      a {
        color: white;
      }
    }
    a {
      color: var(--color-gray);
      font-weight: 500;
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

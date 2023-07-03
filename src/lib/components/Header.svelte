<script lang="ts">
  import { page } from '$app/stores'
  import BurgerHeader from './BurgerMenu.svelte'
  import Logo from './Logo.svelte'
  import { fly } from 'svelte/transition'

  let innerWidth: number
  $: mobile = innerWidth <= 768

  const links = {
    '/': 'home',
    '/works': 'works',
    '/about-me': 'about-me',
    '/contacts': 'contacts',
  }
  const entries = Object.entries(links)
  $: ({ pathname } = $page.url)
</script>

<svelte:window bind:innerWidth />

<header>
  <Logo />
  <div class="side">
    {#if mobile}
      <div in:fly={{ y: 15 }} class="burger-wrapper">
        <BurgerHeader />
      </div>
    {:else}
      <nav>
        <ul class="links">
          {#each entries as [link, name], i}
            {@const active = pathname === link}
            <li class="link" class:active in:fly|global={{ y: -15, duration: 500, delay: i * 100 }}>
              <a href={link}>{name}</a>
            </li>
          {/each}
        </ul>
      </nav>
    {/if}
  </div>
</header>

<style lang="scss">
  header {
    display: flex;
    justify-content: space-between;
    padding-top: 2rem;
    margin-bottom: 7.5rem;
    position: relative;
  }
  .links {
    display: flex;
    gap: 2rem;
  }
  .link {
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

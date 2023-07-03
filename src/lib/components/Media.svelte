<script lang="ts">
  import media from '$lib/data/media'

  function getSite(url: string) {
    let { hostname } = new URL(url)
    let hostArray = hostname.split('.')
    let indexOfCom = hostArray.indexOf('com')
    return hostArray[indexOfCom - 1]
  }
</script>

<aside>
  <div class="line" />
  <ul class="links">
    {#each media as link}
      {@const site = getSite(link)}
      <li class="link">
        <a href={link}>
          <img src="https://cdn.simpleicons.org/{site}/abb2bf" alt={site} />
        </a>
      </li>
    {/each}
  </ul>
</aside>

<style lang="scss">
  aside {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.375rem;
    gap: 0.875rem;
    @media (max-width: 1200px) {
      display: none;
    }
  }
  .links {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.875rem;
  }
  .line {
    width: 0.0625rem;
    height: clamp(8rem, 10vw, 12rem);
    background-color: var(--color-gray);
  }
  img {
    width: 1.5rem;
  }
</style>

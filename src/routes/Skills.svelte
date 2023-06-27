<script lang="ts">
  import skills from '$lib/data/skills'
  import dots from '$lib/svgs/skills-dots.svg'

  const entries = Object.entries(skills)
</script>

<section>
  <h2>skills</h2>
  <div class="content">
    <img src={dots} alt="" class="skills" />
    <ul class="skills">
      {#each entries as [category, skills]}
        <li class="skil-category">
          <h3 class="category">{category}</h3>
          <ul>
            {#each skills as { name, icon, svgPorn }}
              <li>
                {#if svgPorn}
                  <img src="https://cdn.svgporn.com/logos/{icon}.svg" alt={name} loading="lazy" />
                {:else}
                  <img src="https://cdn.simpleicons.org/{icon}" alt={name} loading="lazy" />
                {/if}
                <span>{name}</span>
              </li>
            {/each}
          </ul>
        </li>
      {/each}
    </ul>
  </div>
</section>

<style lang="scss">
  section {
    width: 100%;
  }
  .content {
    display: flex;
    justify-content: space-around;
    gap: 1rem;

    ul {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
      gap: 1rem;
      li {
        display: grid;
        grid-template-columns: 2rem 1fr;
        gap: 0.5rem;
        align-items: center;
        img {
          width: 2rem;
          height: 2rem;
          object-fit: contain;
          object-position: center;
        }
      }
    }
  }
</style>

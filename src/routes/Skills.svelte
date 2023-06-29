<script lang="ts">
  import skills from '$lib/data/skills'
  import dots from '$lib/svgs/skills-dots.svg'

  const entries = Object.entries(skills)
</script>

<section>
  <h2>skills</h2>
  <div class="content">
    <img src={dots} alt="" class="dots" />
    <ul class="skill-categories">
      {#each entries as [category, skills]}
        <li class="category">
          <h3 class="name">{category}</h3>
          <ul class="skills">
            {#each skills as { name, icon, svgPorn }}
              <li class="skill">
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
    color: #abb2bf;
  }
  .content {
    display: grid;
    grid-template-columns: auto 1fr;
  }
  .skill-categories {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    flex-direction: row-reverse;
    .category {
      display: flex;
      flex-direction: column;
      border: 1px solid var(--color-gray);
      width: 15rem;
      .name {
        padding: 0.5rem;
        font-weight: 600;
        color: white;
        border-bottom: 1px solid var(--color-gray);
      }
      .skills {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        padding: 0.5rem;
      }
    }
  }
  .skill {
    img {
      object-fit: contain;
      width: 2rem;
      height: 2rem;
    }
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
</style>

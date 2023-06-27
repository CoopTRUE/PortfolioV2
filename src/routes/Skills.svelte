<script lang="ts">
  import skills from '$lib/data/skills'

  const entries = Object.entries(skills)
</script>

<section>
  <h2>skills</h2>
  <div class="content">
    <div class="dots" />
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

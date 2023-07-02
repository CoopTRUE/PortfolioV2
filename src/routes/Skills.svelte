<script lang="ts">
  import skills from '$lib/data/skills'
  import dots from '$lib/svgs/skills-dots.svg'
  import { onMount } from 'svelte'
  import { inview } from 'svelte-inview'
  import { fly } from 'svelte/transition'

  const entries = Object.entries(skills)
  // arr with length equal to the number of categories
  const visible = Array(entries.length).fill(false)

  let loaded = false

  onMount(() => {
    loaded = true
  })
</script>

<section>
  <h2>skills</h2>
  <div class="content">
    <img src={dots} alt="" class="dots" />
    <ul class="skill-categories">
      {#each entries as [category, skills], categoryIndex}
        <li
          class="category"
          use:inview={{ unobserveOnEnter: true, threshold: 0.8 }}
          on:inview_enter={() => (visible[categoryIndex] = true)}
        >
          <h3 class="name">{category}</h3>
          <ul class="skills">
            {#each skills as { name, icon, svgPorn }, skillIndex}
              {#if !loaded || visible[categoryIndex]}
                <li class="skill" in:fly={{ x: 20, duration: 300, delay: 100 * skillIndex }}>
                  {#if svgPorn}
                    <img src="https://cdn.svgporn.com/logos/{icon}.svg" alt={name} loading="lazy" />
                  {:else}
                    <img src="https://cdn.simpleicons.org/{icon}" alt={name} loading="lazy" />
                  {/if}
                  <span>{name}</span>
                </li>
              {/if}
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
    gap: 3rem;
    @media (max-width: 700px) {
      grid-template-columns: 1fr;
      gap: 1rem;
    }
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

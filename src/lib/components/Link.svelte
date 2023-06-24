<script lang="ts">
  export let href: string
  export let video = false
</script>

<a {href}>
  <slot />
  <span>{video ? '|>' : '<~>'}</span>
</a>

<style lang="scss">
  a {
    text-decoration: none;
    color: white;
    display: inline-block;
    font-weight: 500;
    padding: 0.5rem 1rem;
    border: 1px solid var(--color-primary);
    transition: background 0.2s ease-in-out;
    &:hover,
    &:focus {
      background: var(--color-primary);
    }
  }
</style>

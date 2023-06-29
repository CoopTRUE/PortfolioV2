<script lang="ts">
  import logo from '$lib/svgs/logo-full.svg'
</script>

<div class="logo">
  <img src={logo} alt="logo" />
  <p>Cooper</p>
</div>

<style lang="scss">
  .logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 600;
    color: white;
  }
  img {
    height: 1rem;
  }
</style>

<script>
  import AboutMe from './AboutMe.svelte'
  import Hero from './Hero.svelte'
  import Projects from './Projects.svelte'
  import Quote from './Quote.svelte'
  import Skills from './Skills.svelte'
  // import Link from '$lib/components/Link.svelte'
</script>

<svelte:head>
  <title>Home | Cooper</title>
  <meta name="description" content="" />
</svelte:head>

<main>
  <Hero />
  <Quote />
  <Projects />
  <Skills />
  <AboutMe />
</main>

<style lang="scss">
</style>

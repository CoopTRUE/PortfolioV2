<script>
  import AboutMe from './AboutMe.svelte'
  import Contact from './Contact.svelte'
  import Hero from './Hero.svelte'
  import Projects from './Projects.svelte'
  import Quote from './Quote.svelte'
  import Skills from './Skills.svelte'
  // import Link from '$lib/components/Link.svelte'
</script>

<svelte:head>
  <title>Home | Cooper</title>
  <meta
    name="description"
    content="Cooper Oliff is a full-stack web developer based in the Bay Area, California. With over six years of experience, he specializes in creating efficient, responsive, and user-friendly web applications. Explore his portfolio to see his projects, skills, and more."
  />
</svelte:head>

<main>
  <Hero />
  <Quote />
  <Projects />
  <Skills />
  <AboutMe />
  <Contact />
</main>

<style lang="scss">
</style>

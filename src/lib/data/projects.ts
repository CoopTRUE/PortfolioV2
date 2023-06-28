import alphag3n from '$lib/images/projects/alphag3n.png?w=1500&format=webp'
import grapeCasino from '$lib/images/projects/grape-casino.png?w=1500&format=webp'
import maven from '$lib/images/projects/maven.png?w=1500&format=webp'
import mvCasino from '$lib/images/projects/mv-casino.png?w=1500&format=webp'

interface Project {
  title: string
  description: string
  toolsUsed: string[]
  link: string
  src: string
}

const projects: Project[] = [
  {
    title: 'AlphaG3n',
    description: 'A website for a music producer',
    toolsUsed: ['Svelte', 'SvelteKit', 'TypeScript', 'Tailwind CSS'],
    link: 'https://alphag3n.com',
    src: alphag3n,
  },
  {
    title: 'Grape Casino',
    description: 'A website for a casino',
    toolsUsed: ['Svelte', 'SvelteKit', 'TypeScript'],
    link: 'https://grape-casino.com',
    src: grapeCasino,
  },
  {
    title: 'Maven',
    description: 'A website for a music produceasdfasdjfhjkasdfkjasr',
    toolsUsed: ['Svelte', 'SvelteKit', 'TypeScript'],
    link: 'https://mavenmusic.net',
    src: maven,
  },
  {
    title: 'MV Casino',
    description: 'A website for a casino',
    toolsUsed: ['Svelte', 'SvelteKit', 'TypeScript'],
    link: 'https://mv-casino.com',
    src: mvCasino,
  },
]

export default projects

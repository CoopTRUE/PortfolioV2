import alphag3n from '$lib/images/projects/alphag3n.png?w=1500&format=webp'
import grapeCasino from '$lib/images/projects/grape-casino.png?w=1500&format=webp'

// import maven from '$lib/images/projects/maven.png?w=1500&format=webp'
// import mvCasino from '$lib/images/projects/mv-casino.png?w=1500&format=webp'

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
    description: 'A project where highschoolers can learn about crypto and the blockchain',
    toolsUsed: ['Svelte', 'SvelteKit', 'TypeScript', 'Prisma', 'MySql'],
    link: 'https://alphag3n.com',
    src: alphag3n,
  },
  {
    title: 'Grape Casino',
    description: "Grape Finance's centralized casino running on the fantom blockchain",
    toolsUsed: ['Svelte', 'SvelteKit', 'TypeScript'],
    link: 'https://casino.grapefinance.app/',
    src: grapeCasino,
  },
  // {
  //   title: 'MV Casino',
  //   description: 'A website for a casino',
  //   toolsUsed: ['Svelte', 'SvelteKit', 'TypeScript'],
  //   link: 'https://mv-casino.com',
  //   src: mvCasino,
  // },
]

export default projects

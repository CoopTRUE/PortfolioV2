interface Skill {
  name: string
  icon: string // icon name from https://simpleicons.org/
  svgPorn?: boolean // if true, use svgPorn instead of simpleicons
}
type Skills = Record<string, Skill[]>

const skills: Skills = {
  Languages: [
    {
      name: 'JavaScript',
      icon: 'javascript',
    },
    {
      name: 'TypeScript',
      icon: 'typescript',
    },
    {
      name: 'HTML',
      icon: 'html5',
    },
    {
      name: 'CSS',
      icon: 'css3',
    },
    {
      name: 'Python',
      icon: 'python',
    },
    {
      name: 'Java',
      icon: 'java',
      svgPorn: true,
    },
    {
      name: 'Lua',
      icon: 'lua',
    },
  ],
  Frameworks: [
    {
      name: 'React',
      icon: 'react',
    },
    {
      name: 'Svelte',
      icon: 'svelte',
    },
    {
      name: 'SvelteKit',
      icon: 'svelte',
    },
    {
      name: 'Express.js',
      icon: 'express',
    },
    {
      name: 'Flask',
      icon: 'flask',
    },
    {
      name: 'PyTorch',
      icon: 'pytorch',
    },
  ],
  Databases: [
    {
      name: 'MongoDB',
      icon: 'mongodb',
    },
    {
      name: 'PostgreSQL',
      icon: 'postgresql',
    },
    {
      name: 'MySQL',
      icon: 'mysql',
    },
    {
      name: 'Redis',
      icon: 'redis',
    },
  ],
  Tools: [
    {
      name: 'Git',
      icon: 'git',
    },
    {
      name: 'VS Code',
      icon: 'visualstudiocode',
    },
    {
      name: 'Linux',
      icon: 'linux',
    },
    {
      name: 'Figma',
      icon: 'figma',
    },
  ],
  Other: [
    {
      name: 'Ethers.js',
      icon: 'ethers',
      svgPorn: true,
    },
    {
      name: 'Web3.js',
      icon: 'web3dotjs',
    },
    {
      name: 'Socket.io',
      icon: 'socket.io',
    },
    {
      name: 'Zod',
      icon: 'zod',
      svgPorn: true,
    },
    {
      name: 'Sass',
      icon: 'sass',
    },
    {
      name: 'Cryptography',
      icon: 'letsencrypt',
    },
    {
      name: 'Webhooks',
      icon: 'webhooks',
      svgPorn: true,
    },
  ],
}

export default skills

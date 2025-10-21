// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'LUk3VIT', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/gitprofile/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 6, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
      ],
    },
  },
  seo: { title: 'Portfolio Do Lucas Dias', description: '', imageURL: '' },
  social: {
    linkedin: 'lucas-dias-b109a7230',
    dev: 'LUCAS DIAS',
    phone: '+55 11 98370-7155',
    email: 'lucas_dias001@outlookcom',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1wa4JZFUI7833YbmG2YhLZHgCwytY9Mei/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PHP',
    'COMPOSER',
    'JAVASCRIPT',
    'TYPESCRIPT',
    'NODE',
    'C#',
    '.NET',
    'MySQL',
    'NoSQL',
    'HTML',
    'CSS',
    'BOOTSTRAP',
    'Git',
    'Docker',
  ],
  experiences: [
    {
      company: 'Magnus Transformadores',
      position: 'Aux Eletricista I',
      from: 'Setembro 2023',
      companyLink: 'https://magnustrafo.com/',
    },
  ],
  certifications: [
  ],
  educations: [
    {
      institution: 'Faculdade Anchieta',
      degree: 'Ciência da Computação',
      from: '2024',
      to: '2026',
    },
    {
      institution: 'ETEC',
      degree: 'Técnico em Informática para Internet',
      from: '2020',
      to: '2022',
    },
  ],
  publications: [
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
  },
  googleAnalytics: {
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'forest',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: true,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'emerald',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a>`,

  enablePWA: true,
};

export default CONFIG;

export type SocialLink = {
  label: string
  href: string
  type: 'primary' | 'secondary'
}

export type TimelineItem = {
  year: string
  title: string
  organization: string
  description: string
}

export type WorkBlock = {
  type: 'paragraph' | 'quote' | 'metric' | 'image'
  value: string
  label?: string
}

export type WorkItem = {
  slug: string
  title: string
  subtitle: string
  year: string
  tags: string[]
  summary: string
  coverImage: string
  links: Array<{ label: string; href: string }>
  content: WorkBlock[]
}

export type StatementItem = {
  title: string
  content: string
}

export type MetricItem = {
  value: string
  label: string
  detail: string
}

export type InterestItem = {
  year: string
  title: string
  description: string
  posterImage: string
  videoHref: string
}

export type SiteContent = {
  profile: {
    name: string
    title: string
    statement: string
    summary: string
    location: string
    email: string
    photoPath?: string
    photoAlt?: string
  }
  socialLinks: SocialLink[]
  about: string[]
  timeline: TimelineItem[]
  works: WorkItem[]
  statement: StatementItem[]
  themes: string[]
  metrics: MetricItem[]
  interests: InterestItem[]
}

const workImageA =
  'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=academic%20research%20visualization%20of%20financial%20markets%2C%20minimal%20editorial%20layout%2C%20clean%20charts%2C%20soft%20neutral%20lighting%2C%20scholarly%20website%20hero%20image&image_size=landscape_16_9'

const workImageB =
  'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=clean%20academic%20workspace%20for%20agent%20research%2C%20papers%2C%20laptop%2C%20whiteboard%20notes%2C%20minimal%20scholarly%20composition%2C%20natural%20light&image_size=landscape_16_9'

const workImageC =
  'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=minimal%20research%20diagram%20for%20world%20models%20and%20decision%20making%2C%20financial%20state%20transitions%2C%20simple%20academic%20visual%20language%2C%20clean%20background&image_size=landscape_16_9'

const interestImageA =
  'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=minimal%20editorial%20film%20still%20for%20video%20making%2C%20clean%20framing%2C%20subtle%20motion%20composition%2C%20academic%20portfolio%20style&image_size=landscape_16_9'

const interestImageB =
  'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=minimal%20photography%20contact%20sheet%20style%2C%20clean%20gallery%20layout%2C%20soft%20light%2C%20editorial%20portfolio%20aesthetic&image_size=landscape_16_9'

const interestImageC =
  'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=minimal%20music%20studio%20editorial%20visual%2C%20vinyl%20records%20and%20headphones%2C%20clean%20composition%2C%20muted%20scholarly%20website%20style&image_size=landscape_16_9'

export const siteContent: SiteContent = {
  profile: {
    name: 'Yanda Su',
    title: 'Independent Researcher',
    statement:
      'I build AI/ML-oriented software prototypes for simulation, reasoning, and decision support, with a focus on turning complex ideas into usable systems.',
    summary:
      'With graduate training in finance and ongoing work on world models, agents, and computational pipelines, I am interested in software engineering roles that combine machine learning, system integration, and rigorous problem solving.',
    location: 'Xiamen / Remote',
    email: 'yandasu.su@gmail.com',
    photoPath: '/profile-photo.jpg',
    photoAlt: 'Portrait of Yanda Su',
  },
  socialLinks: [
    { label: 'Email', href: 'mailto:yandasu.su@gmail.com', type: 'primary' },
    { label: 'CV', href: '/cv.pdf', type: 'secondary' },
    { label: 'GitHub', href: 'https://github.com/ZhiningSu', type: 'secondary' },
  ],
  about: [
    'My work sits between applied machine learning, software prototyping, and complex system modeling. I am especially interested in how AI systems can function not only as models, but as reliable components inside larger software workflows.',
    'I enjoy turning ambiguous problems into structured systems: designing pipelines, building internal tools, iterating on evaluation logic, and connecting model behavior with practical decision processes. This is what draws me to simulation, workflow improvement, and end-to-end system design.',
    'I bring a strong sense of analytical discipline, curiosity, and execution to technical work. My current projects combine Python-based development, model experimentation, and system-level thinking in ways that aim to improve both efficiency and quality.',
  ],
  timeline: [
    {
      year: 'Present',
      title: 'Independent Researcher',
      organization: 'World Models and Agents',
      description:
        'Conducting independent research on world models, agent-based reasoning, and simulation-driven decision making for financial environments.',
    },
    {
      year: 'Graduate Study',
      title: 'Master of Finance',
      organization: 'Xiamen University',
      description:
        'Completed graduate training in finance with a strong interest in connecting quantitative modeling, market structure, and intelligent decision systems.',
    },
    {
      year: 'Undergraduate',
      title: 'B.A. in Finance',
      organization: 'Southwestern University of Finance and Economics',
      description:
        'Built my early academic foundation in finance and developed a long-term interest in financial systems, modeling, and decision making.',
    },
    {
      year: 'Focus',
      title: 'Research Themes',
      organization: 'Mechanistic Financial Modeling',
      description:
        'Focusing on world models, agents, simulation-based reasoning, and mechanism-aware modeling for better understanding financial systems.',
    },
  ],
  works: [
    {
      slug: 'financial-world-model',
      title: 'Financial World Model',
      subtitle: 'A world-modeling framework for reasoning about latent market dynamics',
      year: 'Current',
      tags: ['World Models', 'Finance', 'Simulation'],
      summary:
        'This project explores how to learn a compact internal model of the financial world that can simulate plausible future trajectories instead of producing only one-step forecasts.',
      coverImage: workImageA,
      links: [
        { label: 'View details', href: '/work/financial-world-model' },
      ],
      content: [
        {
          type: 'paragraph',
          value:
            'The central idea is to model finance as a partially observed dynamical system. Instead of optimizing only for predictive accuracy, the goal is to learn a model that better reflects how the financial world evolves under changing states, interactions, and constraints.',
        },
        {
          type: 'quote',
          value:
            'A useful financial model should not only predict what may happen next, but also represent why different futures become plausible.',
          label: 'Research premise',
        },
        {
          type: 'metric',
          value: 'State -> Simulation -> Evaluation',
          label: 'Core pipeline',
        },
        {
          type: 'image',
          value: workImageA,
          label: 'Concept illustration',
        },
      ],
    },
    {
      slug: 'strategy-search',
      title: 'Strategy Search in Simulated Markets',
      subtitle: 'Evaluating candidate actions by rolling out future paths inside a learned world model',
      year: 'Current',
      tags: ['Agents', 'Planning', 'Decision Making'],
      summary:
        'Inspired by the planning logic behind Dreamer-style systems, this line of work studies how an agent can imagine multiple possible financial trajectories and search for higher-scoring strategies.',
      coverImage: workImageB,
      links: [
        { label: 'View details', href: '/work/strategy-search' },
      ],
      content: [
        {
          type: 'paragraph',
          value:
            'The emphasis here is not to output a single prediction, but to evaluate candidate strategies by simulating different futures, comparing outcomes, and selecting decisions that remain strong across realistic scenarios.',
        },
        {
          type: 'metric',
          value: 'Top-scoring path search',
          label: 'Decision objective',
        },
        {
          type: 'quote',
          value:
            'The point of planning is not to guess one future perfectly, but to search over many possible futures and act on the best robust strategy.',
          label: 'Planning view',
        },
        {
          type: 'image',
          value: workImageB,
          label: 'Agent planning illustration',
        },
      ],
    },
    {
      slug: 'mechanistic-finance',
      title: 'Mechanism-Aware Financial Intelligence',
      subtitle: 'Toward models that explain and approximate how the financial world operates',
      year: 'Current',
      tags: ['Mechanisms', 'Financial Systems', 'Interpretability'],
      summary:
        'This project investigates how to move beyond surface-level prediction and toward models that better recover the operating logic of financial systems for interpretation, understanding, and analysis.',
      coverImage: workImageC,
      links: [
        { label: 'View details', href: '/work/mechanistic-finance' },
      ],
      content: [
        {
          type: 'paragraph',
          value:
            'A core belief behind this work is that accurate prediction alone is insufficient. A stronger research agenda is to model the mechanisms of the financial world more faithfully so that the resulting system can support explanation, reasoning, and deeper understanding.',
        },
        {
          type: 'metric',
          value: 'Prediction + Understanding',
          label: 'Research goal',
        },
        {
          type: 'quote',
          value:
            'The long-term value of financial intelligence lies not only in forecasting outcomes, but in recovering the structure of the world that produces them.',
          label: 'Core view',
        },
        {
          type: 'image',
          value: workImageC,
          label: 'Mechanism modeling illustration',
        },
      ],
    },
  ],
  statement: [
    {
      title: 'Creative Builder',
      content:
        'I am a highly creative person who enjoys transforming abstract ideas into concrete systems, workflows, and products. I am most energized when I can combine technical depth with original thinking to solve difficult problems in a clean and effective way.',
    },
    {
      title: 'High Energy, High Standards',
      content:
        'I bring sustained energy to my work and care deeply about execution quality. I tend to hold myself to a high standard, iterate quickly, and keep refining details until a solution is not only functional, but genuinely strong.',
    },
    {
      title: 'Long-Term Vision',
      content:
        'I believe technology can fundamentally reshape how people live and work. I want to build products that create real change in human life, and I am committed to continuously learning, pursuing ambitious goals, and turning vision into reality through disciplined execution.',
    },
  ],
  themes: ['Applied Machine Learning', 'Software Systems', 'Simulation', 'Agents', 'Workflow Design', 'Problem Solving'],
  metrics: [
    { value: 'M.Fin.', label: 'Graduate training', detail: 'Xiamen University' },
    { value: 'AI/ML', label: 'Current focus', detail: 'Models, systems, and workflows' },
    { value: 'End-to-end', label: 'Working style', detail: 'Research, prototyping, and iteration' },
  ],
  interests: [
    {
      year: 'Interest',
      title: 'Video Making',
      description:
        'I enjoy turning abstract ideas into short visual narratives through scripting, editing, and motion.',
      posterImage: interestImageA,
      videoHref: '/videos/video-making.mp4',
    },
    {
      year: 'Interest',
      title: 'Photography',
      description:
        'Photography helps me observe composition, light, and atmosphere with more patience and precision.',
      posterImage: interestImageB,
      videoHref: '/videos/photography.mp4',
    },
    {
      year: 'Interest',
      title: 'Music',
      description:
        'Music is an important part of my daily life and a constant source of rhythm, focus, and inspiration.',
      posterImage: interestImageC,
      videoHref: '/videos/music.mp4',
    },
  ],
}

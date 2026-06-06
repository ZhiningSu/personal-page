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

export type NewsItem = {
  date: string
  content: string
}

export type MetricItem = {
  value: string
  label: string
  detail: string
}

export type SiteContent = {
  profile: {
    name: string
    title: string
    statement: string
    summary: string
    location: string
    email: string
    availability: string
  }
  socialLinks: SocialLink[]
  about: string[]
  timeline: TimelineItem[]
  works: WorkItem[]
  news: NewsItem[]
  themes: string[]
  metrics: MetricItem[]
}

const workImageA =
  'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=academic%20research%20visualization%20of%20financial%20markets%2C%20minimal%20editorial%20layout%2C%20clean%20charts%2C%20soft%20neutral%20lighting%2C%20scholarly%20website%20hero%20image&image_size=landscape_16_9'

const workImageB =
  'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=clean%20academic%20workspace%20for%20agent%20research%2C%20papers%2C%20laptop%2C%20whiteboard%20notes%2C%20minimal%20scholarly%20composition%2C%20natural%20light&image_size=landscape_16_9'

const workImageC =
  'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=minimal%20research%20diagram%20for%20world%20models%20and%20decision%20making%2C%20financial%20state%20transitions%2C%20simple%20academic%20visual%20language%2C%20clean%20background&image_size=landscape_16_9'

export const siteContent: SiteContent = {
  profile: {
    name: 'Yanda Su',
    title: 'Independent Researcher',
    statement:
      'I am an independent researcher working on world models, agents, and computational approaches to understanding complex financial systems.',
    summary:
      'I received my M.Fin. degree from Xiamen University and currently focus on building realistic, mechanism-aware models for reasoning, simulation, and decision making in finance.',
    location: 'Xiamen / Remote',
    email: 'yandasu.su@gmail.com',
    availability: 'Open to research collaboration and academic discussion',
  },
  socialLinks: [
    { label: 'Email', href: 'mailto:yandasu.su@gmail.com', type: 'primary' },
  ],
  about: [
    'My research interest lies at the intersection of world models, agentic systems, and financial intelligence. I am especially interested in how models can learn not only to predict outcomes, but also to approximate the underlying mechanisms that generate financial dynamics.',
    'Rather than treating finance as a pure forecasting problem, I view it as a structured decision environment with latent states, evolving constraints, and interacting agents. This motivates a modeling paradigm that is closer to simulation, reasoning, and strategy evaluation than to point prediction alone.',
    'My current work explores how a model can build an internal representation of the financial world, roll forward plausible trajectories, compare candidate decisions, and identify higher-quality strategies under realistic assumptions.',
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
  news: [
    { date: '2026', content: 'Building a personal research page focused on world models, agents, and finance.' },
    { date: '2026', content: 'Organizing current projects around simulation, planning, and mechanism-aware modeling.' },
    { date: '2026', content: 'Preparing a clearer research narrative that connects financial modeling with agent-based reasoning.' },
  ],
  themes: ['World Models', 'Agents', 'Financial Systems', 'Simulation', 'Planning', 'Mechanism-Aware Modeling'],
  metrics: [
    { value: 'M.Fin.', label: 'Education', detail: 'Xiamen University' },
    { value: '3', label: 'Current themes', detail: 'World models, agents, and finance' },
    { value: 'Open', label: 'Status', detail: 'Research collaboration and discussion' },
  ],
}

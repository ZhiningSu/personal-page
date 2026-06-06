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
  'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=editorial%20photograph%20of%20a%20futuristic%20robotics%20research%20studio%2C%20warm%20paper%20tones%2C%20architectural%20composition%2C%20soft%20cinematic%20light%2C%20magazine%20cover%20quality&image_size=landscape_16_9'

const workImageB =
  'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=refined%20editorial%20workspace%20with%20printed%20essays%2C%20laptop%2C%20notebooks%2C%20quiet%20museum-like%20lighting%2C%20high-end%20design%20photography&image_size=landscape_16_9'

const workImageC =
  'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=minimal%20technology%20installation%20with%20glass%20panels%2C%20soft%20metal%20accents%2C%20luxury%20editorial%20lighting%2C%20clean%20spatial%20composition&image_size=landscape_16_9'

export const siteContent: SiteContent = {
  profile: {
    name: 'YOUR NAME',
    title: '研究者 / 设计工程师 / 创作者',
    statement: '我把复杂技术翻译成可阅读、可感知、可被记住的作品。',
    summary:
      '一个适合长期更新的现代个人主页模板，介于学术主页、作品集与个人出版物之间。',
    location: 'Shanghai / Remote',
    email: 'hello@yourname.com',
    availability: '开放合作、顾问咨询、演讲邀约',
  },
  socialLinks: [
    { label: '简历', href: '#contact', type: 'primary' },
    { label: '邮箱', href: 'mailto:hello@yourname.com', type: 'primary' },
    { label: 'GitHub', href: 'https://github.com/', type: 'secondary' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/', type: 'secondary' },
    { label: 'X', href: 'https://x.com/', type: 'secondary' },
  ],
  about: [
    '这是一种更克制的个人表达方式：不靠夸张动效取胜，而靠内容结构、排版节奏与细节质感建立信任。首页既像研究者主页，也像一本可以滚动阅读的个人杂志。',
    '你可以把它用作求职主页、学术主页、创业者介绍页，或长期维护的线上名片。所有文本、经历、项目与链接都集中在一个内容文件中，后续替换十分直接。',
    '视觉上采用纸张质感、衬线标题、细线边框与低饱和金属强调色，既接近你给出的参考网站，又比它更现代、更有品牌感。',
  ],
  timeline: [
    {
      year: '2026',
      title: 'Lead Creative Technologist',
      organization: 'Independent Studio',
      description: '围绕生成式 AI、交互叙事与个人品牌体验，构建高完成度数字作品。',
    },
    {
      year: '2024',
      title: 'Design Engineer',
      organization: 'Applied AI Team',
      description: '负责前端系统、实验型交互原型与内容驱动型产品体验的设计开发。',
    },
    {
      year: '2022',
      title: 'Research Fellow',
      organization: 'Human-Computer Futures Lab',
      description: '关注技术传播、阅读体验与界面系统如何共同塑造理解方式。',
    },
    {
      year: '2019',
      title: 'B.Eng. / Self-Directed Maker',
      organization: 'Open Projects & Writing',
      description: '从编码、写作到视觉设计，逐步形成跨学科的个人表达方法。',
    },
  ],
  works: [
    {
      slug: 'embodied-atlas',
      title: 'Embodied Atlas',
      subtitle: '一个面向机器人与具身智能叙事的展示型项目页系统',
      year: '2026',
      tags: ['Research', 'Robotics', 'Editorial UI'],
      summary:
        '把复杂研究内容组织成清晰、可信、适合公开传播的视觉叙事页面，让专业成果更容易被非专业观众理解。',
      coverImage: workImageA,
      links: [
        { label: '查看详情', href: '/work/embodied-atlas' },
        { label: '外部链接', href: 'https://example.com/' },
      ],
      content: [
        {
          type: 'paragraph',
          value:
            'Embodied Atlas 将研究项目、系统结构、实验结果与公开视频重新组织为一种更可读的网络出版物形式，重点不是堆叠信息，而是帮助读者快速理解核心问题与关键贡献。',
        },
        {
          type: 'quote',
          value: '好的研究传播，不只是准确，更要让外部世界愿意继续读下去。',
          label: '项目主张',
        },
        {
          type: 'metric',
          value: '12 个模块化内容区块',
          label: '信息组织密度',
        },
        {
          type: 'image',
          value: workImageA,
          label: '研究展示页视觉概念图',
        },
      ],
    },
    {
      slug: 'signal-garden',
      title: 'Signal Garden',
      subtitle: '一套用于长期写作与观点沉淀的个人内容花园',
      year: '2025',
      tags: ['Writing', 'Archive', 'Knowledge Design'],
      summary:
        '将零散文章、演讲记录和研究札记沉淀为一个可持续更新、可被检索、也值得反复阅读的内容档案。',
      coverImage: workImageB,
      links: [
        { label: '查看详情', href: '/work/signal-garden' },
        { label: '阅读摘要', href: 'https://example.com/' },
      ],
      content: [
        {
          type: 'paragraph',
          value:
            'Signal Garden 的重点在于“内容节奏设计”：短讯息、长文章、摘录与主题索引都拥有不同的阅读界面，但又能保持统一的审美和路径。',
        },
        {
          type: 'metric',
          value: '3 层内容结构',
          label: '快讯 / 长文 / 索引',
        },
        {
          type: 'quote',
          value: '个人主页不一定只是名片，也可以是一个持续生长的思想场所。',
          label: '核心理念',
        },
        {
          type: 'image',
          value: workImageB,
          label: '内容档案系统视觉概念图',
        },
      ],
    },
    {
      slug: 'northstar-os',
      title: 'Northstar OS',
      subtitle: '为个人品牌和小团队构建的一致性设计系统',
      year: '2024',
      tags: ['Design System', 'Frontend', 'Brand Surface'],
      summary:
        '通过统一的色彩、排版、组件和语气规则，让网站、简历、演示稿和社交物料形成稳定的品牌感。',
      coverImage: workImageC,
      links: [
        { label: '查看详情', href: '/work/northstar-os' },
        { label: '系统说明', href: 'https://example.com/' },
      ],
      content: [
        {
          type: 'paragraph',
          value:
            'Northstar OS 是一个视觉与前端实现一体化的系统，目标不是生成一套“能用”的组件，而是生成一整套“能被识别”的数字表面。',
        },
        {
          type: 'metric',
          value: '24 个品牌语义变量',
          label: '主题扩展能力',
        },
        {
          type: 'quote',
          value: '稳定的美学语法，会让一个人或一个团队看起来更像自己。',
          label: '设计原则',
        },
        {
          type: 'image',
          value: workImageC,
          label: '设计系统视觉概念图',
        },
      ],
    },
  ],
  news: [
    { date: '05 / 2026', content: '发布个人主页新版视觉系统，加入作品详情页与内容配置化结构。' },
    { date: '03 / 2026', content: '开始整理长期写作与公开演讲记录，准备扩展文章归档模块。' },
    { date: '11 / 2025', content: '完成一次围绕“技术与叙事”的公开分享，并将演讲材料纳入站点。' },
    { date: '08 / 2025', content: '重构项目展示方式，从传统卡片列表升级为更具编辑感的叙事结构。' },
  ],
  themes: ['生成式 AI', '前端系统', '交互叙事', '研究传播', '长期写作', '设计工程'],
  metrics: [
    { value: '10+', label: '年持续创作', detail: '编码、写作、视觉并行发展' },
    { value: '03', label: '代表方向', detail: '研究、产品、内容系统' },
    { value: '24h', label: '响应速度', detail: '对合作沟通保持高效率反馈' },
  ],
}

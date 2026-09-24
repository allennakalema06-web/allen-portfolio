export type Article = {
  slug: string
  category: string
  title: string
  excerpt: string
  date: string
  readingTime: string
  status: 'published' | 'coming-soon'
}

export const articles: Article[] = [
  {
    slug: 'problem-before-technology',
    category: 'Engineering',
    title: 'Why the problem should come before the technology',
    excerpt:
      'Why understanding the real problem matters more than rushing to choose a framework, model or tool.',
    date: 'September 2026',
    readingTime: '5 min read',
    status: 'published',
  },
  {
    slug: 'learning-ai-without-losing-the-human',
    category: 'AI',
    title: 'Learning AI without forgetting the human on the other side',
    excerpt:
      'What I am learning about building intelligent systems while keeping people, context and usefulness at the centre.',
    date: 'Coming soon',
    readingTime: '—',
    status: 'coming-soon',
  },
  {
    slug: 'what-nyondo-taught-me',
    category: 'Building in Public',
    title: 'What building my first real system taught me that tutorials could not',
    excerpt:
      'Lessons from turning business rules, users and real workflows into working software.',
    date: 'Coming soon',
    readingTime: '—',
    status: 'coming-soon',
  },
]
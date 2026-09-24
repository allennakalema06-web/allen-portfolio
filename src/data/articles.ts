import type { ComponentType } from 'react'

import ProblemBeforeTechnologyContent from './article-content/problem-before-technology'
import WhatNyondoTaughtMeContent from './article-content/what-nyondo-taught-me'
import LearningAiWithoutLosingTheHumanContent from './article-content/learning-ai-without-losing-the-human'

export type Article = {
  slug: string
  category: string
  title: string
  excerpt: string
  date: string
  readingTime: string
  status: 'published' | 'coming-soon'
  content?: ComponentType
  relatedProject?: {
    label: string
    path: string
  }
  relatedArticle?: {
    label: string
    path: string
  }
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
    content: ProblemBeforeTechnologyContent,
    relatedProject: {
      label: 'Nyondo Stock System',
      path: '/work/nyondo-stock-system',
    },
    relatedArticle: {
      label: 'What Nyondo taught me',
      path: '/articles/what-nyondo-taught-me',
    },
  },
  {
    slug: 'what-nyondo-taught-me',
    category: 'Building in Public',
    title:
      'What building my first real system taught me that tutorials could not',
    excerpt:
      'Lessons from turning real business rules, users and workflows into working software.',
    date: 'September 2026',
    readingTime: '6 min read',
    status: 'published',
    content: WhatNyondoTaughtMeContent,
    relatedProject: {
      label: 'Nyondo Stock System',
      path: '/work/nyondo-stock-system',
    },
    relatedArticle: {
      label: 'Problem before technology',
      path: '/articles/problem-before-technology',
    },
  },
  {
  slug: 'learning-ai-without-losing-the-human',
  category: 'AI',
  title: 'Learning AI without forgetting the human on the other side',
  excerpt:
    'What I am learning about building intelligent systems while keeping people, context and usefulness at the centre.',
  date: 'September 2026',
  readingTime: '5 min read',
  status: 'published',
  content: LearningAiWithoutLosingTheHumanContent,
  relatedProject: {
    label: 'UgSL AI Practice Coach',
    path: '/work/ugsl-ai-practice-coach',
  },
  relatedArticle: {
    label: 'Why the problem should come before the technology',
    path: '/articles/problem-before-technology',
  },
},
]
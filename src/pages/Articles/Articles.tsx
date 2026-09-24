import { Link } from 'react-router-dom'

const articles = [
  {
    slug: 'problem-before-technology',
    category: 'Engineering',
    title: 'Why the problem should come before the technology',
    excerpt:
      'A reflection on why understanding the real problem matters more than rushing to choose a framework or tool.',
    status: 'Coming soon',
  },
  {
    slug: 'learning-ai-without-losing-the-human',
    category: 'AI',
    title: 'Learning AI without forgetting the human on the other side',
    excerpt:
      'What I am learning about building intelligent systems while keeping people, context and usefulness at the centre.',
    status: 'Coming soon',
  },
  {
    slug: 'what-nyondo-taught-me',
    category: 'Building in Public',
    title: 'What building my first real system taught me that tutorials could not',
    excerpt:
      'Lessons from turning business rules, users and real workflows into working software.',
    status: 'Coming soon',
  },
]

function Articles() {
  return (
    <main className="articles-page">
      <section className="articles-hero">
        <div className="container articles-hero__inner">
          <p className="eyebrow">Articles</p>

          <h1>
            Ideas from what I&apos;m building,
            <span> learning and questioning.</span>
          </h1>

          <p>
            This is where I go deeper than a LinkedIn post, sharing what I
            learn from engineering, AI, building products and becoming a better
            problem solver.
          </p>
        </div>
      </section>

      <section className="articles-list-section">
        <div className="container">
          <div className="articles-list">
            {articles.map((article, index) => (
              <article className="article-card" key={article.slug}>
                <div className="article-card__number">
                  0{index + 1}
                </div>

                <div className="article-card__content">
                  <p className="article-card__category">
                    {article.category}
                  </p>

                  <h2>{article.title}</h2>

                  <p className="article-card__excerpt">
                    {article.excerpt}
                  </p>

                  <div className="article-card__footer">
                    <span>{article.status}</span>

                    {article.status !== 'Coming soon' && (
                      <Link
                        className="text-link"
                        to={`/articles/${article.slug}`}
                      >
                        Read article →
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Articles
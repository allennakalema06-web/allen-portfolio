import { Link, useParams } from 'react-router-dom'
import { articles } from '../../data/articles'

function ArticleDetail() {
  const { slug } = useParams()

  const article = articles.find(
    (item) => item.slug === slug && item.status === 'published',
  )

  if (!article || !article.content) {
    return (
      <main className="article-page">
        <section className="not-found">
          <div className="container not-found__inner">
            <p className="eyebrow">Article not found</p>

            <h1>
              This article isn&apos;t
              <span> available yet.</span>
            </h1>

            <Link className="button button--primary" to="/articles">
              Back to articles →
            </Link>
          </div>
        </section>
      </main>
    )
  }

  const Content = article.content

  return (
    <main className="article-page">
      <article>
        <header className="article-hero">
          <div className="container article-hero__inner">
            <p className="eyebrow">
              {article.category} · {article.date}
            </p>

            <h1>{article.title}</h1>

            <p className="article-hero__lead">
              {article.excerpt}
            </p>

            <div className="article-hero__meta">
              <span>By Allen Nakalema</span>
              <span>{article.readingTime}</span>
            </div>
          </div>
        </header>

        <div className="container article-layout">
          <div className="article-body">
            <Content />
          </div>

          <aside className="article-sidebar">
            <div>
              <span>Filed under</span>
              <strong>{article.category}</strong>
            </div>

            {article.relatedProject && (
              <div>
                <span>Related project</span>

                <Link to={article.relatedProject.path}>
                  {article.relatedProject.label} →
                </Link>
              </div>
            )}

            {article.relatedArticle && (
              <div>
                <span>Related article</span>

                <Link to={article.relatedArticle.path}>
                  {article.relatedArticle.label} →
                </Link>
              </div>
            )}
          </aside>
        </div>

        <footer className="article-end">
          <div className="container article-end__inner">
            <p className="eyebrow">Thanks for reading</p>

            <h2>
              I write from what I&apos;m building,
              <span> learning and questioning.</span>
            </h2>

            <div className="article-end__actions">
              <Link className="button button--primary" to="/articles">
                More articles →
              </Link>

              <Link className="button button--secondary" to="/contact">
                Start a conversation →
              </Link>
            </div>
          </div>
        </footer>
      </article>
    </main>
  )
}

export default ArticleDetail
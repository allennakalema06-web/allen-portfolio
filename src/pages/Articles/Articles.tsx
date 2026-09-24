import { Link } from 'react-router-dom'
import { articles } from '../../data/articles'

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
            This is where I go deeper than a short post, sharing what I learn
            from engineering, AI, product building and the questions that stay
            with me while I work.
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
                  <div className="article-card__meta">
                    <span>{article.category}</span>
                    <span>{article.date}</span>
                  </div>

                  <h2>{article.title}</h2>

                  <p className="article-card__excerpt">
                    {article.excerpt}
                  </p>

                  <div className="article-card__footer">
                    <span>{article.readingTime}</span>

                    {article.status === 'published' ? (
                      <Link
                        className="text-link"
                        to={`/articles/${article.slug}`}
                      >
                        Read article →
                      </Link>
                    ) : (
                      <span>Coming soon</span>
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
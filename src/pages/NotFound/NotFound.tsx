import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <main className="not-found">
      <div className="container not-found__inner">
        <p className="eyebrow">404</p>

        <h1>
          This page wandered
          <span> somewhere else.</span>
        </h1>

        <p>
          The link may have changed, or the page may no longer exist.
        </p>

        <div className="not-found__actions">
          <Link className="button button--primary" to="/">
            Go home →
          </Link>

          <Link className="button button--secondary" to="/work">
            Explore my work
          </Link>
        </div>
      </div>
    </main>
  )
}

export default NotFound
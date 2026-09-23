import { Link } from 'react-router-dom'

const projects = [
  {
    id: 'nyondo',
    number: '01',
    title: 'Nyondo Stock System',
    category: 'Full-Stack Engineering · Business Operations',
    status: 'Deployed',
    role: 'Full-stack developer',
    description:
      'A business management system built around the real workflows of a hardware company — including inventory, supplier records, customer deposits, sales, pricing rules and reporting.',
    technologies: ['Python', 'Django', 'PostgreSQL', 'Render'],
    image: '/images/nyondo/dashboard.png',
    caseStudy: '/work/nyondo-stock-system',
    liveUrl: 'https://nyondo-stock-system-vfb9.onrender.com/',
  },
  {
    id: 'ugsl',
    number: '02',
    title: 'UgSL AI Practice Coach',
    category: 'AI Engineering · Accessible Learning',
    status: 'In development',
    role: 'AI Practice Coach developer',
    description:
      'An AI-powered practice component for a Ugandan Sign Language learning platform, designed to work alongside video lessons and support learner practice through an API-connected architecture.',
    technologies: ['Python', 'AI Applications', 'APIs', 'Team Development'],
    image: '/images/ugsl/practice-coach.jpeg',
    caseStudy: '/work/ugsl-ai-practice-coach',
  },
  {
    id: 'parkease',
    number: '03',
    title: 'ParkEase',
    category: 'Backend Engineering · Team Project',
    status: 'Team project',
    role: 'Django backend developer',
    description:
      'A collaborative parking application where I worked mainly on the Django backend and application structure alongside another developer.',
    technologies: ['Python', 'Django', 'Backend Development', 'Collaboration'],
    caseStudy: '/work/parkease',
  },
]

function Work() {
  return (
    <main className="work-page">
      <section className="work-hero">
        <div className="container work-hero__inner">
          <p className="eyebrow">Selected work</p>

          <h1>
            Things I&apos;ve built,
            <span> contributed to and learned from.</span>
          </h1>

          <p>
            Some of these projects began with a business problem, some with a
            learning challenge, and some through collaboration. Together, they
            show how I approach software beyond the code itself.
          </p>
        </div>
      </section>

      <section className="work-list-section">
        <div className="container">
          <div className="work-list">
            {projects.map((project) => (
              <article
                className={`work-project ${
                  project.id === 'parkease' ? 'work-project--text-only' : ''
                }`}
                key={project.id}
              >
                <div className="work-project__number">
                  {project.number}
                </div>

                <div className="work-project__content">
                  <div className="work-project__meta">
                    <span>{project.category}</span>
                    <span>{project.status}</span>
                  </div>

                  <h2>{project.title}</h2>

                  <p className="work-project__role">
                    My role · {project.role}
                  </p>

                  <p className="work-project__description">
                    {project.description}
                  </p>

                  <div className="work-project__tech">
                    {project.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>

                  <div className="work-project__actions">
                    <Link
                      className="text-link"
                      to={project.caseStudy}
                    >
                      View case study →
                    </Link>

                    {project.liveUrl && (
                      <a
                        className="text-link"
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Open live project ↗
                      </a>
                    )}
                  </div>
                </div>

                {project.image ? (
                  <div className="work-project__visual">
                    <img
                      src={project.image}
                      alt={`${project.title} interface`}
                    />
                  </div>
                ) : (
                  <div className="work-project__visual work-project__visual--type">
                    <span>PE.</span>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="open-source-work">
        <div className="container open-source-work__grid">
          <div>
            <p className="eyebrow">Open source</p>

            <h2>
              Building inside someone else&apos;s codebase taught me a
              different kind of discipline.
            </h2>
          </div>

          <div className="open-source-work__content">
            <p className="section-number">OPEN DATA ENSEMBLE</p>

            <p>
              I&apos;ve contributed to an existing open-source project by
              working with form schemas, UI configuration, field labels,
              validation and frontend build workflows.
            </p>

            <p>
              The work required reading the surrounding code first,
              understanding the project conventions, making targeted changes
              and verifying that validation and builds still passed.
            </p>

            <Link className="text-link" to="/open-source">
              Explore my open-source work →
            </Link>
          </div>
        </div>
      </section>

      <section className="work-process">
        <div className="container">
          <div className="work-process__heading">
            <p className="eyebrow">Across the projects</p>

            <h2>
              The technologies change.
              <span> The process stays deliberate.</span>
            </h2>
          </div>

          <div className="work-process__grid">
            <article>
              <span>01</span>
              <h3>Understand</h3>
              <p>
                Learn what is actually happening before deciding what to build.
              </p>
            </article>

            <article>
              <span>02</span>
              <h3>Design</h3>
              <p>
                Turn workflows, users and constraints into a system that makes
                sense.
              </p>
            </article>

            <article>
              <span>03</span>
              <h3>Build</h3>
              <p>
                Implement the smallest useful version and keep the structure
                maintainable.
              </p>
            </article>

            <article>
              <span>04</span>
              <h3>Verify</h3>
              <p>
                Test behaviour, debug failures and check the product against
                reality.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="work-cta">
        <div className="container work-cta__inner">
          <p className="eyebrow">Beyond the screenshots</p>

          <h2>
            I&apos;m interested in the decisions behind the product,
            <span> not just the final interface.</span>
          </h2>

          <p>
            If you&apos;re curious about how I approach engineering, start
            with the Nyondo case study — it carries the most complete example
            of my thinking so far.
          </p>

          <div className="work-cta__actions">
            <Link
              className="button button--primary"
              to="/work/nyondo-stock-system"
            >
              Read the Nyondo case study →
            </Link>

            <a
              className="button button--secondary"
              href="https://github.com/allennakalema06-web"
              target="_blank"
              rel="noreferrer"
            >
              View GitHub ↗
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Work
import { Link } from 'react-router-dom'

const contributions = [
  {
    number: '01',
    title: 'Django backend work',
    description:
      'I worked mainly on backend logic and application structure, helping connect user roles, routes and dashboard behaviour.',
  },
  {
    number: '02',
    title: 'Authentication flow',
    description:
      'I worked with login behaviour, role checks and redirects so different user types reached the correct parts of the system.',
  },
  {
    number: '03',
    title: 'Debugging',
    description:
      'I helped investigate issues where authentication failures and redirects made the login flow confusing or appeared to reset unexpectedly.',
  },
  {
    number: '04',
    title: 'Team collaboration',
    description:
      'The project was built collaboratively, so changes had to fit shared decisions rather than only my own implementation preferences.',
  },
]

function ParkEaseCaseStudy() {
  return (
    <main className="case-study parkease-case-study">
      <section className="case-study-hero">
        <div className="container case-study-hero__grid">
          <div className="case-study-hero__content">
            <p className="eyebrow">
              Case study · Backend engineering · Team project
            </p>

            <h1>
              ParkEase
              <span> parking system.</span>
            </h1>

            <p className="case-study-hero__lead">
              A collaborative Django application where I worked primarily on
              backend behaviour, authentication, role-based flows and debugging.
            </p>

            <div className="case-study-hero__actions">
              <Link className="button button--primary" to="/work">
                Back to work
              </Link>

              <Link className="button button--secondary" to="/contact">
                Start a conversation →
              </Link>
            </div>
          </div>

          <div className="parkease-case-study__mark">
            <span>PE.</span>
          </div>
        </div>
      </section>

      <section className="case-study-overview">
        <div className="container case-study-overview__grid">
          <div>
            <p className="eyebrow">Project overview</p>

            <h2>
              ParkEase gave me experience building inside a shared team
              project.
            </h2>
          </div>

          <div className="case-study-copy">
            <p>
              ParkEase was developed as a parking management application with
              different dashboard experiences for different user roles.
            </p>

            <p>
              My contribution focused mainly on the Django backend rather than
              the visual design of the project.
            </p>

            <p>
              That made it a useful experience in thinking about routes,
              sessions, permissions, redirects and how backend behaviour affects
              the user experience.
            </p>
          </div>
        </div>

        <div className="container case-study-facts">
          <div>
            <span>Role</span>
            <strong>Django backend developer</strong>
          </div>

          <div>
            <span>Type</span>
            <strong>Team project</strong>
          </div>

          <div>
            <span>Focus</span>
            <strong>Authentication · Roles · Backend</strong>
          </div>

          <div>
            <span>Stack</span>
            <strong>Python · Django</strong>
          </div>
        </div>
      </section>

      <section className="parkease-contributions">
        <div className="container">
          <div className="case-study-section-heading">
            <p className="eyebrow">My contribution</p>

            <h2>
              My work was concentrated
              <span> behind the interface.</span>
            </h2>
          </div>

          <div className="parkease-contributions__grid">
            {contributions.map((item) => (
              <article key={item.number}>
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="parkease-auth">
        <div className="container parkease-auth__grid">
          <div>
            <p className="eyebrow">A useful debugging lesson</p>

            <h2>
              A login problem is not always just a login problem.
            </h2>
          </div>

          <div className="case-study-copy">
            <p>
              One issue made failed login attempts look like the page was simply
              resetting, because authentication errors were not being shown
              clearly.
            </p>

            <p>
              Fixing that meant improving error visibility, preserving the
              username during failed submissions and reviewing the role-based
              redirect logic.
            </p>

            <p>
              It reminded me that backend correctness and user experience are
              connected. A system may technically reject an invalid login
              correctly, but if the interface gives no feedback, the experience
              still feels broken.
            </p>
          </div>
        </div>
      </section>

      <section className="parkease-roles">
        <div className="container parkease-roles__grid">
          <div>
            <p className="eyebrow">Role-based flow</p>

            <h2>
              Successful authentication was only the first step.
            </h2>
          </div>

          <div className="parkease-role-list">
            <article>
              <span>Admin</span>
              <p>
                Redirected into the administrative dashboard and management
                flow.
              </p>
            </article>

            <article>
              <span>Parking user</span>
              <p>
                Routed into the parking-focused dashboard and associated
                workflow.
              </p>
            </article>

            <article>
              <span>Manager</span>
              <p>
                Routed into the management dashboard based on the assigned role.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="parkease-team">
        <div className="container parkease-team__grid">
          <div>
            <p className="eyebrow">Working with another developer</p>

            <h2>
              Team projects make engineering decisions more visible.
            </h2>
          </div>

          <div className="case-study-copy">
            <p>
              ParkEase was not a solo build. I worked alongside another
              developer, which meant sharing responsibility and understanding
              how my backend changes affected someone else&apos;s work.
            </p>

            <p>
              That experience reinforced the importance of clear structure,
              predictable behaviour and making changes that other people can
              follow.
            </p>
          </div>
        </div>
      </section>

      <section className="parkease-learning">
        <div className="container parkease-learning__grid">
          <div>
            <p className="eyebrow">What I took from it</p>

            <h2>
              Backend engineering is also about making the whole system easier
              to trust.
            </h2>
          </div>

          <div className="case-study-copy">
            <p>
              ParkEase helped me get more comfortable tracing authentication
              behaviour, debugging redirect problems and thinking about the
              relationship between backend logic and user-facing behaviour.
            </p>

            <p>
              It also gave me another chance to work inside a shared codebase,
              where communication and consistency matter just as much as getting
              one function to work.
            </p>
          </div>
        </div>
      </section>

      <section className="case-study-next">
        <div className="container case-study-next__inner">
          <p className="eyebrow">Keep exploring</p>

          <h2>
            Different projects teach
            <span> different parts of engineering.</span>
          </h2>

          <div className="case-study-next__actions">
            <Link className="button button--primary" to="/work">
              Explore all work →
            </Link>

            <Link className="button button--secondary" to="/contact">
              Start a conversation →
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ParkEaseCaseStudy
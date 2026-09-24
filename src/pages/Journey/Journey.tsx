import { Link } from 'react-router-dom'

const journey = [
  {
    date: '2025',
    title: 'Allen Pearl Naturals begins',
    label: 'Founder journey',
    description:
      'I started APN through wellness writing, digital products and a larger vision I did not yet have the technical skills to build.',
    lesson:
      'This gave me my first experience of thinking beyond a single product and imagining what a larger system or company could become.',
  },
  {
    date: 'JAN 2026',
    title: 'Groundbreaker Talents',
    label: 'Engineering foundation',
    description:
      'I joined Groundbreaker Talents and began developing software engineering skills in a structured, practical environment.',
    lesson:
      'Technology became something I could create with, not simply something I consumed or admired.',
  },
  {
    date: 'JUNE 2026',
    title: 'Computer Science Essentials with Python',
    label: 'Refactory Academy',
    description:
      'I completed my software engineering training through Refactory Academy, working with Python, Django, web development, Git, debugging and software engineering fundamentals.',
    lesson:
      'This period gave me the technical confidence to move from exercises into larger systems such as Nyondo.',
  },
  {
    date: 'JULY 2026',
    title: 'Software & AI Engineering',
    label: 'Turing College',
    description:
      'I began a project-based Software & AI Engineering programme, moving deeper into APIs, testing, AI applications and more independent engineering work.',
    lesson:
      'My questions started shifting from “How do I build software?” toward “How can software reason, respond and become more useful?”',
  },
  {
    date: '2026',
    title: 'Open-source contribution',
    label: 'Open Data Ensemble',
    description:
      'I began contributing inside an existing open-source codebase, working with schemas, UI configuration, validation and frontend build workflows.',
    lesson:
      'I learned that engineering inside someone else’s system requires a different discipline: understand first, then change.',
  },
  {
    date: 'SEPT 2026',
    title: 'IoT & Embedded Systems',
    label: 'Groundbreaker × Spiro Academy',
    description:
      'I started exploring electronics, Arduino programming, sensors and the connection between software and physical systems.',
    lesson:
      'This opened another question for me: what becomes possible when software can interact with the physical world?',
  },
  {
    date: 'NOW',
    title: 'Building across several directions',
    label: 'Current chapter',
    description:
      'I am continuing Software & AI Engineering, developing the UgSL AI Practice Coach, studying IoT and embedded systems, contributing to open source and growing APN.',
    lesson:
      'The goal is not to collect technologies. It is to keep increasing what I am capable of building.',
  },
]

function Journey() {
  return (
    <main className="journey-page">
      <section className="journey-hero">
        <div className="container journey-hero__inner">
          <p className="eyebrow">My journey</p>

          <h1>
            Every chapter has changed
            <span> what I know how to build.</span>
          </h1>

          <p>
            My path into technology has not been a straight line toward one
            job title. It has been a sequence of questions, projects and
            opportunities that kept expanding what I thought was possible.
          </p>
        </div>
      </section>

      <section className="journey-main">
        <div className="container">
          <div className="journey-main__intro">
            <p className="eyebrow">The chapters so far</p>

            <p>
              I care less about collecting milestones than about what each
              stage added to the way I think, build and solve problems.
            </p>
          </div>

          <div className="journey-timeline">
            {journey.map((item, index) => (
              <article className="journey-entry" key={item.title}>
                <div className="journey-entry__marker">
                  <span>0{index + 1}</span>
                  <div />
                </div>

                <div className="journey-entry__date">
                  {item.date}
                </div>

                <div className="journey-entry__content">
                  <p className="journey-entry__label">
                    {item.label}
                  </p>

                  <h2>{item.title}</h2>

                  <p>{item.description}</p>

                  <div className="journey-entry__lesson">
                    <span>What changed for me</span>
                    <p>{item.lesson}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="journey-direction">
        <div className="container journey-direction__grid">
          <div>
            <p className="eyebrow">Where this is heading</p>

            <h2>
              I&apos;m growing toward work where software,
              <span> intelligence and products meet.</span>
            </h2>
          </div>

          <div className="journey-direction__copy">
            <p>
              I want a strong software engineering foundation, deeper AI
              capability and enough product understanding to turn ideas into
              systems that people can actually use.
            </p>

            <p>
              The longer-term direction includes building technology products
              and companies of my own while continuing to learn from serious
              engineering work, teams and real users.
            </p>

            <p>
              I&apos;m still early in that journey, and that is exactly why
              I&apos;m building as much as I can now.
            </p>
          </div>
        </div>
      </section>

      <section className="journey-next">
        <div className="container journey-next__inner">
          <p className="eyebrow">The next chapter</p>

          <h2>
            There is still a lot I don&apos;t know.
            <span> That makes the future interesting.</span>
          </h2>

          <p>
            I&apos;m looking for opportunities where I can contribute, learn
            from strong engineers and keep taking on increasingly difficult
            problems.
          </p>

          <div className="journey-next__actions">
            <Link className="button button--primary" to="/work">
              See what I&apos;m building →
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

export default Journey
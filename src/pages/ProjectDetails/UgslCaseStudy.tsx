import { Link } from 'react-router-dom'

const responsibilities = [
  {
    number: '01',
    title: 'AI Practice Coach',
    description:
      'My primary responsibility is the AI Practice Coach — the part of the platform intended to support learners as they practise after lessons.',
  },
  {
    number: '02',
    title: 'User flow thinking',
    description:
      'I help think through how a learner moves from onboarding to lessons, practice, quizzes, progress and the wider learning experience.',
  },
  {
    number: '03',
    title: 'API boundary',
    description:
      'The AI Coach is being designed as a separate service so it can connect with the main backend and frontend through clear API contracts.',
  },
  {
    number: '04',
    title: 'Team alignment',
    description:
      'Because the coach belongs inside a larger platform, its behaviour has to stay aligned with the frontend, backend, lesson structure and learner experience.',
  },
]

const learnerFlow = [
  'Register or log in',
  'Complete onboarding',
  'Choose learning content',
  'Watch a lesson',
  'Practise',
  'Take a quiz',
  'Track progress',
]

function UgslCaseStudy() {
  return (
    <main className="case-study ugsl-case-study">
      <section className="case-study-hero ugsl-case-study__hero">
        <div className="container case-study-hero__grid">
          <div className="case-study-hero__content">
            <p className="eyebrow">
              Case study · AI engineering · In development
            </p>

            <h1>
              UgSL AI
              <span> Practice Coach.</span>
            </h1>

            <p className="case-study-hero__lead">
              An AI practice component being developed for a Ugandan Sign
              Language learning platform, designed to sit alongside structured
              lessons and support learner practice.
            </p>

            <div className="case-study-status">
              <span className="case-study-status__dot" />
              Currently in development
            </div>

            <div className="case-study-hero__actions">
              <Link className="button button--primary" to="/work">
                Back to work
              </Link>

              <Link className="button button--secondary" to="/contact">
                Talk about the project →
              </Link>
            </div>
          </div>

          <div className="case-study-hero__visual">
            <img
              src="/images/ugsl/practice-coach.jpeg"
              alt="UgSL learning platform interface"
            />
          </div>
        </div>
      </section>

      <section className="case-study-overview">
        <div className="container case-study-overview__grid">
          <div>
            <p className="eyebrow">The larger platform</p>

            <h2>
              The AI Coach is only one part of a much bigger learning journey.
            </h2>
          </div>

          <div className="case-study-copy">
            <p>
              UgSL is being developed as a learning platform for Ugandan Sign
              Language with experiences for learners, teachers and
              administrators.
            </p>

            <p>
              Learners move through lessons, practice, quizzes, progress and
              other learning activities, while teachers and administrators
              support the content and platform workflows behind that
              experience.
            </p>

            <p>
              My main responsibility is the AI Practice Coach and the learner
              flow around it.
            </p>
          </div>
        </div>

        <div className="container case-study-facts">
          <div>
            <span>Role</span>
            <strong>AI Practice Coach developer</strong>
          </div>

          <div>
            <span>Project type</span>
            <strong>Team learning platform</strong>
          </div>

          <div>
            <span>Status</span>
            <strong>In development</strong>
          </div>

          <div>
            <span>Focus</span>
            <strong>AI · APIs · Learner experience</strong>
          </div>
        </div>
      </section>

      <section className="ugsl-purpose">
        <div className="container ugsl-purpose__grid">
          <div>
            <p className="eyebrow">The question behind the feature</p>

            <h2>
              What happens after a learner watches the lesson?
            </h2>
          </div>

          <div className="case-study-copy">
            <p>
              Watching learning content is only one part of learning. Learners
              also need opportunities to practise, receive useful guidance and
              understand whether they are progressing.
            </p>

            <p>
              That is the space the AI Practice Coach is meant to explore.
            </p>

            <p>
              Instead of treating AI as a separate feature added for novelty,
              I want the coach to have a clear place inside the learner&apos;s
              journey and solve a real learning need.
            </p>
          </div>
        </div>
      </section>

      <section className="ugsl-responsibility">
        <div className="container">
          <div className="case-study-section-heading">
            <p className="eyebrow">My responsibility</p>

            <h2>
              My work sits where
              <span> AI, APIs and user flow meet.</span>
            </h2>
          </div>

          <div className="ugsl-responsibility__grid">
            {responsibilities.map((item) => (
              <article key={item.number}>
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ugsl-flow">
        <div className="container ugsl-flow__grid">
          <div>
            <p className="eyebrow">Learner flow</p>

            <h2>
              The coach has to make sense inside the whole experience.
            </h2>

            <p>
              Designing the AI feature means understanding what happens before
              and after it, not treating it as an isolated screen.
            </p>
          </div>

          <div className="ugsl-flow__steps">
            {learnerFlow.map((step, index) => (
              <div key={step}>
                <span>0{index + 1}</span>
                <strong>{step}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ugsl-architecture">
        <div className="container ugsl-architecture__grid">
          <div>
            <p className="eyebrow">Architecture direction</p>

            <h2>
              The AI Coach is being separated from the main application.
            </h2>
          </div>

          <div className="ugsl-architecture__diagram">
            <div>
              <span>Frontend</span>
              <p>Learner experience</p>
            </div>

            <span>↔</span>

            <div>
              <span>Main backend</span>
              <p>Platform data & workflows</p>
            </div>

            <span>↔</span>

            <div>
              <span>AI Coach API</span>
              <p>Practice intelligence</p>
            </div>
          </div>
        </div>
      </section>

      <section className="ugsl-gallery">
        <div className="container">
          <div className="case-study-section-heading">
            <p className="eyebrow">Platform context</p>

            <h2>
              The coach belongs to
              <span> a wider learning system.</span>
            </h2>
          </div>

          <div className="ugsl-gallery__grid">
            <img
              src="/images/ugsl/ugsl2.jpeg"
              alt="UgSL platform interface"
            />

            <img
              src="/images/ugsl/ugsl3.jpeg"
              alt="UgSL learning experience"
            />

            <img
              src="/images/ugsl/ugsl4.jpeg"
              alt="UgSL platform screen"
            />

            <img
              src="/images/ugsl/ugsl5.jpeg"
              alt="UgSL learner interface"
            />
          </div>
        </div>
      </section>

      <section className="ugsl-decisions">
        <div className="container ugsl-decisions__grid">
          <div>
            <p className="eyebrow">Important decisions</p>

            <h2>
              Some of the hardest work has happened before the AI itself.
            </h2>
          </div>

          <div className="case-study-copy">
            <article>
              <h3>Clarifying the content hierarchy</h3>

              <p>
                The project documentation did not completely agree on whether
                the learning hierarchy should centre on courses or categories.
                That matters because the decision affects the data model,
                lessons, progress and certification.
              </p>
            </article>

            <article>
              <h3>Defining ownership between services</h3>

              <p>
                Because the AI Coach lives separately, we need clear contracts
                for what information it receives, what it returns and what the
                main platform remains responsible for.
              </p>
            </article>

            <article>
              <h3>Building with the community in mind</h3>

              <p>
                The platform is being shaped around Ugandan Sign Language
                learners rather than treating accessibility as something added
                after the product is built.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="ugsl-learning">
        <div className="container ugsl-learning__grid">
          <div>
            <p className="eyebrow">What this project is teaching me</p>

            <h2>
              AI engineering begins long before calling a model.
            </h2>
          </div>

          <div className="case-study-copy">
            <p>
              This project is teaching me to think about AI as one component
              inside a product rather than the entire product.
            </p>

            <p>
              The model matters, but so do the API contracts, the user flow,
              the learning context, the data available to the system and what
              happens when the AI response reaches a real learner.
            </p>

            <p>
              That systems perspective is one of the areas I want to keep
              developing as I grow into AI engineering.
            </p>
          </div>
        </div>
      </section>

      <section className="case-study-next">
        <div className="container case-study-next__inner">
          <p className="eyebrow">Still being built</p>

          <h2>
            This case study will grow
            <span> as the coach moves from architecture to implementation.</span>
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

export default UgslCaseStudy
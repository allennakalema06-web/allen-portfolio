import { Link } from 'react-router-dom'

const pillars = [
  {
    number: '01',
    title: 'Guided daily action',
    description:
      'The long-term idea is not simply to give people information, but to help them turn knowledge into small, useful actions they can actually follow.',
  },
  {
    number: '02',
    title: 'Human-centred wellness',
    description:
      'The experience should consider behaviour, accessibility and the reality that people need different kinds of support at different moments.',
  },
  {
    number: '03',
    title: 'Connected support',
    description:
      'Over time, APN could connect people with practitioners, coaches, farmers and other useful support around natural wellness.',
  },
  {
    number: '04',
    title: 'Technology as an enabler',
    description:
      'Software and AI are not the identity of APN. They are tools that can help the experience become more useful, adaptive and scalable.',
  },
]

function Apn() {
  return (
    <main className="apn-page">
      <section className="apn-hero">
        <div className="container apn-hero__grid">
          <div className="apn-hero__content">
            <p className="eyebrow">Founder story · Allen Pearl Naturals</p>

            <h1>
              APN started before
              <span> I became a software engineer.</span>
            </h1>

            <p>
              Allen Pearl Naturals began as a wellness idea, then slowly became
              a much bigger question: what would it look like to build a system
              that helps people act on health knowledge in a more practical,
              guided way?
            </p>

            <div className="apn-hero__actions">
              <a
                className="button button--primary"
                href="https://github.com/allennakalema06-web/Health-website"
                target="_blank"
                rel="noreferrer"
              >
                View project repository ↗
              </a>

              <Link className="button button--secondary" to="/work">
                Back to work
              </Link>
            </div>
          </div>

          <div className="apn-hero__visual">
            <img
              src="/images/apn/apn-logo.png"
              alt="Allen Pearl Naturals founder visual"
            />

            {/* <div className="apn-hero__logo">
              <img
                src="/images/apn/apn-logo.png"
                alt="Allen Pearl Naturals logo"
              />
            </div> */}
          </div>
        </div>
      </section>

      <section className="apn-origin">
        <div className="container apn-origin__grid">
          <div>
            <p className="eyebrow">Where it began</p>

            <h2>
              The vision came first.
              <span> The technical skills came later.</span>
            </h2>
          </div>

          <div className="apn-copy">
            <p>
              I started APN in 2025 through wellness writing and digital
              products, before I had entered software engineering.
            </p>

            <p>
              At that point, I could imagine the experience I wanted people to
              have, but I did not yet know how to build the technology behind
              it.
            </p>

            <p>
              Learning software engineering changed that. Ideas that once felt
              abstract started becoming systems I could actually think through
              technically.
            </p>
          </div>
        </div>
      </section>

      <section className="apn-preview">
        <div className="container apn-preview__grid">
          <div className="apn-preview__visual">
            <img
              src="/images/apn/apn-preview.png"
              alt="Allen Pearl Naturals project preview"
            />
          </div>

          <div>
            <p className="eyebrow">The early product</p>

            <h2>
              APN first took shape through content and digital wellness
              resources.
            </h2>

            <div className="apn-copy">
              <p>
                One of the early products was an ebook called
                <strong> The Ultimate Guide to Natural Healing</strong>.
              </p>

              <p>
                That stage helped me understand something important: information
                alone is not always enough. People may know what they should do
                and still struggle to turn that knowledge into consistent
                action.
              </p>

              <p>
                That insight is part of what pushed the idea toward a more
                guided and interactive future.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="apn-vision">
        <div className="container">
          <div className="apn-section-heading">
            <p className="eyebrow">The bigger direction</p>

            <h2>
              I don&apos;t want APN to become
              <span> just another wellness website.</span>
            </h2>
          </div>

          <div className="apn-pillars">
            {pillars.map((pillar) => (
              <article key={pillar.number}>
                <span>{pillar.number}</span>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="apn-tech">
        <div className="container apn-tech__grid">
          <div>
            <p className="eyebrow">Why engineering matters here</p>

            <h2>
              Learning to build software changed the size of the questions I
              could ask.
            </h2>
          </div>

          <div className="apn-copy">
            <p>
              Before engineering, I could describe the kind of experience I
              wanted APN to become.
            </p>

            <p>
              Now I can think about user flows, data, interfaces, automation,
              AI-assisted experiences and the architecture that could support
              those ideas.
            </p>

            <p>
              APN is still in development, so I do not want to present the
              future vision as if it already exists. The important part is that
              my technical growth is giving me more ability to build toward it
              deliberately.
            </p>
          </div>
        </div>
      </section>

      <section className="apn-founder">
        <div className="container apn-founder__grid">
          <div>
            <p className="eyebrow">What APN means in my journey</p>

            <h2>
              It is one of the reasons
              <span> I care so much about becoming a builder.</span>
            </h2>
          </div>

          <div className="apn-copy">
            <p>
              APN reminds me that sometimes the idea comes before the skill.
            </p>

            <p>
              I did not start learning technology because I wanted to collect
              frameworks. I wanted more ability to turn ideas into things that
              people could actually use.
            </p>

            <p>
              That founder mindset still influences how I approach engineering
              today.
            </p>
          </div>
        </div>
      </section>

      <section className="apn-next">
        <div className="container apn-next__inner">
          <p className="eyebrow">Still evolving</p>

          <h2>
            APN is not finished.
            <span> That is part of the story.</span>
          </h2>

          <p>
            The project will continue changing as I learn more about software,
            AI, product design and the people the platform is meant to serve.
          </p>

          <div className="apn-next__actions">
            <Link className="button button--primary" to="/work">
              Explore my engineering work →
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

export default Apn
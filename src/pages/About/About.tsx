import { Link } from 'react-router-dom'

const currentFocus = [
  'Software & AI Engineering at Turing College',
  'UgSL AI Practice Coach',
  'IoT & Embedded Systems with Groundbreaker × Spiro Academy',
  'Open-source contribution',
  'Allen Pearl Naturals',
]

function About() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="container about-hero__grid">
          <div className="about-hero__content">
            <p className="eyebrow">About Allen</p>

            <h1>
              I care about understanding
              <span> why something matters before deciding how to build it.</span>
            </h1>

            <p>
              I'm Allen Nakalema, a software engineer, AI builder and founder
              from Uganda.
            </p>

            <p>
              I enjoy working on problems that require more than writing code,
              problems where you first have to understand people, workflows,
              constraints and what a useful solution should actually do.
            </p>
          </div>

          <div className="about-hero__portrait">
            <img
              src="/images/allen/portrait.png"
              alt="Allen Nakalema"
            />
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="container about-split">
          <div>
            <p className="eyebrow">How I think</p>

            <h2>
              The question behind the code matters to me.
            </h2>
          </div>

          <div className="about-copy">
            <p>
              I like clarity. If I'm building something, I want to understand
              what it is, why it needs to exist, how it should work and who it
              is meant to help.
            </p>

            <p>
              That way of thinking shapes how I learn too. I don't enjoy
              memorising steps without understanding them. I want to know what
              a system is doing underneath, why a decision was made, and what
              would happen if we changed it.
            </p>

            <p>
              For me, good engineering is not about choosing the most impressive
              technology. It is about choosing and building what actually fits
              the problem.
            </p>
          </div>
        </div>
      </section>

      <section className="about-section about-section--surface">
        <div className="container">
          <div className="about-heading">
            <p className="eyebrow">How I got here</p>

            <h2>
              My path into technology started before I knew exactly where it
              would lead.
            </h2>
          </div>

          <div className="about-story">
            <article>
              <span>2025</span>

              <div>
                <h3>Allen Pearl Naturals</h3>

                <p>
                  I started APN before becoming a software engineer. At the
                  beginning, it was driven by wellness writing, digital products
                  and ideas about what the venture could become.
                </p>

                <p>
                  As the vision grew, I realised that many of the experiences I
                  imagined required technology I did not yet know how to build.
                </p>
              </div>
            </article>

            <article>
              <span>JAN 2026</span>

              <div>
                <h3>Groundbreaker Talents</h3>

                <p>
                  Joining Groundbreaker Talents gave me the environment to
                  begin building that technical foundation seriously.
                </p>

                <p>
                  Software stopped being something I simply admired and became
                  something I could design, debug and improve myself.
                </p>
              </div>
            </article>

            <article>
              <span>JUNE 2026</span>

              <div>
                <h3>Refactory Academy</h3>

                <p>
                  I completed Computer Science Essentials with Python through
                  Groundbreaker Talents, building practical experience in
                  Python, Django, web development, Git, debugging and software
                  engineering fundamentals.
                </p>
              </div>
            </article>

            <article>
              <span>JULY 2026</span>

              <div>
                <h3>Turing College</h3>

                <p>
                  I began Software & AI Engineering, moving deeper into APIs,
                  testing, AI applications and project-based engineering.
                </p>
              </div>
            </article>

            <article>
              <span>SEPT 2026</span>

              <div>
                <h3>IoT & Embedded Systems</h3>

                <p>
                  Through Groundbreaker × Spiro Academy, I began expanding
                  beyond software on a screen into electronics, Arduino and
                  hardware-software integration.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="container about-split">
          <div>
            <p className="eyebrow">What I'm building toward</p>

            <h2>
              I want to build systems, products and companies that solve real
              problems well.
            </h2>
          </div>

          <div className="about-copy">
            <p>
              My direction is moving toward AI engineering and product
              building, while keeping a strong software engineering foundation.
            </p>

            <p>
              I'm especially interested in systems where software, intelligence
              and real user needs meet, whether that is business software,
              learning tools, AI-assisted experiences or technology that
              eventually interacts with the physical world.
            </p>

            <p>
              Long term, I don't only want to contribute to products. I want to
              create them, grow them and understand what it takes to turn an
              idea into something useful at scale.
            </p>
          </div>
        </div>
      </section>

      <section className="about-section about-section--surface">
        <div className="container about-current">
          <div>
            <p className="eyebrow">Right now</p>

            <h2>These are the things currently getting my attention.</h2>
          </div>

          <ul>
            {currentFocus.map((item, index) => (
              <li key={item}>
                <span>0{index + 1}</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="about-values">
        <div className="container">
          <p className="eyebrow">What matters to me</p>

          <div className="about-values__grid">
            <article>
              <span>01</span>
              <h3>Clarity</h3>
              <p>
                Understand what we're solving before adding complexity.
              </p>
            </article>

            <article>
              <span>02</span>
              <h3>Curiosity</h3>
              <p>
                Keep asking better questions instead of becoming comfortable
                with shallow answers.
              </p>
            </article>

            <article>
              <span>03</span>
              <h3>Usefulness</h3>
              <p>
                Technology should make something meaningfully better for the
                person using it.
              </p>
            </article>

            <article>
              <span>04</span>
              <h3>Growth</h3>
              <p>
                Build, learn from reality, improve and keep moving.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="container about-cta__inner">
          <p className="eyebrow">Keep exploring</p>

          <h2>
            The best way to understand how I work is to see what I've built.
          </h2>

          <div className="about-cta__actions">
            <Link className="button button--primary" to="/work">
              Explore my work →
            </Link>

            <Link className="button button--secondary" to="/articles">
              Read my articles →
            </Link>

            <Link className="text-link" to="/contact">
              Get in touch →
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default About
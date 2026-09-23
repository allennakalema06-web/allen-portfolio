import { Link } from 'react-router-dom'

function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="home-hero">
        <div className="container home-hero__grid">
          <div className="home-hero__content">
            <p className="eyebrow">Software Engineer · AI Builder · Founder</p>

            <p className="home-hero__hello">Hi, I'm Allen.</p>

            <h1>
                I turn questions, ideas and real-world needs into
                <span> things people can use.</span>
            </h1>

            <p className="home-hero__intro">
              I'm a software engineer, AI builder and founder from Uganda.
              I'm deeply curious about understanding what people are actually experiencing, how things work, and how
              technology can make something difficult feel simpler.
            </p>

            <p className="home-hero__intro">
              That curiosity has taken me from building business software to
              AI, open source, embedded systems, and to building a company of
              my own.
            </p>

            <div className="home-hero__actions">
              <a className="button button--primary" href="#work">
                Come see what I'm building ↓
              </a>

              <Link className="button button--secondary" to="/about">
                A little about me →
              </Link>
            </div>

            <div className="availability">
              <span className="availability__dot" />
              Open to software engineering and AI opportunities
            </div>
          </div>

          <div className="home-hero__portrait">
            <div className="portrait-frame">
              <img
                src="/images/allen/portrait.png"
                alt="Allen Nakalema"
              />
            </div>

            <p>
              Kampala, Uganda
              <span>Building from here, thinking globally.</span>
            </p>
          </div>
        </div>
      </section>

      {/* NYONDO */}
      <section className="story-section" id="work">
        <div className="container">
          <div className="story-intro">
                <p className="eyebrow">The work</p>

                <h2>
                    This is where ideas start becoming
                    <span> real systems.</span>
                </h2>

                <p className="story-intro__lead">
                    Every project has taught me something different about users,
                    businesses, technology, collaboration and the kind of engineer
                    I'm becoming.
                </p>
          </div>

          <div className="nyondo-story">
            <div className="nyondo-story__copy">
              <p className="section-number">01 / NYONDO STOCK SYSTEM</p>

              <h3>
                How do you turn the everyday rules of a business into software
                that actually understands how the business works?
              </h3>

              <p>
                A hardware business has much more happening behind the counter
                than a customer sees.
              </p>

              <div className="business-flow">
                <span>Stock arrives.</span>
                <span>Suppliers need tracking.</span>
                <span>Customers receive different prices.</span>
                <span>Deposits need to be managed.</span>
                <span>Sales affect inventory.</span>
                <span>Transport follows its own rules.</span>
              </div>

              <p>
                I built Nyondo Stock System around those real operating rules.
                The interesting part wasn't simply using Django. It was learning
                how to translate business behaviour into software.
              </p>

              <div className="technology-line">
                Python <span>·</span> Django <span>·</span> PostgreSQL
              </div>

              <div className="inline-actions">
                <Link className="text-link" to="/work">
                  See how I built it →
                </Link>

                <a
                  className="text-link"
                  href="https://nyondo-stock-system-vfb9.onrender.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Try the live system ↗
                </a>
              </div>
            </div>

            <div className="nyondo-story__media">
              <video
                controls
                preload="metadata"
                poster="/images/nyondo/dashboard.png"
              >
                <source src="/videos/nyondo-demo.mp4" type="video/mp4" />
                Your browser does not support video playback.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* AI + IOT */}
      <section className="frontier-section">
        <div className="container">
          <div className="frontier-heading">
            <p className="eyebrow">Where I'm going</p>

            <h2>
              And I'm not stopping at
              <span> traditional software.</span>
            </h2>

            <p>
              The more I learn, the more interesting the questions become.
            </p>
          </div>

          <div className="frontier-grid">
            <article className="frontier-card">
              <div className="frontier-card__media">
                <img
                  src="/images/ugsl/practice-coach.jpeg"
                  alt="UgSL AI Practice Coach project"
                />
              </div>

              <div className="frontier-card__body">
                <p className="section-number">AI / ACCESSIBLE LEARNING</p>

                <h3>UgSL AI Practice Coach</h3>

                <p className="frontier-question">
                  How can software understand context, respond intelligently
                  and help someone practise what they're learning?
                </p>

                <p>
                  I'm developing the AI Practice Coach for a Ugandan Sign
                  Language learning platform, designed to work alongside the
                  learning experience rather than replace it.
                </p>

                <Link className="text-link" to="/work">
                  Explore the project →
                </Link>
              </div>
            </article>

            <article className="frontier-card frontier-card--reverse">
              <div className="frontier-card__media">
                <video controls preload="metadata">
                  <source src="/videos/iot-demo.mp4" type="video/mp4" />
                  Your browser does not support video playback.
                </video>
              </div>

              <div className="frontier-card__body">
                <p className="section-number">SOFTWARE / PHYSICAL WORLD</p>

                <h3>IoT & Embedded Systems</h3>

                <p className="frontier-question">
                  What happens when the software I write can sense and interact
                  with the physical world?
                </p>

                <p>
                  I'm currently exploring electronics, Arduino programming,
                  sensors and hardware-software integration through
                  Groundbreaker × Spiro Academy.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* THINKING */}
      <section className="thinking-section">
        <div className="container thinking-grid">
          <div>
            <p className="eyebrow">Before the code</p>

            <h2>
              I rarely begin with
              <span> “What should I code?”</span>
            </h2>

            <p className="thinking-lead">
              I usually begin with a simpler question:
            </p>

            <blockquote>“What's actually happening here?”</blockquote>
          </div>

          <ol className="thinking-steps">
            <li>
              <span>01</span>
              Understand the person.
            </li>
            <li>
              <span>02</span>
              Understand the problem.
            </li>
            <li>
              <span>03</span>
              Understand the system around it.
            </li>
            <li>
              <span>04</span>
              Design what actually needs to exist.
            </li>
            <li>
              <span>05</span>
              Build and test.
            </li>
            <li>
              <span>06</span>
              Listen to what reality tells you.
            </li>
            <li>
              <span>07</span>
              Improve.
            </li>
          </ol>
        </div>

        <div className="container tools-line">
          <p>Tools I currently build with</p>

          <div>
            Python · Django · PostgreSQL · JavaScript · TypeScript · React ·
            Git · APIs · Testing · AI Applications
          </div>

          <small>
            Currently going deeper into AI systems, RAG, agents, IoT and
            embedded systems.
          </small>
        </div>
      </section>

      {/* COLLABORATION */}
      <section className="collaboration-section">
        <div className="container">
          <div className="story-intro">
            <p className="eyebrow">Collaborating with others</p>

            <h2>
                Building changes when the code belongs to
                <span> more than one person.</span>
            </h2>
          </div>

          <div className="collaboration-grid">
            <article className="collaboration-item">
              <p className="section-number">OPEN SOURCE</p>

              <h3>Open Data Ensemble</h3>

              <p>
                Working inside an existing codebase taught me something
                different from starting a project myself:
              </p>

              <p className="collaboration-quote">
                Read first. Understand the system. Respect the conventions.
                Then change what actually needs changing.
              </p>

              <Link className="text-link" to="/open-source">
                See my open-source work →
              </Link>
            </article>

            <article className="collaboration-item collaboration-item--parkease">
                <p className="section-number">TEAM ENGINEERING</p>

                <p className="collaboration-item__mark">PE.</p>

                <h3>ParkEase</h3>

                <p>
                    ParkEase gave me experience building inside a shared project,
                    where decisions, structure and code need to make sense to more
                    than the person who wrote them.
                </p>

                <p>
                    I worked mainly on the Django backend alongside Rose.
                </p>

                <Link className="text-link" to="/work">
                    Explore ParkEase →
                </Link>
            </article>
          </div>
        </div>
      </section>

      {/* APN */}
      <section className="apn-story">
        <div className="container apn-story__grid">
          <div className="apn-story__copy">
            <p className="eyebrow">Before some of this, there was APN</p>

            <h2>
              I didn't become a founder after becoming an engineer.
              <span> It happened the other way around.</span>
            </h2>

            <p>
              Allen Pearl Naturals began in 2025 with wellness writing,
              digital publishing and ideas about what practical wellness could
              become.
            </p>

            <p>
              But there was something I couldn't yet do: build the technology
              I imagined.
            </p>

            <p className="apn-highlight">
              Learning software engineering didn't only give me a career.
              It gave me another way to build my ideas.
            </p>

            <p className="apn-ending">
              APN is still becoming.
              <br />
              <span>So am I.</span>
            </p>

            <Link className="text-link" to="/apn">
              Follow the APN story →
            </Link>
          </div>

          <div className="apn-story__media">
            <div className="apn-visual">
                <img
                className="apn-visual__main"
                src="/images/apn/apn-preview.png"
                alt="Allen Pearl Naturals website"
                />

                <div className="apn-visual__brand">
                    <img
                    src="/images/apn/apn-logo.png"
                    alt="Allen Pearl Naturals logo"
                />

                <div>
                    <strong>Allen Pearl Naturals</strong>
                    <span>Founder venture · In development</span>
                </div>
            </div>
        </div>
        </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="journey-story">
        <div className="container">
          <div className="story-intro">
            <p className="eyebrow">A few chapters so far</p>
            <h2>I'm still becoming.</h2>
          </div>

          <div className="journey-line">
            <article>
              <span>2025</span>
              <div>
                <h3>An idea becomes APN.</h3>
                <p>
                  I begin building something of my own before I know how to
                  build all the technology I imagine for it.
                </p>
              </div>
            </article>

            <article>
              <span>JAN 2026</span>
              <div>
                <h3>Groundbreaker Talents</h3>
                <p>
                  Software stops being something I admire and becomes
                  something I can create.
                </p>
              </div>
            </article>

            <article>
              <span>JUNE 2026</span>
              <div>
                <h3>Computer Science Essentials with Python</h3>
                <p>
                  I complete my Refactory Academy software engineering
                  programme through Groundbreaker Talents.
                </p>
              </div>
            </article>

            <article>
              <span>JULY 2026</span>
              <div>
                <h3>Software & AI Engineering</h3>
                <p>
                  At Turing College, my world expands from applications toward
                  intelligent systems.
                </p>
              </div>
            </article>

            <article>
              <span>SEPT 2026</span>
              <div>
                <h3>IoT & Embedded Systems</h3>
                <p>
                  With Groundbreaker × Spiro Academy, I start exploring what
                  happens when software leaves the screen.
                </p>
              </div>
            </article>

            <article className="journey-line__today">
              <span>TODAY</span>
              <div>
                <h3>Building. Learning. Contributing.</h3>
                <p>
                  And looking for the next meaningful problem worth solving.
                </p>
              </div>
            </article>
          </div>

          <Link className="text-link" to="/journey">
            See the full journey →
          </Link>
        </div>
      </section>

      {/* WRITING */}
      <section className="writing-section" id="articles">
        <div className="container writing-grid">
          <div>
            <p className="eyebrow">From my notebook</p>

            <h2>
              Not everything I build is
              <span> made of code.</span>
            </h2>

            <p>
              Writing is another way I make sense of what I'm learning,
              building and becoming.
            </p>
          </div>

          <div className="article-list">
            <article>
              <span>Engineering</span>
              <h3>
                Why the problem should come before the technology
              </h3>
              <small>Coming soon</small>
            </article>

            <article>
              <span>AI</span>
              <h3>
                Learning AI without forgetting the human on the other side
              </h3>
              <small>Coming soon</small>
            </article>

            <article>
              <span>Building in public</span>
              <h3>
                What building my first real system taught me that tutorials
                couldn't
              </h3>
              <small>Coming soon</small>
            </article>

            <a className="text-link" href="/articles">
              Read all articles →
            </a>
          </div>
        </div>
      </section>

      {/* QUIET PERSONAL SECTION */}
      <section className="quiet-section">
        <div className="container quiet-section__inner">
          <p className="eyebrow">Away from the keyboard</p>

          <p className="quiet-section__statement">
            You'll often find me somewhere quiet.
            <br />
            Thinking. Writing. Learning something I didn't know yesterday.
          </p>

          <p>
            I like understanding the <strong>why</strong> before the
            <strong> how</strong>.
          </p>

          <p>Maybe that's part of why engineering feels so natural to me.</p>
        </div>
      </section>

      {/* CONTACT */}
      <section className="home-contact">
        <div className="container home-contact__inner">
            <p className="eyebrow">Before you go</p>

            <h2>
                Good work usually starts with
                <span> a conversation.</span>
            </h2>

            <p className="home-contact__lead">
                I'm interested in thoughtful engineering problems, AI work,
                collaborative projects and conversations with people who are
                building something meaningful.
            </p>

            <p className="home-contact__note">
                If that's what brought you here, my inbox is open.
            </p>

            <div className="home-contact__actions">
                <a
                className="button button--primary"
                href="mailto:allennakalema06@gmail.com"
                >
                    Start a conversation →
                </a>

                <a
                className="button button--secondary"
                href="https://www.linkedin.com/in/allen-nakalema-99b8373aa/"
                target="_blank"
                rel="noreferrer"
                >
                    Find me on LinkedIn ↗
                </a>
            </div>
        </div>
      </section>
    </main>
  )
}

export default Home
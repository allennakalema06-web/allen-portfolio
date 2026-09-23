function Contact() {
  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="container contact-hero__grid">
          <div>
            <p className="eyebrow">Contact</p>

            <h1>
              Good conversations can become
              <span> good work.</span>
            </h1>

            <p className="contact-hero__intro">
              I&apos;m open to software engineering, AI engineering,
              collaborative product work, open-source opportunities and
              conversations with people building thoughtful technology.
            </p>

            <p className="contact-hero__intro">
              If you think there&apos;s something we should build, explore or
              talk about, feel free to reach out.
            </p>
          </div>

          <div className="contact-panel">
            <p className="contact-panel__label">Best way to reach me</p>

            <a
              className="contact-panel__email"
              href="mailto:allennakalema06@gmail.com"
            >
              allennakalema06@gmail.com
            </a>

            <div className="contact-panel__meta">
              <div>
                <span>Based in</span>
                <strong>Kampala, Uganda</strong>
              </div>

              <div>
                <span>Open to</span>
                <strong>Remote opportunities</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-options">
        <div className="container">
          <div className="contact-options__heading">
            <p className="eyebrow">You can also find me here</p>

            <h2>Choose whatever feels easiest.</h2>
          </div>

          <div className="contact-options__grid">
            <a
              href="https://www.linkedin.com/in/allen-nakalema-99b8373aa/"
              target="_blank"
              rel="noreferrer"
            >
              <span>01</span>
              <div>
                <strong>LinkedIn</strong>
                <p>
                  For professional conversations, updates and the things
                  I&apos;m learning in public.
                </p>
              </div>
              <span>↗</span>
            </a>

            <a
              href="https://github.com/allennakalema06-web"
              target="_blank"
              rel="noreferrer"
            >
              <span>02</span>
              <div>
                <strong>GitHub</strong>
                <p>
                  For code, repositories and a closer look at what I&apos;m
                  building.
                </p>
              </div>
              <span>↗</span>
            </a>

            <a href="mailto:allennakalema06@gmail.com">
              <span>03</span>
              <div>
                <strong>Email</strong>
                <p>
                  For opportunities, collaboration or a direct conversation.
                </p>
              </div>
              <span>↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className="contact-close">
        <div className="container contact-close__inner">
          <p className="eyebrow">One last thing</p>

          <h2>
            You don&apos;t need a perfectly formed idea
            <span> before reaching out.</span>
          </h2>

          <p>
            Sometimes a useful conversation starts with a question, a rough
            thought or a problem that still needs understanding.
          </p>

          <a
            className="button button--primary"
            href="mailto:allennakalema06@gmail.com"
          >
            Say hello →
          </a>
        </div>
      </section>
    </main>
  )
}

export default Contact
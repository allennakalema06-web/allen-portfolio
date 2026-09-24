import { Link } from 'react-router-dom'

const contributions = [
  {
    number: '01',
    title: 'Schema changes',
    description:
      'I worked with JSON form schemas to add and update fields while keeping the source form structure valid.',
  },
  {
    number: '02',
    title: 'UI configuration',
    description:
      'I updated neighbouring UI configuration so new form fields appeared correctly in the interface.',
  },
  {
    number: '03',
    title: 'Theme field mapping',
    description:
      'I updated frontend theme configuration so registration fields used the expected labels in the application.',
  },
  {
    number: '04',
    title: 'Validation',
    description:
      'I ran the project validation workflow to make sure form changes still satisfied repository rules.',
  },
  {
    number: '05',
    title: 'Build verification',
    description:
      'I rebuilt the frontend after changes to confirm the codebase still compiled successfully.',
  },
  {
    number: '06',
    title: 'Git workflow',
    description:
      'I worked through feature branches, commits and pull-request style collaboration rather than changing code in isolation.',
  },
]

function OpenSource() {
  return (
    <main className="open-source-page">
      <section className="open-source-hero">
        <div className="container open-source-hero__grid">
          <div>
            <p className="eyebrow">Open source</p>

            <h1>
              Learning to contribute
              <span> before trying to control the codebase.</span>
            </h1>

            <p>
              Open-source work taught me something different from building my
              own projects: before changing anything, I first have to understand
              how someone else&apos;s system is organised and why it works the
              way it does.
            </p>
          </div>

          <div className="open-source-hero__mark">
            <span>OSS.</span>
          </div>
        </div>
      </section>

      <section className="open-source-overview">
        <div className="container open-source-overview__grid">
          <div>
            <p className="eyebrow">Open Data Ensemble</p>

            <h2>
              Small changes can still require careful engineering.
            </h2>
          </div>

          <div className="open-source-copy">
            <p>
              I contributed to the Open Data Ensemble project by working with
              source form definitions, UI configuration and frontend field
              mappings.
            </p>

            <p>
              The work looked simple on the surface, add a field, update the
              interface and make sure the label appears correctly, but the real
              task was understanding where each change belonged and what else
              could break if I edited the wrong file.
            </p>

            <p>
              That experience strengthened how I read unfamiliar codebases,
              follow repository conventions and verify changes before
              considering a task complete.
            </p>
          </div>
        </div>
      </section>

      <section className="open-source-workflow">
        <div className="container">
          <div className="open-source-section-heading">
            <p className="eyebrow">What I worked on</p>

            <h2>
              Not just editing files.
              <span> Understanding the relationships between them.</span>
            </h2>
          </div>

          <div className="open-source-grid">
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

      <section className="open-source-example">
        <div className="container open-source-example__grid">
          <div>
            <p className="eyebrow">One contribution</p>

            <h2>
              Adding one useful question meant touching several parts of the
              system.
            </h2>
          </div>

          <div className="open-source-example__steps">
            <article>
              <span>schema.json</span>
              <p>
                Add a new optional string property with its validation rules.
              </p>
            </article>

            <article>
              <span>ui.json</span>
              <p>
                Add the corresponding control so the new field appears in the
                form interface.
              </p>
            </article>

            <article>
              <span>theme.json</span>
              <p>
                Map the field to the correct frontend label used by the
                registration experience.
              </p>
            </article>

            <article>
              <span>validate + build</span>
              <p>
                Run the repository validation command and production build to
                confirm the change did not break the project.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="open-source-thinking">
        <div className="container open-source-thinking__grid">
          <div>
            <p className="eyebrow">What changed in my thinking</p>

            <h2>
              In my own project, I know why the code exists.
              In open source, I have to discover that first.
            </h2>
          </div>

          <div className="open-source-copy">
            <p>
              That difference matters.
            </p>

            <p>
              When I enter an unfamiliar codebase, I now spend more time reading
              nearby files, tracing relationships and checking conventions
              before making changes.
            </p>

            <p>
              Open-source work is teaching me that contribution is not about
              proving how quickly I can change code. It is about making a change
              that fits the system already there.
            </p>
          </div>
        </div>
      </section>

      <section className="open-source-tools">
        <div className="container">
          <p className="eyebrow">Tools & practices</p>

          <div className="open-source-tools__row">
            <span>Git</span>
            <span>GitHub</span>
            <span>JSON Schema</span>
            <span>Frontend configuration</span>
            <span>Validation workflows</span>
            <span>Production builds</span>
            <span>Code review</span>
          </div>
        </div>
      </section>

      <section className="open-source-next">
        <div className="container open-source-next__inner">
          <p className="eyebrow">Still learning in public</p>

          <h2>
            I want to keep becoming the kind of engineer who can
            <span> enter a system, understand it and contribute responsibly.</span>
          </h2>

          <div className="open-source-next__actions">
            <a
              className="button button--primary"
              href="https://github.com/allennakalema06-web"
              target="_blank"
              rel="noreferrer"
            >
              View my GitHub ↗
            </a>

            <Link className="button button--secondary" to="/work">
              Explore my work →
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default OpenSource
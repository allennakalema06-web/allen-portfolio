import { Link } from 'react-router-dom'

function ProblemBeforeTechnology() {
  return (
    <main className="article-page">
      <article>
        <header className="article-hero">
          <div className="container article-hero__inner">
            <p className="eyebrow">Engineering · September 2026</p>

            <h1>
              Why the problem should come before the technology
            </h1>

            <p className="article-hero__lead">
              I am learning that one of the easiest mistakes in technology is
              choosing the tool before fully understanding what needs to be
              solved.
            </p>

            <div className="article-hero__meta">
              <span>By Allen Nakalema</span>
              <span>5 min read</span>
            </div>
          </div>
        </header>

        <div className="container article-layout">
          <div className="article-body">
            <p className="article-intro">
              When I first started learning software engineering, it was easy
              to think that building meant choosing a language, framework or
              library and then writing code.
            </p>

            <p>
              The more real projects I work on, the more I see that this is
              usually not where the important thinking begins.
            </p>

            <p>
              The better starting point is often much simpler:
              <strong> what is actually happening, and why is it a problem?</strong>
            </p>

            <h2>A tool can solve the wrong problem very well</h2>

            <p>
              Technology can be impressive and still be unnecessary.
            </p>

            <p>
              A system can be fast, modern and technically correct while still
              failing because it does not match the way people actually work.
            </p>

            <p>
              That is one of the biggest lessons I took from building the
              Nyondo Stock System.
            </p>

            <p>
              The challenge was not simply to build an inventory application.
              The real work was understanding how the hardware business handled
              stock, suppliers, customer types, deposits, transport and sales.
            </p>

            <p>
              Until those rules were clear, choosing models, views or database
              relationships would have been premature.
            </p>

            <h2>Real workflows are usually messier than tutorials</h2>

            <p>
              Tutorials are useful because they simplify problems.
            </p>

            <p>
              Real businesses rarely behave that neatly.
            </p>

            <p>
              One customer may pay in full. Another may pay through
              installments. A retailer may receive a different margin from a
              wholesaler. A delivery rule may depend on both order value and
              distance.
            </p>

            <p>
              Those details are not small implementation details. They are the
              business.
            </p>

            <p>
              If I misunderstand them, I can build perfectly valid code that
              produces the wrong result.
            </p>

            <h2>The same lesson applies to AI</h2>

            <p>
              I am seeing the same pattern again as I move deeper into AI.
            </p>

            <p>
              It is tempting to begin with questions like:
            </p>

            <ul>
              <li>Which model should we use?</li>
              <li>Should this use an agent?</li>
              <li>Do we need RAG?</li>
              <li>Which framework should connect everything?</li>
            </ul>

            <p>
              Those can be useful questions, but they are not always the first
              questions.
            </p>

            <p>
              With the UgSL AI Practice Coach, the more important question is
              what the learner needs after watching a lesson.
            </p>

            <p>
              What should practice feel like? What feedback is actually useful?
              What information does the system need? What belongs to the AI
              service and what belongs to the main platform?
            </p>

            <p>
              Once those questions become clearer, the technology choices start
              becoming easier to justify.
            </p>

            <h2>My current process</h2>

            <p>
              I now try to slow down before implementation and ask a few basic
              questions:
            </p>

            <ol>
              <li>Who is experiencing the problem?</li>
              <li>What is happening now?</li>
              <li>Why is the current situation difficult?</li>
              <li>What would a useful improvement actually look like?</li>
              <li>What constraints already exist?</li>
              <li>Only then: what technology belongs here?</li>
            </ol>

            <p>
              I do not always get the answers right immediately. Sometimes the
              answers change once I build a first version and see how people
              react.
            </p>

            <p>
              But starting with the problem gives the project a much stronger
              direction than starting with the tool.
            </p>

            <h2>Technology should earn its place</h2>

            <p>
              I still enjoy learning new technologies. I am curious about AI,
              APIs, embedded systems and the tools that make ambitious products
              possible.
            </p>

            <p>
              But I increasingly want every technology choice to have a reason.
            </p>

            <p>
              Not because it is popular.
              Not because it looks advanced.
              Not because everyone else is using it.
            </p>

            <p>
              Because it helps solve the problem better.
            </p>

            <p>
              That is the kind of engineer I am trying to become.
            </p>
          </div>

          <aside className="article-sidebar">
            <div>
              <span>Filed under</span>
              <strong>Engineering</strong>
            </div>

            <div>
              <span>Related project</span>
              <Link to="/work/nyondo-stock-system">
                Nyondo Stock System →
              </Link>
            </div>

            <div>
              <span>Also exploring</span>
              <Link to="/work/ugsl-ai-practice-coach">
                UgSL AI Practice Coach →
              </Link>
            </div>
          </aside>
        </div>

        <footer className="article-end">
          <div className="container article-end__inner">
            <p className="eyebrow">Thanks for reading</p>

            <h2>
              I write from what I&apos;m building,
              <span> not from pretending I know everything.</span>
            </h2>

            <div className="article-end__actions">
              <Link className="button button--primary" to="/articles">
                More articles →
              </Link>

              <Link className="button button--secondary" to="/contact">
                Start a conversation →
              </Link>
            </div>
          </div>
        </footer>
      </article>
    </main>
  )
}

export default ProblemBeforeTechnology
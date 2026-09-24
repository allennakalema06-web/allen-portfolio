import { Link } from 'react-router-dom'

const capabilities = [
  {
    number: '01',
    title: 'Inventory management',
    description:
      'Products, categories, suppliers, stock entries and stock adjustments are managed through one system instead of scattered records.',
  },
  {
    number: '02',
    title: 'Role-based workflows',
    description:
      'The system separates responsibilities across Admin, Manager and Attendant roles so each user sees the work relevant to them.',
  },
  {
    number: '03',
    title: 'Sales and pricing',
    description:
      'Sales use customer-type pricing rules for normal customers, retailers and wholesalers rather than relying on manual calculations.',
  },
  {
    number: '04',
    title: 'Customer deposits',
    description:
      'Customers can pay toward an order in installments. The transaction becomes a completed sale only after the required amount is fully paid.',
  },
  {
    number: '05',
    title: 'Supplier tracking',
    description:
      'Stock received from suppliers and outstanding supplier payments can be tracked alongside inventory activity.',
  },
  {
    number: '06',
    title: 'Operational reporting',
    description:
      'Managers can see stock levels, inventory value, supplier credit, low-stock products and recent stock activity from the dashboard.',
  },
]

const process = [
  {
    number: '01',
    title: 'Understand the business',
    description:
      'I began with the actual hardware-store workflow: what is bought, stocked, sold, paid for, delivered and monitored.',
  },
  {
    number: '02',
    title: 'Translate rules into software',
    description:
      'Business decisions such as pricing margins, customer types, deposits and transport charges became explicit application rules.',
  },
  {
    number: '03',
    title: 'Separate responsibilities',
    description:
      'The application was divided into areas for accounts, inventory, sales, customers, reports and core site behaviour.',
  },
  {
    number: '04',
    title: 'Test against reality',
    description:
      'I kept checking whether the system behaviour matched the workflow it was supposed to represent instead of treating successful code execution as the final test.',
  },
]

function NyondoCaseStudy() {
  return (
    <main className="case-study">
      <section className="case-study-hero">
        <div className="container case-study-hero__grid">
          <div className="case-study-hero__content">
            <p className="eyebrow">Case study · Full-stack engineering</p>

            <h1>
              Nyondo
              <span> Stock System.</span>
            </h1>

            <p className="case-study-hero__lead">
              A Django business system built around the real workflows of a
              hardware company, from stock and suppliers to sales, customer
              deposits, pricing and reporting.
            </p>

            <div className="case-study-hero__actions">
              <a
                className="button button--primary"
                href="https://nyondo-stock-system-vfb9.onrender.com/"
                target="_blank"
                rel="noreferrer"
              >
                View live system ↗
              </a>

              <Link className="button button--secondary" to="/work">
                Back to work
              </Link>
            </div>
          </div>

          <div className="case-study-hero__visual">
            <img
              src="/images/nyondo/dashboard.png"
              alt="Nyondo Stock System dashboard"
            />
          </div>
        </div>
      </section>

      <section className="case-study-overview">
        <div className="container case-study-overview__grid">
          <div>
            <p className="eyebrow">Project overview</p>

            <h2>
              The challenge wasn&apos;t simply building inventory software.
            </h2>
          </div>

          <div className="case-study-copy">
            <p>
              Nyondo General Hardware operates with different products,
              suppliers, customer types, payment situations and delivery rules.
              Managing those activities requires more than knowing how much
              stock is currently available.
            </p>

            <p>
              The system needed to represent how the business actually works:
              stock entering the store, supplier obligations, products being
              sold at different margins, customers paying through deposits,
              transport charges and different staff responsibilities.
            </p>

            <p>
              My job was to turn those workflows into a system that remained
              understandable as the number of business rules increased.
            </p>
          </div>
        </div>

        <div className="container case-study-facts">
          <div>
            <span>Role</span>
            <strong>Full-stack developer</strong>
          </div>

          <div>
            <span>Stack</span>
            <strong>Python · Django · PostgreSQL</strong>
          </div>

          <div>
            <span>Deployment</span>
            <strong>Render</strong>
          </div>

          <div>
            <span>Type</span>
            <strong>Business operations system</strong>
          </div>
        </div>
      </section>

      <section className="case-study-problem">
        <div className="container case-study-problem__grid">
          <div>
            <p className="eyebrow">The business logic</p>

            <h2>
              Real businesses contain rules that rarely fit inside a simple
              CRUD tutorial.
            </h2>
          </div>

          <div className="case-study-rule-list">
            <article>
              <span>Pricing</span>

              <h3>Different customers receive different margins.</h3>

              <p>
                Normal customers are priced at 15% above cost, retailers at
                10%, and wholesalers at 5%.
              </p>
            </article>

            <article>
              <span>Transport</span>

              <h3>Delivery cost depends on order value and distance.</h3>

              <p>
                Orders of at least UGX 500,000 receive free transport within
                10 kilometres. Other qualifying deliveries use the configured
                transport charge.
              </p>
            </article>

            <article>
              <span>Deposits</span>

              <h3>An installment is not automatically a completed sale.</h3>

              <p>
                Customer deposits remain separate while payment is incomplete.
                Once the order is fully paid, it can move into the completed
                sales flow and a receipt can be generated.
              </p>
            </article>

            <article>
              <span>Access</span>

              <h3>Not every staff member should perform every action.</h3>

              <p>
                Admin, Manager and Attendant roles separate system
                responsibilities and dashboard access.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="case-study-demo">
        <div className="container">
          <div className="case-study-section-heading">
            <p className="eyebrow">The system in motion</p>

            <h2>
              From business rules
              <span> to working software.</span>
            </h2>
          </div>

          <div className="case-study-video">
            <video
              controls
              playsInline
              preload="metadata"
              poster="/images/nyondo/dashboard.png"
            >
              <source src="/videos/nyondo-demo.mp4" type="video/mp4" />

              Your browser does not support the video element.
            </video>
          </div>
        </div>
      </section>

      <section className="case-study-capabilities">
        <div className="container">
          <div className="case-study-section-heading">
            <p className="eyebrow">What the system handles</p>

            <h2>
              One application,
              <span> several connected workflows.</span>
            </h2>
          </div>

          <div className="case-study-capabilities__grid">
            {capabilities.map((capability) => (
              <article key={capability.number}>
                <span>{capability.number}</span>

                <h3>{capability.title}</h3>

                <p>{capability.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="case-study-architecture">
        <div className="container case-study-architecture__grid">
          <div>
            <p className="eyebrow">Application structure</p>

            <h2>
              I separated the system around business responsibilities.
            </h2>
          </div>

          <div className="case-study-apps">
            <article>
              <span>accounts_app</span>
              <p>Authentication, groups and user profiles.</p>
            </article>

            <article>
              <span>inventory_app</span>
              <p>
                Categories, products, suppliers, stock entries and
                adjustments.
              </p>
            </article>

            <article>
              <span>sales_app</span>
              <p>Sales, receipts, pricing and transport behaviour.</p>
            </article>

            <article>
              <span>customers_app</span>
              <p>Customer records and the deposit workflow.</p>
            </article>

            <article>
              <span>reports_app</span>
              <p>Operational dashboards and business metrics.</p>
            </article>

            <article>
              <span>core_app</span>
              <p>Landing page and shared application behaviour.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="case-study-process">
        <div className="container">
          <div className="case-study-section-heading">
            <p className="eyebrow">How I approached it</p>

            <h2>
              Understand first.
              <span> Then design the software around reality.</span>
            </h2>
          </div>

          <div className="case-study-process__grid">
            {process.map((step) => (
              <article key={step.number}>
                <span>{step.number}</span>

                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="case-study-challenges">
        <div className="container case-study-challenges__grid">
          <div>
            <p className="eyebrow">Challenges & decisions</p>

            <h2>
              The difficult parts were often where the most learning happened.
            </h2>
          </div>

          <div className="case-study-copy">
            <article>
              <h3>Replacing a custom role model</h3>

              <p>
                The project originally used a custom role approach. During code
                review, I moved role management toward Django Groups and
                permission-aware access, reducing unnecessary custom logic.
              </p>
            </article>

            <article>
              <h3>Keeping secrets outside the codebase</h3>

              <p>
                Configuration such as the Django secret key was moved into
                environment variables instead of being committed directly into
                source code.
              </p>
            </article>

            <article>
              <h3>Moving from local development to PostgreSQL</h3>

              <p>
                Deployment required adapting the project from the local
                development environment to a hosted PostgreSQL database,
                static-file handling and production configuration.
              </p>
            </article>

            <article>
              <h3>Debugging production behaviour</h3>

              <p>
                Deployment exposed problems that were not obvious locally,
                including database seeding and authentication behaviour. That
                experience taught me to treat deployment as part of
                engineering, not as the final upload step.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="case-study-lessons">
        <div className="container case-study-lessons__grid">
          <div>
            <p className="eyebrow">What Nyondo changed for me</p>

            <h2>
              It was the project where software engineering started feeling
              less like exercises and more like systems thinking.
            </h2>
          </div>

          <div className="case-study-copy">
            <p>
              Nyondo taught me that writing a model or view is often the easy
              part. The harder work is understanding what the software is
              supposed to represent.
            </p>

            <p>
              A pricing percentage, customer deposit or stock adjustment may
              look small in code, but each one represents a real business
              decision.
            </p>

            <p>
              That changed how I approach projects. I now spend more time asking
              about the people, rules and workflow before deciding what the
              implementation should look like.
            </p>
          </div>
        </div>
      </section>

      <section className="case-study-next">
        <div className="container case-study-next__inner">
          <p className="eyebrow">Keep exploring</p>

          <h2>
            Nyondo is one chapter.
            <span> There&apos;s more being built.</span>
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

export default NyondoCaseStudy
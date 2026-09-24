export default function WhatNyondoTaughtMeContent() {
  return (
    <>
      <p className="article-intro">
        Before Nyondo, much of what I knew about software engineering came
        from lessons, exercises and smaller projects.
      </p>

      <p>
        Those experiences gave me an important foundation. I learned Python,
        Django, databases, models, views, authentication and how the different
        parts of a web application fit together.
      </p>

      <p>
        But Nyondo taught me something tutorials could not fully prepare me
        for:
        <strong> what happens when software has to represent a real business.</strong>
      </p>

      <h2>A real business is rarely as neat as a tutorial</h2>

      <p>
        Tutorials usually give you the rules before you start building.
        Real projects make you discover the rules first.
      </p>

      <p>
        With Nyondo, what initially sounded like “build a stock management
        system” quickly became a much larger set of questions.
      </p>

      <ul>
        <li>What happens when different customers receive different prices?</li>
        <li>What if a customer pays for an order in installments?</li>
        <li>When should a deposit become a completed sale?</li>
        <li>What happens when stock arrives before the supplier is fully paid?</li>
        <li>Who should be allowed to perform each action?</li>
        <li>When should transport be free?</li>
      </ul>

      <p>
        Those questions changed the project for me. I was no longer just
        building screens and database tables. I was trying to understand how
        the business actually operated.
      </p>

      <h2>The difficult part was often not writing the code</h2>

      <p>
        One of the clearest examples was customer pricing.
      </p>

      <p>
        Nyondo uses different margins depending on the customer type:
      </p>

      <ul>
        <li>Normal customers — 15% above cost</li>
        <li>Retailers — 10% above cost</li>
        <li>Wholesalers — 5% above cost</li>
      </ul>

      <p>
        The arithmetic itself is simple.
      </p>

      <p>
        The engineering question is bigger: where should that rule live?
        When should it run? Which part of the system should be responsible for
        it? How do I make sure the same rule is applied consistently every
        time a sale is created?
      </p>

      <p>
        That was one of the moments when I started understanding the
        difference between writing code and designing a system.
      </p>

      <h2>Small business rules can change the architecture</h2>

      <p>
        The customer deposit workflow taught me this even more clearly.
      </p>

      <p>
        A customer may start paying for an order without completing the full
        payment immediately.
      </p>

      <p>
        That means the system cannot treat every payment as a completed sale.
        The deposit has to remain separate while the payment is incomplete.
        Only after the required amount has been paid should the transaction
        move into the normal sales flow and generate a receipt.
      </p>

      <p>
        One business rule suddenly affects the database model, user actions,
        sales logic, reporting and receipts.
      </p>

      <p>
        Tutorials had taught me how to create models.
        Nyondo made me ask what those models were supposed to represent.
      </p>

      <h2>Permissions are part of product design</h2>

      <p>
        Nyondo also needed different responsibilities for Admins, Managers
        and Attendants.
      </p>

      <p>
        At first, I approached roles with more custom logic than I needed.
        Through mentoring and code review, I moved toward Django Groups and
        clearer permission-aware behaviour.
      </p>

      <p>
        That taught me an important lesson:
        <strong> custom code is not automatically better code.</strong>
      </p>

      <p>
        Sometimes the framework already provides a stronger and more
        maintainable solution. Good engineering includes knowing when to use
        what already exists instead of rebuilding it yourself.
      </p>

      <h2>Deployment exposed assumptions I could not see locally</h2>

      <p>
        Local development can make a project feel more complete than it
        actually is.
      </p>

      <p>
        My machine already had the database, users, settings and development
        environment I had been working with every day.
      </p>

      <p>
        Production removed many of those assumptions.
      </p>

      <p>
        I had to think about PostgreSQL, environment variables, allowed hosts,
        static files, production configuration and database seeding.
      </p>

      <p>
        At one point, authentication appeared to behave incorrectly after
        deployment because the production database did not contain the same
        users and data as my local environment.
      </p>

      <p>
        That experience changed how I think about deployment.
      </p>

      <p>
        Deployment is not the moment after engineering is finished.
        It is part of engineering because it exposes assumptions the local
        environment can hide.
      </p>

      <h2>Code review taught me to question my first solution</h2>

      <p>
        Nyondo was also one of the first projects where I received detailed
        technical feedback from a mentor.
      </p>

      <p>
        We looked at authentication, role management, redirects, secret
        handling, application structure and other implementation decisions.
      </p>

      <p>
        Sometimes the final code change was small, but the lesson behind it
        was much bigger.
      </p>

      <p>
        I started seeing code review less as someone finding mistakes and more
        as another engineer showing me a different way to think about the
        problem.
      </p>

      <h2>Nyondo changed the questions I ask before building</h2>

      <p>
        Before this project, I often thought about software feature by feature.
      </p>

      <p>Now I am much more likely to ask:</p>

      <ol>
        <li>Who is going to use this?</li>
        <li>What are they actually trying to accomplish?</li>
        <li>What rules already exist outside the software?</li>
        <li>Which workflows depend on each other?</li>
        <li>What should happen when something goes wrong?</li>
        <li>What should the system prevent?</li>
        <li>What assumptions am I making?</li>
      </ol>

      <p>
        Those questions now follow me into other projects, especially as I
        move deeper into AI systems.
      </p>

      <h2>Tutorials taught me how. Nyondo made me ask why.</h2>

      <p>
        I still use tutorials. I still read documentation. I still learn from
        examples.
      </p>

      <p>
        But I no longer expect them to teach me everything about building
        systems for the real world.
      </p>

      <p>
        Some lessons only appear when the requirements are imperfect, the
        workflows depend on each other, production behaves differently from
        localhost, and one small business decision affects several parts of
        the application.
      </p>

      <p>
        Nyondo gave me that experience.
      </p>

      <p>
        It was not simply the project where I learned more Django.
      </p>

      <p>
        It was the project where I began thinking much more seriously about
        what it means to engineer a system.
      </p>
    </>
  )
}
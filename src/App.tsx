import './App.css'

function App() {
  return (
    <main className="page">
      <header className="topbar">
        <div className="brand">
          <div className="fleece-symbol" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div>
            <p className="eyebrow">Golden Fleece ACDE</p>
            <p className="subtext">Do everything. Begin with precision.</p>
          </div>
        </div>
        <a className="cta-link" href="#contact">
          Start a pilot
        </a>
      </header>

      <section className="hero">
        <p className="hero-kicker">Product 01</p>
        <h1>Flawless construction takeoff for every blueprint.</h1>
        <p className="hero-copy">
          Upload any drawing set and receive the exact material quantities
          required to build it. Golden Fleece ACDE is built to do everything,
          but we are starting by solving takeoff completely.
        </p>
        <div className="hero-actions">
          <button type="button">Request a takeoff</button>
          <a href="#how-it-works">See how it works</a>
        </div>
      </section>

      <section className="grid two-column" id="how-it-works">
        <article className="card">
          <h2>What you send</h2>
          <ul>
            <li>PDF blueprint sets and detail sheets</li>
            <li>Bid package notes and project scope</li>
            <li>Trade-specific preferences and standards</li>
          </ul>
        </article>
        <article className="card">
          <h2>What you get back</h2>
          <ul>
            <li>Complete bill of materials by system</li>
            <li>Quantity summary with unit consistency checks</li>
            <li>Line-item traceability to blueprint references</li>
          </ul>
        </article>
      </section>

      <section className="grid three-column">
        <article className="card accent">
          <h3>Coverage</h3>
          <p>Architectural, structural, and MEP takeoff outputs in one place.</p>
        </article>
        <article className="card accent">
          <h3>Reliability</h3>
          <p>
            Cross-sheet validation catches conflicts before numbers reach your
            estimate.
          </p>
        </article>
        <article className="card accent">
          <h3>Speed</h3>
          <p>Move from drawing upload to material-ready output in minutes.</p>
        </article>
      </section>

      <section className="contact" id="contact">
        <h2>Build with certainty from the first count.</h2>
        <p>
          Golden Fleece ACDE is accepting early partners for high-precision
          construction takeoff.
        </p>
        <a href="mailto:hello@goldenfleece.acde">hello@goldenfleece.acde</a>
      </section>
    </main>
  )
}

export default App

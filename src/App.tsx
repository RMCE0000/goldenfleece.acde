import { useState, useRef, useEffect } from 'react'
import './App.css'

function App() {
  const [servicesOpen, setServicesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="page">
      <div className="announcement-banner">
        <div className="banner-inner">
          <span className="banner-dot" />
          <span>Introducing <strong>g0</strong> — the next generation blockchain. The bedrock of Golden Fleece ACDE is live.</span>
        </div>
      </div>

      <header className="topbar">
        <div className="topbar-inner">
          <a href="#" className="brand">
            <div className="fleece-symbol" aria-hidden="true">
              <span /><span /><span />
            </div>
            <span className="brand-name">Golden Fleece <span className="brand-acde">ACDE</span></span>
          </a>

          <nav className="nav">
            <div className="dropdown" ref={dropdownRef}>
              <button
                className="nav-link dropdown-trigger"
                onClick={() => setServicesOpen(!servicesOpen)}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                Services
                <svg className={`chevron ${servicesOpen ? 'open' : ''}`} width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              {servicesOpen && (
                <div className="dropdown-menu">
                  <a href="#g0" className="dropdown-item" onClick={() => setServicesOpen(false)}>
                    <span className="dropdown-item-badge">g0</span>
                    <div>
                      <p className="dropdown-item-title">g0 Blockchain</p>
                      <p className="dropdown-item-desc">Next generation money for the new economy</p>
                    </div>
                  </a>
                </div>
              )}
            </div>
            <a className="nav-link" href="#vision">Vision</a>
            <a className="nav-link" href="#contact">Contact</a>
          </nav>

          <a className="cta-button" href="#contact">
            Get started
          </a>
        </div>
      </header>

      <section className="hero">
        <div className="hero-inner">
          <p className="hero-tagline">A company doing everything.</p>
          <h1>We build the<br />infrastructure of<br /><span className="text-gold">tomorrow.</span></h1>
          <p className="hero-copy">
            Golden Fleece ACDE exists to do everything — to build every layer of technology
            the world needs next. We start where it matters most: money itself.
          </p>
          <div className="hero-actions">
            <a href="#g0" className="btn-primary">Explore g0</a>
            <a href="#vision" className="btn-ghost">Our vision</a>
          </div>
        </div>
        <div className="hero-glow" aria-hidden="true" />
      </section>

      <section className="g0-section" id="g0">
        <div className="section-inner">
          <div className="section-label">
            <span className="label-badge">Product 01</span>
          </div>
          <h2>g0 — next generation money.</h2>
          <p className="section-subtitle">
            The g0 blockchain is the bedrock of the Golden Fleece ACDE ecosystem.
            A chain built from first principles to be fast, final, and fair.
          </p>

          <div className="features-grid">
            <article className="feature-card">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                </svg>
              </div>
              <h3>Instant finality</h3>
              <p>Transactions settle in seconds, not minutes. No waiting, no uncertainty.</p>
            </article>
            <article className="feature-card">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
              </div>
              <h3>Secure by design</h3>
              <p>Consensus built for correctness. Every block is cryptographically final.</p>
            </article>
            <article className="feature-card">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
              </div>
              <h3>Globally accessible</h3>
              <p>Permissionless participation. Anyone, anywhere, any amount.</p>
            </article>
            <article className="feature-card">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                </svg>
              </div>
              <h3>Fair economics</h3>
              <p>No hidden fees, no rent-seeking. A monetary system aligned with its users.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="vision-section" id="vision">
        <div className="section-inner">
          <h2>Everything, eventually.</h2>
          <p className="section-subtitle">
            Golden Fleece ACDE is not a blockchain company. We are a company that does everything.
            The g0 blockchain is our first move — the financial bedrock on which every future
            product will stand.
          </p>
          <div className="pillars-grid">
            <div className="pillar">
              <span className="pillar-number">01</span>
              <h3>Money</h3>
              <p>g0 reimagines what a monetary network can be. Fast, final, and open to all.</p>
            </div>
            <div className="pillar">
              <span className="pillar-number">02</span>
              <h3>Infrastructure</h3>
              <p>Every great system needs great foundations. We build the layers others build on.</p>
            </div>
            <div className="pillar">
              <span className="pillar-number">03</span>
              <h3>Everything else</h3>
              <p>When the bedrock is set, there are no limits. We will do everything.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section" id="contact">
        <div className="section-inner cta-inner">
          <h2>The future starts with g0.</h2>
          <p>
            Join us at the beginning. Golden Fleece ACDE is building everything — and we
            are looking for those who want to build with us.
          </p>
          <div className="cta-actions">
            <a href="mailto:hello@goldenfleece.acde" className="btn-primary">Get in touch</a>
          </div>
          <span className="cta-email">hello@goldenfleece.acde</span>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="fleece-symbol small" aria-hidden="true">
              <span /><span /><span />
            </div>
            <span>Golden Fleece ACDE</span>
          </div>
          <p className="footer-copy">&copy; {new Date().getFullYear()} Golden Fleece ACDE. Do everything.</p>
        </div>
      </footer>
    </div>
  )
}

export default App

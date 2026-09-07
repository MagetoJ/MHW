'use client'

import { useState } from 'react'
import Link from 'next/link'

const values = [
  {
    number: '01',
    title: 'Seasonal & Local',
    description: 'We partner directly with organic farmers and growers across the region to ensure peak freshness and flavor in every dish.',
  },
  {
    number: '02',
    title: 'Honest Craft',
    description: 'From hand-rolled pasta to long-fermentation sourdough, everything on our menu is made in-house from scratch.',
  },
  {
    number: '03',
    title: 'Warm Hospitality',
    description: 'We built Maria Havens as a space for effortless gathering—a place where every guest feels like a regular from day one.',
  },
]

export default function AboutPage() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main>
      {/* Hero Section with Transparent Site Header */}
      <section className="hero" id="home">
        <img
          className="hero-image"
          src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=2200&q=90"
          alt="Chef preparing dishes in the Maria Havens kitchen"
        />
        <div className="hero-shade" />

        <header className="site-header">
          <Link href="/" className="wordmark">MARIA HAVENS<span>•</span></Link>
          <nav className={`nav-links ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
           
            <Link href="/menu" onClick={() => setMenuOpen(false)}>Menu</Link>
            <Link href="/about" className="active" onClick={() => setMenuOpen(false)}>Our story</Link>
            <Link href="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)}>Visit</Link>
          </nav>
          <Link href="/#reserve" className="header-cta">Reserve a table</Link>
          <button
            className="menu-toggle"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
          </button>
        </header>

        <div className="hero-content">
          <p className="eyebrow light">Our Story & Philosophy · Kisii, Kenya</p>
          <h1>Rooted in tradition,<br /><em>built for gathering.</em></h1>
          <Link href="/#reserve" className="button button-light">Reserve a table <span>↗</span></Link>
        </div>
        <p className="hero-note">Seasonal cooking<br />since 2025</p>
      </section>

      {/* Intro Section */}
      <section className="intro section-pad">
        <div className="section-kicker"><span>01</span><span>The Origin</span></div>
        <div className="intro-copy">
          <p className="display-copy">A neighborhood table created around honest food, warm light, and quiet craft.</p>
          <p className="body-copy">
            Maria Havens was born from a simple idea: that the best meals aren’t complex, but considered. Located in the heart of Kisii, we celebrate regional harvests, time-honored cooking techniques, and the joy of shared plates.
          </p>
          <Link href="/menu" className="text-link">Explore our daily menu <span>↗</span></Link>
        </div>
      </section>

      {/* Kitchen & Craft Feature */}
      <section className="story section-pad" id="philosophy">
        <div className="story-image-wrap">
          <img
            src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1200&q=85"
            alt="Plated dish ready for service"
          />
        </div>
        <div className="story-copy">
          <div className="section-kicker"><span>02</span><span>Kitchen & Harvest</span></div>
          <h2>Honest growers.<br /><em>Thoughtful plates.</em></h2>
          <p>
            Our kitchen works hand-in-hand with local farmers, sustainable fisheries, and artisan producers. By honoring what is available today, our menu stays dynamic, vibrant, and deeply connected to the land.
          </p>
          <Link href="/gallery" className="text-link">View our room & kitchen <span>↗</span></Link>
        </div>
      </section>

      {/* Values / Pillars Grid */}
      <section className="menu-section section-pad" id="values">
        <div className="section-heading">
          <div className="section-kicker"><span>03</span><span>Our Pillars</span></div>
          <p>The core values that shape<br className="desktop-break" /> every service and dish.</p>
        </div>
        <div className="menu-list">
          {values.map((item) => (
            <div className="menu-category" key={item.number}>
              <h3>{item.number}</h3>
              <div>
                <div className="dish">
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Visit Section */}
      <section className="visit section-pad" id="visit">
        <div>
          <div className="section-kicker"><span>04</span><span>Find Us</span></div>
          <h2>Come join us.</h2>
        </div>
        <div className="visit-details">
          <div>
            <h3>Maria Havens</h3>
            <p>Hospital Road<br />Kisii, Kenya</p>
            <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="text-link">Get directions <span>↗</span></a>
          </div>
          <div>
            <h3>Hours</h3>
            <p>Tuesday — Saturday<br />5:30pm — 11:00pm</p>
            <p className="muted">Closed Sunday & Monday</p>
          </div>
          <div>
            <h3>Contact</h3>
            <p>
              <a href="tel:+254700000000">+254 700 000 000</a><br />
              <a href="mailto:hello@mariahavens.co.ke">hello@mariahavens.co.ke</a>
            </p>
          </div>
        </div>
      </section>

      {/* Site Footer */}
      <footer className="site-footer">
        <Link href="/" className="wordmark">MARIA HAVENS<span>•</span></Link>
        <div className="footer-center">
          <p>Good food, honestly made.</p>
          <p className="muted">© 2026 Maria Havens Restaurant</p>
        </div>
        <div className="footer-links">
          <a href="#instagram">Instagram</a>
          <a href="mailto:hello@mariahavens.co.ke">Email us</a>
        </div>
      </footer>
    </main>
  )
}
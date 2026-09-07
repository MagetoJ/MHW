'use client'

import { FormEvent, useState } from 'react'
import Link from 'next/link'

export default function ContactPage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="hero" id="home">
        <img
          className="hero-image"
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2200&q=90"
          alt="Warm dining tables prepared for guests"
        />
        <div className="hero-shade" />

        <header className="site-header">
          <Link href="/" className="wordmark">MARIA HAVENS<span>•</span></Link>
          <nav className={`nav-links ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
           
            <Link href="/menu" onClick={() => setMenuOpen(false)}>Menu</Link>
            <Link href="/about" onClick={() => setMenuOpen(false)}>Our story</Link>
            <Link href="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link>
            <Link href="/contact" className="active" onClick={() => setMenuOpen(false)}>Visit</Link>
          </nav>
          <Link href="#reserve" className="header-cta">Reserve a table</Link>
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
          <p className="eyebrow light">Location & Reservations · Kisii, Kenya</p>
          <h1>Come as you are,<br /><em>stay a while.</em></h1>
          <Link href="#reserve" className="button button-light">Reserve a table <span>↗</span></Link>
        </div>
        <p className="hero-note">Hospital Road<br />Kisii, Kenya</p>
      </section>

      {/* Reservation Form Section */}
      <section className="reserve section-pad" id="reserve">
        <div className="reserve-heading">
          <div className="section-kicker light"><span>01</span><span>Reservations</span></div>
          <h2>Your table<br /><em>is waiting.</em></h2>
          <p>Join us for dinner Tuesday through Saturday.<br />We look forward to having you.</p>
        </div>
        <form className="reservation-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label>
              Date
              <input type="date" required />
            </label>
            <label>
              Time
              <select defaultValue="">
                <option value="" disabled>Select time</option>
                <option>5:30 pm</option>
                <option>6:30 pm</option>
                <option>7:30 pm</option>
                <option>8:30 pm</option>
              </select>
            </label>
          </div>
          <div className="form-row">
            <label>
              Party size
              <select defaultValue="">
                <option value="" disabled>How many?</option>
                <option>2 guests</option>
                <option>3 guests</option>
                <option>4 guests</option>
                <option>5+ guests</option>
              </select>
            </label>
            <label>
              Name
              <input type="text" placeholder="Your name" required />
            </label>
          </div>
          <label>
            Email or phone
            <input type="text" placeholder="How can we reach you?" required />
          </label>
          <button className="button button-light form-submit" type="submit">
            {submitted ? 'Request received' : 'Find a table'} <span>↗</span>
          </button>
          <p className="form-note">
            For large groups or private events, please <a href="mailto:hello@mariahavens.co.ke">contact us directly.</a>
          </p>
        </form>
      </section>

      {/* Visit Details */}
      <section className="visit section-pad" id="visit">
        <div>
          <div className="section-kicker"><span>02</span><span>Find Us</span></div>
          <h2>Location & Hours</h2>
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

      {/* Footer */}
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
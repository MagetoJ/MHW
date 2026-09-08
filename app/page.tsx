'use client'

import { FormEvent, useState } from 'react'
import Link from 'next/link'
import { ImageCarousel, CarouselSlide } from '@/components/carousel'

const homeSlides: CarouselSlide[] = [
  {
    src: '/maria-havens.jpeg',
    alt: 'Warmly lit restaurant dining room',
    title: 'Good food, honestly made.',
    subtitle: 'A neighborhood restaurant · Kisii, Kenya',
  },
  {
    src: '/event.jpeg', // Local image inside public/
    alt: 'Atmospheric dining room with intimate tables',
    title: 'Warm & Inviting',
    subtitle: 'Seasonal cooking since 2025',
  },
  {
    src: '/event.jpeg', // Local image inside public/
    alt: 'Atmospheric dining room with intimate tables',
    title: 'Warm & Inviting',
    subtitle: 'Seasonal cooking since 2025',
  },
]

const menuHighlights = {
  Starters: [
    ['Sourdough & cultured butter', 'Warm grain sourdough, smoked sea salt', 'KES 800'],
    ['Charred market vegetables', 'Preserved lemon, whipped tahini, herbs', 'KES 1,600'],
  ],
  Mains: [
    ['Wood-fired half chicken', 'Salsa verde, young greens, pan jus', 'KES 3,400'],
    ['Seared local fish', 'Celery root, brown butter, capers', 'KES 3,600'],
  ],
}

const galleryPreview = [
  { src: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1100&q=85', alt: 'Seasonal vegetables arranged on a ceramic plate', className: 'gallery-tall' },
  { src: 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=85', alt: 'Chef preparing a dish in a warm kitchen', className: '' },
  { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=85', alt: 'Atmospheric dining room with intimate tables', className: '' },
  { src: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1100&q=85', alt: 'Fresh pasta with seasonal ingredients', className: 'gallery-wide' },
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <main>
      {/* Navigation Header */}
      <header className="site-header">
        <Link href="/" className="wordmark">MARIA HAVENS<span>•</span></Link>
        <nav className={`nav-links ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
          <Link href="/menu" onClick={() => setMenuOpen(false)}>Menu</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>Our story</Link>
          <Link href="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>Visit</Link>
        </nav>
        <Link href="#reserve" className="header-cta">Reserve a table</Link>
        <button className="menu-toggle" type="button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          <span />
          <span />
        </button>
      </header>

      {/* Hero Carousel Section */}
      <section className="hero-carousel-wrap relative" id="home">
        <ImageCarousel slides={homeSlides} />
        <p className="hero-note">Seasonal cooking<br />since 2025</p>
      </section>

      {/* Section 01: Intro */}
      <section className="intro section-pad">
        <div className="section-kicker"><span>01</span><span>Our approach</span></div>
        <div className="intro-copy">
          <p className="display-copy">We cook with the seasons, source with care, and keep the room warm.</p>
          <p className="body-copy">Maria Havens is a small restaurant built around the simple pleasure of gathering. Our menu changes often, guided by what is growing nearby and the hands that bring it to us.</p>
          <Link href="/about" className="text-link">Discover our story <span>↗</span></Link>
        </div>
      </section>

      {/* Section 02: Menu Highlights Teaser */}
      <section className="menu-section section-pad" id="menu">
        <div className="section-heading">
          <div className="section-kicker"><span>02</span><span>Menu highlights</span></div>
          <p>A preview of what is best today.<br className="desktop-break" /> Explore our full selection on the menu page.</p>
        </div>
        <div className="menu-list">
          {Object.entries(menuHighlights).map(([category, dishes]) => (
            <div className="menu-category" key={category}>
              <h3>{category}</h3>
              <div>
                {dishes.map(([name, description, price]) => (
                  <div className="dish" key={name}>
                    <div>
                      <h4>{name}</h4>
                      <p>{description}</p>
                    </div>
                    <span>{price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <Link href="/menu" className="button button-dark">View full menu <span>↗</span></Link>
      </section>

      {/* Section 03: Story Teaser */}
      <section className="story section-pad" id="story">
        <div className="story-image-wrap">
          <img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=85" alt="Chef plating a dish in the Maria Havens kitchen" />
        </div>
        <div className="story-copy">
          <div className="section-kicker"><span>03</span><span>Our story</span></div>
          <h2>Make it simple.<br /><em>Make it matter.</em></h2>
          <p>We believe the best meals are the ones that stay with you. Our kitchen works closely with local growers, fishers, and makers to turn honest ingredients into food that feels both familiar and new.</p>
          <Link href="/about" className="text-link">Meet the people behind Maria Havens <span>↗</span></Link>
        </div>
      </section>

      {/* Section 04: Gallery Teaser */}
      <section className="gallery-section section-pad" id="gallery">
        <div className="section-heading">
          <div className="section-kicker"><span>04</span><span>From the room</span></div>
          <p>A few moments from our table<br className="desktop-break" /> to yours.</p>
        </div>
        <div className="gallery-grid">
          {galleryPreview.map((item) => (
            <figure className={item.className} key={item.src}>
              <img src={item.src} alt={item.alt} />
            </figure>
          ))}
        </div>
        <div className="gallery-action">
          <Link href="/gallery" className="button button-dark">View full gallery <span>↗</span></Link>
        </div>
      </section>

      {/* Section 05: Reservations Form */}
      <section className="reserve section-pad" id="reserve">
        <div className="reserve-heading">
          <div className="section-kicker light"><span>05</span><span>Reservations</span></div>
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
            For parties of 7 or more, please <a href="mailto:hello@mariahavens.co.ke">contact us directly.</a>
          </p>
        </form>
      </section>

      {/* Section 06: Visit / Location */}
      <section className="visit section-pad" id="visit">
        <div>
          <div className="section-kicker"><span>06</span><span>Find us</span></div>
          <h2>Come as you are.</h2>
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
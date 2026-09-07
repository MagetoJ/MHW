'use client'

import { FormEvent, useState } from 'react'

const menu = {
  Starters: [
    ['Sourdough & cultured butter', 'Warm grain sourdough, smoked sea salt', '$8'],
    ['Charred market vegetables', 'Preserved lemon, whipped tahini, herbs', '$16'],
    ['Hamachi crudo', 'Green apple, fennel, finger lime', '$21'],
  ],
  Mains: [
    ['Hand-rolled cavatelli', 'Spring peas, pecorino, mint, lemon', '$28'],
    ['Wood-fired half chicken', 'Salsa verde, young greens, pan jus', '$34'],
    ['Seared local fish', 'Celery root, brown butter, capers', '$36'],
  ],
  Desserts: [
    ['Olive oil cake', 'Citrus curd, crème fraîche, sea salt', '$12'],
    ['Dark chocolate pot de crème', 'Cocoa nib, flaky salt, olive oil', '$13'],
  ],
}

const gallery = [
  { src: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1100&q=85', alt: 'Seasonal vegetables arranged on a ceramic plate', className: 'gallery-tall' },
  { src: 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=85', alt: 'Chef preparing a dish in a warm kitchen', className: '' },
  { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=85', alt: 'Atmospheric dining room with intimate tables', className: '' },
  { src: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=900&q=85', alt: 'Plated pasta with herbs and edible flowers', className: '' },
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
      <section className="hero" id="home">
        <img className="hero-image" src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2200&q=90" alt="Warmly lit restaurant dining room" />
        <div className="hero-shade" />
        <header className="site-header">
          <a href="#home" className="wordmark">MARIA HAVENS<span>•</span></a>
          <nav className={`nav-links ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
            <a href="#menu" onClick={() => setMenuOpen(false)}>Menu</a>
            <a href="#story" onClick={() => setMenuOpen(false)}>Our story</a>
            <a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a>
            <a href="#visit" onClick={() => setMenuOpen(false)}>Visit</a>
          </nav>
          <a href="#reserve" className="header-cta">Reserve a table</a>
          <button className="menu-toggle" type="button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span /><span /></button>
        </header>
        <div className="hero-content">
          <p className="eyebrow light">A neighborhood restaurant · Kisii, Kenya</p>
          <h1>Good food,<br /><em>honestly made.</em></h1>
          <a href="#reserve" className="button button-light">Reserve a table <span>↗</span></a>
        </div>
        <p className="hero-note">Seasonal cooking<br />since 2025</p>
      </section>

      <section className="intro section-pad">
        <div className="section-kicker"><span>01</span><span>Our approach</span></div>
        <div className="intro-copy">
          <p className="display-copy">We cook with the seasons, source with care, and keep the room warm.</p>
          <p className="body-copy">Maria Havens is a small restaurant built around the simple pleasure of gathering. Our menu changes often, guided by what is growing nearby and the hands that bring it to us.</p>
          <a href="#story" className="text-link">Discover our story <span>↗</span></a>
        </div>
      </section>

      <section className="menu-section section-pad" id="menu">
        <div className="section-heading"><div className="section-kicker"><span>02</span><span>The menu</span></div><p>Our menu is a reflection of what is<br className="desktop-break" /> best today. It changes with the light.</p></div>
        <div className="menu-list">
          {Object.entries(menu).map(([category, dishes]) => <div className="menu-category" key={category}><h3>{category}</h3><div>{dishes.map(([name, description, price]) => <div className="dish" key={name}><div><h4>{name}</h4><p>{description}</p></div><span>{price}</span></div>)}</div></div>)}
        </div>
        <a href="#reserve" className="button button-dark">View full menu <span>↗</span></a>
      </section>

      <section className="story section-pad" id="story">
        <div className="story-image-wrap"><img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=85" alt="Chef plating a dish in the Maria Havens kitchen" /></div>
        <div className="story-copy"><div className="section-kicker"><span>03</span><span>Our story</span></div><h2>Make it simple.<br /><em>Make it matter.</em></h2><p>We believe the best meals are the ones that stay with you. Our kitchen works closely with local growers, fishers, and makers to turn honest ingredients into food that feels both familiar and new.</p><a href="#visit" className="text-link">Meet the people behind Maria Havens <span>↗</span></a></div>
      </section>

      <section className="gallery-section section-pad" id="gallery">
        <div className="section-heading"><div className="section-kicker"><span>04</span><span>From the room</span></div><p>A few moments from our table<br className="desktop-break" /> to yours.</p></div>
        <div className="gallery-grid">{gallery.map((item) => <figure className={item.className} key={item.src}><img src={item.src} alt={item.alt} /></figure>)}</div>
      </section>

      <section className="reserve section-pad" id="reserve">
        <div className="reserve-heading"><div className="section-kicker light"><span>05</span><span>Reservations</span></div><h2>Your table<br /><em>is waiting.</em></h2><p>Join us for dinner Tuesday through Saturday.<br />We look forward to having you.</p></div>
        <form className="reservation-form" onSubmit={handleSubmit}><div className="form-row"><label>Date<input type="date" required /></label><label>Time<select defaultValue=""><option value="" disabled>Select time</option><option>5:30 pm</option><option>6:30 pm</option><option>7:30 pm</option><option>8:30 pm</option></select></label></div><div className="form-row"><label>Party size<select defaultValue=""><option value="" disabled>How many?</option><option>2 guests</option><option>3 guests</option><option>4 guests</option><option>5+ guests</option></select></label><label>Name<input type="text" placeholder="Your name" required /></label></div><label>Email or phone<input type="text" placeholder="How can we reach you?" required /></label><button className="button button-light form-submit" type="submit">{submitted ? 'Request received' : 'Find a table'} <span>↗</span></button><p className="form-note">For parties of 7 or more, please <a href="mailto:hello@atelier-nyc.com">contact us directly.</a></p></form>
      </section>

      <section className="visit section-pad" id="visit"><div><div className="section-kicker"><span>06</span><span>Find us</span></div><h2>Come as you are.</h2></div><div className="visit-details"><div><h3>Maria Havens</h3><p>46 Mercer Street<br />New York, NY 10013</p><a href="https://maps.google.com" target="_blank" rel="noreferrer" className="text-link">Get directions <span>↗</span></a></div><div><h3>Hours</h3><p>Tuesday — Saturday<br />5:30pm — 11:00pm</p><p className="muted">Closed Sunday & Monday</p></div><div><h3>Contact</h3><p><a href="tel:+12125550148">+1 212 555 0148</a><br /><a href="mailto:hello@atelier-nyc.com">hello@atelier-nyc.com</a></p></div></div></section>

      <footer className="site-footer"><a href="#home" className="wordmark">MARIA HAVENS<span>•</span></a><div className="footer-center"><p>Good food, honestly made.</p><p className="muted">© 2024 Maria Havens Restaurant</p></div><div className="footer-links"><a href="#instagram">Instagram</a><a href="mailto:hello@atelier-nyc.com">Email us</a></div></footer>
    </main>
  )
}

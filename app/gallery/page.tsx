import Link from 'next/link'
import { client, urlFor } from '@/lib/sanity'

interface GalleryItem {
  _id: string
  title?: string
  caption?: string
  image?: {
    asset?: {
      _ref?: string
    }
  }
}

// 1. Force Next.js to fetch fresh Sanity data on every request
export const dynamic = 'force-dynamic'

export default async function GalleryPage() {
  // Query supporting both potential schema name definitions
  const images: GalleryItem[] = await client.fetch(
    `*[_type in ["gallery", "galleryItem"]]{ _id, title, caption, image }`
  )

  return (
    <main>
      <section className="hero" id="home">
        <img
          className="hero-image"
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2200&q=90"
          alt="Atmospheric dining room with intimate tables"
        />
        <div className="hero-shade" />

        <header className="site-header">
          <Link href="/" className="wordmark">MARIA HAVENS<span>•</span></Link>
          <nav className="nav-links" aria-label="Main navigation">
           
            <Link href="/menu">Menu</Link>
            <Link href="/about">Our story</Link>
            <Link href="/gallery" className="active">Gallery</Link>
            <Link href="/contact">Visit</Link>
          </nav>
          <Link href="/#reserve" className="header-cta">Reserve a table</Link>
        </header>

        <div className="hero-content">
          <p className="eyebrow light">Visual Impressions · Kisii, Kenya</p>
          <h1>A glimpse inside<br /><em>our table & kitchen.</em></h1>
          <Link href="/#reserve" className="button button-light">Reserve a table <span>↗</span></Link>
        </div>
        <p className="hero-note">Captured in<br />warm light</p>
      </section>

      <section className="gallery-section section-pad" id="gallery-grid">
        <div className="section-heading">
          <div className="section-kicker"><span>01</span><span>From the Room</span></div>
          <p>Moments of craft, warmth, and quiet gathering<br className="desktop-break" /> captured in service.</p>
        </div>

        <div className="gallery-grid">
          {images.length > 0 ? (
            images.map((item) => {
              const imageRef = item.image?.asset?._ref
              return (
                <figure key={item._id}>
                  {imageRef ? (
                    <img
                      src={urlFor(item.image).width(1200).quality(85).url()}
                      alt={item.title || item.caption || 'Maria Havens Gallery Image'}
                    />
                  ) : (
                    <div style={{ padding: '20px', background: '#222', color: '#fff' }}>
                      [Image reference missing or unattached]
                    </div>
                  )}
                </figure>
              )
            })
          ) : (
            <p className="body-copy">No gallery items found in Sanity. Ensure documents are published.</p>
          )}
        </div>
      </section>

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
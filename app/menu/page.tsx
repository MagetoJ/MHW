import Link from 'next/link'
import { client } from '@/lib/sanity'

interface MenuItem {
  _id: string
  title: string
  description: string
  price: string | number
  category: string
}

export const revalidate = 60 // Revalidate cache every 60 seconds

export default async function MenuPage() {
  const items: MenuItem[] = await client.fetch(
    `*[_type == "menuItem"]{ _id, title, description, price, category }`
  )

  // Group fetched items by category
  const menuGrouped = items.reduce((acc, item) => {
    const category = item.category || 'Other'
    if (!acc[category]) acc[category] = []
    acc[category].push(item)
    return acc
  }, {} as Record<string, MenuItem[]>)

  return (
    <main>
      <section className="hero" id="home">
        <img
          className="hero-image"
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=2200&q=90"
          alt="Freshly prepared culinary dishes"
        />
        <div className="hero-shade" />

        <header className="site-header">
          <Link href="/" className="wordmark">MARIA HAVENS<span>•</span></Link>
          <nav className="nav-links" aria-label="Main navigation">
           
            <Link href="/menu" className="active">Menu</Link>
            <Link href="/about">Our story</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/contact">Visit</Link>
          </nav>
          <Link href="/#reserve" className="header-cta">Reserve a table</Link>
        </header>

        <div className="hero-content">
          <p className="eyebrow light">Seasonal Offerings · Kisii, Kenya</p>
          <h1>Guided by nature,<br /><em>served with care.</em></h1>
          <Link href="/#reserve" className="button button-light">Reserve a table <span>↗</span></Link>
        </div>
        <p className="hero-note">Updated daily<br />at 4:00 pm</p>
      </section>

      <section className="menu-section section-pad" id="menu-items">
        <div className="section-heading">
          <div className="section-kicker"><span>01</span><span>Full Menu</span></div>
          <p>Dishes designed for individual enjoyment<br className="desktop-break" /> or communal sharing.</p>
        </div>

        <div className="menu-list">
          {Object.keys(menuGrouped).length > 0 ? (
            Object.entries(menuGrouped).map(([category, dishes]) => (
              <div className="menu-category" key={category}>
                <h3>{category}</h3>
                <div>
                  {dishes.map((dish) => (
                    <div className="dish" key={dish._id}>
                      <div>
                        <h4>{dish.title}</h4>
                        <p>{dish.description}</p>
                      </div>
                      <span>{typeof dish.price === 'number' ? `KES ${dish.price.toLocaleString()}` : dish.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <p className="body-copy">No menu items found. Please publish items in your Sanity Studio.</p>
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
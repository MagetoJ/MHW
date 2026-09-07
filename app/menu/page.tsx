import Image from 'next/image'
import { client, urlFor } from '@/lib/sanity'

interface MenuItem {
  _id: string
  name: string
  description: string
  price: number
  category: string
  image?: any
  tags?: string[]
}

async function getMenuItems(): Promise<MenuItem[]> {
  try {
    return await client.fetch(`*[_type == "menuItem"]{ _id, name, description, price, category, image, tags }`)
  } catch {
    return []
  }
}

export default async function MenuPage() {
  const items = await getMenuItems()
  const categories = ['starters', 'mains', 'desserts', 'drinks']

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight">Our Menu</h1>
        <p className="text-muted-foreground mt-2">Fresh ingredients cooked with artisanal passion.</p>
      </div>

      {categories.map((cat) => {
        const categoryItems = items.filter((item) => item.category === cat)
        if (categoryItems.length === 0) return null

        return (
          <div key={cat} className="mb-12">
            <h2 className="text-2xl font-bold capitalize border-b pb-2 mb-6">{cat}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {categoryItems.map((dish) => (
                <div key={dish._id} className="flex gap-4 border p-4 rounded-lg bg-card">
                  {dish.image && (
                    <div className="relative w-24 h-24 flex-shrink-0 overflow-hidden rounded-md">
                      <Image
                        src={urlFor(dish.image).url()}
                        alt={dish.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="flex-1">
                    <div className="flex justify-between font-bold">
                      <h3>{dish.name}</h3>
                      <span className="text-primary">${dish.price?.toFixed(2)}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{dish.description}</p>
                    {dish.tags && (
                      <div className="flex gap-1 mt-2">
                        {dish.tags.map((tag) => (
                          <span key={tag} className="text-[10px] bg-secondary px-2 py-0.5 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}
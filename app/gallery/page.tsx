import Image from 'next/image'
import { client, urlFor } from '@/lib/sanity'

interface GalleryItem {
  _id: string
  title: string
  alt?: string
  image: any
}

async function getGalleryItems(): Promise<GalleryItem[]> {
  try {
    return await client.fetch(`*[_type == "galleryItem"]{ _id, title, image, alt }`)
  } catch {
    return []
  }
}

export default async function GalleryPage() {
  const items = await getGalleryItems()

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold">Photo Gallery</h1>
        <p className="text-muted-foreground mt-2">Browse our latest uploads from Sanity CMS.</p>
      </div>

      {items.length === 0 ? (
        <div className="text-center py-16 border border-dashed rounded-lg">
          <p className="text-muted-foreground">No photos found. Add items to Sanity Studio to populate this page.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item._id} className="group overflow-hidden rounded-lg border bg-card shadow-sm hover:shadow-md transition">
              <div className="relative aspect-square w-full overflow-hidden bg-muted">
                {item.image && (
                  <Image
                    src={urlFor(item.image).url()}
                    alt={item.alt || item.title || 'Gallery image'}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                )}
              </div>
              {item.title && (
                <div className="p-3">
                  <p className="text-sm font-medium truncate">{item.title}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
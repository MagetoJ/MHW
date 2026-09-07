import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || ''
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

if (!projectId) {
  console.warn('Warning: NEXT_PUBLIC_SANITY_PROJECT_ID is missing from .env.local')
}

export const client = createClient({
  projectId: projectId || 'placeholder',
  dataset,
  apiVersion: '2024-01-01',
  useCdn: false,
})

const builder = imageUrlBuilder(client)

export const urlFor = (source: any) => {
  if (!source) return { url: () => '' }
  return builder.image(source)
}
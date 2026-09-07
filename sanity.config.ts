import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { menuItemSchema } from './sanity/schemas/menuItem'
import { gallerySchema } from './sanity/schemas/gallery'

export default defineConfig({
  name: 'default',
  title: 'Maria Havens Studio',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  basePath: '/studio',
  plugins: [structureTool()],
  schema: {
    types: [menuItemSchema, gallerySchema],
  },
})
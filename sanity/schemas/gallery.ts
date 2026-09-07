export const gallerySchema = {
  name: 'galleryItem',
  title: 'Gallery Item',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
    },
    { name: 'alt', title: 'Alt Text', type: 'string' },
  ],
}
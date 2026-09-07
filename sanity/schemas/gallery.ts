export const gallerySchema = {
  name: 'gallery', // Must match _type in the query
  title: 'Gallery',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'caption', title: 'Caption', type: 'string' },
    { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
  ],
}
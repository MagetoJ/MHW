export const menuItemSchema = {
  name: 'menuItem',
  title: 'Menu Item',
  type: 'document',
  fields: [
    { name: 'name', title: 'Dish Name', type: 'string' },
    { name: 'description', title: 'Description', type: 'text' },
    { name: 'price', title: 'Price ($)', type: 'number' },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Starters', value: 'starters' },
          { title: 'Main Courses', value: 'mains' },
          { title: 'Desserts', value: 'desserts' },
          { title: 'Cocktails & Drinks', value: 'drinks' },
        ],
      },
    },
    {
      name: 'image',
      title: 'Dish Photo',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'tags',
      title: 'Dietary Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Vegetarian', value: 'Vegetarian' },
          { title: 'Vegan', value: 'Vegan' },
          { title: 'Gluten-Free', value: 'Gluten-Free' },
        ],
      },
    },
  ],
}
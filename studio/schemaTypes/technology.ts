import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'technology',
  title: 'Technologies',
  type: 'document',
  fields: [
    defineField({
      name: 'icon',
      title: 'SVG Icon',
      type: 'image',
      options: {
        accept: 'image/svg+xml',
      },
    }),
    defineField({
      name: 'name',
      title: 'Technology Name',
      type: 'string',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Frontend', value: 'frontend'},
          {title: 'Backend', value: 'backend'},
          {title: 'Tooling', value: 'tooling'},
          {title: 'Design', value: 'design'},
          {title: 'DevOps', value: 'devops'},
        ],
        layout: 'dropdown',
      },
    }),
  ],
})

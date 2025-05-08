import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'certificate',
  title: 'Certificate',
  type: 'document',
  fields: [
    defineField({name: 'badge', title: 'Featured Badge', type: 'image', options: {hotspot: true}}),
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'issuer', title: 'Issued By', type: 'string'}),
    defineField({name: 'issueDate', title: 'Issue Date', type: 'datetime'}),
    defineField({name: 'certificateUrl', title: 'Certificate URL', type: 'url'}),
    defineField({name: 'file', title: 'Certificate File', type: 'file'}),
  ],
})

import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'pocs',
  title: 'POCS',
  type: 'document',
  fields: [
    defineField({
      name: 'page',
      title: 'Page',
      type: 'string',
      validation: (Rule) => [Rule.required().error('Page is required.')],
    }),
    defineField({
      name: 'pocs',
      title: 'POCS',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'member' } }],
    }),
  ],
  preview: {
    select: {
      title: 'page',
    },
  },
});

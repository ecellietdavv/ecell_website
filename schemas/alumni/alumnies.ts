import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'alumnies',
  title: 'Alumnies',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'desc',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'alumnies',
      title: 'Alumnies',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'alumni' } }],
      validation: (Rule) => [
        Rule.required().error('Atleast one alumni is required'),
      ],
    }),
  ],

  preview: {
    select: {
      title: 'title',
    },
  },
});

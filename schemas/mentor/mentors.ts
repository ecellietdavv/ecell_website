import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'mentors',
  title: 'Mentors',
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
      name: 'mentors',
      title: 'Mentors',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'mentor' } }],
      validation: (Rule) => [
        Rule.required().error('Atleast one mentor is required'),
      ],
    }),
  ],

  preview: {
    select: {
      title: 'title',
    },
  },
});

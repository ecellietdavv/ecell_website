import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'teams',
  title: 'Teams',
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
      name: 'teams',
      title: 'Teams',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'team' } }],
      validation: (Rule) => [
        Rule.required().error('Atleast one team is required'),
      ],
    }),
  ],

  preview: {
    select: {
      title: 'title',
    },
  },
});

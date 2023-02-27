import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'partners',
  title: 'Partners',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'partners',
      title: 'Partners',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'partner' } }],
      validation: (Rule) => [
        Rule.required().error('Atleast one partner is required'),
      ],
    }),
  ],

  preview: {
    select: {
      title: 'title',
    },
  },
});

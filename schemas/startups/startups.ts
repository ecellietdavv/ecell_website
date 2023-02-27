import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'startups',
  title: 'Startups',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Startups Category',
      type: 'string',
    }),
    defineField({
      name: 'desc',
      title: 'Startups Category Description',
      type: 'string',
    }),
    defineField({
      name: 'startups',
      title: 'Startups',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'startup' } }],
    }),
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
});

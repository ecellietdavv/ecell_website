import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'steps',
  title: 'Steps',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'steps',
      title: 'Steps',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'step' } }],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
});

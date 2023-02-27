import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'initiatives',
  title: 'Initiatives',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Initiative Category',
      type: 'string',
    }),
    defineField({
      name: 'desc',
      title: 'Initiative Category Description',
      type: 'string',
    }),
    defineField({
      name: 'initiatives',
      title: 'Initiatives',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'initiative' } }],
    }),
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
});

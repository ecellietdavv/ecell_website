import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'events',
  title: 'Events',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Event Category',
      type: 'string',
    }),
    defineField({
      name: 'desc',
      title: 'Event Category Description',
      type: 'string',
    }),
    defineField({
      name: 'events',
      title: 'Events',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'event' } }],
    }),
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
});

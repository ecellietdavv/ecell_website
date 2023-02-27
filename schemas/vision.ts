import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'vision',
  title: 'Vision',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'img',
      title: 'Vision Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'body',
      title: 'Vision Body',
      type: 'blockContent',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'img',
    },
  },
});

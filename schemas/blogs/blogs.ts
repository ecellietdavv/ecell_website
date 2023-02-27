import { defineField } from 'sanity';

export default defineField({
  name: 'blogs',
  title: 'Blogs',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Blogs Category',
      type: 'string',
    }),
    defineField({
      name: 'desc',
      title: 'Blogs Category Description',
      type: 'string',
    }),
    defineField({
      name: 'blogs',
      title: 'Blogs',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'post' } }],
    }),
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
});

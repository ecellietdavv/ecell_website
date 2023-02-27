import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'sectionDivider',
  title: 'Section Divider',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Discription',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
});

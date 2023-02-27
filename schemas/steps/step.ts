import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'step',
  title: 'Step',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'number',
      title: 'Number',
      type: 'number',
      validation: (Rule) => [
        Rule.integer().max(20).error('Must be Integer less than 10!'),
      ],
    }),
    defineField({
      name: 'desc',
      title: 'Description',
      type: 'blockContent',
    }),
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
});

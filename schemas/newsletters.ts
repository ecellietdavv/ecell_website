import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'newsletters',
  title: 'Newsletters',
  type: 'document',
  fields: [
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => [Rule.max(60).warning('Max name limit reached')],
      readOnly: true,
    }),
  ],
  preview: {
    select: {
      title: 'email',
    },
  },
});

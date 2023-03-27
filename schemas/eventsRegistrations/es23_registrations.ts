import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'es23_registrations',
  title: 'E-Summit 23 Registers',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => [
        Rule.required()
          .min(3)
          .error('A name of min. 10 characters is required'),
        // Rule.max(60).warning('Max name limit reached')
      ],
      readOnly: true,
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'profession',
      title: 'Profession',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'college',
      title: 'college',
      type: 'string',
      readOnly: true,
    }),
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
});

import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'contact',
  title: 'Contact',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => [
        Rule.required()
          .min(3)
          .error('A name of min. 10 characters is required'),
        Rule.max(60).warning('Max name limit reached'),
      ],
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
      name: 'message',
      title: 'Message',
      type: 'string',
      validation: (Rule) => [
        Rule.required()
          .min(10)
          .error('A description of min. 10 characters is required'),
        // Rule.max(50).warning('Shorter titles are usually better')
      ],
      readOnly: true,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
});

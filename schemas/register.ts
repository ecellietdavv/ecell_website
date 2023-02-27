import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'register',
  title: 'Bootcamp23 Registers',
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
      name: 'profession',
      title: 'Profession',
      type: 'string',
      validation: (Rule) => [
        Rule.required()
          .min(10)
          .error('A description of min. 10 characters is required'),
        // Rule.max(50).warning('Shorter titles are usually better')
      ],
      readOnly: true,
    }),
    defineField({
      name: 'collage',
      title: 'Collage',
      type: 'string',
      validation: (Rule) => [
        Rule.required()
          .min(10)
          .error('A description of min. 10 characters is required'),
        // Rule.max(50).warning('Shorter titles are usually better')
      ],
      readOnly: true,
    }),
    defineField({
      name: 'hasStartup',
      title: 'Has Startup',
      type: 'boolean',
      readOnly: true,
    }),
    defineField({
      name: 'stage',
      title: 'Stage',
      type: 'string',
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

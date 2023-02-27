import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'ideaAndInvestors',
  title: 'Idea And Investors',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => [
        Rule.required()
          .min(3)
          .error('A title of min. 10 characters is required'),
        Rule.max(60).warning('Max title limit reached'),
      ],
    }),
    defineField({
      name: 'desc',
      title: 'Description',
      type: 'blockContent',
      validation: (Rule) => [],
    }),
    defineField({
      name: 'img',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'action',
      title: 'Action',
      type: 'string',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'buttonName',
      title: 'Button Name',
      type: 'string',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'img',
    },
  },
});

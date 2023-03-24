import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'initiatives',
  title: 'Initiatives',
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
    }),
    defineField({
      name: 'date',
      title: 'Date Initiated',
      type: 'date',
      options: {
        dateFormat: 'DD-MM-YYYY',
        calendarTodayLabel: 'Today',
      },
      validation: (Rule) => [Rule.required().error('Date is required')],
    }),
    defineField({
      name: 'desc',
      title: 'Description',
      type: 'blockContent',
    }),
    defineField({
      name: 'blog',
      title: 'Initiative Blog',
      type: 'reference',
      to: { type: 'blog' },
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
      name: 'flagship',
      title: 'Flagship Initiative',
      type: 'boolean',
      initialValue: false,
    }),
    // defineField({
    //   name: 'collaborative',
    //   title: 'Collaborative Initiative',
    //   type: 'boolean',
    //   initialValue: false,
    // }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'img',
    },
  },
});

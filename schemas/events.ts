import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'events',
  title: 'Events',
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
      title: 'Date Of Event',
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
      title: 'Event Blog',
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
      title: 'Flagship Event',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'collaborative',
      title: 'Collaborative Event',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'img',
    },
  },
});

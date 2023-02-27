import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'initiative',
  title: 'Initiative',
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
      type: 'string',
      validation: (Rule) => [
        Rule.required()
          .min(10)
          .error('A description of min. 10 characters is required'),
        // Rule.max(50).warning('Shorter titles are usually better')
      ],
    }),
    defineField({
      name: 'blog',
      title: 'Initiative Blog',
      type: 'reference',
      to: { type: 'post' },
    }),
    defineField({
      name: 'img',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'img',
    },
  },
});

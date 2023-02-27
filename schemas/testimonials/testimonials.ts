import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'testimonials',
  title: 'Testimonials',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'testimonial' } }],
      validation: (Rule) => [
        Rule.required().error('Atleast one testimonial is required'),
      ],
    }),
  ],

  preview: {
    select: {
      title: 'title',
    },
  },
});

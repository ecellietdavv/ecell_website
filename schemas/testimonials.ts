import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'testimonials',
  title: 'Testimonials',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => [
        Rule.required()
          .min(3)
          .error('A name of min. 10 characters is required'),
        Rule.max(60).warning('Max name limit reached'),
      ],
    },
    {
      name: 'designation',
      title: 'Designation',
      type: 'string',
      validation: (Rule) => [
        Rule.required()
          .min(10)
          .error('A designation of min. 10 characters is required'),
        // Rule.max(50).warning('Shorter titles are usually better')
      ],
    },
    {
      name: 'desc',
      title: 'Description',
      type: 'string',
      validation: (Rule) => [
        Rule.required()
          .min(10)
          .error('A designation of min. 10 characters is required'),
        // Rule.max(50).warning('Shorter titles are usually better')
      ],
    },
    {
      name: 'img',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'social',
      title: 'Social Links',
      type: 'object',
      fields: [
        {
          name: 'email',
          title: 'Email',
          type: 'string',
        },
        {
          name: 'phone',
          title: 'Phone',
          type: 'string',
        },
        defineField({
          name: 'linkedin',
          title: 'Linked In',
          type: 'string',
        }),
        defineField({
          name: 'facebook',
          title: 'Facebook',
          type: 'string',
        }),
        defineField({
          name: 'twitter',
          title: 'Twitter',
          type: 'string',
        }),
      ],
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'img',
    },
  },
});

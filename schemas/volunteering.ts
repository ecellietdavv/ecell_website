import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'volunteering',
  title: 'Volunteering',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'desc',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'link',
      title: 'Gform Link',
      type: 'string',
    }),
    defineField({
      name: 'img',
      title: 'CA Program Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'perks',
      title: 'Perks',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Perk Title',
              type: 'string',
            },
            {
              name: 'desc',
              title: 'Perk Description',
              type: 'blockContent',
            },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'img',
    },
  },
});

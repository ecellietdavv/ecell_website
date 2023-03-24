import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'mentors',
  title: 'Mentors',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => [
        Rule.required().min(3).error('A name of min. 3 characters is required'),
        Rule.max(60).warning('Max name limit reached'),
      ],
    }),
    defineField({
      name: 'designation',
      title: 'Designation',
      type: 'string',
      validation: (Rule) => [
        Rule.required()
          .min(10)
          .error('A designation of min. 10 characters is required'),
        Rule.max(50).warning('Shorter designation are usually better'),
      ],
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      initialValue: 0,
      validation: (Rule) => [
        Rule.required().max(50).error('Set order less than 50.'),
        Rule.positive().error('Order must be possitive.'),
      ],
    }),
    defineField({
      name: 'img',
      title: 'Image',
      type: 'image',
      description:
        'Upload the image of mentor, default value will be a random image.',
      options: {
        hotspot: true,
      },
      initialValue: 'https://i.pravatar.cc/1000',
    }),
    defineField({
      name: 'social',
      title: 'Social Links',
      type: 'object',
      description:
        'Fill the first 3 fields other values are optional, the default value of social links will be https://linktr.ee/ECellIET',
      fields: [
        {
          name: 'email',
          title: 'Email',
          type: 'string',
          initialValue: 'https://linktr.ee/ECellIET',
          description: 'Enter email of mentor.',
          // validation: Rule => [
          //     Rule.required().max(150).error('This is a required field.'),
          // ]
        },
        {
          name: 'phone',
          title: 'Phone',
          type: 'string',
          initialValue: 'https://linktr.ee/ECellIET',
          description: 'Enter phone no. of mentor.',
          // validation: Rule => [
          //     Rule.required().max(150).error('This is a required field.'),
          // ]
        },
        {
          name: 'linkedin',
          title: 'Linked In',
          type: 'string',
          initialValue: 'https://linktr.ee/ECellIET',
          description: 'Enter linkedin of mentor.',
          // validation: Rule => [
          //     Rule.required().max(150).error('This is a required field.'),
          // ]
        },
        {
          name: 'twitter',
          title: 'Twitter',
          type: 'string',
          initialValue: 'https://linktr.ee/ECellIET',
          description: 'Optional',
        },
        {
          name: 'instagram',
          title: 'Instagram',
          type: 'string',
          initialValue: 'https://linktr.ee/ECellIET',
          description: 'Optional',
        },
        {
          name: 'facebook',
          title: 'Facebook',
          type: 'string',
          initialValue: 'https://linktr.ee/ECellIET',
          description: 'Optional',
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'img',
    },
  },
});

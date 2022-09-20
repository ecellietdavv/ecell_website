export default {
    name: 'initiative',
    title: 'Initiative',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: Rule => [
                Rule.required().min(3).error('A name of min. 10 characters is required'),
                Rule.max(60).warning('Max name limit reached')
            ]
        },
        {
            name: 'desc',
            title: 'Description',
            type: 'string',
            validation: Rule => [
                Rule.required().min(10).error('A description of min. 10 characters is required'),
                // Rule.max(50).warning('Shorter titles are usually better')
            ]
        },
        //   {
        //     name: 'slug',
        //     title: 'Slug',
        //     type: 'slug',
        //     options: {
        //       source: 'name',
        //       maxLength: 96,
        //     },
        //   },
        {
            name: 'img',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        //   {
        //     name: 'bio',
        //     title: 'Bio',
        //     type: 'array',
        //     of: [
        //       {
        //         title: 'Block',
        //         type: 'block',
        //         styles: [{title: 'Normal', value: 'normal'}],
        //         lists: [],
        //       },
        //     ],
        //   },
    ],
    preview: {
        select: {
            title: 'name',
            media: 'image',
        },
    },
}

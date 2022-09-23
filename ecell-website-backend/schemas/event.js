export default {
    name: 'event',
    title: 'Event',
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
        {
            name: 'blog',
            title: 'Event Blog',
            type: 'reference',
            to: { type: 'post' }
        },
        {
            name: 'img',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
    ],
    preview: {
        select: {
            title: 'name',
            media: 'image',
        },
    },
}

export default {
    name: 'mentors',
    title: 'Mentors',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'desc',
            title: 'Description',
            type: 'string',
        },
        {
            name: 'mentors',
            title: 'Mentors',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'mentor' } }],
            validation: Rule => [
                Rule.required().error('Atleast one mentor is required'),
            ]
        },
    ],

    preview: {
        select: {
            title: 'title',
        },
    },
}

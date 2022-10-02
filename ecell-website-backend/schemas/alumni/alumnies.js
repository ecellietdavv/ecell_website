export default {
    name: 'alumnies',
    title: 'Alumnies',
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
            name: 'alumnies',
            title: 'Alumnies',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'alumni' } }],
            validation: Rule => [
                Rule.required().error('Atleast one alumni is required'),
            ]
        },
    ],

    preview: {
        select: {
            title: 'title',
        },
    },
}

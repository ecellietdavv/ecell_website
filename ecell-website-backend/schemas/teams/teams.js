export default {
    name: 'teams',
    title: 'Teams',
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
            name: 'teams',
            title: 'Teams',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'team' } }],
            validation: Rule => [
                Rule.required().error('Atleast one team is required'),
            ]
        },
    ],

    preview: {
        select: {
            title: 'title',
        },
    },
}

export default {
    name: 'partners',
    title: 'Partners',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'partners',
            title: 'Partners',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'partner' } }],
            validation: Rule => [
                Rule.required().error('Atleast one partner is required'),
            ]
        },
    ],

    preview: {
        select: {
            title: 'title',
        },
    },
}

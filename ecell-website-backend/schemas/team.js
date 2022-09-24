export default {
    name: 'team',
    title: 'Team',
    type: 'document',
    fields: [
        {
            name: 'year',
            title: 'Year',
            type: 'string',
            validation: Rule => [
                Rule.required().min(4).max(4).error('Enter Year in YYYY format'),
            ]
        },
        {
            name: 'members',
            title: 'Members',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'member' } }],
            validation: Rule => [
                Rule.required().error('Atleast one member is required'),
            ]
        },
    ],
    orderings: [
        {
            title: 'Year Sorting',
            name: 'yearDesc',
            by: [
                { field: 'year', direction: 'desc' }
            ]
        },
    ],

    preview: {
        select: {
            title: 'year',
        },
    },
}

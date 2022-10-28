export default {
    name: 'startups',
    title: 'Startups',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Startups Category',
            type: 'string',
        },
        {
            name: 'desc',
            title: 'Startups Category Description',
            type: 'string',
        },
        {
            name: 'startups',
            title: 'Startups',
            type: 'array',
            of: [{ type: "reference", to: { type: "startup" } }]
        },
    ],
    preview: {
        select: {
            title: 'name',
        },
    },
}

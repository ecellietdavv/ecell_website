export default {
    name: 'steps',
    title: 'Steps',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'steps',
            title: 'Steps',
            type: 'array',
            of: [{ type: "reference", to: { type: "step" } }]
        },
    ],
    preview: {
        select: {
            title: 'title',
        },
    },
}

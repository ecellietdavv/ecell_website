export default {
    name: 'events',
    title: 'Events',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Event Category',
            type: 'string',
        },
        {
            name: 'desc',
            title: 'Event Category Description',
            type: 'string',
        },
        {
            name: 'events',
            title: 'Events',
            type: 'array',
            of: [{ type: "reference", to: { type: "event" } }]
        },
    ],
    preview: {
        select: {
            title: 'name',
        },
    },
}

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
            name: 'categoryEvents',
            title: 'Events',
            type: 'array',
            of: [{ type: "reference", to: { type: "event" } }]
        },
    ],
    preview: {
        select: {
            title: 'name',
            media: 'image',
        },
    },
}

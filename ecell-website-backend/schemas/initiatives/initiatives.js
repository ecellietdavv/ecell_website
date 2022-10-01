export default {
    name: 'initiatives',
    title: 'Initiatives',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Initiative Category',
            type: 'string',
        },
        {
            name: 'desc',
            title: 'Initiative Category Description',
            type: 'string',
        },
        {
            name: 'initiatives',
            title: 'Initiatives',
            type: 'array',
            of: [{ type: "reference", to: { type: "initiative" } }]
        },
    ],
    preview: {
        select: {
            title: 'name',
        },
    },
}

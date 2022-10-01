export default {
    name: 'blogs',
    title: 'Blogs',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Blogs Category',
            type: 'string',
        },
        {
            name: 'desc',
            title: 'Blogs Category Description',
            type: 'string',
        },
        {
            name: 'blogs',
            title: 'Blogs',
            type: 'array',
            of: [{ type: "reference", to: { type: "post" } }]
        },
    ],
    preview: {
        select: {
            title: 'name',
        },
    },
}

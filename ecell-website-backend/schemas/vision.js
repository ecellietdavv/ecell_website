export default {
    name: 'vision',
    title: 'Vision',
    type: 'document',
    fields: [
        {
            name: "name",
            title: 'Name',
            type: 'string',
        },
        {
            name: "img",
            title: "Vision Image",
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'body',
            title: 'Vision Body',
            type: 'blockContent',
        },
    ],
    preview: {
        select: {
            title: 'name',
            media: 'img',
        },
    },
}

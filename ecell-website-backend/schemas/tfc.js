export default {
    name: 'tfc',
    title: 'Think. Feel. Collaborate',
    type: 'document',
    fields: [
        {
            name: "name",
            title: 'Name',
            type: 'string',
        },
        {
            name: "img",
            title: "Image",
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'body',
            title: 'Body',
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

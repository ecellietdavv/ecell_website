import client from 'part:@sanity/base/client'

export default {
    name: 'parallaxImage',
    title: 'Paralax Image',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'img',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
    ],
    preview: {
        select: {
            title: 'name',
            media: 'img'
        },
    },
}

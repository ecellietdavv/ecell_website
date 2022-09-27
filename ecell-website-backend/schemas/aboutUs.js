export default {
    name: 'aboutUs',
    title: 'About Us',
    type: 'document',
    fields: [
        {
            name: 'heading',
            title: 'Heading',
            type: 'string',
        },
        {
            name: "images",
            title: 'About Us Images',
            type: 'object',
            fields: [
                {
                    name: "img1",
                    title: "Image 1",
                    type: 'image',
                    options: {
                        hotspot: true,
                    },
                },
                {
                    name: "img2",
                    title: "Image 2",
                    type: 'image',
                    options: {
                        hotspot: true,
                    },
                },
                {
                    name: "img3",
                    title: "Image 3",
                    type: 'image',
                    options: {
                        hotspot: true,
                    },
                },
            ]
        },
        {
            name: 'body',
            title: 'About Us Content',
            type: 'blockContent',
        },
    ],
    preview: {
        select: {
            title: 'heading',
        },
    },
}

export default {
    name: 'volunteering',
    title: 'Volunteering',
    type: 'document',
    fields: [
        {
            name: "title",
            title: 'Title',
            type: 'string',
        },
        {
            name: "desc",
            title: 'Description',
            type: 'string',
        },
        {
            name: "link",
            title: 'Gform Link',
            type: 'string',
        },
        {
            name: "img",
            title: "CA Program Image",
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'perks',
            title: 'Perks',
            type: 'array',
            of: [{
                type: 'object', fields: [
                    {
                        name: "title",
                        title: 'Perk Title',
                        type: 'string',
                    },
                    {
                        name: "desc",
                        title: 'Perk Description',
                        type: 'blockContent',
                    },
                ]
            }]
        },
    ],
    preview: {
        select: {
            title: 'title',
            media: 'img',
        },
    },
}

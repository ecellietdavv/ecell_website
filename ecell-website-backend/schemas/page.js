export default {
    name: 'page',
    title: 'Page',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'heroHeading',
            title: 'Hero Heading',
            type: 'blockContent',
        },
        {
            name: 'heroDescription',
            title: 'Hero Description',
            type: 'blockContent',
        },
        {
            name: "heroImage",
            title: "Hero Image",
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'metaTags',
            title: 'Meta Tags',
            type: 'array',
            of: [{
                type: "object", fields: [
                    {
                        name: "name",
                        title: "Name",
                        type: "string",
                    },
                    {
                        name: "content",
                        title: "Content",
                        type: "string",
                    }
                ]
            }]
        },
        {
            name: 'pocs',
            title: 'Person Of Contacts',
            type: 'object',
            fields: [
                {
                    name: 'title',
                    title: 'Title',
                    type: 'string',
                },
                {
                    name: 'desc',
                    title: 'Description',
                    type: 'string',
                },
                {
                    name: 'pocs',
                    title: 'Persons Of Contact',
                    type: 'array',
                    of: [{
                        type: "reference",
                        to: { type: "member" }
                    }]
                },
            ]
        },
        {
            name: "sectionImages",
            title: "Section Images",
            type: "array",
            of: [{ type: "reference", to: { type: "parallaxImage" } }]
        }
    ],
    preview: {
        select: {
            title: 'name',
            media: 'heroImage',
        },
    },
}

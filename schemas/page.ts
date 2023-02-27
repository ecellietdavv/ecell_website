import { defineField, defineType } from "sanity"

export default defineType({
    name: 'page',
    title: 'Page',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
        }),
        defineField({
            name: 'heroHeading',
            title: 'Hero Heading',
            type: 'blockContent',
        }),
        defineField({
            name: 'heroDescription',
            title: 'Hero Description',
            type: 'blockContent',
        }),
        defineField({
            name: "heroImage",
            title: "Hero Image",
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
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
        }),
        defineField({
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
        }),
        defineField({
            name: "sectionImages",
            title: "Section Images",
            type: "array",
            of: [{ type: "reference", to: { type: "parallaxImage" } }]
        })
    ],
    preview: {
        select: {
            title: 'name',
            media: 'heroImage',
        },
    },
})

export default {
    name: 'ideaAndInvestors',
    title: 'Idea And Investors',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: Rule => [
                Rule.required().min(3).error('A title of min. 10 characters is required'),
                Rule.max(60).warning('Max title limit reached')
            ]
        },
        {
            name: 'desc',
            title: 'Description',
            type: 'blockContent',
            validation: Rule => [

            ]
        },
        {
            name: 'img',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'action',
            title: 'Action',
            type: 'string',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'buttonName',
            title: 'Button Name',
            type: 'string',
            options: {
                hotspot: true,
            },
        },

    ],
    preview: {
        select: {
            title: 'title',
            media: 'img',
        },
    },
}

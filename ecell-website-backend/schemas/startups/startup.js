export default {
    name: 'startup',
    title: 'Startup',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: Rule => [
                Rule.required().min(3).error('A name of min. 10 characters is required'),
                Rule.max(60).warning('Max name limit reached')
            ]
        },
        {
            name: 'website',
            title: 'Website',
            type: 'string',
        },
        {
            name: 'date',
            title: 'Date Of Establishment',
            type: 'date',
            options: {
                dateFormat: 'DD-MM-YYYY',
                calendarTodayLabel: 'Today'
            },
            validation: Rule => [
                Rule.required().error('Date is required'),
            ]
        },
        {
            name: 'desc',
            title: 'Description',
            type: 'blockContent',
        },
        {
            name: 'blog',
            title: 'Startup Blog',
            type: 'reference',
            to: { type: 'post' }
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
            media: 'img',
        },
    },
}

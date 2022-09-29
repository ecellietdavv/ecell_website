export default {
    name: 'caseStudies',
    title: 'Case Studies',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: Rule => [
                Rule.required().min(3).error('A title of min. 10 characters is required'),
                Rule.max(60).warning('Max name limit reached')
            ],
        },
        {
            name: 'desc',
            title: 'Description',
            type: 'blockContent',
        },
        {
            name: 'videoUrl',
            title: 'Video URL',
            type: 'string',
            validation: Rule => [
                Rule.required().min(10).error('A url of min. 10 characters is required'),
                // Rule.max(50).warning('Shorter titles are usually better')
            ],
        },
    ],
    preview: {
        select: {
            title: 'title',
        },
    },
}

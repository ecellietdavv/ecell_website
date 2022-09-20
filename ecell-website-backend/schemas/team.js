export default {
    name: 'team',
    title: 'Team',
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
            name: 'year',
            title: 'Year',
            type: 'string',
            validation: Rule => [
                Rule.required().min(3).error('A name of min. 10 characters is required'),
                Rule.max(60).warning('Max name limit reached')
            ]
        },
    ],
    preview: {
        select: {
            title: 'name',
            media: 'image',
        },
    },
}

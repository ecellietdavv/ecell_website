export default {
    name: 'newsletters',
    title: 'Newsletters',
    type: 'document',
    fields: [
        {
            name: 'email',
            title: 'Email',
            type: 'string',
            validation: Rule => [
                Rule.required().min(3).error('A name of min. 10 characters is required'),
                Rule.max(60).warning('Max name limit reached')
            ],
            readOnly: true
        },
    ],
    preview: {
        select: {
            title: 'email'
        },
    },
}

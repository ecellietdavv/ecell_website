export default {
    name: 'register',
    title: 'Bootcamp23 Registers',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: Rule => [
                Rule.required().min(3).error('A name of min. 10 characters is required'),
                Rule.max(60).warning('Max name limit reached')
            ],
            readOnly: true
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string',
            validation: Rule => [
                Rule.required().min(3).error('A name of min. 10 characters is required'),
                // Rule.max(60).warning('Max name limit reached')
            ],
            readOnly: true
        },
        {
            name: 'profession',
            title: 'Profession',
            type: 'string',
            validation: Rule => [
                Rule.required().min(10).error('A description of min. 10 characters is required'),
                // Rule.max(50).warning('Shorter titles are usually better')
            ],
            readOnly: true
        },
        {
            name: 'collage',
            title: 'Collage',
            type: 'string',
            validation: Rule => [
                Rule.required().min(10).error('A description of min. 10 characters is required'),
                // Rule.max(50).warning('Shorter titles are usually better')
            ],
            readOnly: true
        },
        {
            name: 'startup',
            title: 'Startup',
            type: 'boolean',
            readOnly: true
        },
        {
            name: 'stage',
            title: 'Stage',
            type: 'string',
            readOnly: true
        },
    ],
    preview: {
        select: {
            title: 'name',
            media: 'image',
        },
    },
}

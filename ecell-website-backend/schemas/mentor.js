export default {
    name: 'mentor',
    title: 'Mentor',
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
            name: 'designation',
            title: 'Designation',
            type: 'string',
            validation: Rule => [
                Rule.required().min(10).error('A designation of min. 10 characters is required'),
                // Rule.max(50).warning('Shorter titles are usually better')
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
            name: 'social',
            title: 'Social Links',
            type: 'object',
            fields: [
                {
                    name: "email",
                    title: 'Email',
                    type: 'string',
                },
                {
                    name: "phone",
                    title: 'Phone',
                    type: 'string',
                },
                {
                    name: "linkedin",
                    title: 'Linked In',
                    type: 'string',
                },
            ],
        },
    ],
    preview: {
        select: {
            title: 'name',
            media: 'img',
        },
    },
}

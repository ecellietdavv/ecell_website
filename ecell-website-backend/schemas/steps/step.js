export default {
    name: 'step',
    title: 'Step',
    type: 'document',
    fields: [
        {
            name: "name",
            title: 'Name',
            type: 'string',
        },
        {
            name: "number",
            title: 'Number',
            type: 'number',
            validation: Rule => [
                Rule.integer().max(20).error('Must be Integer less than 10!'),
            ],
        },
        {
            name: 'desc',
            title: 'Description',
            type: 'blockContent',
        },
    ],
    preview: {
        select: {
            title: 'name',
        },
    },
}

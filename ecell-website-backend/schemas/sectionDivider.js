export default {
    name: 'sectionDivider',
    title: 'Section Divider',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Discription',
            type: 'string',
        },
    ],
    preview: {
        select: {
            title: 'name',
        },
    },
}

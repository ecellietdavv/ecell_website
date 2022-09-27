export default {
    name: 'testimonials',
    title: 'Testimonials',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'testimonials',
            title: 'Testimonials',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'testimonial' } }],
            validation: Rule => [
                Rule.required().error('Atleast one testimonial is required'),
            ]
        },
    ],

    preview: {
        select: {
            title: 'title',
        },
    },
}

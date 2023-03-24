export const getBlogContentQuery = `
    *[_type=="blog" && slug.current == $slug][0]{
        _id,
        publishedAt,
        title,
        author -> {
            name,
            image
        },
        categories[]{
            _type == 'reference' => @->{title}
        },
        'comments': *[
            _type == "comment" &&
            blog.ref == ^._id &&
            approved == true
        ],
        description,
        mainImage,
        slug,
        body
    }
`;

export const getBlogsQuery = `
    *[_type=="blog"]
`;

export const getBlogStaticPathsQuery = `
    *[_type=="blog"]{
        _id,
        slug {
            current
        }
    }
`;

export const getEventsQuery = `
    *[_type=="events"] | order(date desc)
`;

export const getFlagshipEventsQuery = `
    *[_type=="events" && flagship == true] | order(date desc)
`;

export const getCollaborativeEventsQuery = `
    *[_type=="events" && collaborative == true] | order(date desc)
`;

export const getStartupsQuery = `
    *[_type=="startups"] | order(date desc)
`;

export const getInitiativesQuery = `
    *[_type=="initiatives"] | order(date desc)
`;

export const getFlagshipInitiativesQuery = `
    *[_type=="initiatives" && flagship == true] | order(date desc)
`;

export const getPocsQuery = `
    *[_type=="pocs" && page == $page][0] {
        pocs[] {
            _type == 'reference' => @->
        }
    }
`;

export const getCaseStudiesQuery = `
    *[_type=="caseStudies"]
`;

export const getMentorsQuery = `
    *[_type=="mentors"]
`;

export const getAlumniQuery = `
    *[_type=="alumnus"]
`;

export const getTeamsQuery = `
*[_type=="teams"] {
    ...,
    members[] {
        _type == 'reference' => @->
    } | order(order desc) 
} | order(year desc) 
`;

export const getTestimonialsQuery = `
    *[_type=="testimonials"]
`;

export const getPartnersQuery = `
    *[_type=="partners" && businessPartner != true] | order(name)
`;

export const getBusinessPartnersQuery = `
    *[_type=="partners" && businessPartner == true] | order(name)
`;

export const getRegistrationsQuery = `
    *[_type=="register"]
`;

export const checkRegistrationsQuery = `
    *[_type == 'register' && email == $email][0]
`;

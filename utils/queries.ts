export const getPageQuery = `
    *[_type=="page" && name==$name][0]{
        _id,
        name,
        heroImage,
        heroHeading,
        heroDescription,
        metaTags,
        pocs {
            title,
            desc,
            pocs[] {
                _type == 'reference' => @->
            } | order(name)
        },
        sectionImages[] {
                _type == 'reference' => @->
            } | order(_createdAt)
    }
`;

export const getTFCContentQuery = `
    *[_type=="tfc"] | order(name desc) {
        _id,
        name,
        img,
        body
    }
`;

export const getAboutContentQuery = `
    *[_type=="aboutUs"][0] {
        _id,
        heading,
        images,
        body
    }
`;

export const getVisionContentQuery = `
    *[_type=="vision"] {
        _id,
        name,
        img,
        body
    }
`;

export const getEventsQuery = `
    *[_type=="events" && name==$category][0]{
        _id,
        name,
        desc,
        events[]{
            _type == 'reference' => @->{
                ...,
                blog->{slug}
            }
        } | order(date desc)
    }
`;

export const getStartupsQuery = `
    *[_type=="startups" && name==$category][0]{
        _id,
        name,
        desc,
        startups[]{
            _type == 'reference' => @->{
                ...,
                blog->{slug}
            }
        } | order(date desc)
    }
`;

export const getInitiativesQuery = `
    *[_type=="initiatives" && name==$category][0]{
        _id,
        name,
        desc,
        initiatives[]{
            _type == 'reference' => @->{
                ...,
                blog->{slug}
            }
        } | order(date desc)
    }
`;

export const getStepsQuery = `
    *[_type=="steps" && title==$title][0]{
        _id,
        title,
        steps[]{
            _type == 'reference' => @->
        } | order(number)
    }
`;

export const getCaseStudiesQuery = `
    *[_type=="caseStudies"]{
        _id,
        title,
        desc,
        videoUrl
    }
`;

export const getMentorsQuery = `
    *[_type=="mentors"][0]{
        title,
        desc,
        mentors[]{
            _type == 'reference' => @->
        } | order(order desc)
    }
`;

export const getAlumniQuery = `
    *[_type=="alumnies"][0]{
        title,
        desc,
        alumnies[]{
            _type == 'reference' => @->
        } | order(order desc)
}
`;

export const getTeamsQuery = `
*[_type=="teams"][0] {
    _id,
    title,
    desc,
    teams[] {
        _type == 'reference' => @->{
            year,
            members[] {
            _type == 'reference' => @->,
            } | order(order desc)
        }
    } | order(year desc) 
}
`;

export const getTestimonialsQuery = `
    *[_type=="testimonials" && title==$title][0] {
        _id,
        title,
        testimonials[] {
        _type == 'reference' => @->,
        } | order(name)
    }
`;

export const getPartnersQuery = `
    *[_type=="partners" && title==$title][0] {
        _id,
        title,
        partners[] {
        _type == 'reference' => @->,
        } | order(name)
    }
`;
export const getBlogContentQuery = `
    *[_type=="post" && slug.current == $slug][0]{
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
            post.ref == ^._id &&
            approved == true
        ],
        description,
        mainImage,
        slug,
        body
    }
`;

export const getBlogsQuery = `
    *[_type=="blogs" && name==$category][0] {
        _id,
        name,
        desc,
        blogs[]{
            _type == 'reference' => @->{
                slug,
                title, 
                description,
                mainImage,
                publishedAt
            }
        } | order(publishedAt desc) | order(title)
    }
`;

export const getBlogStaticPathsQuery = `
    *[_type=="post"]{
        _id,
        slug {
            current
        }
    }
`;

export const getIdeaAndInvestorsQuery = `
    *[_type=="ideaAndInvestors"]{
        _id,
        title,
        img,
        desc,
        buttonName,
        action
    }
`;

export const getVolunteeringQuery = `
    *[_type=="volunteering"][0]{
        _id,
        title,
        link,
        img,
        desc,
        perks,
    }
`;

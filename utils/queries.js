const getPageQuery = `
    *[_type=="page" && name==$name][0]{
        _id,
        name,
        heroImage,
        heroHeading,
        heroDescription,
        metaTags,
    }
`

const getTFCContentQuery = `
    *[_type=="tfc"] | order(name desc) {
        _id,
        name,
        img,
        body
    }
`

const getAboutContentQuery = `
    *[_type=="aboutUs"][0] {
        _id,
        heading,
        images,
        body
    }
`

const getVisionContentQuery = `
    *[_type=="vision"] {
        _id,
        name,
        img,
        body
    }
`

const getEventsQuery = `
    *[_type=="events" && name==$category][0]{
        _id,
        name,
        events[]{
            _type == 'reference' => @->{
                ...,
                blog->{slug}
            }
        } | order(date desc)
    }
`

const getInitiativesQuery = `
    *[_type=="initiatives" && name==$category][0]{
        _id,
        name,
        initiatives[]{
            _type == 'reference' => @->{
                ...,
                blog->{slug}
            }
        } | order(date desc)
    }
`

const getTeamsQuery = `
    *[_type=="team"] | order(year desc){
        _id,
        year,
        members[] {
        _type == 'reference' => @->,
        } | order(name)
    }
`
const getBlogContentQuery = `
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
`

const getBlogsQuery = `
    *[_type=="blogs" && name==$category][0] {
        _id,
        name,
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
`

const getBlogStaticPathsQuery = `
    *[_type=="post"]{
        _id,
        slug {
            current
        }
    }
`

module.exports = { getPageQuery, getTFCContentQuery, getAboutContentQuery, getVisionContentQuery, getEventsQuery, getInitiativesQuery, getTeamsQuery, getBlogContentQuery, getBlogStaticPathsQuery, getBlogsQuery }
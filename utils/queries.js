const getHomepageMiscContentQuery = `
    *[_type=="homepageMisc"][0]{
        _id,
        name,
        visionMission,
        aboutUs,
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
        members[] | order(name) {
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

const getBlogStaticPathsQuery = `
    *[_type=="post"]{
        _id,
        slug {
            current
        }
    }
`

module.exports = { getHomepageMiscContentQuery, getTFCContentQuery, getEventsQuery, getInitiativesQuery, getTeamsQuery, getBlogContentQuery, getBlogStaticPathsQuery }
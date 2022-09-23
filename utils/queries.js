const getHomepageMiscContentQuery = `
    *[_type=="homepageMisc"][0]{
        _id,
        name,
        visionMission,
        aboutUs,
    }
`

const getTFCContentQuery = `
    *[_type=="tfc"]{
        _id,
        name,
        img,
        body
    }
`

const getFlagshipEventsQuery = `
    *[_type=="events" && name=="Flagship Events"][0]{
        _id,
        name,
        categoryEvents[]{
            _type == 'reference' => @->{
                ...,
                blog->{slug}
            }
        }
    }
`

const getCollaborativeEventsQuery = `
    *[_type=="events" && name=="Collaborative Events"][0]{
        _id,
        name,
        categoryEvents[]{
            _type == 'reference' => @->{
                ...,
                blog->{slug}
            }
        }
    }
`

const getAllEventsQuery = `
    *[_type=="events" && name=="All Events"][0]{
        _id,
        name,
        categoryEvents[]{
            _type == 'reference' => @->{
                ...,
                blog->{slug}
            }
        }
    }
`

const getAllInitiativesQuery = `
    *[_type=="initiatives" && name=="All Initiatives"][0]{
        _id,
        name,
        categoryInitiatives[]{
            _type == 'reference' => @->{
                ...,
                blog->{slug}
            }
        }
    }
`

const getFlagshipInitiativesQuery = `
    *[_type=="initiatives" && name=="Flagship Initiatives"][0]{
        _id,
        name,
        categoryInitiatives[]{
            _type == 'reference' => @->{
                ...,
                blog->{slug}
            }
        }
    }
`
const getTeamsQuery = `
    *[_type=="team"]{
        _id,
        year,
        members[]{
        _type == 'reference' => @->,
        }
    }
`

module.exports = { getHomepageMiscContentQuery, getTFCContentQuery, getFlagshipEventsQuery, getAllEventsQuery, getCollaborativeEventsQuery, getAllInitiativesQuery, getFlagshipInitiativesQuery, getTeamsQuery }
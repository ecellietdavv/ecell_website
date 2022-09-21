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
    *[_type=="event" && flagship == true]{
        _id,
        name,
        desc,
        img,
        slug,
    }
`

const getAllEventsQuery = `
    *[_type=="event"]{
        _id,
        name,
        desc,
        img,
        slug,
    }
`

const getInitiativesQuery = `
    *[_type=="initiative"]{
        _id,
        name,
        desc,
        img,
        date,
    }
`
const getTeamsQuery = `
    *[_type=="team"]{
        _id,
        year,
        'members': *[
        _type=="member" &&
        team._ref == ^._id
        ]
    }
`

module.exports = { getHomepageMiscContentQuery, getTFCContentQuery, getFlagshipEventsQuery, getAllEventsQuery, getInitiativesQuery, getTeamsQuery }
const getEventsQuery = `
    *[_type=="event"]{
        _id,
        name,
        desc,
        img,
    }
`

const getInitiativesQuery = `
    *[_type=="initiative"]{
        _id,
        name,
        desc,
        img,
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

module.exports = {getEventsQuery, getInitiativesQuery, getTeamsQuery}
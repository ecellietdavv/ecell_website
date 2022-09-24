// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import blockContent from './blockContent'
import category from './blogs/category'
import post from './blogs/post'
import author from './blogs/author'
import comment from './blogs/comment'
import blogs from './blogs/blogs'

import member from './teams/member'
import team from './teams/team'

import event from './events/event'
import events from './events/events'

import initiative from './initiatives/initiative'
import initiatives from './initiatives/initiatives'

import contact from './contact'
import homepageMisc from './homepageMisc'
import tfc from './tfc'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    post,
    author,
    category,
    blockContent,
    comment,
    blogs,

    member,
    team,

    initiative,
    initiatives,

    event,
    events,

    homepageMisc,
    contact,
    tfc
  ]),
})

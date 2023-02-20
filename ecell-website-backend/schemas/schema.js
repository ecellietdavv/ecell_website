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
import tfc from './tfc'
import newsletters from './newsletters'
import page from './page'
import vision from './vision'
import sectionDivider from './sectionDivider'
import aboutUs from './aboutUs'
import step from './steps/step'
import steps from './steps/steps'
import testimonial from './testimonials/testimonial'
import testimonials from './testimonials/testimonials'
import partners from './partners/partners'
import partner from './partners/partner'
import caseStudies from './caseStudies'
import mentor from './mentor/mentor'
import ideaAndInvestors from './ideaAndInvestors'
import alumni from './alumni/alumni'
import volunteering from './volunteering'
import alumnies from './alumni/alumnies'
import mentors from './mentor/mentors'
import teams from './teams/teams'
import parallaxImage from './parallaxImage'
import startup from './startups/startup'
import startups from './startups/startups'
import register from './register'

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
    teams,
    alumni,
    alumnies,
    mentor,
    mentors,

    initiative,
    initiatives,

    event,
    events,

    startup,
    startups,

    page,
    parallaxImage,
    tfc,
    aboutUs,
    vision,
    sectionDivider,

    step,
    steps,

    testimonial,
    testimonials,

    partner,
    partners,

    caseStudies,

    contact,
    newsletters,
    ideaAndInvestors,

    volunteering,

    register
  ]),
})

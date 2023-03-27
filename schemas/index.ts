import blockContent from './blockContent';
import category from './blogs/category';
import blog from './blogs/blog';
import author from './blogs/author';
import comment from './blogs/comment';

import member from './teams/member';
import teams from './teams/teams';

import events from './events';
import initiatives from './initiatives';
import startups from './startups';

import contact from './contact';
import newsletters from './newsletters';
import testimonials from './testimonials';
import partners from './partners';
import caseStudies from './caseStudies';
import alumnus from './alumnus';
import mentors from './mentors';

import register from './register';
import pocs from './pocs';
import es23_registrations from './eventsRegistrations/es23_registrations';

// Then we give our schema to the builder and provide the result to Sanity
export const schemaTypes = [
  author,
  category,
  blockContent,
  comment,
  blog,

  member,
  teams,
  pocs,

  alumnus,
  mentors,
  initiatives,
  events,
  startups,
  testimonials,
  partners,

  caseStudies,

  contact,
  newsletters,

  //Event Registrations
  register,
  es23_registrations,
];

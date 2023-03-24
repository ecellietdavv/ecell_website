import { IconType } from 'react-icons/lib';
import { DatetimeComponents, Image, Slug } from 'sanity';

type StoreState = {
  darkMode: boolean;
  openDrawer: boolean;
  openModal: boolean;
  modalContent: { name: string; desc: string };
};

enum StoreActionType {
  DARK_MODE_ON = 'DARK_MODE_ON',
  DARK_MODE_OFF = 'DARK_MODE_OFF',
  CLOSE_DRAWER = 'CLOSE_DRAWER',
  OPEN_DRAWER = 'OPEN_DRAWER',
  CLOSE_MODAL = 'CLOSE_MODAL',
  OPEN_MODAL = 'OPEN_MODAL',
  SET_MODAL_CONTENT = 'SET_MODAL_CONTENT',
}

type StoreAction = {
  type: StoreActionType;
  payload: number;
};

type RegistrationValues = {
  name: string;
  email: string;
  profession: string;
  college: string;
  phone: string;
  hasStartup: boolean;
  stage: string;
};

type ContactValues = {
  name: string;
  email: string;
  message: string;
};

type Event = {
  img: Image;
  name: string;
  date: string;
  desc: object[];
  blog: {
    slug: {
      current: string;
    };
  };
};

type Social = {
  email: string;
  phone: string;
  linkedin: string;
  facebook?: string;
  twitter?: string;
  instagram?: string;
};

type Member = {
  name: string;
  designation: string;
  img: string;
  social: Social;
};

type Blog = {
  title: string;
  description: string;
  slug: Slug;
  author: Author;
  mainImage: Image;
  categories: Category[];
  publishedAt: string;
  body: any;
};

type Initiative = {
  img: Image;
  name: string;
  date: string;
  desc: object[];
  blog: {
    slug: {
      current: string;
    };
  };
};

type Partner = {
  name: string;
  logo: Image;
};

type Testimonial = {
  name: string;
  designation: string;
  desc: string;
  img: Image;
  social: Social;
};

type SocialLinkProps = {
  link: string;
  Icon: IconType;
};

type Alumni = {
  name: string;
  designation: string;
  img: Image;
  social: Social;
};

type Mentor = {};

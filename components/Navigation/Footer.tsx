import React, { useEffect, useState } from 'react';
import {
  BsFacebook,
  BsLinkedin,
  BsYoutube,
  BsTwitter,
  BsInstagram,
} from 'react-icons/bs';
import { FaQuora } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { toast } from 'react-toastify';
import Spinner from '../UtilComponents/Spinner';
import { IconType } from 'react-icons/lib';

type SocialLink = {
  link: string;
  Icon: IconType;
};

function Footer() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful },
  } = useForm<ContactValues>();

  const [processing, setProcessing] = useState<boolean>(false);

  const navLinks = [
    { name: 'Home', link: '/' },
    { name: 'Events', link: '/events' },
    { name: 'Startup', link: '/startups' },
    { name: 'Initiatives', link: '/initiatives' },
    { name: 'Blogs', link: '/blogs' },
    {
      name: 'Business Collaborations',
      link: '/collaborations/business-collaborations',
    },
    {
      name: 'Student Collaborations',
      link: '/collaborations/student-collaborations',
    },
  ];

  const SocialLink = ({ link, Icon }: SocialLink) => {
    return (
      <a
        href={link}
        className="text-gray-800 hover:text-black dark:text-white dark:hover:text-white"
        target="_blank"
        rel="noreferrer"
      >
        <Icon className="w-6 h-6" />
      </a>
    );
  };

  const onSubmit = async (data: ContactValues) => {
    setProcessing(true);
    await fetch('/api/contactUs', {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then(() => {
        toast.success('Thank you for your response!');
      })
      .catch((err) => {
        toast.error(
          'Looks like something went wrong, while submitting you response!'
        );
      })
      .finally(() => {
        setProcessing(false);
      });
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ name: '', email: '', message: '' });
    }
  }, [isSubmitSuccessful, reset]);

  const buttonClass = `text-light mt-3 w-full bg-brand-500 dark:bg-brand-500 dark:hover:bg-brand-600 hover:bg-brand-600 focus:outline-none focus:ring-1 justify-center items-center flex space-x-2 focus:ring-blue-200 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:hover:bg-brand`;

  return (
    <footer id="footer" className="bg-light dark:bg-dark dark:text-white py-4">
      <div className="px-6 max-w-screen-2xl md:px-10 pb-1 mx-auto">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 space-y-8 sm:space-y-0 sm:gap-8 sm:space-x-4 my-8">
          {/* Information  */}
          <div className="flex flex-col">
            <h3 className="text-lg subpixel-antialiased font-semibold">
              About Us
            </h3>
            <p className="mt-4">
              E-Cell IET DAVV - A cradle for the development of the
              Entrepreneurial skills in the excellent minds of IET DAVV. Think,
              feel and collaborate with us, to give a major boost to your
              entrepreneurial journey.
            </p>
          </div>

          {/* Address  */}
          <div className="flex flex-col">
            <h3 className="text-lg subpixel-antialiased font-semibold">
              Address
            </h3>
            <iframe
              title="E-CELL IET DAVV ADDERESS"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230.07993007636696!2d75.88147692727206!3d22.680659945513185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd900c223c9d%3A0x5520eb1a0643d268!2sEcell%20Office!5e0!3m2!1sen!2sin!4v1664038436424!5m2!1sen!2sin"
              className="border-none my-4"
              width="100%"
              height="100%"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <p className="">
              E-Block, Institute of Engineering and Technology, Devi Ahilya
              Vishwavidyalaya, Khandwa Road Indore-452017 (M.P.)
            </p>
            <p className="mt-3">
              ph :<span className="font-semibold">+91 82900 37627</span>
            </p>
          </div>

          {/* Links  */}
          <div className="flex flex-col">
            <h3 className="text-lg subpixel-antialiased font-semibold dark:text-white">
              Links
            </h3>
            <ul className="mt-4 space-y-2 text-dark dark:text-light">
              {navLinks?.map((value, idx) => {
                return (
                  <Link key={idx} href={value?.link}>
                    <li
                      className="w-fit dark:text-white cursor-pointer"
                      key={idx}
                    >
                      {value?.name}
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>

          {/* Contact Us  */}
          <div className="flex flex-col sm:mx-10">
            <h3 className="text-lg subpixel-antialiased font-semibold">
              Contact Us
            </h3>
            <form onSubmit={handleSubmit(onSubmit)} className="mr-3 mt-4">
              <input
                type="text"
                className="block h-10 text-base placeholder:text-base p-2 mt-2 w-full text-dark bg-white rounded-lg border border-mid focus:ring-mid focus:border-mid dark:bg-mid  dark:placeholder-light dark:text-light dark:focus:ring-mid dark:focus:border-brand-600"
                placeholder="Your Name"
                {...register('name', { required: true })}
              />
              <input
                type="email"
                {...register('email', { required: true })}
                className="block h-10 text-base placeholder:text-base p-2 mt-2 w-full text-dark bg-white rounded-lg border border-mid focus:ring-mid focus:border-mid dark:bg-mid  dark:placeholder-light dark:text-light dark:focus:ring-mid dark:focus:border-brand-600"
                placeholder="Email Address"
              />
              <textarea
                {...register('message', { required: true })}
                rows={5}
                className="block resize-none p-2 mt-2 w-full h-20 text-gray-900 bg-white rounded-lg border border-mid focus:ring-brand-500 focus:border-brand-500 dark:bg-mid  dark:placeholder-light dark:text-white dark:focus:ring-brand-500 dark:focus:border-brand-500"
                placeholder="Leave a comment..."
              ></textarea>

              <button type="submit" className={buttonClass}>
                <span>Submit</span>
                {processing && <Spinner />}
              </button>
            </form>
          </div>
        </div>
        <hr className="my-6 border-gray-300 sm:mx-auto dark:border-light lg:my-8" />
        <div className="lg:w-11/12 mx-auto lg:my-8 sm:flex sm:justify-between justify-evenly">
          <span className="text-base text-dark sm:text-center dark:text-light text-center">
            © {new Date().getFullYear()}{' '}
            <a href="#" className="hover:underline text-brand-500">
              E-Cell IET-DAVV
            </a>
            . All Rights Reserved.
          </span>

          <div className="flex mt-4 space-x-6 sm:justify-center justify-evenly sm:mt-0">
            <SocialLink
              Icon={BsFacebook}
              link="https://www.facebook.com/ecell.ietdavv"
            />
            <SocialLink
              Icon={BsTwitter}
              link="https://twitter.com/ecell_ietdavv"
            />
            <SocialLink
              Icon={BsLinkedin}
              link="https://www.linkedin.com/company/e-cell-iet-davv"
            />
            <SocialLink
              Icon={BsInstagram}
              link="https://www.instagram.com/ecell_ietdavv/"
            />
            <SocialLink
              Icon={BsYoutube}
              link="https://www.youtube.com/channel/UCSGBzFVv93LmFR69gLuaYSA"
            />
            <SocialLink
              Icon={FaQuora}
              link="https://www.quora.com/profile/E-Cell-IET-DAVV-1"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

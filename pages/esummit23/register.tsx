import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Spinner from '../../components/UtilComponents/Spinner';
import { Montserrat } from 'next/font/google';
import { NextSeo } from 'next-seo';
import DotsBG from '../../components/ES23/DotsBG';
const montserrat = Montserrat({ subsets: ['latin'] });
import { motion } from 'framer-motion';
import Link from 'next/link';

type RegistrationValues = {
  name: string;
  email: string;
  profession: string;
  college: string;
  phone: string;
  modeOfHear: string;
  age: number;
};

const ES23Register = () => {
  const [processing, setProcessing] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful },
  } = useForm<RegistrationValues>();

  const onSubmit = async (data: RegistrationValues) => {
    setProcessing(true);
    await fetch('/api/es23/register', {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then((res) => {
        res.status == 200
          ? toast.success('Thank you for registering!')
          : toast.info(
              'Already Registered, Please check your email for verification!'
            );
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
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <main
      style={montserrat.style}
      className="bg-black overflow-x-hidden relative text-white flex flex-col justify-center items-center py-16 sm:max-h-[800px] lg:max-h-full"
    >
      <NextSeo
        title="E-Summit 23 Register"
        description="Through the various events conducted by us, we provide our students the opportunities to develop and groom entrepreneurial qualities like the ability to think on their feet, to effectively organize and handle national-level events, and adaptability to efficiently collaborate with different groups. Here are some events conducted by us."
      />

      <DotsBG />

      <div className="grid z-10 grid-cols-1 gap-8 px-8 justify-between w-full lg:py-10 mx-auto md:grid-cols-2 md:px-12 lg:px-16 xl:px-32">
        <div className="flex flex-col xl:max-w-lg">
          <div className="space-y-2">
            <motion.h2
              animate={{ y: [50, 0], opacity: [0, 100] }}
              transition={{ ease: 'easeInOut', delay: 0.5, duration: 2 }}
              className="text-4xl font-bold leading-tight lg:text-5xl"
            >
              <Link href="/esummit23" className="hover:underline">
                <span>E-Summit&apos;23</span>
              </Link>
            </motion.h2>
            <div className="text-gray-400">
              <span>
                Register for E-Summit&apos;23 now to gain valuable insights and
                networking opportunities, and don&apos;t pass up the opportunity
                to connect with industry leaders and improve your skills.
              </span>
            </div>
          </div>
          <motion.div
            animate={{ x: [100, -50, 0], opacity: [0, 100] }}
            transition={{ ease: 'easeInOut', duration: 2 }}
            className=" relative"
          >
            <Image
              src="/assets/logos/ES Logo.svg"
              height={400}
              width={400}
              className=""
              alt="ESummit'23 Logo"
            />
          </motion.div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-1">
            <label className="text-sm">Full name</label>
            <input
              {...register('name', { required: true })}
              type="text"
              placeholder="Your Name Here"
              className="w-full p-3 rounded bg-mid/10 "
            />
          </div>
          <div className="space-y-1">
            <label className="text-sm">Email</label>
            <input
              {...register('email', { required: true })}
              type="email"
              placeholder="Your Email Here"
              className="w-full p-3 rounded bg-mid/10 "
            />
          </div>
          <div className="space-y-1">
            <label className="text-sm">Phone</label>
            <input
              {...register('phone', { required: true })}
              type="text"
              placeholder="+911234567890"
              className="w-full p-3 rounded bg-mid/10 "
            />
          </div>
          <div className="space-y-1">
            <label className="text-sm">Age</label>
            <input
              {...register('age', { required: true })}
              type="number"
              placeholder="18"
              min={10}
              max={80}
              className="w-full p-3 rounded bg-mid/10 "
            />
          </div>
          <div className="space-y-1">
            <label className="text-sm">Profession</label>
            <input
              {...register('profession', { required: true })}
              type="text"
              placeholder="Student, Software Developer ..."
              className="w-full p-3 rounded bg-mid/10 "
            />
          </div>
          <div className="space-y-1">
            <label className="text-sm">College</label>
            <input
              {...register('college', { required: true })}
              type="text"
              placeholder="IET DAVV, Indore"
              className="w-full p-3 rounded bg-mid/10 "
            />
          </div>
          <div className="space-y-1">
            <label className="text-sm">How Did You Hear About Us?</label>
            <select
              {...register('modeOfHear', { required: true })}
              className="w-full p-3 rounded bg-mid/10"
            >
              <option className="text-black" value="Online">
                Online
              </option>
              <option className="text-black" value="Offline">
                Offline
              </option>
              <option className="text-black" value="Friends Referral">
                Friend&apos;s Referral
              </option>
            </select>
          </div>

          <button
            type="submit"
            disabled={processing}
            className="relative w-full justify-center inline-flex items-center px-12 py-3 overflow-hidden lg:text-md xl:text-lg font-medium text-orange-500 border-2 border-orange-500 rounded-full hover:text-white group hover:bg-gray-50 disabled:animate-pulse"
          >
            <span className="absolute left-0 block w-full h-0 transition-all bg-orange-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
            <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <div className="space-x-2 flex">
              <span className="relative">REGISTER</span>
              {processing && <Spinner />}
            </div>
          </button>
        </form>
      </div>
    </main>
  );
};

export default ES23Register;

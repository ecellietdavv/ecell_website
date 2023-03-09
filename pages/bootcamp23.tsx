import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Spinner from '../components/UtilComponents/Spinner';
import Stats from '../components/UtilComponents/Stats';
import { RegistrationValues } from '../types/typings';

const Bootcamp23 = () => {
  const [hasStartup, setHasStartup] = useState<boolean>(false);
  const [processing, setProcessing] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful },
  } = useForm<RegistrationValues>();

  const onSubmit = async (data: RegistrationValues) => {
    setProcessing(true);
    await fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify({ ...data, hasStartup: hasStartup }),
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

  const buttonClass = `text-light mt-3 w-full bg-brand-500 dark:bg-brand-500 dark:hover:bg-brand-600 hover:bg-brand-600 focus:outline-none focus:ring-1 justify-center items-center flex space-x-2 focus:ring-blue-200 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:hover:bg-brand`;

  return (
    <main className="dark:bg-dark dark:text-gray-100 flex flex-col items-center pt-16 px-0 xl:px-10">
      <Image
        height={508}
        width={1485}
        src="/assets/png/BootcampBanner.png"
        alt="Bootcamp Banner"
        className="mx-auto shadow-xl"
      />

      <section>
        <Stats />
      </section>

      <div className="grid min-h-screen grid-cols-1 gap-8 px-8 justify-center items-center mx-auto md:grid-cols-2 md:px-12 lg:px-16 xl:px-32">
        <div className="flex flex-col justify-between">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
              Entrepreneurship Bootcamp 23
            </h2>
            <div className="dark:text-gray-400">
              Register for Entrepreneurship Bootcamp 2023
            </div>
          </div>
          <div className="p-6 py-16 relative">
            <Image
              src="/assets/png/Rocket.png"
              alt="Bootcamp'23 Vector"
              height={513}
              width={487}
              className="object-cover pr-8 lg:pr-12"
            />
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="text-sm">Full name</label>
            <input
              {...register('name', { required: true })}
              type="text"
              placeholder="Your Name Here"
              className="w-full p-3 rounded bg-mid/10 dark:bg-mid"
            />
          </div>
          <div>
            <label className="text-sm">Email</label>
            <input
              {...register('email', { required: true })}
              type="email"
              placeholder="Your Email Here"
              className="w-full p-3 rounded bg-mid/10 dark:bg-mid"
            />
          </div>
          <div>
            <label className="text-sm">Phone</label>
            <input
              {...register('phone', { required: true })}
              type="text"
              placeholder="+911234567890"
              className="w-full p-3 rounded bg-mid/10 dark:bg-mid"
            />
          </div>
          <div>
            <label className="text-sm">Profession</label>
            <input
              {...register('profession', { required: true })}
              type="text"
              placeholder="Student, Software Developer ..."
              className="w-full p-3 rounded bg-mid/10 dark:bg-mid"
            />
          </div>
          <div>
            <label className="text-sm">College</label>
            <input
              {...register('college', { required: true })}
              type="text"
              placeholder="IET DAVV, Indore"
              className="w-full p-3 rounded bg-mid/10 dark:bg-mid"
            />
          </div>
          <div>
            <label className="text-sm">Do you have a Startup</label>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <p>Yes</p>
                <input
                  type="radio"
                  name="startup"
                  onClick={() => {
                    setHasStartup(true);
                  }}
                  className="w-full p-3 rounded bg-mid/10 dark:bg-mid cursor-pointer"
                />
              </div>
              <div className="flex items-center space-x-2">
                <p>No</p>
                <input
                  type="radio"
                  name="startup"
                  onClick={() => {
                    setHasStartup(false);
                  }}
                  className="w-full p-3 rounded bg-mid/10 dark:bg-mid cursor-pointer"
                />
              </div>
            </div>
          </div>
          {hasStartup ? (
            <div>
              <label className="text-sm">What Stage It Is?</label>
              <select
                {...register('stage', { required: true })}
                className="w-full p-3 rounded bg-mid/10 dark:bg-mid"
              >
                <option value="ideation">Ideation</option>
                <option value="concepting">Concepting</option>
                <option value="commitment">Commitment</option>
                <option value="validation">Validation</option>
                <option value="scaling">Scaling</option>
                <option value="establishment">Establishment</option>
              </select>
            </div>
          ) : null}
          <button type="submit" className={buttonClass}>
            <span>Register</span>
            {processing && <Spinner />}
          </button>
        </form>
      </div>
    </main>
  );
};

export default Bootcamp23;

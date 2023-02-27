import React, { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { toast } from 'react-toastify';
import Spinner from '../components/UtilComponents/Spinner';

const Bootcamp23 = () => {
  const [hasStartup, setHasStartup] = useState<boolean>(false);
  const [processing, setProcessing] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    formState: { isSubmitSuccessful },
    formState,
  } = useForm<RegistrationValues>();

  const onSubmit = async (data) => {
    setProcessing(true);
    await fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify({ ...data, hasStartup: hasStartup }),
    })
      .then(() => {
        toast.success('Thank you for registering!');
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
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [formState, reset]);

  const buttonClass = `text-light mt-3 w-full bg-brand-500 dark:bg-brand-500 dark:hover:bg-brand-600 hover:bg-brand-600 focus:outline-none focus:ring-1 justify-center items-center flex space-x-2 focus:ring-blue-200 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:hover:bg-brand`;

  return (
    <div className="grid min-h-screen grid-cols-1 gap-8 px-8 py-16 justify-center items-center mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-dark dark:text-gray-100">
      <div className="flex flex-col justify-between">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
            Entrepreneurship Bootcamp 23
          </h2>
          <div className="dark:text-gray-400">
            Vivamus in nisl metus? Phasellus.
          </div>
        </div>
        <img src="assets/svg/doodle.svg" alt="" className="p-6 h-52 md:h-64" />
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 ng-untouched ng-pristine ng-valid"
      >
        <div>
          <label className="text-sm">Full name</label>
          <input
            {...register('name', { required: true })}
            type="text"
            placeholder="John Doe"
            className="w-full p-3 rounded dark:bg-mid"
          />
        </div>
        <div>
          <label className="text-sm">Email</label>
          <input
            {...register('email', { required: true })}
            type="email"
            className="w-full p-3 rounded dark:bg-mid"
          />
        </div>
        <div>
          <label className="text-sm">Profession</label>
          <input
            {...register('profession', { required: true })}
            type="text"
            className="w-full p-3 rounded dark:bg-mid"
          />
        </div>
        <div>
          <label className="text-sm">Collage</label>
          <input
            {...register('collage', { required: true })}
            type="text"
            className="w-full p-3 rounded dark:bg-mid"
          />
        </div>
        <div>
          <label className="text-sm">Do you have a Startup</label>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <p>Yes</p>
              <input
                type="radio"
                name="Yes"
                id="yes"
                onClick={() => {
                  setHasStartup(true);
                }}
                className="w-full p-3 rounded dark:bg-mid"
              />
            </div>
            <div className="flex items-center space-x-2">
              <p>No</p>
              <input
                type="radio"
                name="No"
                id="no"
                onClick={() => {
                  setHasStartup(false);
                }}
                className="w-full p-3 rounded dark:bg-mid"
              />
            </div>
          </div>
        </div>
        {hasStartup ? (
          <div>
            <label className="text-sm">What Stage It Is?</label>
            <input
              {...register('stage', { required: true })}
              type="text"
              className="w-full p-3 rounded dark:bg-mid"
            />
          </div>
        ) : null}
        <button type="submit" className={buttonClass}>
          <span>Register</span>
          {processing && <Spinner />}
        </button>
      </form>
    </div>
  );
};

export default Bootcamp23;

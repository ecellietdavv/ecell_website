import React, { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { toast } from 'react-toastify';
import Spinner from './Spinner';

function Newsletter() {
    const { register, handleSubmit, formState: { errors }, reset, formState: { isSubmitSuccessful }, formState } = useForm();
    const [processing, setProcessing] = useState(false)

    const [filled, setFilled] = useState(false)

    const onSubmit = async data => {
        setProcessing(true)
        await fetch('/api/newsletter', {
            method: "POST",
            body: JSON.stringify(data),
        }).then(() => {
            toast.success("Thank you for subscribing our newsletters!")
            setFilled(true)
        }).catch((err) => {
            toast.error("Sorry, some error occured while subscribing!")
        }).finally(() => {
            setProcessing(false)
        })
    };

    useEffect(() => {
        if (formState.isSubmitSuccessful) {
            reset({ email: "" });
        }
    }, [formState, reset]);

    return (
        <div className="w-full dark:bg-mid bg-dark text-white">
            {
                !filled ?
                    <div className="container max-w-7xl flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl antialiased font-semibold leading-none text-center dark:text-gray-100">Stay Updated With Us</h1>
                        <p className="pt-2 pb-8 text-xl antialiased text-center dark:text-gray-100">Find out about events, blogs and other news</p>
                        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-row">
                            <input {...register("email", { required: true })} type="email" name='email' placeholder="example@email.com" className="w-3/5 p-3 rounded-l-lg sm:w-2/3" />
                            <button type="submit" className="w-2/5 justify-center p-3 flex items-center space-x-2 font-semibold rounded-r-lg sm:w-1/3 bg-brand-500 dark:text-dark"><span>Subscribe</span>{processing && <Spinner />}</button>
                        </form>
                    </div>
                    :
                    <div className="container max-w-7xl flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl antialiased font-semibold leading-none text-center dark:text-gray-100">Added to Newsletters!</h1>
                        <p className="pt-2 pb-8 text-xl antialiased text-center dark:text-gray-100">Thank you for subscribing our newsletters!</p>
                    </div>
            }
        </div>
    )
}

export default Newsletter
import React, { useState } from 'react';
import PortableText from 'react-portable-text';
import { useForm, SubmitHandler } from 'react-hook-form';
import { sanityClient, urlFor } from '../../utils/sanity';
import Image from 'next/image';
import {
  getBlogContentQuery,
  getBlogStaticPathsQuery,
} from '../../utils/queries';
import moment from 'moment';

function BlogPost(props) {
  const { post } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    await fetch('/api/createComment', {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then(() => {
        console.log(data);
        setSubmitted(true);
      })
      .catch((err) => {
        console.error(err);
        setSubmitted(false);
      });
  };

  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="dark:bg-dark pb-20 dark:text-light">
      <div className="mb-4 md:mb-0 w-full max-w-7xl mx-auto relative h-96">
        <div className="absolute left-0 bottom-0 w-full h-full z-10 blogBannerGradient" />
        <Image
          alt={post?.title}
          layout="fill"
          style={{ objectFit: 'cover' }}
          src={urlFor(post?.mainImage).url()}
          className="absolute left-0 top-0 w-full h-full z-0 object-cover"
        />
        <div className="p-4 absolute bottom-0 left-0 z-20">
          <div className="space-x-2">
            {post?.categories &&
              post?.categories?.map((category, idx) => {
                return (
                  <div
                    key={idx}
                    className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2"
                  >
                    {category?.title}
                  </div>
                );
              })}
          </div>
          <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
            {post?.title}
          </h2>
          <div className="flex mt-3 space-x-3">
            <Image
              alt={post?.author?.name}
              width={40}
              height={40}
              src={urlFor(post?.author?.image).url()}
              className="h-10 w-10 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-gray-200 text-sm">
                {' '}
                {post?.author?.name}{' '}
              </p>
              <p className="font-semibold text-gray-400 text-xs">
                {' '}
                {moment(post?.publishedAt).format('MMMM Do YYYY, h:mm:ss a')}
              </p>
            </div>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto p-5">
        <div className="mt-10">
          <PortableText
            className=""
            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
            content={post?.body}
            serializers={{
              h1: (props) => {
                return <h1 className="text-2xl font-bold my-5" {...props} />;
              },
              h2: (props) => {
                return <h2 className="text-xl font-bold my-5" {...props} />;
              },
              h3: (props) => {
                return <h3 className="text-xl font-bold my-5" {...props} />;
              },
              h4: (props) => {
                return <h4 className="text-xl font-bold my-5" {...props} />;
              },
              li: ({ children }) => {
                return <li className="ml-4 list-disc">{children}</li>;
              },
              link: ({ href, children }) => {
                return (
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    {children}
                  </a>
                );
              },
            }}
          />
        </div>
      </article>

      <hr className="max-w-lg my-5 mx-auto border border-brand-500" />

      {submitted ? (
        <div className="flex flex-col p-10 my-10 bg-brand-500 text-white max-w-2xl mx-auto">
          <h3 className="text-3xl font-bold">
            Thank you for submitting comment!
          </h3>
          <p>Once it will be approved it will apprear below.</p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col p-5 max-w-2xl mx-auto border border-brand-500"
        >
          <h3 className="text-sm text-brand-500">Enjoyed The artical?</h3>
          <h3 className="text-3xl font-bold">Leave a comment below!</h3>
          <hr className="py-3 mt-2" />
          <input
            {...register('_id')}
            type="hidden"
            name="_id"
            value={post?._id}
          />
          <label className="block mb-5">
            <span className="text-grey-700">Name</span>
            <input
              {...register('name', { required: true })}
              className="shadow border rounded form-input px-3 py-2 mt-1 block w-full outline-none"
              placeholder="Your Name"
              type="text"
              name="name"
              id="name"
            />
          </label>
          <label className="block mb-5">
            <span className="text-grey-700">Email</span>
            <input
              {...register('email', { required: true })}
              className="shadow border rounded form-input px-3 py-2 mt-1 block w-full outline-none"
              placeholder="Your Name"
              type="email"
              name="email"
              id="email"
            />
          </label>
          <label className="block mb-5">
            <span className="text-grey-700">Comment</span>
            <textarea
              {...register('comment', { required: true })}
              className="shadow border rounded py-2 px-3 form-textarea mt-1 block w-full outline-none"
              placeholder="Your Name"
              rows={8}
              name="comment"
              id="comment"
            />
          </label>

          {/* Errors  */}
          <div className="flex flex-col p-5">
            {errors.name && (
              <span className="text-red-500">-The Name Field is Required</span>
            )}
            {errors.comment && (
              <span className="text-red-500">
                -The Comment Field is Required
              </span>
            )}
            {errors.email && (
              <span className="text-red-500">-The Email Field is Required</span>
            )}
          </div>

          <input
            type="submit"
            className="bg-brand-500 shadow hover:bg-brand-400 focus:shadow-outline focus:outline-none text-white font-bold rounded cursor-pointer py-2 px-4"
          />
        </form>
      )}

      {/* Comments */}
      <div className="flex flex-col p-10 max-w-2xl mx-auto shadow shadow-brand-500 space-y-2">
        <h3 className="text-4xl">Comments</h3>
        <hr className="pb-2" />
        {post?.comments &&
          post?.comments.map((comment) => {
            return (
              <div className="" key={comment._id}>
                <p>
                  <span className="text-brand-500 font-semibold">
                    {comment.name}:
                  </span>{' '}
                  {comment.comment}
                </p>
              </div>
            );
          })}
      </div>
    </main>
  );
}

export const getStaticPaths = async () => {
  const query = getBlogStaticPathsQuery;

  const posts = await sanityClient.fetch(query);
  const paths = posts.map((post) => ({
    params: {
      slug: post?.slug.current,
    },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps = async ({ params }) => {
  const query = getBlogContentQuery;

  const post = await sanityClient.fetch(query, {
    slug: params?.slug,
  });

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
    revalidate: 60, //updates old cache after 60sec
  };
};

export default BlogPost;

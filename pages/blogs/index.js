import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { getBlogsQuery } from '../../utils/queries'
import { sanityClient, urlFor } from '../../utils/sanity'
import ItemsCarousel from 'react-items-carousel';
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import ViewMore from '../../components/UtilComponents/ViewMore'
import Newsletter from '../../components/UtilComponents/Newsletter'

function index({ featuredBlogs, allBlogs }) {

    const BlogCard = ({ slug, title, description, mainImage, publishedAt, idx }) => {
        return (
            <Link rel="noopener noreferrer" href={`/blogs/${slug?.current}`}>
                <div key={idx} className="max-w-sm mx-auto w-full cursor-pointer sm:max-w-full group hover:no-underline focus:no-underline dark:bg-mid">
                    <div className="h-48 relative w-full rounded dark:bg-gray-500">
                        <Image alt={title} role="presentation" layout='fill' objectFit='cover' src={urlFor(mainImage).url()} />
                    </div>
                    <div className="p-6 space-y-2">
                        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                        <span className="text-xs dark:text-gray-400">{publishedAt}</span>
                        <p>{description}</p>
                    </div>
                </div>
            </Link>
        )
    }

    const FeaturedBlogCard = ({ slug, title, description, mainImage, publishedAt, idx }) => {
        return (
            <Link rel="noopener noreferrer" href={`/blogs/${slug?.current}`}>
                <div key={idx} className="block cursor-pointer max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-mid">
                    <div className="relative w-full rounded lg:col-span-7 h-48 sm:h-96 dark:bg-mid">
                        <Image layout='fill' objectFit='cover' src={urlFor(mainImage).url()} alt={title} />
                    </div>
                    <div className="p-6 space-y-2 lg:col-span-5">
                        <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">{title}</h3>
                        <span className="text-xs dark:text-gray-400">{publishedAt}</span>
                        <p>{description}</p>
                    </div>
                </div>
            </Link>
        )
    }

    const [activeItemIndex, setActiveItemIndex] = useState(0);

    return (
        <section className="dark:bg-dark relative pb-40 dark:text-gray-100">
            <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">

                <ItemsCarousel
                    requestToChangeActive={setActiveItemIndex}
                    activeItemIndex={activeItemIndex}
                    numberOfCards={1}
                    gutter={20}
                    leftChevron={<BiChevronLeft className="text-3xl bg-brand-600 rounded-full text-white" />}
                    rightChevron={<BiChevronRight className="text-3xl bg-brand-600 rounded-full text-white" />}
                    chevronWidth={100}
                    infiniteLoop={true}
                    slidesToScroll={1}
                    showSlither={false}
                    className="w-full"
                >
                    {
                        featuredBlogs?.blogs && featuredBlogs?.blogs?.map((blog, idx) => {
                            const { slug, title, description, mainImage, publishedAt } = blog
                            return (
                                <FeaturedBlogCard slug={slug} title={title} description={description} mainImage={mainImage} publishedAt={publishedAt} idx={idx} />
                            )
                        })
                    }
                </ItemsCarousel>

                <Newsletter/>

                {/* All Blogs  */}
                <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {
                        allBlogs?.blogs && allBlogs?.blogs?.map((blog, idx) => {
                            const { slug, title, description, mainImage, publishedAt } = blog
                            return (
                                <BlogCard slug={slug} title={title} description={description} mainImage={mainImage} publishedAt={publishedAt} idx={idx} />
                            )
                        })
                    }
                </div>
            </div>
            <ViewMore />
        </section>
    )
}

export const getServerSideProps = async () => {
    const featuredBlogs = await sanityClient.fetch(getBlogsQuery, { category: "Featured Blogs" })
    const allBlogs = await sanityClient.fetch(getBlogsQuery, { category: "All Blogs" })

    return {
        props: {
            featuredBlogs,
            allBlogs
        }
    }
}

export default index
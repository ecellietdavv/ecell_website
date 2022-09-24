import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { getBlogsQuery } from '../../utils/queries'
import { sanityClient, urlFor } from '../../utils/sanity'
import ItemsCarousel from 'react-items-carousel';
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import ViewMore from '../../components/UtilComponents/ViewMore'
import Newsletter from '../../components/UtilComponents/Newsletter'
import SectionDivider from '../../components/UtilComponents/SectionDivider'
import SectionDescCard from '../../components/UtilComponents/SectionDescCard'

function Index({ featuredBlogs, allBlogs }) {

    const handleScroll = (id) => {
        var element = document.getElementById(id);
        var headerOffset = 80;
        var elementPosition = element.getBoundingClientRect().top;
        var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }

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

    const [loadMore, setLoadMore] = useState(1)
    const reset = allBlogs?.blogs?.length / 3

    const handleLoading = () => {
        loadMore >= reset ?
            setLoadMore(1)
            :
            setLoadMore(loadMore + 1)
    }

    return (
        <main className="dark:bg-dark dark:text-gray-100">

            {/* Blogs Hero  */}
            <section className="dark:text-gray-100">
                <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl lg:min-h-screen">
                    <h1 className="text-4xl font-bold leading-none sm:text-5xl">Our
                        <span className="dark:text-brand-400 text-brand-500 pl-2">Blogs</span>
                    </h1>
                    <p className="px-8 mt-8 mb-12 text-lg">Cupiditate minima voluptate temporibus quia? Architecto beatae esse ab amet vero eaque explicabo!</p>
                    <div className="flex flex-wrap justify-center">
                        <button className="px-8 py-3 m-2 text-lg font-semibold rounded bg-cyan-400 text-dark" onClick={() => { handleScroll("featured") }}>Featured</button>
                        <button onClick={() => { handleScroll("all") }} className="px-8 py-3 m-2 text-lg border rounded dark:text-gray-50 dark:border-gray-700">All</button>
                    </div>
                </div>
            </section>

            <SectionDivider img="img1" />

            <section id='featured' className=" max-w-[1920px] mx-auto">
                <SectionDescCard name="Featured Blogs" desc="awduihuiawdhiuhwauidhui" />
                <div className="p-6">

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
                    >
                        {
                            featuredBlogs?.blogs && featuredBlogs?.blogs?.map((blog, idx) => {
                                const { slug, title, description, mainImage, publishedAt } = blog
                                return (
                                    <FeaturedBlogCard key={idx} slug={slug} title={title} description={description} mainImage={mainImage} publishedAt={publishedAt} idx={idx} />
                                )
                            })
                        }
                    </ItemsCarousel>
                </div>
                <Newsletter />
            </section>

            <SectionDivider img="img2" />

            {/* All Blogs  */}
            <section id='all' className='container max-w-[1920px] mx-auto'>
                <SectionDescCard name="All Blogs" desc="awduihuiawdhiuhwauidhui" />
                <div style={{ height: 500 * loadMore }} className="relative pb-20 p-6 overflow-hidden">
                    <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            allBlogs?.blogs && allBlogs?.blogs?.map((blog, idx) => {
                                const { slug, title, description, mainImage, publishedAt } = blog
                                return (
                                    <BlogCard key={idx} slug={slug} title={title} description={description} mainImage={mainImage} publishedAt={publishedAt} idx={idx} />
                                )
                            })
                        }
                    </div>
                    <ViewMore action={handleLoading} reset={loadMore >= reset} />
                </div>
                <Newsletter />
            </section>

            <SectionDivider img="img3" />
        </main>
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

export default Index
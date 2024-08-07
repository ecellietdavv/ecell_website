import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { getBlogsQuery } from '../../utils/queries';
import { sanityClient, urlFor } from '../../utils/sanity';
import ItemsCarousel from 'react-items-carousel';
import { BiChevronRight, BiChevronLeft } from 'react-icons/bi';
import ViewMore from '../../components/UtilComponents/ViewMore';
import Newsletter from '../../components/UtilComponents/Newsletter';
import SectionDivider from '../../components/UtilComponents/SectionDivider';
import SectionDescCard from '../../components/UtilComponents/SectionDescCard';
import PageNavigation from '../../components/Navigation/PageNavigation';
import HeroPage from '../../components/UtilComponents/HeroPage';
import moment from 'moment';
import { Blog } from '../../types/typings';

function Index({ featuredBlogs, allBlogs }) {
  const BlogCard = (blog: Blog) => {
    const { slug, title, description, mainImage, publishedAt } = blog;
    return (
      <Link rel="noopener noreferrer" href={`/blogs/${slug?.current}`}>
        <div className="max-w-sm mx-auto w-full cursor-pointer sm:max-w-full group hover:no-underline focus:no-underline dark:bg-mid">
          <div className="h-48 relative w-full rounded dark:bg-gray-500">
            <Image
              alt={title}
              role="presentation"
              layout="fill"
              style={{ objectFit: 'cover' }}
              src={urlFor(mainImage).url()}
            />
          </div>
          <div className="sm:p-6 py-6 space-y-2">
            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
              {title}
            </h3>
            <span className="text-xs dark:text-gray-400">
              {moment(publishedAt).format('MMMM Do YYYY, h:mm:ss a')}
            </span>
            <p>{description}</p>
          </div>
        </div>
      </Link>
    );
  };

  // const FeaturedBlogCard = ({
  //   slug,
  //   title,
  //   description,
  //   mainImage,
  //   publishedAt,
  //   idx,
  // }) => {
  //   return (
  //     <Link rel="noopener noreferrer" href={`/blogs/${slug?.current}`}>
  //       <div
  //         key={idx}
  //         className="block cursor-pointer max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-mid"
  //       >
  //         <div className="relative w-full rounded lg:col-span-7 h-48 sm:h-96 dark:bg-mid">
  //           <Image
  //             layout="fill"
  //             style={{objectFit: "cover"}}
  //             src={urlFor(mainImage).url()}
  //             alt={title}
  //           />
  //         </div>
  //         <div className="sm:p-6 py-6 space-y-2 lg:col-span-5">
  //           <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
  //             {title}
  //           </h3>
  //           <span className="text-xs dark:text-gray-400">
  //             {moment(publishedAt).format('MMMM Do YYYY, h:mm:ss a')}
  //           </span>
  //           <p>{description}</p>
  //         </div>
  //       </div>
  //     </Link>
  //   );
  // };

  const [activeItemIndex, setActiveItemIndex] = useState(0);

  const [loadMore, setLoadMore] = useState(1);
  const reset = allBlogs?.blogs?.length / 3;

  const handleLoading = () => {
    loadMore >= reset ? setLoadMore(1) : setLoadMore(loadMore + 1);
  };

  const navItems = [
    { name: 'Blogs Home', scrollTo: 'blogsHome' },
    { name: 'Featured Blogs', scrollTo: 'featuredBlogs' },
    { name: 'All Blogs', scrollTo: 'allBlogs' },
  ];

  return (
    <main className="dark:bg-dark dark:text-gray-100 relative">
      <PageNavigation navItems={navItems}></PageNavigation>

      <HeroPage
        id="blogsHome"
        heroHeading="Our Latest Blogs!"
        heroDescription="Curious about what exactly happens in our events? Read it all out in our infotainment blogs."
        heroImage="/assets/png/Rocket.png"
        button1={{ name: 'Featured Blogs', scrollTo: 'featuredBlogs' }}
        button2={{ name: 'All Blogs', scrollTo: 'allBlogs' }}
      />

      <SectionDivider img={sectionImages[0]} />

      <section id="featuredBlogs" className="mx-auto">
        <SectionDescCard name="Featured Blogs" desc="Our fetured blogs" />
        <div className="px-6 xl:px-0 py-10 sm:py-20 max-w-7xl mx-auto">
          <ItemsCarousel
            requestToChangeActive={setActiveItemIndex}
            activeItemIndex={activeItemIndex}
            numberOfCards={1}
            gutter={20}
            leftChevron={
              <BiChevronLeft className="text-3xl bg-brand-600 rounded-full text-white" />
            }
            rightChevron={
              <BiChevronRight className="text-3xl bg-brand-600 rounded-full text-white" />
            }
            chevronWidth={100}
            infiniteLoop={true}
            slidesToScroll={1}
            showSlither={false}
          >
            {featuredBlogs?.blogs &&
              featuredBlogs?.blogs?.map((blog, idx) => {
                const { slug, title, description, mainImage, publishedAt } =
                  blog;
                return (
                  <FeaturedBlogCard
                    key={idx}
                    slug={slug}
                    title={title}
                    description={description}
                    mainImage={mainImage}
                    publishedAt={publishedAt}
                    idx={idx}
                  />
                );
              })}
          </ItemsCarousel>
        </div>
        <Newsletter />
      </section>

      <SectionDivider img={sectionImages[1]} />

      {/* All Blogs  */}
      <section id="allBlogs" className="container max-w-screen-2xl mx-auto">
        <SectionDescCard name="All Blogs" desc="All of our listed blogs" />
        <div
          style={{ height: 700 * loadMore }}
          className="relative pb-20 p-6 overflow-hidden"
        >
          <div className="grid py-10 sm:py-20 justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {allBlogs?.blogs &&
              allBlogs?.blogs?.map((blog, idx) => {
                const { slug, title, description, mainImage, publishedAt } =
                  blog;
                return (
                  <BlogCard
                    key={idx}
                    slug={slug}
                    title={title}
                    description={description}
                    mainImage={mainImage}
                    publishedAt={publishedAt}
                    idx={idx}
                  />
                );
              })}
          </div>
          <ViewMore action={handleLoading} reset={loadMore >= reset} />
        </div>
        <Newsletter />
      </section>

      <SectionDivider img={sectionImages[2]} />
    </main>
  );
}

export const getServerSideProps = async () => {
  const featuredBlogs = await sanityClient.fetch(getBlogsQuery, {
    category: 'Featured Blogs',
  });
  const allBlogs = await sanityClient.fetch(getBlogsQuery, {
    category: 'All Blogs',
  });
  const {
    heroHeading,
    heroDescription,
    heroImage,
    metaTags,
    pocs,
    sectionImages,
  } = await sanityClient.fetch(getPageQuery, { name: 'Blogs' });

  return {
    props: {
      featuredBlogs,
      allBlogs,
      heroHeading,
      heroDescription,
      heroImage,
      metaTags,
      pocs,
      sectionImages,
    },
  };
};

export default Index;

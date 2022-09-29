import React from "react";
import { useState } from "react";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import ItemsCarousel from 'react-items-carousel';

const CaseStudies = ({ caseStudies }) => {
    const [activeItemIndex, setActiveItemIndex] = useState(0);

    return (
        <section className="dark:bg-dark">
            {/* <SectionDescCard name="Events" desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. At
						repellendus est blanditiis consequuntur iusto nostrum consectetur
						voluptate ratione, exercitationem sint maxime nisi incidunt? A
						voluptate deleniti eligendi odit fugit nemo tempore atque nisi ab!"/> */}

            <div className="w-full">
                <div className="max-w-7xl mx-auto justify-center px-6 items-center py-10">
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
                        {caseStudies && caseStudies?.map((value, idx) => {
                            const { videoUrl, title } = value
                            return (
                                <div className="w-full h-60 sm:h-80 md:h-96 lg:h-[720px]">
                                    <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${videoUrl}`} title={title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                </div>
                            );
                        })}
                    </ItemsCarousel>
                </div>
            </div>
        </section>
    );
};

export default CaseStudies;

import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { useState } from "react";
import Image from "next/image";
import { urlFor } from "../../utils/sanity";
import SectionDescCard from "../UtilComponents/SectionDescCard";
import GradientButton from "../UtilComponents/GradientButton";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import ItemsCarousel from 'react-items-carousel';
import { useEffect } from "react";

const Event = ({ events, id }) => {
	const EventCard = ({ img, name, desc, idx }) => {
		const [show, setShow] = useState(false);
		return (
			<div
				className="flex group cursor-pointer flex-col text-center text-dark dark:text-light justify-start items-center h-full space-y-2 bg-light rounded-lg border border-light shadow-md dark:bg-dark dark:border-mid"
				key={idx}
				onClick={() => setShow(!show)}
			>
				<div className="h-52 bg-light overflow-hidden">
					<Image loading="lazy"
						src={img}
						alt={name}
						height={490}
						width={600}
						className="object-cover group-hover:scale-105 ease-in-out duration-200"
					/>
				</div>

				<h3
					className={`${show ? "text-brand-500 text-xl border-brand-500" : "text-xl"
						}`}
				>
					{name}
				</h3>
				{show ? <p className="px-6">{desc}</p> : null}
				{show ? (
					<ArrowDropUpIcon
						className={`${show ? "text-brand-500" : ""
							} text-4xl text-center w-full`}
					/>
				) : (
					<ArrowDropDownIcon
						className={`${show ? "text-brand-500" : ""
							} text-4xl text-center w-full`}
					/>
				)}
			</div>
		);
	};

	const [activeItemIndex, setActiveItemIndex] = useState(0);
	const [width, setWidth] = useState(1080)

	useEffect(() => {
		setWidth(window?.innerWidth)
	}, [width])

	const getNoOfCards = () => {
		if (width >= 1080) return 3
		else if (width >= 640) return 2
		else return 1
	}

	return (
		<section id={id} className="dark:bg-dark">
			<SectionDescCard name="Events" desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. At
						repellendus est blanditiis consequuntur iusto nostrum consectetur
						voluptate ratione, exercitationem sint maxime nisi incidunt? A
						voluptate deleniti eligendi odit fugit nemo tempore atque nisi ab!"/>

			<div className="w-full">
				<div className="max-w-7xl mx-auto justify-center px-6 items-center py-10">
					<ItemsCarousel
						requestToChangeActive={setActiveItemIndex}
						activeItemIndex={activeItemIndex}
						numberOfCards={getNoOfCards()}
						gutter={20}
						leftChevron={<BiChevronLeft className="text-3xl bg-brand-600 rounded-full text-white" />}
						rightChevron={<BiChevronRight className="text-3xl bg-brand-600 rounded-full text-white" />}
						chevronWidth={100}
						infiniteLoop={true}
						slidesToScroll={1}
						showSlither={width >= 640}
					>
						{events && events?.map((value, idx) => {
							const { img, name, desc } = value;
							return (
								<EventCard img={urlFor(img).url()} name={name} desc={desc} idx={idx} key={idx} />
							);
						})}
					</ItemsCarousel>
				</div>
			</div>

			<div className="flex justify-center item-center pb-10">
				<GradientButton name="All Events" link="/events" Icon={AiOutlineArrowRight} />
			</div>
		</section>
	);
};

export default Event;

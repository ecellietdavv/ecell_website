import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { useState } from "react";
import Image from "next/image";
import { urlFor } from "../utils/sanity";
import SectionDescCard from "./SectionDescCard";
import GradientButton from "./GradientButton";
import { AiOutlineArrowRight } from "react-icons/ai";

const Event = ({ events }) => {
	const EventCard = ({ img, name, desc, idx }) => {
		const [show, setShow] = useState(false);
		return (
			<div
				className="flex group flex-col text-center text-dark dark:text-light justify-start items-center h-full space-y-2 bg-light rounded-lg border border-light shadow-md dark:bg-dark dark:border-mid"
				key={idx}
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
							} text-4xl text-center w-full cursor-pointer`}
						onClick={() => setShow(!show)}
					/>
				) : (
					<ArrowDropDownIcon
						className={`${show ? "text-brand-500" : ""
							} text-4xl text-center w-full cursor-pointer`}
						onClick={() => setShow(!show)}
					/>
				)}
			</div>
		);
	};

	return (
		<section id="events" className="dark:bg-dark">
			<SectionDescCard name="Events" desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. At
						repellendus est blanditiis consequuntur iusto nostrum consectetur
						voluptate ratione, exercitationem sint maxime nisi incidunt? A
						voluptate deleniti eligendi odit fugit nemo tempore atque nisi ab!"/>

			<div className="w-full">
				<div className="grid max-w-7xl mx-auto justify-center px-[5%] md:px-4 items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-10">
					{events && events?.map((value, idx) => {
						const { img, name, desc } = value;
						return (
							// eslint-disable-next-line react/jsx-key
							<EventCard img={urlFor(img).url()} name={name} desc={desc} idx={idx} key={idx} />
						);
					})}
				</div>
			</div>

			<div className="flex justify-center item-center pb-10">
				<GradientButton name="All Events" link="/events" Icon={AiOutlineArrowRight} />
			</div>
		</section>
	);
};

export default Event;

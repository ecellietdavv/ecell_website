import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { useState } from "react";
import Image from "next/image";

const Event = () => {
	const card = [
		{
			img: "https://xsgames.co/randomusers/avatar.php?g=male",
			desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente omnis, obcaecati deserunt porro possimus eius illum recusandae impedit, necessitatibus repellendus sit dolores at iure perspiciatis ipsa perferendis. Perferendis, est? Tempora eligendi commodi quis neque facere ducimus ea earum error eaque quas rem id veritatis delectus laborum odit, ad nostrum deleniti?",
			name: "Event Name",
		},
		{
			img: "https://xsgames.co/randomusers/avatar.php?g=female",
			desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente omnis, obcaecati deserunt porro possimus eius illum recusandae impedit, necessitatibus repellendus sit dolores at iure perspiciatis ipsa perferendis. Perferendis, est? Tempora eligendi commodi quis neque facere ducimus ea earum error eaque quas rem id veritatis delectus laborum odit, ad nostrum deleniti?",
			name: "Event Name",
		},
		{
			img: "https://xsgames.co/randomusers/avatar.php?g=male",
			desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente omnis, obcaecati deserunt porro possimus eius illum recusandae impedit, necessitatibus repellendus sit dolores at iure perspiciatis ipsa perferendis. Perferendis, est? Tempora eligendi commodi quis neque facere ducimus ea earum error eaque quas rem id veritatis delectus laborum odit, ad nostrum deleniti?",
			name: "Event Name",
		},
	];
	const EventCard = ({ img, name, desc, idx }) => {
		const [show, setShow] = useState(false);
		return (
			<div
				className="flex flex-col text-center text-dark dark:text-light justify-start items-center h-full space-y-2 w-[90vw] md:w-[46vw] lg:w-[30vw] md:mx-auto lg:mx-auto bg-light rounded-lg border border-light shadow-md dark:bg-dark dark:border-mid"
				key={idx}
			>
				<div className="h-52 bg-light overflow-hidden">
					<Image
						src={img}
						alt={name}
						height={490}
						width={600}
						className="object-cover"
					/>
				</div>

				<h3
					className={`${
						show ? "text-brand-500 font-bold text-2xl border-brand-500 w-fit" : "font-semibold text-xl"
					}`}
				>
					{name}
				</h3>
				{show ? <p>{desc}</p> : null}
				{show ? (
					<ArrowDropUpIcon
						className={`${
							show ? "text-brand-500" : ""
						} text-4xl text-center w-full cursor-pointer`}
						onClick={() => setShow(!show)}
					/>
				) : (
					<ArrowDropDownIcon
						className={`${
							show ? "text-brand-500" : ""
						} text-4xl text-center w-full cursor-pointer`}
						onClick={() => setShow(!show)}
					/>
				)}
			</div>
		);
	};

	return (
		<section>
			<div className="bg-brand-500 h-[50vh] py-48 md:py-0  md:h-[44vh] flex flex-col items-center justify-center text-light space-y-5">
				<h3 className="text-4xl bg-brand-500 w-full text-center font-bold">Events</h3>
				<p className="text-base leading-[1.45rem] w-4/6 text-center mx-auto">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. At
					repellendus est blanditiis consequuntur iusto nostrum consectetur
					voluptate ratione, exercitationem sint maxime nisi incidunt? A
					voluptate deleniti eligendi odit fugit nemo tempore atque nisi ab!
				</p>
			</div>

			<div className="grid justify-center px-[5%] md:px-4 items-center dark:bg-dark grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-10">
				{card?.map((value, idx) => {
					const { img, name, desc } = value;
					return (
						// eslint-disable-next-line react/jsx-key
						<EventCard img={img} name={name} desc={desc} idx={idx} />
					);
				})}
			</div>
		</section>
	);
};

export default Event;

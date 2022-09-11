import React from "react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { useState } from "react";
import Image from "next/image";

const Event = () => {
	const card = [
		{ img: "https://xsgames.co/randomusers/avatar.php?g=male", desc: "lorem20jjkshvdhfuhihhn", name: "Event Name" },
		{ img: "https://xsgames.co/randomusers/avatar.php?g=female", desc: "ldfbdfvb20jjkshvdhfuhi", name: "Event Name" },
		{ img: "https://xsgames.co/randomusers/avatar.php?g=male", desc: "lorem20jcvzvzcvfdjkshv", name: "Event Name" },
	];

	const EventCard = ({ img, name, desc, idx }) => {
		const [show, setShow] = useState(false)
		return (
			<div className="flex flex-col text-center text-dark dark:text-white justify-start items-center h-full space-y-2" key={idx}>

				<div className="h-52 bg-white overflow-hidden">
					<Image src={img} alt={name} height={400} width={600} className="object-cover"/>
				</div>

				<h3 className={`${show? "text-brand-500 border-b-2 border-brand-500 w-fit": ""}`}>{name}</h3>
				{show ? <p>{desc}</p> : null}
				{
					show ?
						<ArrowDropUpIcon className={`${show? "text-brand-500": ""} text-4xl text-center w-full cursor-pointer`} onClick={() => setShow(!show)} />
						:
						<ArrowDropDownIcon className={`${show? "text-brand-500": ""} text-4xl text-center w-full cursor-pointer`} onClick={() => setShow(!show)} />
				}
			</div>
		)
	}

	return (
		<section>
			<div className="mt-10">
				<div className="bg-brand-500 h-[50vh] flex flex-col items-center justify-center text-white space-y-5">
					<h3 className="text-4xl text-center font-bold">Events</h3>
					<p className="text-base w-4/6 text-center mx-auto">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. At
						repellendus est blanditiis consequuntur iusto nostrum consectetur
						voluptate ratione, exercitationem sint maxime nisi incidunt? A
						voluptate deleniti eligendi odit fugit nemo tempore atque nisi ab!
					</p>
				</div>

				<div className="grid justify-center px-10 md:px-20 items-center dark:bg-dark grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto py-10">
					{card?.map((value, idx) => {
						const { img, name, desc } = value
						return (
							<EventCard img={img} name={name} desc={desc} idx={idx} />
						)
					})}
				</div>
			</div>
		</section>
	);
};

export default Event;

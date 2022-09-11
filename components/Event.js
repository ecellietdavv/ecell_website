import React from "react";
import PlayForWorkIcon from "@mui/icons-material/PlayForWork";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import { useState } from "react";
const Event = () => {
	const [show, setShow] = useState("false");
	const card = [
		{ img: "NEC2020.eee471b5.jpeg", cont: "lorem20jjkshvdhfuhihhn" },
		{ img: "NEC2020.eee471b5.jpeg", cont: "ldfbdfvb20jjkshvdhfuhihhn" },
		{ img: "NEC2020.eee471b5.jpeg", cont: "lorem20jcvzvzcvfdjkshvdhfuhihhn" },
	];
	//         let elem = document.getElementById("box");
	//         function slide() {
	//         elem.classList.toggle('hide');
	// }
	// let hidee = document.getElementById("hide");
	// const description = () => {
	// 	if (show == "false") {
	// 		hidee.classList.add("h-0");
	// 		setShow("true");
	// 	} else {
	// 		hidee.classList.remove("h-12");
	// 		setShow("false");
	// 	}
	// };
	return (
		<>
			<div className="pt-20">
				<div className="bg-brand-500 space-y-5 pb-5">
					<h3 className="text-4xl text-center font-bold">Events</h3>
					<p className="text-base w-4/6 text-center mx-auto">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. At
						repellendus est blanditiis consequuntur iusto nostrum consectetur
						voluptate ratione, exercitationem sint maxime nisi incidunt? A
						voluptate deleniti eligendi odit fugit nemo tempore atque nisi ab!
					</p>
				</div>
				<div className="grid grid-cols-3 space-x-3 mx-auto">
					{card?.map((value, ind) => {
						return (
							<div className="mx-auto align-middle justify-center items-center" key={ind}>
								<img src="NEC2022.jpeg" className="" alt="" />
								{show ? (
									<PlayForWorkIcon
										className="cursor-pointer mx-auto"
										// onClick={description}
									/>
								) : (
									<UpgradeIcon
										className="cursor-pointer mx-auto"
										// onClick={description}
									/>
								)}
								<div className="hide" id="hide">
									{value.cont}
								</div>
								{/* <button className="" onclick="slide()">hi</button>
                            <div className="" id="hide">{value.cont}</div> */}
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default Event;

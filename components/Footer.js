import React from "react";
import { BsFacebook, BsLinkedin, BsYoutube, BsTwitter, BsInstagram } from 'react-icons/bs'
import { FaQuora } from 'react-icons/fa'
import { useForm, SubmitHandler } from 'react-hook-form'

function Footer() {

	const { register, handleSubmit, formState: { errors } } = useForm();

	const navLinks = [
		{ name: "Home", link: "home" },
		{ name: "About", link: "about" },
		{ name: "Events", link: "events" },
		{ name: "Initiatives", link: "initiatives" },
		{ name: "Our Team", link: "teams" },
	];

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

	const SocialLink = ({ link, Icon }) => {
		return (
			<a
				href={link}
				className="text-gray-800 hover:text-black dark:text-white dark:hover:text-white"
				target="_blank"
				rel="noreferrer"
			>
				<Icon className="w-6 h-6" />
			</a>
		)
	}

	const onSubmit = async data => {
		await fetch('/api/contactUs', {
			method: "POST",
			body: JSON.stringify(data),
		}).then(() => {
			console.log(data)
		}).catch((err) => {
			console.log(err)
		})
	};

	return (
		<footer id="footer" className="bg-light dark:bg-dark dark:text-white py-4">
			<div className="px-10 pb-1 mx-auto">
				<div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 space-y-8 sm:space-y-0 sm:gap-8 sm:space-x-4 my-8">

					{/* Information  */}
					<div className="flex flex-col">
						<h3 className="text-lg subpixel-antialiased font-semibold">About Us</h3>
						<p className="mt-4">E-Cell IET DAVV - A cradle for the development of the Entrepreneurial skills in the excellent minds of IET DAVV. Think, feel and collaborate with us, to give a major boost to your entrepreneurial journey.</p>
					</div>

					{/* Address  */}
					<div className="flex flex-col">
						<h3 className="text-lg subpixel-antialiased font-semibold">Address</h3>
						<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.2656451339208!2d75.87759341496154!3d22.681152885127144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcc03e36712d%3A0xb6f3c2bf734a7c!2sIET%20DAVV!5e0!3m2!1sen!2sin!4v1662713117254!5m2!1sen!2sin" className="border-none my-4" width="100%" height="100%" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
						<p className="">Institute of Engineering and Technology
							Devi Ahilya Vishwavidyalaya
							Khandwa Road Indore-452017 (M.P.)</p>
						<p className="mt-3">ph :<span className="font-semibold">+91 9617316561</span></p>
					</div>

					{/* Links  */}
					<div className="flex flex-col">
						<h3 className="text-lg subpixel-antialiased font-semibold dark:text-white">Links</h3>
						<ul className="mt-4 space-y-2 text-dark dark:text-light">
							{
								navLinks?.map((value, idx) => {
									return (
										<li className="w-fit dark:text-white cursor-pointer" onClick={() => handleScroll(value.link)} key={idx}>{value.name}</li>
									)
								})
							}
						</ul>
					</div>

					{/* Contact Us  */}
					<div className="flex flex-col sm:mx-10">
						<h3 className="text-lg subpixel-antialiased font-semibold">
							Contact Us
						</h3>
						<form onSubmit={handleSubmit(onSubmit)} className="mr-3 mt-4">
							<input
								type="text"
								name="name"
								className="block h-10 text-base placeholder:text-base p-2 mt-2 w-full text-dark bg-white rounded-lg border border-mid sm:text-xs focus:ring-mid focus:border-mid dark:bg-mid  dark:placeholder-light dark:text-light dark:focus:ring-mid dark:focus:border-brand-600"
								placeholder="Your Name"
								{...register("name", { required: true })}
							/>
							<input
								type="email"
								name="email"
								{...register("email", { required: true })}
								className="block h-10 text-base placeholder:text-base p-2 mt-2 w-full text-dark bg-white rounded-lg border border-mid sm:text-xs focus:ring-mid focus:border-mid dark:bg-mid  dark:placeholder-light dark:text-light dark:focus:ring-mid dark:focus:border-brand-600"
								placeholder="Email Address"
							/>
							<textarea {...register("message", { required: true })} rows="5" className="block resize-none p-2 mt-2 w-full h-20 text-sm text-gray-900 bg-white rounded-lg border border-mid focus:ring-brand-500 focus:border-brand-500 dark:bg-mid  dark:placeholder-light dark:text-white dark:focus:ring-brand-500 dark:focus:border-brand-500" placeholder="Leave a comment..."></textarea>
							<button type="submit" className="text-light mt-3 w-full bg-brand-500 dark:bg-brand-500 dark:hover:bg-brand-600 hover:bg-brand-600 focus:outline-none focus:ring-1 focus:ring-blue-200 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:hover:bg-brand">
								Submit
							</button>
						</form>

					</div>
				</div>
				<hr className="my-6 border-gray-300 sm:mx-auto dark:border-light lg:my-8" />
				<div className="lg:w-11/12 mx-auto lg:my-8 sm:flex sm:justify-between justify-evenly">
					<span className="text-base text-dark sm:text-center dark:text-light text-center">
						© {new Date().getFullYear()}{" "}
						<a href="#" className="hover:underline text-brand-500">
							E-Cell IET-DAVV
						</a>
						. All Rights Reserved.
					</span>

					<div className="flex mt-4 space-x-6 sm:justify-center justify-evenly sm:mt-0">
						<SocialLink Icon={BsFacebook} link="https://www.facebook.com/ecell.ietdavv" />
						<SocialLink Icon={BsTwitter} link="https://twitter.com/ecell_ietdavv" />
						<SocialLink Icon={BsLinkedin} link="https://www.linkedin.com/company/e-cell-iet-davv" />
						<SocialLink Icon={BsInstagram} link="https://www.instagram.com/ecell_ietdavv/" />
						<SocialLink Icon={BsYoutube} link="https://www.youtube.com/channel/UCSGBzFVv93LmFR69gLuaYSA" />
						<SocialLink Icon={FaQuora} link="https://www.quora.com/profile/E-Cell-IET-DAVV-1" />
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;

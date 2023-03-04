import React from "react";

const Idea = () => {
	return (
		<>
			<div className="grid lg:grid-cols-2 grid-cols-1">
				<div className="flex flex-col lg:w-[50vw] w-full px-auto lg:px-0 bg-mid">
					<h3 className="text-center mx-auto leading-[3.9rem] text-white text-6xl my-4 w-72 font-semibold">WANT TO INVEST?</h3>
					<p className="lg:w-80 sm:w-[50vw] w-[90vw] lg:mb-4 mb-8 text-sm text-center text-white mx-auto">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
						distinctio maiores necessitatibus ex molestiae nemo tenetur, dolorum
						iste molestias mollitia! Facere ex qui modi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
						distinctio maiores necessitatibus ex molestiae nemo tenetur, dolorum
						iste molestias mollitia! Facere ex qui modi?
					</p>
                    <button className="w-[50%] mx-auto font-medium bg-slate-50 text-brand-600 h-12 rounded-3xl lg:mb-4 mb-6">
                        Click Here
                    </button>
				</div>
				<div className="flex flex-col-reverse lg:w-[50vw] w-full px-auto lg:px-0 bg-brand-600">
                <h3 className="text-center mx-auto leading-[3.9rem] text-white text-6xl my-4 w-72 font-semibold">HAVE AN IDEA?</h3>
					<p className="lg:w-80 sm:w-[50vw] w-[90vw] text-sm text-center text-white mx-auto">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
						distinctio maiores necessitatibus ex molestiae nemo tenetur, dolorum
						iste molestias mollitia! Facere ex qui modi? distinctio maiores necessitatibus ex molestiae nemo tenetur, dolorum
						iste molestias mollitia! Facere ex qui modi?
					</p>
                    <button className="w-[50%] mt-6 lg:mt-0 mx-auto font-medium bg-slate-50 text-brand-600 h-12 rounded-3xl mb-4">
                        Click Here
                    </button>
                </div>
			</div>
		</>
	);
};

export default Idea;

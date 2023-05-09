import React from 'react';
import profileImg from "../../images/profile-img.jpg";

const LeftProfilePanel = () => {
    return (
		<section className="profile-left-section w-2/12 min-h-[500px] rounded-md  bg-[#e9e5fd4d] border border-[#e9e5fd] box-shadow2">
			<div className="flex flex-col items-center mt-2">
				<div className="w-16 h-16 border border-[#ccc2ffe5] rounded-full p-[2px]">
					<img
						src={profileImg}
						className="w-full h-full rounded-full"
						alt=""
					/>
				</div>
				<p className="text-xs font-semibold text-slate-500 drop-shadow-lg">
				ABC Fleet Services
				</p>
			</div>
			<div className="mt-8">
				<p className="text-center font-semibold text-slate-500 drop-shadow-lg">
					Summary
				</p>
				<div className="text-[12px]  box-shadow2 px-2 py-4 rounded-sm">
					<p className="flex justify-between">
						<span>District:</span> <span>Mulugu</span>
					</p>
					<p className="flex justify-between">
						<span>Email:</span> <span>contact@abc.com</span>
					</p>
					<p className="flex justify-between">
						<span>Phone:</span> <span>+91 9860431431</span>
					</p>
				</div>
			</div>
			<div className="mt-8 p-2">
				<p className="border-b-[1px] border-[#e9e5fdc7] font-semibold text-slate-500 drop-shadow-lg">
					Profile:
				</p>
				<p className="text-[12px] text-justify">
				ABC Fleet Services is a fleet operator in Telangana that provides transportation services for both cargo and passengers using electric 3-wheelers. The company has a fleet of 9 vehicles, consisting of 3 cargo 3-wheelers and 6 passenger 3-wheelers. ABC Fleet Services has been in operation for several years, but only recently switched to an all-electric fleet in 2020.

ABC Fleet Services financed the purchase of its electric vehicles through bank loans. Despite the higher upfront cost of electric vehicles compared to their petrol or diesel counterparts, the company recognized the long-term savings potential and made the investment in electric vehicles.
				</p>
				<br />
				<p className="text-[12px] text-justify">
				Since ABC Fleet Services primarily operates within the city, the use of electric 3-wheelers is a convenient and practical option. Electric 3-wheelers are ideal for city transport due to their small size and maneuverability, which makes them well-suited for navigating through narrow city streets and congested traffic.

By transitioning to an all-electric fleet, ABC Fleet Services has significantly reduced its carbon footprint and helped to promote sustainability. The company recognizes the importance of reducing emissions and promoting sustainable practices, and is proud to be a leader in the industry.
				</p>
			</div>
		</section>
	);
};

export default LeftProfilePanel;
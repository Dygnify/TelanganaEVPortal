import React from 'react';
import galleryImg1 from "../../images/FAME.jpg";
import galleryImg2 from "../../images/telangana-state.png";

const RightProfilePanel = () => {
    return (
		<section className="profile-right-section w-2/12 min-h-[500px] rounded-md  bg-[#e9e5fd4d] border border-[#e9e5fd] p-2 box-shadow2">
			<h2 className=" text-sm border-b-2 border-[#e9e5fdc7] font-semibold text-slate-500 drop-shadow-lg">
				Eligible Subsidies
			</h2>
			<div className="">
				<div className=" border border-[#cbeaff59]    p-2 pt-1 cursor-pointer mt-4 box-shadow2">
					<p className="text-[12px] mt-1 text-justify">
					Faster Adoption and Manufacturing of Electric Vehicles - FAME II (GOI)
					</p>
					<img
						src={galleryImg1}
						alt=""
						className="w-full border border-sky-200"
					/>
				</div>
				<div className=" border border-[#cbeaff59]    p-2 pt-1 cursor-pointer mt-4 box-shadow2">
					<p className="text-[12px] mt-1 text-justify">
						Telangana Electric Vehicle & Energy Storage Policy
					</p>
					<img
						src={galleryImg2}
						alt=""
						className="w-full border border-sky-200"
					/>
				</div>
			</div>
		</section>
	);
};

export default RightProfilePanel;
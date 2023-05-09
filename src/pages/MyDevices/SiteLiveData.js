import React from "react";
import dailyEnergy from "../../images/devices/dailyEnergy.png";
import totalEnergy from "../../images/devices/totalEnergy.png";
import outputActivePower from "../../images/devices/outputActivePower.png";
import specific_field from "../../images/devices/specific field.png";
import cufImg from "../../images/devices/cuf.png";

const SiteLiveData = () => {
	return (
		<div className="flex justify-center gap-4 mt-4 mx-2">
			<div className="flex justify-between rounded-[5px] py-2 px-1 bg-[#F3FFFE] box-shadow6   w-2/12">
				<div>
					<img
						src={outputActivePower}
						alt=""
						className="mix-blend-multiply"
					/>
				</div>
				<div className="flex flex-col  text-right">
					<span>Daily Green Km</span>
					<span>348 km</span>
				</div>
			</div>
			<div className="flex  justify-between rounded-[5px] py-2 px-1 bg-[#F3FFFE]  box-shadow6   w-2/12">
				<div>
					<img
						src={totalEnergy}
						alt=""
						className="mix-blend-multiply"
					/>
				</div>
				<div className="flex flex-col  text-right">
					<span>Total Energy</span>
					<span>33.2230 kWh</span>
				</div>
			</div>
			<div className="flex  justify-between rounded-[5px] py-2 px-1 bg-[#F3FFFE]  box-shadow6   w-2/12">
				<div>
					<img
						src={dailyEnergy}
						alt=""
						className="mix-blend-multiply"
					/>
				</div>
				<div className="flex flex-col  text-right">
					<span>State of charge</span>
					<span>85 %</span>
				</div>
			</div>
			<div className="flex justify-between rounded-[5px] py-2 px-1 bg-[#F3FFFE]  box-shadow6   w-2/12">
				<div>
					<img src={cufImg} alt="" className="mix-blend-multiply" />
				</div>
				<div className="flex flex-col  text-right">
					<span>Range available</span>
					<span>163 km</span>
				</div>
			</div>
			<div className="flex justify-between rounded-[5px] py-2 px-1 bg-[#F3FFFE]  box-shadow6    w-2/12">
				<div>
					<img
						src={specific_field}
						alt=""
						className="mix-blend-multiply"
					/>
				</div>
				<div className="flex flex-col  text-right">
					<span>BCNC</span>
					<span>93 %</span>
				</div>
			</div>
		</div>
	);
};

export default SiteLiveData;

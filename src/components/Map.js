import React, { useState } from "react";
import energyMap from "../utilities/energyInfo";
import MapSvg from "../utilities/svg/MapSvg";

const Map = ({ setDistrict, setEnergy, setEV, width, title, isAnalytic=false }) => {
	const [selectedDistrict, setSelectedDistrict] = useState("");
	const updateInfo = (event, district) => {
		event.stopPropagation(); // prevent event bubbling
		setEnergy(energyMap.get(district).distance);
		if (district === "Telangana State") {
			setDistrict(district);
		} else {
			setDistrict(district + " District");
		}
		setEV(energyMap.get(district).ev);
	};
	return (
		<div
			className={`${width} mx-auto h-full ${title ? 'pt-10':'pt-2'} pb-2 relative`}
			onClick={(e) => {
				updateInfo(e, "Telangana State");
				setSelectedDistrict("");
			}}
		>
			<MapSvg
				selectedDistrict={selectedDistrict}
				setSelectedDistrict={setSelectedDistrict}
				updateInfo={updateInfo}
				isAnalytic={isAnalytic}
			/>
			{title && (
				<p className="absolute top-1 left-[25%]  text-[#535A6C] font-bold text-[16px]">
					Districtwise Electric Vehicles
				</p>
			)}
		</div>
	);
};

export default Map;

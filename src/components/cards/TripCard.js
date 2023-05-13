import React from "react";

const TripCard = ({ data }) => {
	return (
		<div className="grid grid-cols-2 gap-2 w-full p-2 mx-auto border-2 border-[#e9e5fd] hover:border-[#e1dcfa] my-table-row box-shadow5 rounded-xl">
			<div className="p-2">
				<h4 className="font-semibold">Start Time</h4>
				<p>{data.time}</p>
			</div>
			<div className="p-2">
				<h4 className="font-semibold">End Time</h4>
				<p>{data.endtime}</p>
			</div>
			<div className="p-2">
				<h4 className="font-semibold">Distance</h4>
				<p>{data.energyProduced}</p>
			</div>
			<div className="p-2">
				<h4 className="font-semibold">GHG Emission Reduced</h4>
				<p>{data.totalEnergy}</p>
			</div>
		</div>
	);
};

export default TripCard;

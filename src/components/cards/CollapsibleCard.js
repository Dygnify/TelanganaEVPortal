import React from "react";
import TripCard from "./TripCard";

const CollapsibleCard = ({ data }) => {
	const collapsibleCardData = [
		{
			...data,
		},
		{
			time: "14/05/2023 10:12:00 AM",
			endtime: "14/05/2023 10:45:00 AM",
			energyProduced: "24.3 km",
			totalEnergy: "4 Kg",
		}
	];

	const inactiveStatus = (data.status === "Inactive");
	return (
		<div className="collapse collapse-arrow mt-2 bg-[#e2e7fc46] rounded-md box-shadow5 my-table-row border border-[#e9e5fd] hover:border-[#e1dcfa] ">
			<input type="checkbox" className="peer" />

			<div className="collapse-title  px-1  flex justify-around py-3 gap-4 md:gap-0 text-center">
				<p className="w-1/3 md:w-3/12 my-auto ">{data.time}</p>
				<p className=" md:block w-1/3 md:w-3/12 my-auto ">
					{data.unitName}
				</p>
				<p className=" md:block w-1/3 md:w-2/12 my-auto ">
					{data.energyProduced}
				</p>
				<p className="w-1/3 md:w-2/12 my-auto ">{data.totalEnergy}</p>
				<div className="w-1/3 md:w-2/12 my-auto text-center">
					<p
						className={`w-[100px] border ${
							data.status === "Inactive"
								? "bg-[#f7995194]  border-[#f78e3e]"
								: "bg-[#4cf584a4] border-[#03b43e]"
						} px-5 rounded-full box-shadow3 mx-auto text-center`}
					>
						{data.status}
					</p>
				</div>
			</div>
			{inactiveStatus ? null : (
				<div className="collapse-content">
					<div className="grid grid-cols-2 gap-4">
						{collapsibleCardData.map((data, i) => (
							<TripCard key={i} data={data} />
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default CollapsibleCard;

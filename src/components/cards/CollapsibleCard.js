import React from "react";
import TripCard from "./TripCard";

const CollapsibleCard = ({ data }) => {
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
			{data.status === "Inactive"? "":
				<div className="collapse-content">
					<div className="flex gap-4">
						<TripCard data={data}></TripCard>
						<TripCard data={data}></TripCard>
					</div>
				</div>
			}
		</div>
	);
};

export default CollapsibleCard;

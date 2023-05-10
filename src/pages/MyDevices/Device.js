import React from "react";
import CollapsibleCard from "../../components/cards/CollapsibleCard";

const Device = ({ dummyTable }) => {
	return (
		<div className="mt-12">
			<div className="px-1 py-1 gap-4 md:gap-0 md:justify-around flex font-bold border-y border-slate-200 text-center">
				<p className="w-1/3 md:w-3/12 my-auto ">Time/Date</p>
				<p className=" md:block w-1/3 md:w-3/12 my-auto ">Unit Name</p>
				<p className=" md:block w-1/3 md:w-2/12 my-auto ">
					Energy Produced (Today)
				</p>
				<p className="w-1/3 md:w-2/12 my-auto ">
					Energy Produced (Total)
				</p>
				<p className=" md:block w-1/3 md:w-2/12 my-auto ">Status</p>
			</div>
			<div className="max-h-[350px] overflow-auto">
				<div className="flex flex-col p-1 pt-0 pb-4 rounded-xl my-5 gap-4  border border-[#d3e1f5a9] ">
					{dummyTable.map((data, i) => (
						<CollapsibleCard key={i} data={data} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Device;

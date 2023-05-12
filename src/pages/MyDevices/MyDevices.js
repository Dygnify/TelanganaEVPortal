import React from "react";
import "../Profile/Profile.css";
import Device from "./Device";
import SiteConfig from "./SiteConfig";
import SiteLiveData from "./SiteLiveData";
import DeviceChart1 from "../../components/charts/DeviceCharts/DeviceChart1";
import DeviceChart2 from "../../components/charts/DeviceCharts/DeviceChart2";

const MyDevices = () => {
	const dummyTable = [
		{
			time: "15/05/2023 01:12:00 PM",
			endtime: "15/05/2023 02:05:00 PM",
			unitName: "Unit 1",
			energyProduced: "36 km",
			totalEnergy: "5.9 Kg",
			status: "Active",
		},
		{
			time: "15/05/2023 01:12:00 PM",
			endtime: "15/05/2023 02:05:00 PM",
			unitName: "Unit 2",
			energyProduced: "19.1 km",
			totalEnergy: "3.1 Kg",
			status: "Active",
		},
		{
			time: "15/05/2023 01:12:00 PM",
			endtime: "15/05/2023 02:05:00 PM",
			unitName: "Unit 3",
			energyProduced: "0 km",
			totalEnergy: "0 Kg",
			status: "Inactive",
		},
		{
			time: "15/05/2023 01:12:00 PM",
			endtime: "15/05/2023 02:05:00 PM",
			unitName: "Unit 4",
			energyProduced: "27.2 km",
			totalEnergy: "4.4 Kg",
			status: "Active",
		},
		{
			time: "15/05/2023 01:12:00 PM",
			endtime: "15/05/2023 02:05:00 PM",
			unitName: "Unit 5",
			energyProduced: "14.3 km",
			totalEnergy: "2.3 Kg",
			status: "Active",
		},
		{
			time: "15/05/2023 01:12:00 PM",
			endtime: "15/05/2023 02:05:00 PM",
			unitName: "Unit 6",
			energyProduced: "0 km",
			totalEnergy: "0 Kg",
			status: "Inactive",
		},
		{
			time: "15/05/2023 01:12:00 PM",
			endtime: "15/05/2023 02:05:00 PM",
			unitName: "Unit 7",
			energyProduced: "40.3 km",
			totalEnergy: "6.6 Kg",
			status: "Active",
		},
		{
			time: "15/05/2023 01:12:00 PM",
			endtime: "15/05/2023 02:05:00 PM",
			unitName: "Unit 8",
			energyProduced: "20.5 km",
			totalEnergy: "3.3 Kg",
			status: "Active",
		},
	];
	return (
		<div className="text-slate-500 gap-4 w-full profile">
			<section className=" space-y-12">
				<div className="w-full  rounded-md  ">
					<h2 className="text-[1.4375rem] lg:text-[2rem] font-semibold text-slate-500  drop-shadow-lg px-2">
						Electric 3W - Cargo
					</h2>
					<div className="mt-4">
						<h3 className="font-semibold text-xl text-slate-500  drop-shadow-lg px-2 text-center">
						3W - Cargo Configuration Details
						</h3>
						<SiteConfig />
					</div>
					<div className="mt-8">
						<h3 className="font-semibold text-xl text-slate-500  drop-shadow-lg px-2 text-center">
						3W - Cargo Live Data
						</h3>
						<SiteLiveData />
					</div>
					{/* <div className="mt-12 grid grid-cols-2 gap-4 p-2">
						<DeviceChart1 />
						<DeviceChart2 />
					</div> */}
					<Device dummyTable={dummyTable} />
				</div>
				<div className="w-full  rounded-md">
					<h2 className=" text-[1.4375rem] lg:text-[2rem] font-semibold text-slate-500  drop-shadow-lg px-2">
					Electric 3W - Passenger
					</h2>
					<div className="mt-4">
						<h3 className="font-semibold text-xl text-slate-500  drop-shadow-lg px-2 text-center">
						3W - Passenger Configuration Details
						</h3>
						<SiteConfig />
					</div>
					<div className="mt-8">
						<h3 className="font-semibold text-xl text-slate-500  drop-shadow-lg px-2 text-center">
						3W - Passenger Live Data
						</h3>
						<SiteLiveData />
					</div>
					{/* <div className="mt-12 grid grid-cols-2 gap-4 p-2">
						<DeviceChart1 />
						<DeviceChart2 />
					</div> */}
					<Device dummyTable={dummyTable} />
				</div>
			</section>
		</div>
	);
};

export default MyDevices;

import React from "react";
import LineChart from "../../components/charts/LineChart";
import PieChart from "../../components/charts/PieChart";
import Map from "../../components/Map";
import StackedColumnChart from "../../components/charts/StackedColumnChart";

const Analytic = () => {
	return (
		<div
			className="text-slate-200"
			data-aos="fade-up"
			data-aos-duration="1000"
		>
			<div className="grid grid-cols-2 gap-8">
				<section className="box-shadow5 min-h-[300px] flex justify-center items-center gradient-bottom rounded-md p-2 border border-[#ccc2ff77]">
					<PieChart />
				</section>
				<section className="box-shadow5 min-h-[300px] flex justify-center items-center gradient-bottom rounded-md  p-2 border border-[#ccc2ff77]">
					<StackedColumnChart />
				</section>
				<section className="box-shadow5 min-h-[300px] flex justify-center items-center gradient-bottom rounded-md p-2 border border-[#ccc2ff77]">
					<Map width="w-[85%]" title={true} isAnalytic={true}/>
				</section>
				<section className="box-shadow5 min-h-[300px] flex justify-center items-center gradient-bottom rounded-md p-2 border border-[#ccc2ff77] relative">
					<LineChart />
				</section>
			</div>
		</div>
	);
};

export default Analytic;

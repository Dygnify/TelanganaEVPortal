import React from "react";
import ReactApexChart from "react-apexcharts";

const DashboardChart2 = () => {
	const options = {
		chart: {
			id: "area-chart",
			toolbar: {
				show: false,
			},
			zoom: {
				enabled: false,
			},
		},
		xaxis: {
			categories: ['November', 'December', 'January', 'February', 'March'],
			labels: {
				show: false,
			},
		},
		yaxis: {
			labels: {
				show: false,
			},
		},
		fill: {
			type: "gradient",
			gradient: {
				shade: "dark",
				gradientToColors: ["#008000"],
				shadeIntensity: 1,
				type: "horizontal",
				opacityFrom: 1,
				opacityTo: 1,
			},
		},
		dataLabels: {
			enabled: false,
		},
		stroke: {
			curve: "smooth",
			width: 0,
		},
		grid: {
			show: false,
			strokeDashArray: 0,
			position: "back",
			xaxis: {
				lines: {
					show: false,
				},
			},
			yaxis: {
				lines: {
					show: false,
				},
			},
			row: {
				colors: undefined,
				opacity: 0.5,
			},
			column: {
				colors: undefined,
				opacity: 0.5,
			},
			padding: {
				top: 0,
				right: 0,
				bottom: -20,
				left: -10,
			},
		},
		colors: ["#008000", "#008000"], // custom color palett
	};

	const series = [
		{
			name: "Energy Consumed",
			
			data: [3.1505, 3.1506, 3.1505, 3.1506, 3.1507],
		},
	];
const getTotalEnergyProduced = () => {
	let sum = 0;
	let len = series[0]?.data.length;
	for (let i = 0; i < len; i++) {
		sum += series[0]?.data[i];
	}
	return sum;
};
	return (
		<div
			className="w-full shadow-md rounded-md relative bg-[#f3c0991e]"
			data-aos="zoom-in"
			data-aos-duration="1000"
		>
			<ReactApexChart options={options} series={series} type="area" />
			<div className="absolute top-[10px] left-[12px] font-semibold text-xl text-font-semibold text-slate-500 drop-shadow-lg flex flex-col gap-4">
				<p>GHG emissions prevented</p>
				<p className="text-[#008000] text-[32px] font-bold flex justify-center -mt-1">
					{getTotalEnergyProduced().toFixed(1)} t
				</p>
			</div>
		</div>
	);
};

export default DashboardChart2;

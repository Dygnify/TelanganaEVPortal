import React from "react";
import ReactApexChart from "react-apexcharts";

const DashboardChart1 = () => {
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
				gradientToColors: [ "#5ac5fa"],
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
		colors: ["#5ac5fa", "#5ac5fa"],
	};

	const series = [
		{
			name: "Distance traversed",
			data: [19094, 19095, 19094, 19095, 19096],
		},
		
	];
	const getTotalEnergyProduced = () => {
		let sum =0;
		let len = series[0]?.data.length;
		for(let i=0; i<len; i++){
			sum+=series[0]?.data[i];
		}
		return sum;
	}

	return (
		<div
			className="w-full border shadow-md border-[#91ecd815] rounded-md relative  bg-[#38faea10]"
			data-aos="zoom-in"
			data-aos-duration="1000"
		>
			<ReactApexChart options={options} series={series} type="area" />
			<div className="absolute top-[10px] left-[12px] font-semibold text-xl text-font-semibold text-slate-500 drop-shadow-lg flex flex-col gap-4">
				<p>Green km run</p>
				<p className="text-[#04796f] text-[32px] font-bold flex justify-center -mt-1">
					{getTotalEnergyProduced()}
				</p>
			</div>
		</div>
	);
};

export default DashboardChart1;

import React from "react";
import ReactApexChart from "react-apexcharts";

const StackedColumnChart = () => {
	const options = {
		chart: {
			type: "bar",
			stacked: true,
			toolbar: {
				show: false,
			},
		},
		xaxis: {
			categories: ["Charging", "Battery Swapping"],
		},
		plotOptions: {
			bar: {
				horizontal: false,
				columnWidth: "50%", // Set column width to 50%
			},
		},
		fill: {
			opacity: 1,
		},
		title: {
			text: "EV Charging Infrastructure",
			align: "center",
			offsetY: 0,
			offsetX: 0,
			style: {
				fontSize: "16px",
				fontWeight: "bold",
				color: "#535A6C",
			},
		},
		legend: {
			position: "top",
			horizontalAlign: "center",
			offsetX: 40,
		},
		grid: {
			show: true,
			borderColor: "#E3E3E4",
			xaxis: {
				lines: {
					show: false,
				},
			},
			yaxis: {
				lines: {
					show: true,
				},
			},
		},
	};

	const series = [
		{
			name: "Grid Energy",
			data: [134, 34],
		},
		{
			name: "Renewable Energy",
			data: [45, 6],
		},
	];

	return (
		<ReactApexChart
			options={options}
			series={series}
			type="bar"
			height={350}
			width={400}
		/>
	);
};

export default StackedColumnChart;

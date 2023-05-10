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
			categories: ["Column 1", "Column 2"],
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
			name: "Series 1",
			data: [50, 70],
		},
		{
			name: "Series 2",
			data: [30, 50],
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

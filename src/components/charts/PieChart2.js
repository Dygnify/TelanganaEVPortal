import React from "react";
import Chart from "react-apexcharts";

const PieChart2 = () => {
	const options = {
		chart: {
			type: "polarArea",
		},
		series: [4201, 4754, 5221, 5809, 6562],
		colors: [
			"#FF6384",
			"#36A2EB",
			"#FFCE56",
			"#4BC0C0",
			"#FF9F40",
			"#AB9F30",
		],
		fill: {
			colors: [
				"#FF6384",
				"#36A2EB",
				"#FFCE56",
				"#4BC0C0",
				"#FF9F40",
				"#AB9F30",
			],
			opacity: 1,
		},
		title: {
			text: "Categorywise Electic Vehicles",
			align: "center",
			offsetY: 0,
			offsetX: 0,
			style: {
				fontSize: "16px",
				fontWeight: "bold",
				color: "#535A6C",
			},
		},
		labels: [
			"E - Bus",
			"E - Car",
			"E3W - Passenger",
			"E3W - Cargo",
			"E2W - Personal",
		],
		stroke: {
			width: 0.2,
			colors: undefined,
		},
		yaxis: {
			show: false,
		},
		legend: {
			position: "bottom",
		},
		plotOptions: {
			polarArea: {
				rings: {
					strokeWidth: 1,
				},
				spokes: {
					strokeWidth: 1,
				},
			},
		},
		tooltip: {
			y: {
				formatter: function (value) {
					return value;
				},
			},
		},
	};

	return (
		<div className="mt-2">
			<Chart
				options={options}
				series={options.series}
				type="polarArea"
				width={500}
				height={400}
			/>
		</div>
	);
};

export default PieChart2;

import React, { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";

const LineChart = () => {
	const chartRef = useRef(null);

    useEffect(()=>{
        window.Apex = {
			chart: {
				foreColor: "#535A6C",
				toolbar: {
					show: false,
				},
			},
			stroke: {
				width: 3,
			},
			dataLabels: {
				enabled: false,
			},
			tooltip: {
				theme: "dark",
			},
			grid: {
				borderColor: "#535A6C",
				xaxis: {
					lines: {
						show: true,
					},
				},
			},
		};
    },[])

	useEffect(() => {
		var optionsLine = {
			chart: {
				height: 350,
				width: "200%",
				type: "line",
				zoom: {
					enabled: false,
				},
				dropShadow: {
					enabled: true,
					top: 3,
					left: 2,
					blur: 4,
					opacity: 1,
				},
			},
			stroke: {
				curve: "smooth",
				width: 2,
			},
			series: [
				{
					name: "E2W - Cargo",
					data: [151, 392, 522, 451, 305, 638],
				},
				{
					name: "E - Bus",
					data: [303, 331, 219, 421, 416, 329],
				},
				{
					name: "Others",
					data: [965, 1153, 1026, 1120, 1133, 1122],
				}
			],
			title: {
				text: "Daily Categorywise Green Run of EV",
				align: "center",
				offsetY: 0,
				offsetX: 0,
			},
			subtitle: {
				text: "(in km)",
				offsetY: 68,
				offsetX: -5,
			},
			markers: {
				size: 6,
				strokeWidth: 0,
				hover: {
					size: 9,
				},
			},
			grid: {
				show: true,
				borderColor: "#D6D4E5",
				padding: {
					bottom: 0,
				},
			},
			labels: [
				"15/05/2023",
				"16/05/2023",
				"17/05/2023",
				"18/05/2023",
				"19/05/2023",
				"20/05/2023",
			],
			xaxis: {
				tooltip: {
					enabled: false,
				},
			},
			legend: {
				position: "top",
				horizontalAlign: "right",
				offsetY: -20,
			},
		};

		var chartLine = new ApexCharts(
			document.querySelector("#line-adwords"),
			optionsLine
		);
		chartLine.render();
	}, []);

	return (
		<div className="h-full mt-2">
			<div id="line-adwords" ref={chartRef} />
		</div>
	);
};

export default LineChart;
export const districtNameList = [
	"Jayashankar",
	"Mulugu",
	"Mahabubnagar",
	"Narayanpet",
	"Medak",
	"Ranga Reddy",
	"Sangareddy",
	"Medchal Malkajgiri",
	"Hyderabad",
	"Vikarabad",
	"Jangaon",
	"Yadadri Bhuvanagiri",
	"Nalgonda",
	"Karimnagar",
	"Siddipet",
	"Warangal Rural",
	"Warangal Urban",
	"Nizamabad",
	"Rajanna Sircilla",
	"Kamareddy",
	"Jogulamba",
	"Nagarkurnool",
	"Wanaparthy",
	"Bhadradri Kothagudem",
	"Khammam",
	"Mahabubabad",
	"Mancherial",
	"Peddapalli",
	"Jagtial",
	"Adilabad",
	"Nirmal",
	"Komaram Bheem",
	"Suryapet",
];

export const districtEVList = [
	144, 211, 1166, 132, 175, 3069, 330, 595, 27692, 201, 122, 128, 960, 1281, 225, 200, 4265,
	2136, 158, 121, 148, 243, 175, 523, 355, 683, 165, 164, 202, 516, 165, 118, 168,
];

export const districtDistanceList = [
	2880000, 4220000, 23320000, 2640000, 3500000, 61380000, 6600000, 11900000, 553844800, 4020000, 2440000, 2560000, 19200000, 25627056, 4500000, 4000000, 85301426,
	42711760, 3160000, 2420000, 2960000, 4860000, 3500000, 10460000, 7100000, 13660000, 3300000, 3280000, 4040000, 10320000, 3300000, 2360000, 3360000,
];


let energyMap = new Map();
let totalDistricts = districtNameList.length;
let totalEnergy = 0;
let totalEV = 0;
for (let i = 0; i < totalDistricts; i++) {
	energyMap.set(districtNameList[i], {"distance":districtDistanceList[i],"ev":districtEVList[i]});
	totalEnergy += districtDistanceList[i];
	totalEV += districtEVList[i];
}
energyMap.set("Telangana State", {"distance":totalEnergy,"ev":totalEV});

export default energyMap;

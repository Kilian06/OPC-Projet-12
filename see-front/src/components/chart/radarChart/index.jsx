import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Legend,
  Label
} from "recharts";



export default function GraphiqueRadarChart(donnee) {

  const data = donnee.source.data
  console.log(data)

  const mapKind = donnee.source.kind
  console.log(mapKind)

  const traduction = {
    "cardio": "Cardio",
    "energy": "Energie",
    "endurance": "Endurance",
    "strength": "Force",
    "speed": "Vitesse",
    "intensity": "Intensité"
};

for (let key in mapKind) {
  let temp = mapKind[key];
  mapKind[key] = traduction[temp];
}


  function replaceKindValues(data, mapKind) {
    data.forEach(item => {
        item.kind = mapKind[item.kind];
    });
    return data;
}
replaceKindValues(data, mapKind);

 
  return (
    <div className="radardiv">
    <RadarChart
      outerRadius={90}
      width={250}
      height={250}
      data={data}
    >
      <PolarGrid stroke="#FFFFFF" />
      <PolarAngleAxis dataKey="kind" axisLine={false} tickLine={false}/>
      <PolarRadiusAxis axisLine={false} tickLine={false}/>
      <Radar
        name="Performance"
        dataKey="value"
        fill="#FF0000"
        fillOpacity={0.7}
      />
    </RadarChart>
    </div>

  );
}


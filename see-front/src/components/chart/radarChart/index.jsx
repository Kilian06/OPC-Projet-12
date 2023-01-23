import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Legend,
  Label,
  Tooltip,
} from "recharts";

export default function GraphiqueRadarChart(donnee) {
  const data = donnee.source.data;

  const mapKind = donnee.source.kind;

  const traduction = {
    cardio: "Cardio",
    energy: "Energie",
    endurance: "Endurance",
    strength: "Force",
    speed: "Vitesse",
    intensity: "Intensité",
  };

  for (let key in mapKind) {
    let temp = mapKind[key];
    mapKind[key] = traduction[temp];
  }

  function replaceKindValues(data, mapKind) {
    data.forEach((item) => {
      item.kind = mapKind[item.kind];
    });
    return data;
  }
  replaceKindValues(data, mapKind);

  return (
    <div className="radardiv">
      <RadarChart outerRadius={60} width={250} height={250} data={data} >
        <PolarGrid stroke="#282D30" />
        <PolarAngleAxis dataKey="kind" stroke="#FFFFFF" axisLine={true}/>
        <PolarRadiusAxis angle={30} tickLine={false} axisLine={false}/>
        <Radar
          name="Performance"
          dataKey="value"
          fill="#FF0000"
          fillOpacity={0.7}
        />
        <Tooltip
          animationEasing="ease-out"
          offset={55}
          wrapperStyle={{ outline: "none" }}
        />
      </RadarChart>
    </div>
  );
}

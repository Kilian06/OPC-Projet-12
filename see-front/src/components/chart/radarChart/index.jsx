import React from "react";
import PropTypes from "prop-types";

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

/**
 * this function allows to generate a bar graph with the data of the elements passed in props
 * in this case the graph represents the user's performance category by category
 * @param {*} props response of the API http://localhost:3000/user/${id}/performance
 * @returns React Component - RadarChart
 */
function GraphiqueRadarChart(props) {
  const data = props.source.data;

  const mapKind = props.source.kind;
  //correspondence table
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
      <ResponsiveContainer width="99%" height="99%">
        <RadarChart outerRadius={74} data={data}>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            stroke="#FFFFFF"
            tickLine={false}
            tick={{ fontSize: "12", fontWeight: "500" }}
          />
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
      </ResponsiveContainer>
    </div>
  );
}

// propType of the fonction to check if props value is OK with the component

GraphiqueRadarChart.propTypes = {
  source: PropTypes.shape({
    data: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.number.isRequired,
        kind: PropTypes.number.isRequired,
      })
    ).isRequired,
    kind: PropTypes.shape({}).isRequired,
    userId: PropTypes.number.isRequired,
  }).isRequired,
};

export default GraphiqueRadarChart;

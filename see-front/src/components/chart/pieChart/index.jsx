import React from "react";
import { PureComponent } from "react";
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';



function GraphiquePieChart(donnee) {
  if (donnee.source.todayScore === undefined) {
    var dataPercent = [
      { value: donnee.source.score},
      // { name: "activitToDo", value: 1 - donnee.source.score },
    ];
  } else {
    var dataPercent = [
      {value: donnee.source.todayScore },
      // { name: "activitToDo", value: 1 - donnee.source.todayScore },
    ];
  }

  const style = {
    top: '50%',
    right: 0,
    transform: 'translate(0, -50%)',
    lineHeight: '24px',
  };

  return (
    <div className="pieDiv">
    <p className="pieTitre">Score</p>
    <div className="pieResult">
      <p className="pieResultPercent">{(dataPercent[0].value) * 100 +"%"}</p>
      <p className="pieResultObj">de votre objectif</p>
      </div>
    <div>
      <RadialBarChart
        width={258}
        height={263}
        innerRadius="65%"
        outerRadius="80%"
        data={dataPercent}
        startAngle={90}
        endAngle={90 + (((dataPercent[0].value)*360))}
        
        margin={{
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
        }}
        className="gauge-chart__svg-chart"
      >
        <RadialBar
          name="score"
          dataKey="value"
          stroke-linejoin="round"
          cornerRadius={100}
          fill="#FF0000"
        />

      </RadialBarChart>
      </div>
    </div>

  );
}

export default GraphiquePieChart;

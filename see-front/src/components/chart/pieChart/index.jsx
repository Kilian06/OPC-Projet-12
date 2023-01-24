import React from "react";
import PropTypes from 'prop-types';
import { RadialBarChart, RadialBar } from 'recharts';

/**
 * this function allows to generate a graph with the data of the elements passed in props
 * in this case the graph is used to represent the progress of the day
 * @param {*} props response of the API http://localhost:3000/user/${id}
 * @returns React Component - PieChart
 */
function GraphiquePieChart(props) {
  // resolution of the anomaly in the API response
  if (props.source.todayScore === undefined) {
    var dataPercent = [
      { value: props.source.score},
    ];
  } else {
    var dataPercent = [
      {value: props.source.todayScore },
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

// propType of the fonction to check if props value is OK with the component
GraphiquePieChart.propTypes = {
  source: PropTypes.shape({
    id: PropTypes.number.isRequired,
    keyData: PropTypes.shape({
      calorieCount: PropTypes.number.isRequired,
      carbohydrateCount: PropTypes.number.isRequired,
      lipidCount: PropTypes.number.isRequired,
      proteinCount: PropTypes.number.isRequired,
    }).isRequired,
    score: PropTypes.number,
    todayScore: PropTypes.number,
  }).isRequired
};

export default GraphiquePieChart;

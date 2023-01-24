import React from "react";
import PropTypes from 'prop-types';

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import CustomTooltip from "../tools/customTooltip";


/**
 * this function allows to generate a bar graph with the data of the elements passed in props
 * in this case the graph is used to represent the energy spent by the user and its weight
 * @param {*} props response of the API http://localhost:3000/user/${id}/activity
 * @returns React Component - BarChart
 */

function GraphiqueBarChart(props) {
  // data formatting
  const data = props.source.sessions;
  const ymax = Math.max(...data.map((sessions) => sessions.kilogram));
  const ymin = Math.min(...data.map((sessions) => sessions.kilogram));

  return (
    <div className="chartActiviteQuot">
      <p className="chartActiviteTitre">Activité quotidienne</p>
      <ResponsiveContainer width="100%" height={320}>
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 0,
            left: 30,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="day" type="category" stroke="#9B9EAC" />
          <YAxis
            type="number"
            yAxisId="left"
            orientation="left"
            stroke="#E60000"
            hide={true}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            stroke="#9B9EAC"
            domain={[ymin - 2, ymax + 2]}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            content={(props) => <CustomTooltip {...props} />}
            wrapperStyle={{
              color: "#FFFFFF",
              background: "red",
              border: "none",
              outline: "none",
              width: "50px",
              height: "70px",
              textAlign: "center",
              lineHeight: "3",
              fontSize: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            margin={{ top: 0, left: 0, right: 0, bottom: 0 }}
          />
          <Legend
            height={40}
            verticalAlign="top"
            align="right"
            iconType={"circle"}
          />{" "}
          <Bar
            yAxisId="right"
            dataKey="kilogram"
            fill="#282D30"
            barSize={7}
            radius={[5, 5, 0, 0]}
            name={"Poids (kg)"}
          />
          <Bar
            yAxisId="left"
            dataKey="calories"
            fill="#E60000"
            barSize={7}
            radius={[5, 5, 0, 0]}
            name={"Calories brûlées (kCal)"}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

// propType of the fonction to check if props value is OK with the component
GraphiqueBarChart.propTypes = {
      source: PropTypes.shape({
          userId: PropTypes.number.isRequired,
          sessions: PropTypes.arrayOf(PropTypes.shape({
              day: PropTypes.string.isRequired,
              kilogram: PropTypes.number.isRequired,
              calories: PropTypes.number.isRequired
          })).isRequired
      }).isRequired
};


export default GraphiqueBarChart;



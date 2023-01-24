import React from "react";
import PropTypes from "prop-types";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Rectangle,
  Customized,
} from "recharts";
import LineCustomTooltip from "../tools/lineTooltip";

/**
 * this function allows to generate a line graph with the data of the elements passed in props
 * in this case the graph is used to display the duration of the sessions day by day
 * @param {*} props response of the API http://localhost:3000/user/${id}/average-sessions
 * @returns React Component - LineChart
 */

function GraphiqueLineChart(props) {
  // need to format data with weedkays
  var data = props.source.sessions;
  var weekDays = ["L", "M", "M", "J", "V", "S", "D"];

  for (var i = 0; i < data.length; i++) {
    data[i].day = weekDays[i];
  }

  return (
    <div className="charDureeSession">
      <div>
        <LineChart
          width={258}
          height={263}
          data={data}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <XAxis
            dataKey="day"
            tickLine={false}
            style={{ transform: "scale(1)", transformOrigin: "bottom" }}
            tick={{ fill: "#FFFFFF", fontWeight: 500, fontSize: 12 }}
            axisLine={false}
            interval="preserveStartEnd"
          />
          <Tooltip
            animationEasing="ease-out"
            content={<LineCustomTooltip />}
            wrapperStyle={{
              color: "#000000",
              background: "#FFFFFF",
              border: "none",
              outline: "none",
              width: "70px",
              height: "50px",
              textAlign: "center",
              lineHeight: "3",
              fontSize: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            margin={{ top: 0, left: 0, right: 0, bottom: 0 }}
          />
          <YAxis hide padding={{ top: 50, bottom: 0 }} />

          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="#FFFFFF"
            dot={false}
          />
        </LineChart>
      </div>
      <div>
        <p className="lineTitre">Durée moyenne des sessions</p>
      </div>
    </div>
  );
}

// propType of the fonction to check if props value is OK with the component
GraphiqueLineChart.propTypes = {
  source: PropTypes.shape({
    sessions: PropTypes.arrayOf(
      PropTypes.shape({
        day: PropTypes.number.isRequired,
        sessionLength: PropTypes.number.isRequired,
      })
    ).isRequired,
    userId: PropTypes.number.isRequired,
  }).isRequired,
};

export default GraphiqueLineChart;

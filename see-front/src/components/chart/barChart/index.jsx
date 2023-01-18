import React from "react";
import { PureComponent } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import ResizeObserver from "react-resize-detector";
import ReactResizeDetector from "react-resize-detector";
import { useState } from "react";

import CustomTooltip from "../tools/customTooltip";

function GraphiqueBarChart(donnee) {
  const data = donnee.source.data.sessions;
  const ymax = Math.max(...data.map((sessions) => sessions.kilogram));
  const ymin = Math.min(...data.map((sessions) => sessions.kilogram));

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  return (
    <div className="chartActiviteQuot">
              <p className="chartActiviteTitre">Activité quotidienne</p>

      <BarChart
        width={835}
        height={320}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis
          type="number"
          domain={[ymin - 2, ymax + 2]}
          yAxisId="left"
          orientation="left"
          stroke="#282D30"
          minTickGap="5"
        />
        <YAxis
          yAxisId="right"
          orientation="right"
          stroke="#E60000"
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
          style={{ margin: "1rem auto", width: "100px" }}
        />{" "}
        <Bar
          yAxisId="left"
          dataKey="kilogram"
          fill="#282D30"
          barSize={7}
          radius={[5, 5, 0, 0]}
          name={"Poids (kg)"}
        />
        <Bar
          yAxisId="right"
          dataKey="calories"
          fill="#E60000"
          barSize={7}
          radius={[5, 5, 0, 0]}
          name={"Calories brûlées (kCal)"}
        />
      </BarChart>
    </div>
  );
}

export default GraphiqueBarChart;

import React from "react";
import { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import LineCustomTooltip from "../tools/lineTooltip";
import { ReferenceArea } from "recharts";
import ReferenceBands from "../tools/shapeArea";

function GraphiqueLineChart(donnee) {
  var data = donnee.source.sessions;

  var today = new Date();
  var todayIndex = today.getDay();

  var weekDays = ["D", "L", "M", "M", "J", "V", "S"];

  for (var i = 0; i < data.length; i++) {
    var day = (data[i].day + todayIndex) % 7;
    data[i].day = weekDays[day];
  }
  console.log(data);
  if (!data[0].day) {
    return <div className="charDureeSession"></div>;
  } else {
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
          <XAxis type="category" dataKey="day" />
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
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="#FFFFFF"
            dot={false}
          />
          <ReferenceArea
            x1="S"
            x2="D"
            strokeOpacity={0.3}
            fillOpacity={0.2}
            fill="#000000"
          />
        </LineChart>
        </div>
        <div>
          <p className="lineTitre">Durée moyenne des sessions</p>
        </div>
        
      </div>
    );
  }
}

export default GraphiqueLineChart;

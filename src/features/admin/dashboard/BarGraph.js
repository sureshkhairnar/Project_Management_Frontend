import { Paper, Typography } from "@mui/material";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList,
} from "recharts";

const getYAxisDomain = (data, margin = 5) => {
  const maxValue = Math.max(
    ...data.map((item) => Math.max(item.Total, item.Close))
  );
  return [0, Math.ceil(maxValue + margin)];
};

const CustomBar = (props) => {
  const { x, y, width, height, fill } = props;
  const barRadius = 5;

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill={fill}
        rx={barRadius}
        ry={barRadius}
      />
    </g>
  );
};

const CustomLegend = (props) => {
  const { payload } = props;
  return (
    <div
      style={{
        marginTop: 20,
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {payload.map((entry, index) => (
        <div
          key={`item-${index}`}
          style={{
            display: "flex",
            alignItems: "center",
            marginRight: 40,
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              backgroundColor: entry.color,
              marginRight: 10,
            }}
          />
          <span>{entry.value}</span>
        </div>
      ))}
    </div>
  );
};

const BarGraph = ({ data }) => {
  const yAxisDomain = getYAxisDomain(data, 1);

  return (
    <>
      <Typography
        style={{
          fontSize: "20px",
          color: "#000",
          marginTop: "5px",
        }}
      >
        Department wise - Total Vs Closed
      </Typography>
      <Paper
        sx={{
          width: "100%",
          maxWidth: "100%",
          marginTop: "8px",
          paddingTop: "30px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
          overflow: "hidden",
          "@media (max-width:576px)": {
            padding: "2.5rem 2.5rem 1.5rem 0rem",
            minWidth: "100%",
          },
          "@media (min-width:577px) and (max-width: 1199px)": {
            padding: "2.5rem 2.5rem 1.5rem 0rem",
            minWidth: "100%",
          },
          "@media (min-width: 1200px)": {
            padding: "2.0rem 2.0rem 1.5rem 0rem",
            maxWidth: "50%",
          },
          "@media (min-width: 1399px)": {
            padding: "1.5rem 1.5rem 1.5rem 0rem",
            maxWidth: "50%",
          },
        }}
      >
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={data}>
            <XAxis
              dataKey="name"
              tickLine={false}
              style={{ color: "black", fontWeight: "bold" }}
            />
            <YAxis tickLine={false} domain={yAxisDomain} />
            <Tooltip />
            <Legend content={<CustomLegend />} />
            <Bar
              dataKey="Total"
              fill="#0345fc"
              barSize={15}
              shape={<CustomBar />}
            >
              <LabelList
                dataKey="Total"
                position="top"
                style={{ fontSize: "14px", fill: "#000" }}
                offset={10}
              />
            </Bar>
            <Bar
              dataKey="Close"
              fill="#05ab42"
              barSize={15}
              shape={<CustomBar />}
            >
              <LabelList
                dataKey="Close"
                position="top"
                style={{ fontSize: "14px", fill: "#000" }}
                offset={10}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </Paper>
    </>
  );
};

export default BarGraph;

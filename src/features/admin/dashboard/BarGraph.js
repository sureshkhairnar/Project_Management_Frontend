import { Paper, Typography } from "@mui/material";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const BarGraph = ({ data }) => {
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
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Total" fill="#8884d8" background={{ fill: "#eee" }} />
            <Bar dataKey="Close" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </Paper>
    </>
  );
};

export default BarGraph;

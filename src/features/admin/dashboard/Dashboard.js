import React, { useEffect, useState } from "react";
import ProjectService from "../../../services/ProjectService";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import BarGraph from "./BarGraph";
import { Typography } from "@mui/material";
import "./Dashboard.css";
import Logo from "../../../assets/Logo.svg";

const Dashboard = () => {
  const [barGraph, setBarGraph] = useState([]);
  const [projectStats, setProjectStats] = useState({
    total: 0,
    closed: 0,
    running: 0,
    delayed: 0,
    cancelled: 0,
  });

  const processProjectData = (projects) => {
    const locationMap = {};

    projects.forEach((project) => {
      let { department, status } = project;
      const departmentShort = department.slice(0, 3).toUpperCase();

      if (!locationMap[departmentShort]) {
        locationMap[departmentShort] = {
          name: departmentShort,
          Total: 0,
          Close: 0,
        };
      }

      locationMap[departmentShort].Total += 1;

      if (status === "Closed") {
        locationMap[departmentShort].Close += 1;
      }
    });

    Object.values(locationMap).forEach((dept) => {
      const percentage = ((dept.Close / dept.Total) * 100).toFixed(0);
      dept.name = `${dept.name} ${" "} ${percentage}%`;
    });

    return Object.values(locationMap);
  };

  const loadProjectDetails = () => {
    ProjectService.fetchAllProject()
      .then((response) => {
        if (Array.isArray(response?.data?.data)) {
          const statusCounts = response?.data?.data.reduce((acc, project) => {
            acc[project.status] = (acc[project.status] || 0) + 1;
            return acc;
          }, {});

          setProjectStats({
            total: response?.data?.data.length,
            closed: statusCounts["Closed"] || 0,
            running: statusCounts["Running"] || 0,
            delayed: statusCounts["Closure Delay"] || 0,
            cancelled: statusCounts["Cancelled"] || 0,
          });

          const processedData = processProjectData(response.data.data);
          setBarGraph(processedData);

          console.log("details project:=>", response.data.data);
          console.log("details project stats:=>", statusCounts);
          console.log("processed data:=>", processedData);
        } else {
          console.error("Response data is not an array:", response.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    loadProjectDetails();
  }, []);

  return (
    <Box>
      <Box>
        <Typography variant="h6" className="dashboard-title">
          Dashboard
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }} mt={"-60px"}>
          <img
            src={Logo}
            alt="techprime logo"
            width={"60px"}
            style={{ alignSelf: "center" }}
          />
        </Box>
        <Box>
          <Grid
            container
            mt={1}
            spacing={2}
            sx={{
              flexDirection: { xs: "column", md: "row" },
              alignItems: { xs: "flex-start", md: "flex-start" },
              "@media (max-width:599px)": {
                flexDirection: "column",
              },
            }}
            flexWrap={"wrap"}
          >
            <Grid
              item
              xs={12}
              md={2.4}
              sx={{
                "@media (max-width:599px)": {
                  minWidth: "100%",
                },
              }}
            >
              <Card className="card-common">
                <Typography className="cardTitle">Total Projects</Typography>
                <Typography className="card-text">
                  {projectStats.total}
                </Typography>
              </Card>
            </Grid>
            <Grid
              item
              xs={12}
              md={2.4}
              sx={{
                "@media (max-width:599px)": {
                  minWidth: "100%",
                },
              }}
            >
              <Card className="card-common">
                <Typography className="cardTitle">Closed</Typography>
                <Typography className="card-text">
                  {projectStats.closed}
                </Typography>
              </Card>
            </Grid>
            <Grid
              item
              xs={12}
              md={2.4}
              sx={{
                "@media (max-width:599px)": {
                  minWidth: "100%",
                },
              }}
            >
              <Card className="card-common">
                <Typography className="cardTitle">Running</Typography>
                <Typography className="card-text">
                  {projectStats.running}
                </Typography>
              </Card>
            </Grid>
            <Grid
              item
              xs={12}
              md={2.4}
              sx={{
                "@media (max-width:599px)": {
                  minWidth: "100%",
                },
              }}
            >
              <Card className="card-common">
                <Typography className="cardTitle">Closure Delay</Typography>
                <Typography className="card-text">
                  {projectStats.delayed}
                </Typography>
              </Card>
            </Grid>
            <Grid
              item
              xs={12}
              md={2.4}
              sx={{
                "@media (max-width:599px)": {
                  minWidth: "100%",
                },
              }}
            >
              <Card className="card-common">
                <Typography className="cardTitle">Cancelled</Typography>
                <Typography className="card-text">
                  {projectStats.cancelled}
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} md={12}>
              <Box>
                <BarGraph data={barGraph} />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;

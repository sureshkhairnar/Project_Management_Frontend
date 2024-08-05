import React, { useState, useEffect } from "react";
import MuiDatatable from "mui-datatables";
import ProjectService from "../../../services/ProjectService";
import {
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Typography,
  Box,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { format } from "date-fns";
import "../dashboard/Dashboard.css";
import Logo from "../../../assets/Logo.svg";
import backIcon from "../../../assets/back arrow.svg";

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [key, setKey] = useState("");
  const [sortColumn, setSortColumn] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setKey(value);
  };

  const loadProject = () => {
    ProjectService.fetchAllProject()
      .then((response) => {
        setProjects(response.data.data);
        console.log("Projects loaded", response.data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    if (key) {
      let timeout = setTimeout(() => {
        ProjectService.getProjectAll(key)
          .then((response) => {
            setProjects(response.data.data);
            console.log("Filtered projects", response.data.data);
          })
          .catch((err) => {
            console.error(err);
          });
      }, 1200);
      return () => clearTimeout(timeout);
    } else {
      loadProject();
    }
  }, [key]);

  useEffect(() => {
    if (sortColumn) {
      const sortedProjects = [...projects].sort((a, b) => {
        if (a[sortColumn] < b[sortColumn]) return -1;
        if (a[sortColumn] > b[sortColumn]) return 1;
        return 0;
      });
      setProjects(sortedProjects);
    }
  }, [sortColumn]);

  const changeStatus = (id, status) => {
    ProjectService.updateProject(id, { status })
      .then((response) => {
        setProjects((prevProjects) =>
          prevProjects.map((project) =>
            project._id === id ? { ...project, status } : project
          )
        );
        console.log("Status updated...");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const formatDateRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const formattedStart = format(start, "MMM-dd, yyyy");
    const formattedEnd = format(end, "MMM-dd, yyyy");
    return `${formattedStart} to ${formattedEnd}`;
  };

  const columns = [
    {
      label: "Project Name",
      name: "projectname",
      options: {
        sort: true,
        filter: false,
        customHeadRender: ({ index, ...column }) => {
          return (
            <th
              key={index}
              style={{
                fontWeight: "bold",
                textAlign: "left",
                paddingLeft: "15px",
                paddingTop: "10px",
                paddingBottom: "10px",
                backgroundColor: "#E0F7FA",
                fontSize: "14px",
                color: "#555",
              }}
            >
              {column.label}
            </th>
          );
        },
        customBodyRenderLite: (index) => {
          const project = projects[index];
          return (
            <div>
              <div
                style={{ fontWeight: "bold", color: "#555", fontSize: "14px" }}
              >
                {project.projectname}
              </div>
              <div style={{ fontSize: "0.8rem", color: "#666" }}>
                {project.startdate && project.enddate
                  ? formatDateRange(project.startdate, project.enddate)
                  : "Date range not available"}
              </div>
            </div>
          );
        },
      },
    },
    {
      label: "Reason",
      name: "reason",
      options: {
        sort: true,
        filter: false,
        customHeadRender: ({ index, ...column }) => {
          return (
            <th
              key={index}
              style={{
                fontWeight: "bold",
                textAlign: "left",
                paddingLeft: "15px",
                fontSize: "14px",
                color: "#555",
                paddingTop: "10px",
                paddingBottom: "10px",
                backgroundColor: "#E0F7FA",
              }}
            >
              {column.label}
            </th>
          );
        },
      },
    },
    {
      label: "Type",
      name: "type",
      options: {
        sort: true,
        filter: false,
        customHeadRender: ({ index, ...column }) => {
          return (
            <th
              key={index}
              style={{
                fontWeight: "bold",
                textAlign: "left",
                paddingLeft: "15px",
                fontSize: "14px",
                color: "#555",
                paddingTop: "10px",
                paddingBottom: "10px",
                backgroundColor: "#E0F7FA",
              }}
            >
              {column.label}
            </th>
          );
        },
      },
    },
    {
      label: "Division",
      name: "division",
      options: {
        sort: true,
        filter: false,
        customHeadRender: ({ index, ...column }) => {
          return (
            <th
              key={index}
              style={{
                fontWeight: "bold",
                textAlign: "left",
                paddingLeft: "15px",
                fontSize: "14px",
                color: "#555",
                paddingTop: "10px",
                paddingBottom: "10px",
                backgroundColor: "#E0F7FA",
              }}
            >
              {column.label}
            </th>
          );
        },
      },
    },
    {
      label: "Category",
      name: "category",
      options: {
        sort: true,
        filter: false,
        customHeadRender: ({ index, ...column }) => {
          return (
            <th
              key={index}
              style={{
                fontWeight: "bold",
                textAlign: "left",
                paddingLeft: "15px",
                fontSize: "14px",
                color: "#555",
                paddingTop: "10px",
                paddingBottom: "10px",
                backgroundColor: "#E0F7FA",
              }}
            >
              {column.label}
            </th>
          );
        },
      },
    },
    {
      label: "Priority",
      name: "priority",
      options: {
        sort: true,
        filter: false,
        customHeadRender: ({ index, ...column }) => {
          return (
            <th
              key={index}
              style={{
                fontWeight: "bold",
                textAlign: "left",
                paddingLeft: "15px",
                fontSize: "14px",
                color: "#555",
                paddingTop: "10px",
                paddingBottom: "10px",
                backgroundColor: "#E0F7FA",
              }}
            >
              {column.label}
            </th>
          );
        },
      },
    },
    {
      label: "Dept.",
      name: "department",
      options: {
        sort: true,
        filter: false,
        customHeadRender: ({ index, ...column }) => {
          return (
            <th
              key={index}
              style={{
                fontWeight: "bold",
                textAlign: "left",
                paddingLeft: "15px",
                fontSize: "14px",
                color: "#555",
                paddingTop: "10px",
                paddingBottom: "10px",
                backgroundColor: "#E0F7FA",
              }}
            >
              {column.label}
            </th>
          );
        },
      },
    },
    {
      label: "Location",
      name: "location",
      options: {
        sort: true,
        filter: false,
        customHeadRender: ({ index, ...column }) => {
          return (
            <th
              key={index}
              style={{
                fontWeight: "bold",
                textAlign: "left",
                paddingLeft: "15px",
                fontSize: "14px",
                color: "#555",
                paddingTop: "10px",
                paddingBottom: "10px",
                backgroundColor: "#E0F7FA",
              }}
            >
              {column.label}
            </th>
          );
        },
      },
    },
    {
      label: "Status",
      name: "status",
      options: {
        sort: false,
        filter: true,
        setCellProps: () => ({
          style: {
            fontWeight: "bold",
            color: "#4169E1",
            fontSize: "14px",
          },
        }),
        customHeadRender: ({ index, ...column }) => {
          return (
            <th
              key={index}
              style={{
                fontWeight: "bold",
                textAlign: "left",
                paddingLeft: "15px",
                fontSize: "14px",
                color: "#555",
                paddingTop: "10px",
                paddingBottom: "10px",
                backgroundColor: "#E0F7FA",
              }}
            >
              {column.label}
            </th>
          );
        },
      },
    },
    {
      label: "Actions",
      name: "action",
      options: {
        sort: true,
        filter: false,
        customHeadRender: ({ index, ...column }) => {
          return (
            <th
              key={index}
              style={{
                fontWeight: "bold",
                textAlign: "left",
                paddingLeft: "15px",
                color: "#666",
                fontSize: "14px",
                paddingTop: "10px",
                paddingBottom: "10px",
                backgroundColor: "#E0F7FA",
              }}
            >
              {column.label}
            </th>
          );
        },
        customBodyRenderLite: (index) => {
          const project = projects[index];
          return (
            <Grid container display={"flex"} flexWrap={"wrap"} spacing={1}>
              <Grid item>
                <Button
                  size="small"
                  onClick={() => changeStatus(project._id, "Running")}
                  variant={
                    project.status === "Running" ? "contained" : "outlined"
                  }
                  color="primary"
                  sx={{
                    margin: "0 1px",
                    padding: "1px 10px",
                    textTransform: "capitalize",
                    backgroundColor:
                      project.status === "Running"
                        ? "primary.main"
                        : "transparent",
                    color: project.status === "Running" ? "#fff" : "primary",
                    borderRadius: 10,
                  }}
                >
                  Start
                </Button>
              </Grid>
              <Grid item>
                <Button
                  size="small"
                  onClick={() => changeStatus(project._id, "Closed")}
                  variant={
                    project.status === "Closed" ? "contained" : "outlined"
                  }
                  color="primary"
                  sx={{
                    margin: "0 1px",
                    padding: "1px 10px",
                    textTransform: "capitalize",
                    backgroundColor:
                      project.status === "Closed"
                        ? "primary.main"
                        : "transparent",
                    color: project.status === "Closed" ? "#fff" : "primary",
                    borderRadius: 10,
                  }}
                >
                  Close
                </Button>
              </Grid>
              <Grid item>
                <Button
                  size="small"
                  onClick={() => changeStatus(project._id, "Cancelled")}
                  variant={
                    project.status === "Cancelled" ? "contained" : "outlined"
                  }
                  color="primary"
                  sx={{
                    margin: "0 1px",
                    padding: "1px 10px",
                    textTransform: "capitalize",
                    backgroundColor:
                      project.status === "Cancelled"
                        ? "primary.main"
                        : "transparent",
                    color: project.status === "Cancelled" ? "#fff" : "primary",
                    borderRadius: 10,
                  }}
                >
                  Cancel
                </Button>
              </Grid>
            </Grid>
          );
        },
      },
    },
  ];

  return (
    <>
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <img
            src={backIcon}
            alt="back icon"
            style={{ marginTop: "-5px", marginLeft: "10px" }}
          />
          <Typography variant="h6" className="dashboard-title">
            Project Listing
          </Typography>
        </Box>
        <Box
          sx={{ display: "flex", justifyContent: "center" }}
          mt={"-60px"}
          mb={"28px"}
        >
          <img
            src={Logo}
            alt="techprime logo"
            width={"60px"}
            style={{ alignSelf: "center" }}
          />
        </Box>
        <MuiDatatable
          data={projects}
          columns={columns}
          options={{
            selectableRows: "none",
            rowsPerPage: 10,
            rowsPerPageOptions: [10, 20, 50],
          }}
        />
      </Box>
    </>
  );
};

export default ProjectList;

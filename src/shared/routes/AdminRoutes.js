import { lazy } from "react";
import DashboardIcon from "../../assets/Dashboard.svg";
import DashboardActiveIcon from "../../assets/Dashboard-active.svg";
import ProjectListIcon from "../../assets/Project-list.svg";
import ProjectListActiveIcon from "../../assets/Project-list-active.svg";
import AddProjectIcon from "../../assets/create-project.svg";
import AddProjectActiveIcon from "../../assets/create-project-active.svg";
import AddEditProject from "../../features/admin/Project/AddEditProject";

const Dashboard = lazy(() =>
  import("../../features/admin/dashboard/Dashboard")
);

const Project = lazy(() => import("../../features/admin/Project/Project"));

export default [
  {
    label: "Dashboard",
    path: "",
    showInMenu: true,
    component: <Dashboard />,
    icon: <img src={DashboardIcon} alt="dashboard icon" />,
    activeIcon: <img src={DashboardActiveIcon} alt="dashboard active icon" />,
    // roles: ["student"],
    hasSubRoutes: true,
  },
  {
    label: "ProjectList",
    path: "projects",
    showInMenu: true,
    // roles: ["student"],
    icon: <img src={ProjectListIcon} alt="project list icon" />,
    activeIcon: (
      <img src={ProjectListActiveIcon} alt="project list active icon" />
    ),
    component: <Project />,
    hasSubRoutes: true,
  },
  {
    label: "AddProjects",
    path: "Addproject",
    showInMenu: true,
    // roles: ["student"],
    icon: <img src={AddProjectIcon} alt="add project icon" />,
    activeIcon: (
      <img src={AddProjectActiveIcon} alt="add project active icon" />
    ),
    component: <AddEditProject />,
    hasSubRoutes: true,
  },
];

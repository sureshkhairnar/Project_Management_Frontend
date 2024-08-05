import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Route, Routes, NavLink as Link } from "react-router-dom";
import routes from "../../shared/routes/FrontendRoutes";
import loginBg from "../../assets/login-bg-1.svg";
import { Grid } from "@mui/material";

const Header = (props) => {
  return (
    <>
      <Grid container display={"flex"} flexDirection={"row"}>
        <Grid item xs={0.75} sx={{ backgroundColor: "black" }}></Grid>
        <Grid item xs={10.5} sx={{ backgroundColor: "beige" }}>
          <Box
            component="main"
            sx={{
              p: 0,
              backgroundImage: `url(${loginBg})`,
              backgroundRepeat: "no-repeat",
              minHeight: "100vh",
              width: "100%",
            }}
          >
            <Toolbar />
            <Routes>
              {Array.isArray(routes) &&
                routes
                  .filter(({ addRoute }) => addRoute)
                  .map(({ path, component }, i) => (
                    <Route key={path + i} path={path} element={component} />
                  ))}
            </Routes>
          </Box>
        </Grid>
        <Grid item xs={0.75} sx={{ backgroundColor: "black" }}></Grid>
      </Grid>
    </>
  );
};

export default Header;

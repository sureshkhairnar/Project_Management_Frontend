import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import SidebarRoutes from "./SidebarRoutes";
import SidebarMenu from "./SidebarMenu";
import { Grid, useMediaQuery } from "@mui/material";
import headerBg from "../../assets/Header-bg.svg";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),

  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const Sidebar = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Ensure the sidebar is closed on mobile
  React.useEffect(() => {
    if (isMobile) {
      setOpen(false);
    }
  }, [isMobile]);

  const handleDrawerOpen = () => {
    if (!isMobile) {
      setOpen(true);
    }
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex", backgroundColor: "#f4f0ec" }} flexGrow={1}>
      {/* <AppBar position="fixed" open={open}>
        <Toolbar>
        {!isMobile && (
          <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: 5,
            ...(open && { display: "none" }),
            }}
            >
              <MenuIcon />
              </IconButton>
              )}
              <Typography
              variant="h6"
              noWrap
              component="div"
              marginLeft={isMobile ?? 5}
              >
              <img
              style={{
                width: "250px",
                height: "50px",
                padding: 4,
                marginTop: 6,
                }}
                src="https://techprimelab.com/wp-content/uploads/2020/07/tpl-logo.png"
                />
                </Typography>
                </Toolbar>
                </AppBar> */}
      <Grid container display={"flex"} flexDirection={"row"}>
        <Grid item xs={0.8} order={1} sx={{ backgroundColor: "black" }}></Grid>
        <CssBaseline />
        <Drawer variant="permanent" open={open}>
          {/* <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider /> */}

          <SidebarMenu open={open} />
        </Drawer>
        <Grid item xs={10} order={2} sx={{ backgroundColor: "beige" }}>
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              width: "100%",
              overflowX: "hidden",
              p: 0,
              backgroundImage: `url(${headerBg})`,
              backgroundRepeat: "no-repeat",
              width: "100%",
            }}
            minHeight={"100vh"}
          >
            {/* <DrawerHeader /> */}
            <Box p={2} mt={1}>
              <SidebarRoutes />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={0.69} order={3} sx={{ backgroundColor: "black" }}></Grid>
      </Grid>
    </Box>
  );
};

export default Sidebar;

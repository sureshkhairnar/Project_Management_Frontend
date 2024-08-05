// // import * as React from "react";
// // import List from "@mui/material/List";
// // import ListItem from "@mui/material/ListItem";
// // import ListItemButton from "@mui/material/ListItemButton";
// // import ListItemIcon from "@mui/material/ListItemIcon";
// // import ListItemText from "@mui/material/ListItemText";

// // import routes from "../../shared/routes/AdminRoutes";
// // import { NavLink as NLink, useLocation, useNavigate } from "react-router-dom";
// // import { Box, IconButton, MenuItem, styled } from "@mui/material";
// // import { useDispatch, useSelector } from "react-redux";
// // import { removeUser, selectUser } from "../../app/slices/AuthSlice";
// // import LogoutIcon from "../../assets/Logout.svg";
// // import logo from "../../assets/Logo.svg";

// // const NavLink = styled(NLink)({
// //   textDecoration: "none",
// // });

// // const SidebarMenu = ({ open }) => {
// //   const loggedUser = useSelector(selectUser);
// //   const location = useLocation();
// //   const navigate = useNavigate();
// //   const dispatch = useDispatch();

// //   const handleLogout = () => {
// //     sessionStorage.clear();
// //     dispatch(removeUser());
// //     navigate("/");
// //   };

// //   return (
// //     <Box>
// //       <Box
// //         component="img"
// //         src={logo}
// //         alt="Your SVG"
// //         sx={{
// //           width: open ? "150px" : "50px",
// //           margin: "20px auto",
// //         }}
// //         display={open ? "block" : "none"}
// //       />

// //       <List
// //         style={{ color: "blue" }}
// //         sx={{ marginTop: open ? "10vh" : "20vh" }}
// //       >
// //         {Array.isArray(routes) &&
// //           routes
// //             .filter((route) => route.showInMenu)
// //             .filter((route) => route.roles.includes(loggedUser.role))
// //             .map(({ path, label, icon, activeIcon }, index) => (
// //               <ListItem
// //                 key={path + "-" + index}
// //                 disablePadding
// //                 sx={{ display: "block" }}
// //               >
// //                 <NavLink
// //                   end
// //                   to={path}
// //                   style={({ isActive }) => ({
// //                     width: "100%",
// //                     color: isActive ? "#0d6efd" : "#000",
// //                     fontWeight: isActive ? "bold" : "normal",
// //                     textDecoration: "none",
// //                     borderRadius: "4px",
// //                     transition: "background-color 0.3s, color 0.3s",
// //                   })}
// //                 >
// //                   <ListItemButton
// //                     sx={{
// //                       minHeight: 48,
// //                       justifyContent: open ? "initial" : "center",
// //                       px: 2.5,
// //                     }}
// //                   >
// //                     <ListItemIcon
// //                       sx={{
// //                         minWidth: 0,
// //                         mr: open ? 3 : "auto",
// //                         justifyContent: "center",
// //                         color: "inherit",
// //                       }}
// //                     >
// //                       {location == `${"secured" / path}` ? activeIcon : icon}
// //                     </ListItemIcon>
// //                     <ListItemText
// //                       primary={label}
// //                       sx={{ opacity: open ? 1 : 0 }}
// //                     />
// //                   </ListItemButton>
// //                 </NavLink>
// //               </ListItem>
// //             ))}
// //         <MenuItem onClick={handleLogout}>
// //           <IconButton sx={{ PaddingTop: 0, paddingBottom: 0 }}>
// //             <img src={LogoutIcon} alt="logout icon" />
// //           </IconButton>
// //         </MenuItem>
// //       </List>
// //     </Box>
// //   );
// // };

// // export default SidebarMenu;

// import * as React from "react";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import { Box, Divider, IconButton, MenuItem, styled } from "@mui/material";
// import { NavLink as NLink, useLocation, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { removeUser, selectUser } from "../../app/slices/AuthSlice";

// import routes from "../../shared/routes/AdminRoutes";
// import LogoutIcon from "../../assets/Logout.svg";
// import logo from "../../assets/Logo.svg";

// const NavLink = styled(NLink)({
//   textDecoration: "none",
// });

// const SidebarMenu = ({ open }) => {
//   const loggedUser = useSelector(selectUser);
//   const location = useLocation();
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const handleLogout = () => {
//     sessionStorage.clear();
//     dispatch(removeUser());
//     navigate("/");
//   };

//   return (
//     <Box
//       sx={{
//         display: "flex",
//         flexDirection: "column",
//         height: "100vh",
//         justifyContent: "space-between",
//       }}
//     >
//       <Box>
//         <Box
//           component="img"
//           src={logo}
//           alt="Your SVG"
//           sx={{
//             width: open ? "150px" : "50px",
//             margin: "20px auto",
//           }}
//           display={open ? "block" : "none"}
//         />

//         <List
//           style={{ color: "blue" }}
//           sx={{ marginTop: open ? "10vh" : "33vh" }}
//         >
//           {Array.isArray(routes) &&
//             routes
//               .filter((route) => route.showInMenu)
//               .filter((route) => route.roles.includes(loggedUser.role))
//               .map(({ path, label, icon, activeIcon }, index, arr) => (
//                 <ListItem
//                   key={path + "-" + index}
//                   disablePadding
//                   sx={{ display: "block" }}
//                 >
//                   <NavLink
//                     end
//                     to={path}
//                     style={({ isActive }) => ({
//                       width: "100%",
//                       color: isActive ? "#0d6efd" : "#000",
//                       fontWeight: isActive ? "bold" : "normal",
//                       textDecoration: "none",
//                       borderRadius: "4px",
//                       transition: "background-color 0.3s, color 0.3s",
//                     })}
//                   >
//                     <ListItemButton
//                       sx={{
//                         minHeight: 48,
//                         justifyContent: open ? "initial" : "center",
//                         px: 2.5,
//                       }}
//                     >
//                       <ListItemIcon
//                         sx={{
//                           minWidth: 0,
//                           mr: open ? 3 : "auto",
//                           justifyContent: "center",
//                           color: "inherit",
//                         }}
//                       >
//                         {location.pathname === path ? activeIcon : icon}
//                       </ListItemIcon>
//                       <ListItemText
//                         primary={label}
//                         sx={{ opacity: open ? 1 : 0 }}
//                       />
//                     </ListItemButton>
//                   </NavLink>
//                   {index == 1 ?? <Divider />}
//                 </ListItem>
//               ))}
//         </List>
//       </Box>
//       <MenuItem onClick={handleLogout} sx={{ marginTop: "auto" }}>
//         <IconButton sx={{ paddingTop: 0, paddingBottom: 0 }}>
//           <img src={LogoutIcon} alt="logout icon" />
//         </IconButton>
//       </MenuItem>
//     </Box>
//   );
// };

// export default SidebarMenu;

import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Box, Divider, IconButton, MenuItem, styled } from "@mui/material";
import { NavLink as NLink, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser, selectUser } from "../../app/slices/AuthSlice";

import routes from "../../shared/routes/AdminRoutes";
import LogoutIcon from "../../assets/Logout.svg";
import logo from "../../assets/Logo.svg";

const NavLink = styled(NLink)({
  textDecoration: "none",
});

const SidebarMenu = ({ open }) => {
  const loggedUser = useSelector(selectUser);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    sessionStorage.clear();
    dispatch(removeUser());
    navigate("/");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Box
          component="img"
          src={logo}
          alt="SVG logo"
          sx={{
            width: open ? "150px" : "50px",
            margin: "20px auto",
          }}
          display={open ? "block" : "none"}
        />

        <List
          style={{ color: "blue" }}
          sx={{
            marginTop: open ? "10vh" : "33vh",
          }}
        >
          {Array.isArray(routes) &&
            routes
              .filter((route) => route.showInMenu)
              .filter((route) => route.roles.includes(loggedUser.role))
              .map(({ path, label, icon, activeIcon }, index) => (
                <React.Fragment key={path + "-" + index}>
                  <ListItem disablePadding sx={{ display: "block" }}>
                    <NavLink
                      end
                      to={path}
                      style={({ isActive }) => ({
                        width: "100%",
                        color: isActive ? "#0d6efd" : "#000",
                        fontWeight: isActive ? "bold" : "normal",
                        textDecoration: "none",
                        borderRadius: "4px",
                        transition: "background-color 0.3s, color 0.3s",
                      })}
                    >
                      <ListItemButton
                        sx={{
                          minHeight: 48,
                          justifyContent: open ? "initial" : "center",
                          px: 2.5,
                          marginTop: `${index === 1 && "15px"}`,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: open ? 3 : "auto",
                            justifyContent: "center",
                            color: "inherit",
                          }}
                        >
                          {location.pathname === path ? activeIcon : icon}
                        </ListItemIcon>
                        <ListItemText
                          primary={label}
                          sx={{ opacity: open ? 1 : 0 }}
                        />
                      </ListItemButton>
                    </NavLink>
                  </ListItem>
                  {index === 1 && (
                    <Divider
                      style={{
                        maxWidth: "70%",
                        margin: "0 auto",
                        marginTop: "15px",
                        marginBottom: "15px",
                      }}
                    />
                  )}
                </React.Fragment>
              ))}
        </List>
      </Box>
      <IconButton
        onClick={handleLogout}
        sx={{
          paddingTop: 0,
          paddingBottom: 0,
          minHeight: "48px",
          marginBottom: "20px",
        }}
      >
        <img src={LogoutIcon} alt="logout icon" />
      </IconButton>
    </Box>
  );
};

export default SidebarMenu;

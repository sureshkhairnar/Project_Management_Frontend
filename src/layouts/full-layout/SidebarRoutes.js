import React, { Suspense, useEffect } from "react";
import routes from "../../shared/routes/AdminRoutes";
import { Routes, Navigate, Route } from "react-router-dom";
import { selectUser } from "../../app/slices/AuthSlice";
import { useSelector } from "react-redux";

const SidebarRoutes = () => {
  const loggedUser = useSelector(selectUser);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {Array.isArray(routes) &&
            routes
              .filter((route) => route.roles.includes(loggedUser.role))
              .map(({ path, component, hasSubRoutes }, i) => (
                <Route
                  key={path + "-" + i}
                  path={hasSubRoutes ? `${path}/*` : path}
                  element={component}
                />
              ))}
        </Routes>
      </Suspense>
    </>
  );
};

export default SidebarRoutes;

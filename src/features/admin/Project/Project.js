import React from "react";
import { Route, Routes } from "react-router-dom";
import ProjectList from "./ProjectList";

const Project = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<ProjectList />} />
      </Routes>
    </>
  );
};

export default Project;

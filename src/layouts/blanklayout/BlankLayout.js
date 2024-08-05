import React from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { Box, Container, Paper } from "@mui/material";

const BlankLayout = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    const token = sessionStorage.getItem("access");
    const refreshToken = sessionStorage.getItem("refresh");
    if (token && refreshToken) {
      navigate("/secured", { replace: true });
    }
  }, [navigate]);

  return (
    <>
      <Header />
    </>
  );
};

export default BlankLayout;

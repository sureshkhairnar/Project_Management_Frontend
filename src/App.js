import * as React from "react";
import BlankLayout from "./layouts/blanklayout/BlankLayout";
import FullLayout from "./layouts/full-layout/FullLayout";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, addUser } from "./app/slices/AuthSlice";
import { Routes, Route } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";
import AuthService from "./services/AuthService";
import "./App.css";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loggedUSer = useSelector(selectUser);

  React.useEffect(() => {
    //validate the token
    AuthService.validateToken()
      .then((response) => {
        console.log(response.data, "valid token");
        dispatch(addUser(response?.data.data));
      })
      .catch((err) => {
        console.error(err);
        if (err.response.status == 404) {
          sessionStorage.clear();
          navigate("/login");
        }
      });
  }, []);

  const token = sessionStorage.getItem("access");

  return loggedUSer._id || token ? children : <Navigate to="/" />;
};

function App() {
  return (
    <Routes>
      <Route path="/*" element={<BlankLayout />} />
      <Route
        path="/secured/*"
        element={
          <ProtectedRoute>
            <FullLayout />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;

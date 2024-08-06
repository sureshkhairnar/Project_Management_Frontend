import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Paper, IconButton, InputAdornment } from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import AuthService from "../../../services/AuthService";
import { useNavigate } from "react-router-dom";
import { addUser } from "../../../app/slices/AuthSlice";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import logo from "../../../assets/Logo.svg";
import passwordHideIcon from "../../../assets/hide-password.svg";

const theme = createTheme();

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const CustomTextField = ({ label, ...props }) => (
  <Box sx={{ marginTop: "20px" }}>
    <Typography
      component="label"
      variant="body2"
      sx={{
        backgroundColor: "#fff",
        padding: "0 4px",
        color: "#777",
      }}
    >
      {label}
    </Typography>
    <Field
      as={TextField}
      fullWidth
      margin="normal"
      {...props}
      sx={{
        "& .MuiInputBase-root": {
          marginTop: "-15px",
        },
      }}
    />
  </Box>
);

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (values, { setSubmitting }) => {
    AuthService.userLogin(values)
      .then((response) => {
        const message = response?.data?.message || "Logged In Successfully";
        Swal.fire({
          icon: "success",
          title: "Success",
          text: message,
        });
        dispatch(addUser(response.data.data));
        navigate("/secured");
      })
      .catch((err) => {
        const message = err.response
          ? err.response.data.message
          : "Could not login";
        Swal.fire({
          icon: "error",
          title: "Error",
          text: message,
        });
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src={logo} alt="Logo" />
          <p style={{ color: "#fff", paddingBottom: "10px" }}>
            Online Project Management
          </p>
          <Paper
            sx={{ p: 4, width: "100%", borderRadius: "10px" }}
            elevation={5}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                component="h1"
                variant="h6"
                color={"#555"}
                mb={3}
                mt={2}
              >
                Login to get started
              </Typography>
            </Box>
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
              validateOnBlur
            >
              {({ isSubmitting, errors, touched }) => (
                <Form noValidate>
                  <CustomTextField
                    name="email"
                    id="email"
                    label="Email"
                    size="small"
                    helperText={
                      touched.email && errors.email ? errors.email : ""
                    }
                    error={touched.email && Boolean(errors.email)}
                  />
                  <CustomTextField
                    name="password"
                    id="password"
                    label="Password"
                    size="small"
                    type={showPassword ? "text" : "password"}
                    helperText={
                      touched.password && errors.password ? errors.password : ""
                    }
                    error={touched.password && Boolean(errors.password)}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            sx={{ backgroundColor: "inherit" }}
                          >
                            <img
                              src={passwordHideIcon}
                              alt="password hide icon"
                            />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                  <Grid item sx={{ float: "right" }}>
                    <Link
                      to="#"
                      variant="body2"
                      style={{
                        textDecoration: "none",
                        fontSize: "14px",
                        color: "#0d6efd",
                      }}
                    >
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid
                    item
                    container
                    display={"flex"}
                    justifyContent={"center"}
                  >
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{
                        mb: 2,
                        mt: 2.1,
                        borderRadius: "50px",
                        textTransform: "capitalize",
                        padding: "4px 60px",
                      }}
                      disabled={isSubmitting}
                    >
                      Login
                    </Button>
                  </Grid>
                  {/* <Grid item textAlign={"center"}>
                    <Link
                      to="/register"
                      variant="body2"
                      style={{
                        textDecoration: "none",
                        fontSize: "14px",
                        color: "#0d6efd",
                      }}
                    >
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid> */}
                </Form>
              )}
            </Formik>
          </Paper>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Login;

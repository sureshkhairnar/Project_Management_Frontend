import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import {
  Button,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  FormHelperText,
  Typography,
  Paper,
} from "@mui/material";
import ProjectService from "../../../services/ProjectService";
import Swal from "sweetalert2";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import Logo from "../../../assets/Logo.svg";
import backIcon from "../../../assets/back arrow.svg";

// Yup validation schema
const validationSchema = Yup.object({
  projectname: Yup.string().required("Project Name is required"),
  reason: Yup.string().required("Reason is required"),
  type: Yup.string().required("Type is required"),
  division: Yup.string().required("Division is required"),
  category: Yup.string().required("Category is required"),
  priority: Yup.string().required("Priority is required"),
  department: Yup.string().required("Department is required"),
  startdate: Yup.date()
    .required("Start date is required")
    .nullable()
    .typeError("Invalid date format"),
  enddate: Yup.date()
    .required("End date is required")
    .nullable()
    .typeError("Invalid date format")
    .when("startdate", {
      is: (startdate) => startdate,
      then: Yup.date().min(
        Yup.ref("startdate"),
        "End date must be after the start date"
      ),
    }),
  location: Yup.string().required("Location is required"),
  status: Yup.string().required("Status is required"),
});

const AddEditProject = () => {
  const handleSubmit = (values, { resetForm }) => {
    ProjectService.createProject(values)
      .then((response) => {
        console.log("create project res", response);
        Swal.fire({
          icon: "success",
          title: "Success",
          text: response?.data?.message,
        });
        resetForm();
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: err?.message,
        });
        console.log(err);
      });
  };

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
            Create Project
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
        <Paper
          sx={{ padding: "20px", borderRadius: "10px", minHeight: "100vh" }}
        >
          <Box>
            <Formik
              initialValues={{
                projectname: "",
                reason: "",
                type: "",
                division: "",
                category: "",
                priority: "",
                department: "",
                startdate: "",
                enddate: "",
                location: "",
                status: "",
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, touched, setFieldValue, handleBlur }) => (
                <Form>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={8} padding={"30px"} mb={4}>
                      <Field
                        as={TextField}
                        fullWidth
                        size="large"
                        label="Project Name"
                        name="projectname"
                        variant="outlined"
                        helperText={touched.projectname && errors.projectname}
                        error={
                          touched.projectname && Boolean(errors.projectname)
                        }
                        onBlur={handleBlur}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <Button
                        type="submit"
                        variant="contained"
                        sx={{
                          borderRadius: "50px",
                          margin: "10px",
                          float: "right",
                          padding: "5px 30px",
                          textTransform: "capitalize",
                        }}
                      >
                        Save Project
                      </Button>
                    </Grid>
                  </Grid>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6} lg={4} sx={{ padding: "10px" }}>
                      <FormControl
                        fullWidth
                        error={touched.reason && Boolean(errors.reason)}
                      >
                        <InputLabel id="reason-label">Reason</InputLabel>
                        <Field
                          as={Select}
                          labelId="reason-label"
                          id="reason-select"
                          label="Reason"
                          name="reason"
                          onBlur={handleBlur}
                          onChange={(e) =>
                            setFieldValue("reason", e.target.value)
                          }
                        >
                          <MenuItem value="For Business">For Business</MenuItem>
                          <MenuItem value="For Education">
                            For Education
                          </MenuItem>
                        </Field>
                        <FormHelperText>
                          {touched.reason && errors.reason}
                        </FormHelperText>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4} sx={{ padding: "10px" }}>
                      <FormControl
                        fullWidth
                        error={touched.type && Boolean(errors.type)}
                      >
                        <InputLabel id="type-label">Type</InputLabel>
                        <Field
                          as={Select}
                          labelId="type-label"
                          id="type-select"
                          label="Type"
                          name="type"
                          onBlur={handleBlur}
                          onChange={(e) =>
                            setFieldValue("type", e.target.value)
                          }
                        >
                          <MenuItem value="Internal">Internal</MenuItem>
                          <MenuItem value="External">External</MenuItem>
                          <MenuItem value="Vendor">Vendor</MenuItem>
                        </Field>
                        <FormHelperText>
                          {touched.type && errors.type}
                        </FormHelperText>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4} sx={{ padding: "10px" }}>
                      <FormControl
                        fullWidth
                        error={touched.division && Boolean(errors.division)}
                      >
                        <InputLabel id="division-label">Division</InputLabel>
                        <Field
                          as={Select}
                          labelId="division-label"
                          id="division-select"
                          label="Division"
                          name="division"
                          onBlur={handleBlur}
                          onChange={(e) =>
                            setFieldValue("division", e.target.value)
                          }
                        >
                          <MenuItem value="Compressor">Compressor</MenuItem>
                          <MenuItem value="Pumps">Pumps</MenuItem>
                          <MenuItem value="Water heater">Water Heater</MenuItem>
                        </Field>
                        <FormHelperText>
                          {touched.division && errors.division}
                        </FormHelperText>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4} sx={{ padding: "10px" }}>
                      <FormControl
                        fullWidth
                        error={touched.category && Boolean(errors.category)}
                      >
                        <InputLabel id="category-label">Category</InputLabel>
                        <Field
                          as={Select}
                          labelId="category-label"
                          id="category-select"
                          label="Category"
                          name="category"
                          onBlur={handleBlur}
                          onChange={(e) =>
                            setFieldValue("category", e.target.value)
                          }
                        >
                          <MenuItem value="Quality A">Quality A</MenuItem>
                          <MenuItem value="Quality B">Quality B</MenuItem>
                          <MenuItem value="Quality C">Quality C</MenuItem>
                        </Field>
                        <FormHelperText>
                          {touched.category && errors.category}
                        </FormHelperText>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4} sx={{ padding: "10px" }}>
                      <FormControl
                        fullWidth
                        error={touched.priority && Boolean(errors.priority)}
                      >
                        <InputLabel id="priority-label">Priority</InputLabel>
                        <Field
                          as={Select}
                          labelId="priority-label"
                          id="priority-select"
                          label="Priority"
                          name="priority"
                          onBlur={handleBlur}
                          onChange={(e) =>
                            setFieldValue("priority", e.target.value)
                          }
                        >
                          <MenuItem value="High">High</MenuItem>
                          <MenuItem value="Medium">Medium</MenuItem>
                          <MenuItem value="Low">Low</MenuItem>
                        </Field>
                        <FormHelperText>
                          {touched.priority && errors.priority}
                        </FormHelperText>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4} sx={{ padding: "10px" }}>
                      <FormControl
                        fullWidth
                        error={touched.department && Boolean(errors.department)}
                      >
                        <InputLabel id="department-label">
                          Department
                        </InputLabel>
                        <Field
                          as={Select}
                          labelId="department-label"
                          id="department-select"
                          label="Department"
                          name="department"
                          onBlur={handleBlur}
                          onChange={(e) =>
                            setFieldValue("department", e.target.value)
                          }
                        >
                          <MenuItem value="Finance">Finance</MenuItem>
                          <MenuItem value="Quality">Quality</MenuItem>
                          <MenuItem value="Maintenance">Maintenance</MenuItem>
                          <MenuItem value="Store">Store</MenuItem>
                        </Field>
                        <FormHelperText>
                          {touched.department && errors.department}
                        </FormHelperText>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4} sx={{ padding: "10px" }}>
                      <Field
                        as={TextField}
                        fullWidth
                        variant="outlined"
                        type="date"
                        label="Start date"
                        name="startdate"
                        InputLabelProps={{ shrink: true }}
                        helperText={touched.startdate && errors.startdate}
                        error={touched.startdate && Boolean(errors.startdate)}
                        onBlur={handleBlur}
                        onChange={(e) =>
                          setFieldValue("startdate", e.target.value)
                        }
                      />
                    </Grid>
                    <Grid item xs={12} md={6} lg={4} sx={{ padding: "10px" }}>
                      <Field
                        as={TextField}
                        fullWidth
                        variant="outlined"
                        type="date"
                        label="End date"
                        name="enddate"
                        InputLabelProps={{ shrink: true }}
                        helperText={touched.enddate && errors.enddate}
                        error={touched.enddate && Boolean(errors.enddate)}
                        onBlur={handleBlur}
                        onChange={(e) =>
                          setFieldValue("enddate", e.target.value)
                        }
                      />
                    </Grid>
                    <Grid item xs={12} md={6} lg={4} sx={{ padding: "10px" }}>
                      <FormControl
                        fullWidth
                        error={touched.location && Boolean(errors.location)}
                      >
                        <InputLabel id="location-label">Location</InputLabel>
                        <Field
                          as={Select}
                          labelId="location-label"
                          id="location-select"
                          label="Location"
                          name="location"
                          onBlur={handleBlur}
                          onChange={(e) =>
                            setFieldValue("location", e.target.value)
                          }
                        >
                          <MenuItem value="Pune">Pune</MenuItem>
                          <MenuItem value="Mumbai">Mumbai</MenuItem>
                          <MenuItem value="Ahmednagar">Ahmednagar</MenuItem>
                          <MenuItem value="Nashik">Nashik</MenuItem>
                          <MenuItem value="Hyderabad">Hyderabad</MenuItem>
                        </Field>
                        <FormHelperText>
                          {touched.location && errors.location}
                        </FormHelperText>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4} sx={{ padding: "10px" }}>
                      <FormControl
                        fullWidth
                        error={touched.status && Boolean(errors.status)}
                      >
                        <InputLabel id="status-label">Status</InputLabel>
                        <Field
                          as={Select}
                          labelId="status-label"
                          id="status-select"
                          label="Status"
                          name="status"
                          onBlur={handleBlur}
                          onChange={(e) =>
                            setFieldValue("status", e.target.value)
                          }
                        >
                          <MenuItem value="Registered">Registered</MenuItem>
                          <MenuItem value="Close">Close</MenuItem>
                          <MenuItem value="Cancelled">Cancelled</MenuItem>
                          <MenuItem value="Running">Running</MenuItem>
                          <MenuItem value="Closure Delay">
                            Closure Delay
                          </MenuItem>
                        </Field>
                        <FormHelperText>
                          {touched.status && errors.status}
                        </FormHelperText>
                      </FormControl>
                    </Grid>
                  </Grid>
                </Form>
              )}
            </Formik>
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default AddEditProject;

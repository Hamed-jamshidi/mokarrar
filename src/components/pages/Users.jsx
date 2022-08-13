import {
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import TableComponent from "../common/TableComponent";
import "./Home.css";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Users() {
  const validationForm = Yup.object().shape({
    userCode: Yup.string().required("کد کاربری را وارد کنید"),
    managerName: Yup.string().required(" نام مدیر را وارد کنید"),
    userName: Yup.string().required("نام کاربری را وارد کنید"),
    indexNumber: Yup.string().required("کد شاخص را وارد کنید"),
  });

  const formik = useFormik({
    initialValues: {
      userCode: "",
      managerName: "",
      userName: "",
      indexNumber: "",
    },
    validationSchema: validationForm,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="xl">
          <Typography
            component="div"
            style={{ backgroundColor: "white", height: "100vh" }}
          >
            <form onSubmit={formik.handleSubmit}>
              <Box className="formContainer">
                <Grid container style={{ textAlign: "center" }}>
                  <Grid item xs>
                    <Typography className="title" variant="h5">
                      تعریف مدیران و روسا
                    </Typography>
                  </Grid>
                </Grid>

                <Grid container style={{ textAlign: "center" }}>
                  <Grid
                    item
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    xs={12}
                    sm={6}
                    md={4}
                  >
                    <div className="title-text-input">کد کاربری :</div>
                    <div>
                      <TextField
                        id="userCode"
                        name="userCode"
                        value={formik.values.userCode}
                        onChange={formik.handleChange}
                        style={{ margin: 8 }}
                        placeholder="کد کاربری"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        variant="outlined"
                        error={
                          formik.touched.userCode &&
                          Boolean(formik.errors.userCode)
                        }
                        helperText={
                          formik.touched.userCode && formik.errors.userCode
                        }
                      />
                    </div>
                  </Grid>
                  <Grid
                    item
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    xs={12}
                    sm={6}
                    md={4}
                  >
                    <div className="title-text-input">نام مدیر :</div>
                    <div>
                      <TextField
                        id="managerName"
                        name="managerName"
                        value={formik.values.managerName}
                        onChange={formik.handleChange}
                        style={{ margin: 8 }}
                        placeholder="نام مدیر"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        variant="outlined"
                        error={
                          formik.touched.managerName &&
                          Boolean(formik.errors.managerName)
                        }
                        helperText={
                          formik.touched.managerName &&
                          formik.errors.managerName
                        }
                      />
                    </div>
                  </Grid>
                  <Grid
                    item
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    xs={12}
                    sm={6}
                    md={4}
                  >
                    <div className="title-text-input">نام کاربری :</div>
                    <div>
                      <TextField
                        id="userName "
                        name="userName"
                        value={formik.values.userName}
                        onChange={formik.handleChange}
                        style={{ margin: 8 }}
                        placeholder="نام کاربری "
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        variant="outlined"
                        error={
                          formik.touched.userName &&
                          Boolean(formik.errors.userName)
                        }
                        helperText={
                          formik.touched.userName && formik.errors.userName
                        }
                      />
                    </div>
                  </Grid>
                </Grid>
                <Grid container style={{ textAlign: "center" }}>
                  <Grid
                    item
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    xs={12}
                    sm={6}
                    md={4}
                  >
                    <div className="title-text-input">شماره سشاخص :</div>
                    <div>
                      <TextField
                        id="indexNumber"
                        name="indexNumber"
                        value={formik.values.indexNumber}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        style={{ margin: 8 }}
                        placeholder="شماره شاخص "
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        variant="outlined"
                        error={
                          formik.touched.indexNumber &&
                          Boolean(formik.errors.indexNumber)
                        }
                        helperText={
                          formik.touched.indexNumber &&
                          formik.errors.indexNumber
                        }
                      />
                    </div>
                  </Grid>
                  <Grid
                    item
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    xs={12}
                    sm={6}
                    md={4}
                  >
                    <Button type="submit" variant="contained" color="primary">
                      ثبت
                    </Button>
                  </Grid>
                  <Grid
                    item
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    xs={12}
                    sm={6}
                    md={4}
                  ></Grid>
                </Grid>
              </Box>
            </form>

            <Grid container style={{ textAlign: "center" }}>
              <Grid item xs>
                <TableComponent
                  columns={[
                    "کد کاربر",
                    "نام کاربر ",
                    " نام رییس ",
                    "کد شاخص",
                    " ویرایش ",
                  ]}
                  rows={[
                    { name: "a", code: 11, manager: "hamed", controll: "c" },
                    { name: "b", code: 12, manager: "jamshidi", controll: "c" },
                  ]}
                />
              </Grid>
            </Grid>
          </Typography>
        </Container>
      </React.Fragment>
    </>
  );
}

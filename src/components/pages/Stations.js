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
import * as Yup from "yup";
import { useFormik } from "formik";
export default function Stations() {
  const validationForm = Yup.object().shape({
    stationCode: Yup.string().required("کد ایستگاه را وارد کنید"),
    stationName: Yup.string().required(" نام ایستگاه را وارد کنید"),
  });
  const formik = useFormik({
    initialValues: {
      stationCode: "",
      stationName: "",
    },
    validationSchema: validationForm,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <Typography
          component="div"
          style={{ backgroundColor: "white", height: "100vh" }}
        >
          <form onSubmit={formik.handleSubmit} className="formContainer">
            <Grid container style={{ textAlign: "center" }}>
              <Grid item xs>
                <Typography className="title" variant="h5">
                  {" "}
                  ثبت ایستگاه جدید{" "}
                </Typography>
              </Grid>
            </Grid>

            <Grid container style={{ textAlign: "center" }}>
              <Grid
                item
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                xs
              >
                <div className="title-text-input">کد ایستگاه :</div>
                <div>
                  <TextField
                    id="stationCode"
                    name="stationCode"
                    value={formik.values.stationCode}
                    onChange={formik.handleChange}
                    style={{ margin: 8 }}
                    placeholder="کد ایستگاه"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                    error={
                      formik.touched.stationCode &&
                      Boolean(formik.errors.stationCode)
                    }
                    helperText={
                      formik.touched.stationCode && formik.errors.stationCode
                    }
                   
                  />
                </div>
              </Grid>
            </Grid>

            <Grid
              container
              style={{
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Grid item xs></Grid>
              <Grid
                item
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                lg
              >
                <div className="title-text-input">نام ایستگاه :</div>

                <div>
                  <TextField
                    id="stationName"
                    name="stationName"
                    value={formik.values.stationName}
                    onChange={formik.handleChange}
                    style={{ margin: 8 }}
                    placeholder="نام ایستگاه"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                    error={
                      formik.touched.stationName &&
                      Boolean(formik.errors.stationName)
                    }
                    helperText={
                      formik.touched.stationName && formik.errors.stationName
                    }
                  />
                </div>
              </Grid>
              <Grid item xs style={{}}>
                <Button type="submit" variant="contained" color="primary">
                  ثبت
                </Button>
              </Grid>
            </Grid>
          </form>
          <Grid container style={{ textAlign: "center" }}>
            <Grid item xs>
              <TableComponent
                columns={["کد ایستگاه", "نام ایستگاه", " ویرایش "]}
                rows={[
                  { name: "a", code: 11 },
                  { name: "b", code: 12 },
                ]}
              />
            </Grid>
          </Grid>
        </Typography>
      </Container>
    </React.Fragment>
  );
}

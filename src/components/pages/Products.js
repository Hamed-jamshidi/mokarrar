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
export default function Products() {
  const validationForm = Yup.object().shape({
    newMaterialCode: Yup.string().required("کد ماده جدید  را وارد کنید"),
    newMatreialName: Yup.string().required(" نام ماده جدید را وارد کنید"),
  });
  const formik = useFormik({
    initialValues: {
      newMaterialCode: "",
      newMatreialName: "",
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
                  ثبت ماده جدید
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
                <div className="title-text-input">کد ماده :</div>
                <div>
                  <TextField
                    id="newMaterialCode"
                    name="newMaterialCode"
                    value={formik.values.newMaterialCode}
                    onChange={formik.handleChange}
                    style={{ margin: 8 }}
                    placeholder="کد ماده"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                    error={
                      formik.touched.newMaterialCode &&
                      Boolean(formik.errors.newMaterialCode)
                    }
                    helperText={
                      formik.touched.newMaterialCode &&
                      formik.errors.newMaterialCode
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
                <div className="title-text-input">نام ماده :</div>

                <div>
                  <TextField
                    id="newMatreialName"
                    name="newMatreialName"
                    value={formik.values.newMatreialName}
                    onChange={formik.handleChange}
                    style={{ margin: 8 }}
                    placeholder="نام ماده"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                    error={
                      formik.touched.newMatreialName &&
                      Boolean(formik.errors.newMatreialName)
                    }
                    helperText={
                      formik.touched.newMatreialName &&
                      formik.errors.newMatreialName
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
                columns={["کد ماده", "نام ماده", " ویرایش "]}
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

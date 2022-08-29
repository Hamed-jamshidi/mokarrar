import {
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import TableComponent from "../common/TableComponent";
import "./Home.css";
import * as Yup from "yup";
import { useFormik } from "formik";
import MyAxios from "../myAxios";
import { act } from "react-dom/test-utils";
export default function Actions() {
  const [actionData, setActionData] = useState([]);
  function convertRows(rows) {
    rows.map(({ id, missionCode, missionName }) => {
      console.log( { id: id, code: missionCode, name: missionName })
      return { id: id, code: missionCode, name: missionName };
    });
  }

  async function getActions() {   
    await MyAxios("missions/allMissions")
      .then((response) => {
        console.log(",,,,,,,,,,,,,,,", response.data.data)
       const result=  convertRows(response.data.data)
       console.log(",,,,,,,,,,,,,,,", result)
        setActionData(result)
      //  let result = [...response.data.data];
      //  console.log(",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,111",result)
      //   result = convertRows(result)
      //   console.log(",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,222",result)
      //   setActionData(result)
      })
      .catch((error) => console.log(error.message));
    return;
  }
  useEffect(() => {
    getActions();
  
  }, [actionData]);
  console.log("action data", actionData);
  const validationForm = Yup.object().shape({
    actionCode: Yup.string().required("کد عملیات  را وارد کنید"),
    actionName: Yup.string().required(" نام عملیات را وارد کنید"),
  });
  const formik = useFormik({
    initialValues: {
      actionCode: "",
      actionName: "",
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
                  ثبت عملیات جدید{" "}
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
                <div className="title-text-input">کد عملیات :</div>
                <div>
                  <TextField
                    id="actionCode"
                    name="actionCode"
                    value={formik.values.actionCode}
                    onChange={formik.handleChange}
                    style={{ margin: 8 }}
                    placeholder="کد عملیات"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                    error={
                      formik.touched.actionCode &&
                      Boolean(formik.errors.actionCode)
                    }
                    helperText={
                      formik.touched.actionCode && formik.errors.actionCode
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
                <div className="title-text-input">نام عملیات :</div>

                <div>
                  <TextField
                    id="actionName"
                    name="actionName"
                    value={formik.values.actionName}
                    onChange={formik.handleChange}
                    style={{ margin: 8 }}
                    placeholder="نام عملیات"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                    error={
                      formik.touched.actionName &&
                      Boolean(formik.errors.actionName)
                    }
                    helperText={
                      formik.touched.actionName && formik.errors.actionName
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
           
              {/* <TableComponent
                columns={["کد عملیات", "نام عملیات", "ویرایش"]}
                rows={actionData}
              /> */}
            </Grid>
          </Grid>
        </Typography>
      </Container>
    </React.Fragment>
  );
}

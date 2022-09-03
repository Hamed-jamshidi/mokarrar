import {
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  InputAdornment,
  MenuItem,
  OutlinedInput,
  Select,
  StylesProvider,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";

import "./pages/Home.css";
import styles from "./pages/Information.module.css";
import { RadioGroup, Radio } from "react-radio-group";
import {
  DatePicker,
  DateTimePicker,
  DateRangePicker,
  DateTimeRangePicker,
} from "react-advance-jalaali-datepicker";

import * as Yup from "yup";
import { useFormik } from "formik";
import MyAxios from "./myAxios";


export default function ProcessComponent(process) {
console.log("processs in processs component . ..... " , process)
const [productNameList ,setProductNameList]= useState([]);
const [controllerList ,setControllerList]= useState([]);
const [stationList ,setStatioList]= useState([]);
const [actionTypeName ,setActionTypeName]= useState([]);
//get all productname list
const getAllProductNameList=async()=>{
  await MyAxios("materials/allMaterials")
  .then((res)=>{console.log(res)})
  .catch((err)=>{console.log(err.message)})
  }
  
//get all station list
const getAllStationList=async()=>{
  await MyAxios("stations/allStations")
  .then((res)=>{setStatioList(res.data.data)})
  .catch((err)=>{console.log(err.message)})
  }
//get all Controller list
const getAllControllerList=async()=>{
  await MyAxios("controls/allControls")
  .then((res)=>{console.log(res)})
  .catch((err)=>{console.log(err.message)})
  }
//get all actions list
const getAllActionList=async()=>{
  await MyAxios("missions/allMissions")
  .then((res)=>{setActionTypeName(res.data.data)})
  .catch((err)=>{console.log(err.message)})
  }

  useEffect(()=>{
    getAllProductNameList();
    getAllActionList();
    getAllControllerList();
    getAllStationList();
  },[])
  console.log("station list ,,,,,,,,,,,,,,,,,,,,,,,,",stationList)

const validationForm = Yup.object().shape({
  
  actionName: Yup.string().required(" نام مشخصه کنترلی جدید را وارد کنید"),
  controllAttribute: Yup.string().required(
    " نام مشخصه کنترلی جدید را وارد کنید"
    ),
    opratorName: Yup.string().required(" نام مشخصه کنترلی جدید را وارد کنید"),
    stationName: Yup.string().required(" نام مشخصه کنترلی جدید را وارد کنید"),
    acceptValue: Yup.string().required(" نام مشخصه کنترلی جدید را وارد کنید"),
    materialValue: Yup.string().required(" نام مشخصه کنترلی جدید را وارد کنید"),
    measuredValue: Yup.string().required(" نام مشخصه کنترلی جدید را وارد کنید"),
    IdentificationCode: Yup.string().required(
      " نام مشخصه کنترلی جدید را وارد کنید"
      ),
      startTime: Yup.date().required(" نام مشخصه کنترلی جدید را وارد کنید"),
      endTime: Yup.date().required(" تاریخ پایان مشخصه کنترلی جدید را وارد کنید"),
    });
    // process:
    // acceptValue: "hamed"
    // actionName: "hamed"
    // batchNumber: "batch4"
    // controllerName: "hamed"
    // createdAt: "2022-08-28 09:54:49.410 +00:00"
    // endTime: "15:30"
    // id: 4
    // identifyCode: "hamed"
    // materialName: "hamed"
    // measuredValue: 1330
    // operatorName: "hamed"
    // productId: 1
    // result: 0
    // startTime: "12:30"
    // stationName: "hamed"
    // updatedAt: "2
    const formik = useFormik({
      initialValues: { 
        batchNumber: process.process.batchNumber || "",
        // productionStage: process?.batchNumber || "", 
      actionName: process.process.controllerName || "",
      controllAttribute: process.process.controllerName ||"",
      opratorName: process.process.operatorName || "",
      stationName: process.process.stationName || "",
      acceptValue: process.process.acceptValue || "",
      materialValue:process.process.materialName || "",
      measuredValue: process.process.measuredValue ||"",
      IdentificationCode: process.process.identifyCode ||0,
      startTime:process.process.startTime || new Date(),
      endTime:process.process.endTime ||new Date(),
    },
    // validationSchema: validationForm,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
       
          <form onSubmit={formik.handleSubmit}>
          
            <Box className="formContainer">
              <Grid container spacing={3}>
                <Grid className={styles.holder} item md={4} xs={12} sm={6}>
                  <span className={styles.titleInput}>نام عملیات</span>
                  <Select
                    className={styles.select}
                    native
                    id="actionName"
                    name="actionName"
                    value={formik.values.actionName}
                    onChange={formik.handleChange}
                    inputProps={{
                      name: "actionName",
                      id: "actionName",
                    }}
                    error={
                      formik.touched.actionName &&
                      Boolean(formik.errors.actionName)
                    }
                    helperText={
                      formik.touched.actionName && formik.errors.actionName
                    }
                  >
                    <option aria-label="None" value="" />
                    <option value={10}>والفجر 1</option>
                    <option value={20}>والفجر 2</option>
                  </Select>
                </Grid>

                <Grid className={styles.holder} item md={4} xs={12} sm={6}>
                  <span className={styles.titleInput}>مشخصات کنترلی</span>

                  <Select
                    className={styles.select}
                    native
                    id="controllAttribute"
                    name="controllAttribute"
                    value={formik.values.controllAttribute}
                    onChange={formik.handleChange}
                    inputProps={{
                      name: "controllAttribute",
                      id: "controllAttribute",
                    }}
                    error={
                      formik.touched.controllAttribute &&
                      Boolean(formik.errors.controllAttribute)
                    }
                    helperText={
                      formik.touched.controllAttribute &&
                      formik.errors.controllAttribute
                    }
                  >
                    <option aria-label="None" value="" />
                    <option value={10}>مشخصه 1</option>
                    <option value={20}>مشخصه 2</option>
                  </Select>
                </Grid>

                <Grid className={styles.holder} item md={4} xs={12} sm={6}>
                  <span className={styles.titleInput}>نام اپراتور تولید</span>
                  <TextField
                    id="opratorName"
                    name="opratorName"
                    value={formik.values.opratorName}
                    onChange={formik.handleChange}
                    style={{ margin: 8 }}
                    placeholder="نام اپراتور تولید"
                    maxWidth
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                    error={
                      formik.touched.opratorName &&
                      Boolean(formik.errors.opratorName)
                    }
                    helperText={
                      formik.touched.opratorName && formik.errors.opratorName
                    }
                  />
                </Grid>
                <Grid className={styles.holder} item md={4} xs={12} sm={6}>
                  <span className={styles.titleInput}>نام ایستگاه</span>
                  <Select
                    className={styles.select}
                    native
                    id="stationName"
                    name="stationName"
                    value={formik.values.stationName}
                    onChange={formik.handleChange}
                    inputProps={{
                      name: "stationName",
                      id: "stationName",
                    }}
                    error={
                      formik.touched.stationName &&
                      Boolean(formik.errors.stationName)
                    }
                    helperText={
                      formik.touched.stationName && formik.errors.stationName
                    }
                  >
                    <option aria-label="None" value="" />
                    {stationList.map((item, index)=>{return <option key={index} value={item.stationCode}>{item.stationName}</option>})}
                  
                  </Select>
                </Grid>

                <Grid className={styles.holder} item md={4} xs={12} sm={6}>
                  <span className={styles.titleInput}>معیار / مقدار پذیرش</span>

                  <TextField
                    id="acceptValue"
                    name="acceptValue"
                    value={formik.values.acceptValue}
                    onChange={formik.handleChange}
                    style={{ margin: 8 }}
                    placeholder="معیار پذیرش"
                    maxWidth
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                    error={
                      formik.touched.acceptValue &&
                      Boolean(formik.errors.acceptValue)
                    }
                    helperText={
                      formik.touched.acceptValue && formik.errors.acceptValue
                    }
                  />
                </Grid>

                <Grid className={styles.holder} item md={4} xs={12} sm={6}>
                  <span className={styles.titleInput}>نام ماده</span>
                  <Select
                    className={styles.select}
                    native
                    id="materialValue"
                    name="materialValue"
                    value={formik.values.materialValue}
                    onChange={formik.handleChange}
                    inputProps={{
                      name: "materialValue",
                      id: "materialValue",
                    }}
                    error={
                      formik.touched.materialValue &&
                      Boolean(formik.errors.materialValue)
                    }
                    helperText={
                      formik.touched.materialValue &&
                      formik.errors.materialValue
                    }
                  >
                    <option aria-label="None" value="" />
                    <option value={10}> ماده یک</option>
                    <option value={20}>ماده دو </option>
                  </Select>
                </Grid>
                <Grid className={styles.holder} item md={4} xs={12} sm={6}>
                  <span className={styles.titleInput}>
                    مقدار اندازه گیری شده
                  </span>
                  <TextField
                    id="measuredValue"
                    name="measuredValue"
                    value={formik.values.measuredValue}
                    onChange={formik.handleChange}
                    style={{ margin: 8 }}
                    placeholder="مقدار اندازگیری شده "
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                    error={
                      formik.touched.measuredValue &&
                      Boolean(formik.errors.measuredValue)
                    }
                    helperText={
                      formik.touched.measuredValue &&
                      formik.errors.measuredValue
                    }
                  />
                </Grid>
                <Grid className={styles.holder} item md={4} xs={12} sm={6}>
                  <span className={styles.titleInput}>کد شناسایی</span>
                  <TextField
                    id="IdentificationCode"
                    name="IdentificationCode"
                    type="number"
                    value={formik.values.IdentificationCode}
                    onChange={formik.handleChange}
                    style={{ margin: 8 }}
                    placeholder="کد شناسایی"
                    maxWidth
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                    error={
                      formik.touched.IdentificationCode &&
                      Boolean(formik.errors.IdentificationCode)
                    }
                    helperText={
                      formik.touched.IdentificationCode &&
                      formik.errors.IdentificationCode
                    }
                  />
                </Grid>

                <Grid className={styles.holder} item md={4} xs={12} sm={6}>
                  <span className={styles.titleInput}>زمان شروع</span>
                  <DatePicker
                    className={styles.dataPicker}
                    id="startTime"
                    name="startTime"
                    value={formik.values.startTime}
                    onChange={formik.handleChange}
                    placeholder="انتخاب تاریخ"
                    format="jYYYY/jMM/jDD"
                    preSelected="1396/05/15"
                    error={
                      formik.touched.startTime &&
                      Boolean(formik.errors.startTime)
                    }
                    helperText={
                      formik.touched.startTime && formik.errors.startTime
                    }
                  />
                </Grid>
                <Grid className={styles.holder} item md={4} xs={12} sm={6}>
                  <span className={styles.titleInput}>زمان پایان</span>
                  <DatePicker
                    className={styles.dataPicker}
                    id="endTime"
                    name="endTime"
                    value={formik.values.endTime}
                    onChange={formik.handleChange}
                    placeholder="انتخاب تاریخ"
                    format="jYYYY/jMM/jDD"
                    preSelected="1396/05/15"
                    error={
                      formik.touched.endTime && Boolean(formik.errors.endTime)
                    }
                    helperText={formik.touched.endTime && formik.errors.endTime}
                  />
                </Grid>
                <Grid className={styles.holder} item md={4} xs={12} sm={6}>
                  <Button type="submit" variant="contained" color="primary">
                    ثبت
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </form>

        
       
      </Container>
    </React.Fragment>
  );
}

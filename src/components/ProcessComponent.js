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
import React, { useDebugValue, useEffect, useState } from "react";
import ColumnName from "./common/ColumnName";
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
import { useProduct, useProductActions } from "./context/ProductProvider";
import { SettingsPhoneTwoTone } from "@material-ui/icons";

export default function ProcessComponent({handleChangeProcess,selectedProcess,newProcess}) {
const {productName, stationName, controllerName ,actionName} = ColumnName();
console.log("zart", productName , actionName , controllerName , stationName );
  const product = useProduct();
  console.log("handleprocess");
  const [processId ,setProcessId] = useState('');
  const [process , setProcess] =useState({})
  console.log("selected process in process component",selectedProcess , newProcess);
  if(Object.keys(selectedProcess).length !== 0 && (Object.entries(process).length === 0 || processId !== selectedProcess.id) ) {
    setProcess(selectedProcess);
    setProcessId(selectedProcess.id);
  console.log("selected process in process component2" , process)}
 
 const  initialValues={
  id: null,
  batchNumber:  "",
  actionName:"",
  controllerName:"",
  operatorName: "",
  stationName:"",
  acceptValue: "",
  materialName: "",
  measuredValue: "",
  result: false,
  identifyCode: 0,
  startTime: new Date(),
  endTime: new Date()
};

  const productDispatcher = useProductActions();
  const [productNameList, setProductNameList] = useState([]);
  const [controllerList, setControllerList] = useState([]);
  const [stationList, setStatioList] = useState([]);
  const [actionTypeName, setActionTypeName] = useState([]);
  const [formValue , setFormValue]= useState(initialValues);
 
 useEffect(()=>{
  console.log("new process is :" , newProcess)
   //change the form of process form for create new process
   if(newProcess){
    console.log("handleprocess")
    formik.setValues(initialValues) 
  }
 
 },[newProcess])
  //get all productname list
  // const getAllProductNameList = async () => {
  //   await MyAxios("materials/allMaterials")
  //     .then((res) => {
  //       setProductNameList(res.data.data);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // };

  // //get all station list
  // const getAllStationList = async () => {
  //   await MyAxios("stations/allStations")
  //     .then((res) => {
  //       setStatioList(res.data.data);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // };
  // //get all Controller list
  // const getAllControllerList = async () => {
  //   await MyAxios("controls/allControls")
  //     .then((res) => {
  //       setControllerList(res.data.data);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // };
  // //get all actions list
  // const getAllActionList = async () => {
  //   await MyAxios("missions/allMissions")
  //     .then((res) => {
  //       setActionTypeName(res.data.data);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // };

  // useEffect(() =>{
    
  //   console.log("test clumn name : " , columns)
  // }, []);
 




  useEffect(() => {
   const valueProcess = {
    id: process.id,
    batchNumber: process.batchNumber,
    actionName: process.actionName,
    controllerName: process.controllerName,
    operatorName: process.operatorName,
    stationName: process.stationName,
    acceptValue: process.acceptValue,
    materialName: process.materialName,
    measuredValue: process.measuredValue,
    result: process.result,
    identifyCode: process.identifyCode,
    startTime: process.startTime,
    endTime: process.endTime,
  }
    if(process.id){
      setFormValue( valueProcess)
    }
    if(selectedProcess.id){
      formik.setValues(valueProcess);
    }
  },[process,selectedProcess]);
const actionNameByCode =(searchArray , id)=>{
  const resultObj = searchArray.find((item)=>item.missionCode == id);
  if(resultObj)  return (resultObj.missionName);
  else return;
}


  const validationForm = Yup.object().shape({
    actionName: Yup.string().required(" نام مشخصه کنترلی جدید را وارد کنید"),
    controllerName: Yup.string().required(" نام مشخصه کنترلی جدید را وارد کنید"),
    operatorName: Yup.string().required(" نام مشخصه کنترلی جدید را وارد کنید"),
    stationName: Yup.string().required(" نام مشخصه کنترلی جدید را وارد کنید"),
    acceptValue: Yup.string().required(" نام مشخصه کنترلی جدید را وارد کنید"),
    materialName: Yup.string().required(" نام مشخصه کنترلی جدید را وارد کنید"),
    measuredValue: Yup.string().required(" نام مشخصه کنترلی جدید را وارد کنید"),
    identifyCode: Yup.string().required(" نام مشخصه کنترلی جدید را وارد کنید"),
    startTime: Yup.date().required(" نام مشخصه کنترلی جدید را وارد کنید"),
    endTime: Yup.date().required(" تاریخ پایان مشخصه کنترلی جدید را وارد کنید"),
  });

  const formik = useFormik({
    initialValues:  formValue || initialValues  ,
    enableReinitialize : true,
    // validationSchema: validationForm,
    onSubmit: async (values) => {
     //submit a new process
    //  "batchNumber":"batch2",
    //     "actionName":"hamed",
    //     "controllerName":"hamed",
    //     "operatorName":"hamed",
    //     "stationName":"hamed",
    //     "acceptValue":"hamed",
    //     "result":false,
    //     "materialName":"hamed",
    //     "measuredValue":1330,
    //     "identifyCode":"hamed",
    //     "startTime":"12:30",
    //     "endTime":"15:30"
      await MyAxios("eblaghiats/newProcess" ,"post",{...values,batchNumber:product.product.batchNumber})
      .then((res)=>{productDispatcher({type:"ADD_PROCESS" ,payload:res.data.data})})
      .catch((err)=>{console.log(err.message)})
    },
    
    
  });

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <form onSubmit={formik.handleSubmit}>
          <Box className="formContainer">
          <h3 className={styles.title}>
                فرایند {actionNameByCode(actionName, formik.values.actionName)}
              </h3>
            <Grid container spacing={3}>
              <Grid className={styles.holder} item md={4} xs={12} sm={6}>
                <span className={styles.titleInput}>نام عملیات</span>
                <Select
                  className={styles.select}
                  native
                  id="actionName"
                  name="actionName"
                  value={parseInt(formik.values.actionName)}
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
                  {actionName.map((item, index) => {
                    return (
                      <option key={index} value={item.missionCode}>
                        {" "}
                        {item.missionName}
                      </option>
                    );
                  })}
                </Select>
              </Grid>

              <Grid className={styles.holder} item md={4} xs={12} sm={6}>
                <span className={styles.titleInput}>مشخصات کنترلی</span>

                <Select
                  className={styles.select}
                  native
                  id="controllerName"
                  name="controllerName"
                  value={parseInt(formik.values.controllerName)}
                  onChange={formik.handleChange}
                  inputProps={{
                    name: "controllerName",
                    id: "controllerName",
                  }}
                  error={
                    formik.touched.controllerName &&
                    Boolean(formik.errors.controllerName)
                  }
                  helperText={
                    formik.touched.controllerName &&
                    formik.errors.controllerName
                  }
                >
                  {controllerName.map((item, index) => {
                    return (
                      <option key={index} value={item.controlCode}>
                        {item.controlName}
                      </option>
                    );
                  })}
                </Select>
              </Grid>

              <Grid className={styles.holder} item md={4} xs={12} sm={6}>
                <span className={styles.titleInput}>نام اپراتور تولید</span>
                <TextField
                  id="operatorName"
                  name="operatorName"
                  value={formik.values.operatorName}
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
                    formik.touched.operatorName &&
                    Boolean(formik.errors.operatorName)
                  }
                  helperText={
                    formik.touched.operatorName && formik.errors.operatorName
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
                  value={parseInt(formik.values.stationName)}
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
                  {stationName.map((item, index) => {
                    return (
                      <option key={index} value={item.stationCode}>
                        {item.stationName}
                      </option>
                    );
                  })}
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
                  id="materialName"
                  name="materialName"
                  value={formik.values.materialName}
                  onChange={formik.handleChange}
                  inputProps={{
                    name: "materialName",
                    id: "materialName",
                  }}
                  error={
                    formik.touched.materialName &&
                    Boolean(formik.errors.materialName)
                  }
                  helperText={
                    formik.touched.materialName && formik.errors.materialName
                  }
                >
                  {productName.map((item, index) => {
                    return (
                      <option key={index} value={item.materialCode}>
                        {" "}
                        {item.materialName}{" "}
                      </option>
                    );
                  })}
                </Select>
              </Grid>
              <Grid className={styles.holder} item md={4} xs={12} sm={6}>
                <span className={styles.titleInput}>مقدار اندازه گیری شده</span>
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
                    formik.touched.measuredValue && formik.errors.measuredValue
                  }
                />
              </Grid>
              <Grid className={styles.holder} item md={4} xs={12} sm={6}>
                <span className={styles.titleInput}>کد شناسایی</span>
                <TextField
                  id="identifyCode"
                  name="identifyCode"
                  type="number"
                  value={formik.values.identifyCode}
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
                    formik.touched.identifyCode &&
                    Boolean(formik.errors.identifyCode)
                  }
                  helperText={
                    formik.touched.identifyCode && formik.errors.identifyCode
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
                    formik.touched.startTime && Boolean(formik.errors.startTime)
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
                {!newProcess ? (
                  <Button                    
                    onClick={(e) => handleChangeProcess(e, formik.values)}
                    variant="contained"
                    color="primary"
                  >
                    ویرایش
                  </Button>
                ) : (
                  <Button
                 
                  type="submit" 
                   variant="contained" 
                   color="primary">
                    ثبت
                  </Button>
                )}
              </Grid>
            </Grid>
          </Box>
        </form>
      </Container>
    </React.Fragment>
  );
}

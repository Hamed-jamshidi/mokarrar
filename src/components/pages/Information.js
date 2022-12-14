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
import TableComponent from "../common/TableComponent";
import "./Home.css";
import styles from "./Information.module.css";
import { RadioGroup, Radio } from "react-radio-group";
import {
  DatePicker,
  DateTimePicker,
  DateRangePicker,
  DateTimeRangePicker,
} from "react-advance-jalaali-datepicker";
import CollapsibleTable from "../common/CollapsibleTable";
import * as Yup from "yup";
import { Formik, useFormik } from "formik";
import { useProduct, useProductActions } from "../context/ProductProvider";
import ProcessComponent from "../ProcessComponent";
import MyAxios from "../myAxios";
import { constants } from "../../constants";
import ProcessTable from "../common/ProcessTable";
import { Navigate } from 'react-router'
import ColumnName from "../common/ColumnName";
export default function Information() {
  const initialValues = {
    id:"",
      productName: "",
      produtionType:  "",
      partition:"",
      batchValue:  "",
      batchNumber:"",
      customerName:  "",
      sayDate:  "",
      startDate:"",
  }
  const [productFormValue , setProductFormValue] = useState(initialValues)
  const [reset , setReset] =useState(false);
  const [show , setShow] =  useState(false);
  const [newProcess , setNewProcess] = useState(false);
  const {productName, stationName, controllerName, actionName} = ColumnName();
 
  //const [reset1 , setReset1] =useState(false);
 
  const handleClickEditProduct = async(e,values)=>{
  console.log("i here is handle click product")
  
  await MyAxios("eblaghiats/updateProduct" , "post" , values)
  .then((res)=>console.log("update process: " , res))
  .catch((err)=>console.log("err message",err.message))
 }
 const handleChangeProcess = async (e, values) => {
   e.preventDefault();
  console.log("handle change process", values)
 
  await MyAxios("eblaghiats/updateProcess", "post", values)
    .then((res) =>{ ProductDispatcher({type:"UPDATE_PROCESS", payload:values});
                    console.log('i am in handle change process', values)
                    setReset(!reset)})
    .catch((err) => console.log("err message", err.message));
};
 const handleClickSubmitProduct=(e,values)=>{
 console.log("handle click submit")
     
 }
 let product = useProduct();

 const handleClickCreateProcess =async(e, values)=>{
  e.preventDefault();
  console.log("values in handle click process" , values);
 }
 
 const handleNewProcess = () =>{
 
  setShow(!show);
  setShow(true);
  setNewProcess(!newProcess)
  setNewProcess(true)
  console.log("handleprocess")
  ProductDispatcher({type:"RESET_SELECTED"});

 }
  
  const ProductDispatcher = useProductActions()
  console.log("productttttttttttttttttttttttttttttttttttt", product);

  const validationForm = Yup.object().shape({
    productName: Yup.string().required(" ???? ?????????? ???????????? ????????  ???? ???????? ????????"),
    partition: Yup.string().required(" ?????? ?????????? ???????????? ???????? ???? ???????? ????????"),
    batchValue: Yup.number().required(" ?????? ?????????? ???????????? ???????? ???? ???????? ????????"),
    batchNumber: Yup.number().required(" ?????? ?????????? ???????????? ???????? ???? ???????? ????????"),
    customerName: Yup.string().required(" ?????? ?????????? ???????????? ???????? ???? ???????? ????????"),
    sayDate: Yup.date().required(" ?????? ?????????? ???????????? ???????? ???? ???????? ????????"),
    startDate: Yup.date().required(" ?????? ?????????? ???????????? ???????? ???? ???????? ????????"),
  });

   const resetFormikProduct =()=>{
    Formik.values.id = null;
    Formik.values.productName= "";
    Formik.values.produtionType=  "";
    Formik.values.partition=  "";
    Formik.values.batchValue= "";
    Formik.values.batchNumber= "";
    Formik.values.customerName= "";
    Formik.values.sayDate="";
    Formik.values.startDate="";
   }
   useEffect(()=>{
  if(localStorage.getItem("link") !== "home")
   ProductDispatcher({type:"RESET_STATE"});
   if(product.product.id)setProductFormValue({

   })
   
   },[])

  const formik = useFormik({
    initialValues: {
      id:product.product.id||null,
      productName: product.product.productName || "",
      produtionType: product.product.produtionType || "",
      partition: product.product.partition || "",
      batchValue: product.product.batchValue || "",
      batchNumber: product.product.batchNumber || "",
      customerName: product.product.customerName || "",
      sayDate: product.product.sayDate || "",
      startDate: product.product.startDate || "",
      // id:product.id||null,
      // productName: product.productName || "",
      // produtionType: product.produtionType || "",
      // partition: product.partition || "",
      // batchValue: product.batchValue || "",
      // batchNumber: product.batchNumber || "",
      // customerName: product.customerName || "",
      // sayDate: product.sayDate || "",
      // startDate: product.startDate || "",
    },
    // validationSchema: validationForm,
    onSubmit: (values) => {
      handleClickSubmitProduct(values);
    },
  });

  const deleteHandler=( id)=>{
    ProductDispatcher({type:"DELETE_PROCESS",payload:id});
    setReset(!reset)
  }

  const EditHandler = (id) => {   
    setNewProcess(false)
     ProductDispatcher({type:"GET_SELECTED" , payload:id});
   setReset(true)
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <Typography 
          component="div"
          style={{ backgroundColor: "white", height: "100vh" }}
        >
          <form onSubmit={formik.handleSubmit}>
            <Box className="formContainer">
              <h3 className={styles.title}>
               {localStorage.getItem("newProduct")? `?????? ?????????? ?????????? ?????????? ?? ?????????? ?????? ???????????? ${formik.values.productName}`:` ?????? ?????????? ?????????? ?????????? ?? ?????????? ?????? ????????????  ????????`}
               
              </h3>

              <Grid container spacing={3}>
                <Grid className={styles.holder} item md={4} xs={12} sm={6}>
                  <span className={styles.titleInput}>?????? ??????????</span>
                  <TextField
                    id="productName"
                    name="productName"
                    disabled={localStorage.getItem("accessLevel") === 2 ?  false : true }
                    value={formik.values.productName}
                    onChange={formik.handleChange}
                    style={{ margin: 8 }}
                    placeholder="?????? ?????????? "
                    maxWidth
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                    error={
                      formik.touched.productName &&
                      Boolean(formik.errors.productName)
                    }
                    helperText={
                      formik.touched.productName && formik.errors.productName
                    }
                  />
                </Grid>

                <Grid className={styles.holder} item md={4} xs={12} sm={6}>
                  <span className={styles.titleInput}>?????? ??????????</span>

                  <Select
                    className={styles.select}
                    
                    native
                    id="partition"
                    name="partition"
                    value={formik.values.partition}
                    onChange={formik.handleChange}
                    inputProps={{
                      name: "partition",
                      id: "outlined-age-native-simple",
                    }}
                    error={
                      formik.touched.partition &&
                      Boolean(formik.errors.partition)
                    }
                    helperText={
                      formik.touched.partition &&
                      formik.errors.partition
                    }
                  >
                    {Object.entries(constants.partitionName).map(
                      (item, index) => {
                        return (
                          <option key={index} value={item[0]}>
                            {item[1]}
                          </option>
                        );
                      }
                    )}
                  </Select>
                </Grid>

                <Grid className={styles.holder} item md={4} xs={12} sm={6}>
                  <span className={styles.titleInput}>?????????? ????</span>
                  <OutlinedInput
                    id="batchValue"
                    name="batchValue"
                    disabled={localStorage.getItem("accessLevel") == 2 ?  false : true }
                    value={formik.values.batchValue}
                    onChange={formik.handleChange}
                    endAdornment={
                      <InputAdornment position="end">Kg</InputAdornment>
                    }
                    aria-describedby="outlined-weight-helper-text"
                    inputProps={{
                      "aria-label": "weight",
                    }}
                    labelWidth={0}
                    error={
                      formik.touched.batchValue &&
                      Boolean(formik.errors.batchValue)
                    }
                    helperText={
                      formik.touched.batchValue && formik.errors.batchValue
                    }
                  />
                </Grid>
                <Grid className={styles.holder} item md={4} xs={12} sm={6}>
                  <span className={styles.titleInput}>?????????? ????</span>
                  <TextField
                    id="batchNumber"
                    name="batchNumber"
                    disabled={localStorage.getItem("accessLevel") == 2 ?  false : true }
                    value={formik.values.batchNumber}
                    onChange={formik.handleChange}
                    style={{ margin: 8 }}
                    placeholder="?????????? ????"
                    type="text"
                    maxWidth
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                    error={
                      formik.touched.batchNumber &&
                      Boolean(formik.errors.batchNumber)
                    }
                    helperText={
                      formik.touched.batchNumber && formik.errors.batchNumber
                    }
                  />
                </Grid>

                <Grid className={styles.holder} item md={4} xs={12} sm={6}>
                  <span className={styles.titleInput}>?????? ??????????</span>

                  <Select
                    className={styles.select}
                    disabled={localStorage.getItem("accessLevel") === 2 ?  false : true }
                    id="produtionType"
                    name="produtionType"
                    value={parseInt(formik.values.produtionType)}
                    onChange={formik.handleChange}
                    inputProps={{
                      name: "produtionType",
                      id: "outlined-age-native-simple",
                    }}
                    error={
                      formik.touched.produtionType &&
                      Boolean(formik.errors.produtionType)
                    }
                    helperText={
                      formik.touched.produtionType &&
                      formik.errors.produtionType
                    }
                  >
                    {Object.entries(constants.ProductionType).map(
                      (item, index) => {
                        return (
                          <option key={index} value={item[0]}>
                            {item[1]}
                          </option>
                        );
                      }
                    )}
                  </Select>
                </Grid>

                <Grid className={styles.holder} item md={4} xs={12} sm={6}>
                  <span className={styles.titleInput}>?????? ??????????</span>
                  <TextField
                    id="customerName"
                    name="customerName"
                    disabled={localStorage.getItem("accessLevel") === 2 ?  false : true }
                    value={formik.values.customerName}
                    onChange={formik.handleChange}
                    style={{ margin: 8 }}
                    placeholder="?????????? ????"
                    maxWidth
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                    error={
                      formik.touched.customerName &&
                      Boolean(formik.errors.customerName)
                    }
                    helperText={
                      formik.touched.customerName && formik.errors.customerName
                    }
                  />
                </Grid>
          
                <Grid className={styles.holder} item md={4} xs={12} sm={6}>
                  <span className={styles.titleInput}>?????????? ?????????? ??????????</span>
                  <DatePicker
                    className={styles.dataPicker}
                    disabled={localStorage.getItem("accessLevel") === 2 ?  false : true }
                    type="date"
                    id="sayDate"
                    name="sayDate"
                    value={formik.values.sayDate}
                    onChange={formik.handleChange}
                    placeholder="???????????? ??????????"
                    format="jYYYY/jMM/jDD"
                    preSelected="1396/05/15"
                    error={
                      formik.touched.sayDate &&
                      Boolean(formik.errors.sayDate)
                    }
                    helperText={
                      formik.touched.sayDate &&
                      formik.errors.sayDate
                    }
                  />
                </Grid>
                <Grid className={styles.holder} item md={4} xs={12} sm={6}>
                  <span className={styles.titleInput}>?????????? ??????????</span>
                  <DatePicker
                    type="date"
                    className={styles.dataPicker}
                    id="startDate"
                    name="startDate"
                    disabled={localStorage.getItem("accessLevel") === 2 ?  false : true }
                    value={formik.values.startDate}
                    onChange={formik.handleChange}
                    placeholder="???????????? ??????????"
                    format="jYYYY/jMM/jDD"
                    preSelected="1396/05/15"
                    error={
                      formik.touched.startDate &&
                      Boolean(formik.errors.startDate)
                    }
                    helperText={
                      formik.touched.startDate &&
                      formik.errors.startDate
                    }
                  />
                </Grid>
                <Grid className={styles.holder} item md={4} xs={12} sm={6}>
               {product ?  <Button disabled={localStorage.getItem("accessLevel") === 2 ?  false : true 
              } type="submit" onClick={(e)=>handleClickEditProduct(e,formik.values)} variant="contained" color="primary">
                 ????????????
                </Button>: <Button   type="submit" variant="contained" color="primary">
                  ??????
                </Button>}
                <div className="creator">
                <Button style={{marginRight:"20px"}}  onClick={()=>handleNewProcess()} variant="contained" color="secoundary">
                 ?????????? ???????????? ????????
                </Button>
                </div>
               
              </Grid>
              </Grid>
             
            </Box>
                 
               {(show || Object.keys(product.selectedProcess[0]).length !== 0)  && <ProcessComponent selectedProcess={product.selectedProcess[0]} newProcess={newProcess} handleChangeProcess={handleChangeProcess}/>   }
            
            {/* {product.processes.map((item, index) => {
              return <ProcessComponent key={index} process={item} />;
            })} */}
          </form>
          <Grid container style={{ textAlign: "center" }}>
            <Grid item xs>
           
               <ProcessTable
                columns={["?????? ????????????", "???????????? ????????????", "?????? ?????????????? ??????????", "?????? ??????????????", "?????????? ?????????? ", "?????? ????????  " , " ?????????????????????? ???????? ??????", " ???? ??????????????" , "???????? ???????? ", "???????? ??????????","??????????","????????????"]}
                rows={product.processes}
                columnNames = {[productName, stationName, controllerName, actionName]}
                handleDelete={deleteHandler}
                handleEdit={EditHandler}
                reset={reset}                
                name={'actions'}
                
              /> 
            </Grid>
          </Grid>
        </Typography>
      </Container>
    </React.Fragment>
  );
}

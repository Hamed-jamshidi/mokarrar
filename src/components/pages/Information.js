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
import { useFormik } from "formik";
import { useProduct } from "../context/ProductProvider";
import ProcessComponent from "../ProcessComponent";
import MyAxios from "../myAxios";
import { constants } from "../../constants";
export default function Information() {
 
  const handleClickEditProduct = async(e,values)=>{
  console.log("i here is handle click product")
  
  await MyAxios("eblaghiats/updateProduct" , "post" , values)
  .then((res)=>console.log("update process: " , res))
  .catch((err)=>console.log("err message",err.message))
 }

 const handleClickSubmitProduct=(e,values)=>{
 console.log("handle click submit")
     
 }

  const product = useProduct();

  const validationForm = Yup.object().shape({
    productName: Yup.string().required(" کد مشخصه کنترلی جدید  را وارد کنید"),
    partition: Yup.string().required(
      " نام مشخصه کنترلی جدید را وارد کنید"
    ),
    batchValue: Yup.number().required(" نام مشخصه کنترلی جدید را وارد کنید"),
    batchNumber: Yup.number().required(" نام مشخصه کنترلی جدید را وارد کنید"),
    customerName: Yup.string().required(" نام مشخصه کنترلی جدید را وارد کنید"),
    sayDate: Yup.date().required(
      " نام مشخصه کنترلی جدید را وارد کنید"
    ),
    startDate: Yup.date().required(" نام مشخصه کنترلی جدید را وارد کنید"),
  });



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
    },
    // validationSchema: validationForm,
    onSubmit: (values) => {
      handleClickSubmitProduct(values)
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
          <form onSubmit={formik.handleSubmit}>
            <Box className="formContainer">
              <h3 className={styles.title}>
                {" "}
                فرم ابلاغ تولید محصول و کنترل حین فرآیند
              </h3>

              <Grid container spacing={3}>
                <Grid className={styles.holder} item md={4} xs={12} sm={6}>
                  <span className={styles.titleInput}>نام محصول</span>
                  <TextField
                    id="productName"
                    name="productName"
                    value={formik.values.productName}
                    onChange={formik.handleChange}
                    style={{ margin: 8 }}
                    placeholder="نام محصول "
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
                  <span className={styles.titleInput}>محل تولید</span>

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
                  <span className={styles.titleInput}>مقدار بچ</span>
                  <OutlinedInput
                    id="batchValue"
                    name="batchValue"
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
                  <span className={styles.titleInput}>شماره بچ</span>
                  <TextField
                    id="batchNumber"
                    name="batchNumber"
                    value={formik.values.batchNumber}
                    onChange={formik.handleChange}
                    style={{ margin: 8 }}
                    placeholder="شماره بج"
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
                  <span className={styles.titleInput}>نوع تولید</span>

                  <Select
                    className={styles.select}
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
                  <span className={styles.titleInput}>نام مشتری</span>
                  <TextField
                    id="customerName"
                    name="customerName"
                    value={formik.values.customerName}
                    onChange={formik.handleChange}
                    style={{ margin: 8 }}
                    placeholder="شماره بج"
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
                  <span className={styles.titleInput}>تاریخ ابلاغ تولید</span>
                  <DatePicker
                    className={styles.dataPicker}
                    type="date"
                    id="sayDate"
                    name="sayDate"
                    value={formik.values.sayDate}
                    onChange={formik.handleChange}
                    placeholder="انتخاب تاریخ"
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
                  <span className={styles.titleInput}>تاریخ تولید</span>
                  <DatePicker
                    type="date"
                    className={styles.dataPicker}
                    id="startDate"
                    name="startDate"
                    value={formik.values.startDate}
                    onChange={formik.handleChange}
                    placeholder="انتخاب تاریخ"
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
               {product ?  <Button  type="submit" onClick={(e)=>handleClickEditProduct(e,formik.values)} variant="contained" color="primary">
                 ویرایش
                </Button>: <Button  type="submit" variant="contained" color="primary">
                  ثبت
                </Button>}
              </Grid>
              </Grid>
            </Box>
            {product.processes.map((item, index) => {
              return <ProcessComponent key={index} process={item} />;
            })}
          </form>
        </Typography>
      </Container>
    </React.Fragment>
  );
}

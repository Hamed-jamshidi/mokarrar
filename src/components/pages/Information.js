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

export default function Information() {
  const [productNameList ,setProductNameList]= useState([]);


const product = useProduct();




const validationForm = Yup.object().shape({
  productName:Yup.string().required(" کد مشخصه کنترلی جدید  را وارد کنید"),
  productionLocation:Yup.string().required(" نام مشخصه کنترلی جدید را وارد کنید"),
  batchValue:Yup.number().required(" نام مشخصه کنترلی جدید را وارد کنید"),
  batchNumber:Yup.number().required(" نام مشخصه کنترلی جدید را وارد کنید"),
  customerName:Yup.string().required(" نام مشخصه کنترلی جدید را وارد کنید"),
  dateNotification:Yup.date().required(" نام مشخصه کنترلی جدید را وارد کنید"),
  dateProduction: Yup.date().required(" نام مشخصه کنترلی جدید را وارد کنید"),  
});

// batchNumber: "batch2"
// batchValue: "1000"
// close: 0
// createdAt: "2022-08-28 07:45:13.833 +00:00"
// customerName: "Hamed"
// id: 2
// partition: 2
// productName: "product2"
// produtionType: "exam"
// sayDate: "1969-12-31 20:30:00.000 +00:00"
// startDate: "1969-12-31 20:30:00.000 +00:00"
// updatedAt: "2022-08-28 07:45:13.833 +00:00"
    
  const formik = useFormik({
    initialValues: {
      productName:product.product.productName||"",
      productionLocation:product.product.partition|| "",
      batchValue:product.product.batchValue ||"",
      batchNumber:product.product.batchNumber|| "",
      customerName: product.product.customerName||"",
      dateNotification:product.product.sayDate ||"",
      dateProduction:product.product.startDate ||""
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
                    id="productionLocation"
                    name="productionLocation"
                    value={formik.values.productionLocation}
                    onChange={formik.handleChange}
                    inputProps={{
                      name: "productionLocation",
                      id: "outlined-age-native-simple",
                    }}
                    error={
                      formik.touched.productionLocation &&
                      Boolean(formik.errors.productionLocation)
                    }
                    helperText={
                      formik.touched.productionLocation &&
                      formik.errors.productionLocation
                    }
                  >
                    <option aria-label="None" value="" />
                    <option value={10}>اکریلیک</option>
                    <option value={20}>اپوکسی</option>
                    <option value={30}>بازیافت</option>
                    <option value={40}>پلی پورتان</option>
                    <option value={50}>بازرگانی شیمیایی</option>
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
                    type="number"
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
                    id="productionStage"
                    name="productionStage"
                    value={formik.values.productionStage}
                    onChange={formik.handleChange}
                    inputProps={{
                      name: "productionStage",
                      id: "outlined-age-native-simple",
                    }}
                    error={
                      formik.touched.productionStage &&
                      Boolean(formik.errors.productionStage)
                    }
                    helperText={
                      formik.touched.productionStage &&
                      formik.errors.productionStage
                    }
                  >
                    <option aria-label="None" value="" />
                    <option value={10}>تولید پایلوت</option>
                    <option value={20}>تولید آزمایشی</option>
                    <option value={30}>تولید انبوه</option>
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
                    id="dateNotification"
                    name="dateNotification"
                    value={formik.values.dateNotification}
                    onChange={formik.handleChange}
                    placeholder="انتخاب تاریخ"
                    format="jYYYY/jMM/jDD"
                    preSelected="1396/05/15"
                    error={
                      formik.touched.dateNotification &&
                      Boolean(formik.errors.dateNotification)
                    }
                    helperText={
                      formik.touched.dateNotification &&
                      formik.errors.dateNotification
                    }
                  />
                </Grid>
                <Grid className={styles.holder} item md={4} xs={12} sm={6}>
                  <span className={styles.titleInput}>تاریخ تولید</span>
                  <DatePicker
                    type="date"
                    className={styles.dataPicker}
                    id="dateProduction"
                    name="dateProduction"
                    value={formik.values.dateProduction}
                    onChange={formik.handleChange}
                    placeholder="انتخاب تاریخ"
                    format="jYYYY/jMM/jDD"
                    preSelected="1396/05/15"
                    error={
                      formik.touched.dateProduction &&
                      Boolean(formik.errors.dateProduction)
                    }
                    helperText={
                      formik.touched.dateProduction &&
                      formik.errors.dateProduction
                    }
                  />
                </Grid>
              
              </Grid>
            </Box>
       {product.processes.map((item,index)=>{
        return <ProcessComponent key={index} process={item}/>
       })}
           
          </form>

       
        </Typography>
      </Container>
    </React.Fragment>
  );
}

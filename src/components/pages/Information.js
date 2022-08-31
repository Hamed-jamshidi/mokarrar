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
import React, { useEffect } from "react";
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

export default function Information() {





  const validationForm = Yup.object().shape({
    productName: Yup.string().required(" کد مشخصه کنترلی جدید  را وارد کنید"),
    productionLocation: Yup.string().required(
      " نام مشخصه کنترلی جدید را وارد کنید"
    ),
    batchValue: Yup.number().required(" نام مشخصه کنترلی جدید را وارد کنید"),
    batchNumber: Yup.number().required(" نام مشخصه کنترلی جدید را وارد کنید"),
    customerName: Yup.string().required(" نام مشخصه کنترلی جدید را وارد کنید"),
    dateNotification: Yup.date().required(
      " نام مشخصه کنترلی جدید را وارد کنید"
    ),
    dateProduction: Yup.date().required(" نام مشخصه کنترلی جدید را وارد کنید"),
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
  const formik = useFormik({
    initialValues: {
      productName: "",
      productionLocation: "",
      batchValue: "",
      batchNumber: "",
      productionStage: "",
      customerName: "",
      dateNotification: "",
      dateProduction: "",
      actionName: "",
      controllAttribute: "",
      opratorName: "",
      stationName: "",
      acceptValue: "",
      materialValue: "",
      measuredValue: "",
      IdentificationCode: 0,
      startTime: new Date(),
      endTime: new Date(),
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
                  <span className={styles.titleInput}>مرحله تولید</span>

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
                    <option value={10}> ایستگاه یک</option>
                    <option value={20}>ایستگاه دو </option>
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

          <Grid container style={{ textAlign: "center" }}>
            <Grid item xs>
              <CollapsibleTable />
            </Grid>
          </Grid>
        </Typography>
      </Container>
    </React.Fragment>
  );
}

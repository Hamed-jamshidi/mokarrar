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

import "./Home.css";
import * as Yup from "yup";
import { useFormik } from "formik";
import ControllerTable from "../common/ControllerTable";
import MyAxios from "../myAxios";

export default function Controllers() {
  const [controllersData , setControllerData ] = useState([]);
  const [Id , setId]  = useState("");
  const [err ,setErr] = useState('');
  const [successMessage , setSuccessMessage] = useState('');
   //send the field for set in table
   const submitController=async(values)=>{
    await MyAxios("controls/newControler" , 'post' , values)
    .then((response)=>{
      if(response.data.success){
        getControlleres();
        formik.values.controlCode="";
        formik.values.controlName="";        
        setErr("");
        setSuccessMessage("این عملیات با موفقیت انجام شد")
      
      }
      
      else{ setErr("این کد  قبلا وجود داشته است");
      }
    })
    .catch((error)=>console.log(error))
 
  }
 
  //delete the row of table or an action
  const deleteHandler=async(id)=>{
  await MyAxios(`controls/deleteControls/${id}`)
  .then((response)=>getControlleres())
  .catch((error)=>console.log(error.message))
  }
  console.log(err)
  //get an action from table
  const handleEdit=(event,row)=>{
    event.preventDefault();
    console.log("handle edit ,,,,,,,,,,,,,,,,,,,,",row)
    setId(row.id)
   formik.values.controlCode=row.controlCode;
   formik.values.controlName=row.controlName;   
  }
 
  //  Edit the row of table or an action
  const handleClickEdit=async(event)=>{
     event.preventDefault();
     
     const updatedValue={
      id:Id,
      controlsCode: formik.values.controlCode,
      controlsName:`'${formik.values.controlName}'`
     }
     console.log("handle edit click ......",updatedValue)
     await MyAxios(`controls/updateControls`, "post" ,updatedValue)
     .then((response)=>{
      getControlleres();
      formik.values.controlCode="";
    formik.values.controlName="";
    setId("");})
     .catch((error)=>console.log(error.message))

  }


  
  //get all actions 
  async function getControlleres() {   
    await MyAxios("controls/allControls")
      .then((response) => {
        setControllerData(response.data.data);    
      })
      .catch((error) => console.log(error.message));
    return;
  }
  useEffect(() => {
    getControlleres();   
  }, []);
  const validationForm = Yup.object().shape({
    controlCode: Yup.string().required(" کد مشخصه کنترلی جدید  را وارد کنید"),
    controlName: Yup.string().required(" نام مشخصه کنترلی جدید را وارد کنید"),
  });
  const formik = useFormik({
    initialValues: {
      controlCode: "",
      controlName: "",
    },
    validationSchema: validationForm,
    onSubmit: (values) =>{
      submitController(values);
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
                  ثبت مشخصات کنترلی
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
                <div className="title-text-input">کد مشخصه :</div>
                <div>
                  <TextField
                    id="controlCode"
                    name="controlCode"
                    value={formik.values.controlCode}
                    onChange={formik.handleChange}
                    style={{ margin: 8 }}
                    placeholder="کد مشخطه"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                    error={
                      formik.touched.controlCode &&
                      Boolean(formik.errors.controlCode)
                    }
                    helperText={
                      formik.touched.controlCode && formik.errors.controlCode
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
                <div className="title-text-input">نام مشخصه :</div>

                <div>
                  <TextField
                    id="controlName"
                    name="controlName"
                    value={formik.values.controlName}
                    onChange={formik.handleChange}
                    style={{ margin: 8 }}
                    placeholder="نام مشخصه"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                    error={
                      formik.touched.controlName &&
                      Boolean(formik.errors.controlName)
                    }
                    helperText={
                      formik.touched.controlName && formik.errors.controlName
                    }
                  />
                </div>
              </Grid>
              <Grid item xs style={{}}>
              <div className={ (Id && 'hidden' )}><Button type="submit" variant="contained" color="primary">
                  ثبت
                </Button></div> 
                <div className={ (!Id && 'hidden' )}><Button type="submit" onClick={(e)=>handleClickEdit(e)} variant="contained" color="primary">
                  ویرایش
                </Button></div> 
                <div style={{color:"red"}}>{err}</div>
              </Grid>
            </Grid>
          </form>

          <Grid container style={{ textAlign: "center" }}>
            <Grid item xs>
              <ControllerTable
                columns={["کد مشخصه", "نام مشخصه", " ویرایش "]}
                rows={controllersData}
                handleDelete={deleteHandler}
                handleEdit={handleEdit}
                name={'controller'}
              />
            </Grid>
          </Grid>
        </Typography>
      </Container>
    </React.Fragment>
  );
}

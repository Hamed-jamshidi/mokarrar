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
import MyAxios from "../myAxios";
import StationTable from "../common/StationTable";
export default function Stations() {
  const [stationData , setStationData] = useState([]);
  const [Id , setId] = useState("");
  const [err , setErr] = useState('');
  const [successMessage ,setSuccessMessage] = useState('');
  //send the field for set in table
  const submitStations=async(values)=>{
    await MyAxios("stations/newStation" , 'post' , values)
    .then((response)=>{
      if(response.data.success){
        getStations();
        formik.values.stationCode="";
        formik.values.stationName="";        
        setErr("");
        setSuccessMessage("این عملیات با موفقیت انجام شد")
      
      }
      
      else{ setErr("این کد عملیات قبلا وجود داشته است");
      }
    })
    .catch((error)=>console.log(error))
 
  }
 
  //delete the row of table or an action
  const deleteHandler=async(id)=>{
  await MyAxios(`stations/deleteStations/${id}`)
  .then((response)=>getStations())
  .catch((error)=>console.log(error.message))
  }
  console.log(err)
  //get an action from table
  const handleEdit=(event,row)=>{
    event.preventDefault();
    console.log("handle edit ,,,,,,,,,,,,,,,,,,,,",row)
    setId(row.id)
   formik.values.stationCode=row.stationCode;
   formik.values.stationName=row.stationName;   
  }
 
  //  Edit the row of table or an action
  const handleClickEdit=async(event)=>{
     event.preventDefault();
     const updatedValue={
      id:Id,
      stationCode: formik.values.stationCode,
      stationName:`'${formik.values.stationName}'`
     }
     console.log("handle edit click ......",updatedValue)
     await MyAxios(`stations/updateStation`, "post" ,updatedValue)
     .then((response)=>{
      getStations();
      formik.values.stationCode="";
    formik.values.stationName="";
    setId("");})
     .catch((error)=>console.log(error.message))

  }


  
  //get all actions 
  async function getStations() {   
    await MyAxios("stations/allStations")
      .then((response) => {
        setStationData(response.data.data);    
      })
      .catch((error) => console.log(error.message));
    return;
  }
  useEffect(() => {
    getStations();   
  }, []);

//   useEffect(()=>{
//     const getAcions =async()=>{
//      await MyAxios("" , values )
//      return;
//     }
//  }, [])
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
      submitStations(values);
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
              <StationTable
                columns={["کد ایستگاه", "نام ایستگاه", " ویرایش "]}
                rows={stationData}
                handleDelete={deleteHandler}
                handleEdit={handleEdit}
                name={'station'}
              />
            </Grid>
          </Grid>
        </Typography>
      </Container>
    </React.Fragment>
  );
}

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
import {  useFormik } from "formik";
import MyAxios from "../myAxios";
// import ShowAlert from "../common/ShowAlert";
// import Alert from "@material-ui/lab/Alert";
export default function Actions() {
  const [actionData, setActionData] = useState([]);
  const [Id , setId] = useState('');
  const [err , setErr]= useState('');
  const [sucessMessage , setSuccessMessage]= useState('');
  //send the field for set in table 
  const submitActoins=async(values)=>{
    await MyAxios("missions/newMission" , 'post' , values)
    .then((response)=>{
      if(response.data.success){
        getActions();
        formik.values.missionCode="";
        formik.values.missionName="";        
        setErr("");
        setSuccessMessage("این عملیات با موفقیت انجام شد")
      
      }
      else setErr("این کد عملیات قبلا وجود داشته است")
    })
    .catch((error)=>console.log(error))
 
  }
 
  //delete the row of table or an action
  const deleteHandler=async(id)=>{
  await MyAxios(`missions/deleteMissions/${id}`)
  .then((response)=>getActions())
  .catch((error)=>console.log(error.message))
  }

  //get an action from table
  const handleEdit=(event,row)=>{
    event.preventDefault();
    console.log("handle edit ,,,,,,,,,,,,,,,,,,,,",row)
    setId(row.id)
   formik.values.missionCode=row.missionCode;
   formik.values.missionName=row.missionName;   
  }
 
  //  Edit the row of table or an action
  const handleClickEdit=async(event)=>{
     event.preventDefault();
     const updatedValue={
      id:Id,
      missionCode: formik.values.missionCode,
      missionName:`'${formik.values.missionName}'`
     }
     console.log("handle edit click ......",updatedValue)
     await MyAxios(`missions/updateMission`, "post" ,updatedValue)
     .then((response)=>{
      getActions();
      formik.values.missionCode="";
    formik.values.missionName="";
    setId("");})
     .catch((error)=>console.log(error.message))

  }


  
  //get all actions 
  async function getActions() {   
    await MyAxios("missions/allMissions")
      .then((response) => {
        setActionData(response.data.data);    
      })
      .catch((error) => console.log(error.message));
    return;
  }
  useEffect(() => {
    getActions();   
  }, []);

  console.log("action data", actionData);
  const validationForm = Yup.object().shape({
    missionCode: Yup.string().required("کد عملیات  را وارد کنید"),
    missionName: Yup.string().required(" نام عملیات را وارد کنید"),
  });
  const formik = useFormik({
    initialValues: {
      missionCode:  "",
      missionName:"",
    },
    validationSchema: validationForm,
    onSubmit: (values) => {
     
      submitActoins(values)
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
              {/* {sucessMessage && setInterval(()=>{return <Alert severity="success">{sucessMessage}</Alert>},2000) } */}
              {/* {sucessMessage && <ShowAlert message={sucessMessage} />} */}
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
                    id="missionCode"
                    name="missionCode"
                    value={formik.values.missionCode}
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
                      formik.touched.missionCode &&
                      Boolean(formik.errors.missionCode)
                    }
                    helperText={
                      formik.touched.missionCode && formik.errors.missionCode
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
                    id="missionName"
                    name="missionName"
                    value={formik.values.missionName}
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
                      formik.touched.missionName &&
                      Boolean(formik.errors.missionName)
                    }
                    helperText={
                      formik.touched.missionName && formik.errors.missionName
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
           
               <TableComponent
                columns={["کد عملیات", "نام عملیات", "ویرایش"]}
                rows={actionData}
                handleDelete={deleteHandler}
                handleEdit={handleEdit}
                name={'actions'}
              /> 
            </Grid>
          </Grid>
        </Typography>
      </Container>
    </React.Fragment>
  );
}

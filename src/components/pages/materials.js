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
import MaterialsTable from "../common/MaterialsTable";
export default function Materials() {
  const [materialData , setMaterialData] = useState([]);
  const [Id , setId] = useState("");
  const [err , setErr] = useState('');
  const [successMessage ,setSuccessMessage] = useState('');

  //reset all states 
  const resetStates=()=>{
    formik.values.materialCode="";
    formik.values.materialName="";        
    setErr("");
    // setSuccessMessage("ین عملیات با موفقیت انجام شد")
  }
  //send the field for set in table
  const submitMaterial=async(values)=>{
    await MyAxios("materials/createMaterial" , 'post' , values)
    .then((response)=>{
      if(response.data.success){
        getMaterials();
       
      
      }
      
      else{ setErr("این کد  قبلا وجود داشته است");
      }
    })
    .catch((error)=>console.log(error))
 
  }
 
  //delete the row of table or an action
  const deleteHandler=async(id)=>{
  await MyAxios(`materials/deleteMaterial/${id}`)
  .then((response)=>getMaterials())
  .catch((error)=>console.log(error.message))
  }
  console.log(err)
  //get an action from table
  const handleEdit=(event,row)=>{
    event.preventDefault();
   
    setId(row.id)
   formik.values.materialCode=row.materialCode;
   formik.values.materialName=row.materialName;   
  }
 
  //  Edit the row of table or an action
  const handleClickEdit=async(event)=>{
     event.preventDefault();
     const updatedValue={
      id:Id,
      materialCode: formik.values.materialCode,
      materialName:`'${formik.values.materialName}'`
     }
     console.log("handle edit click ......",updatedValue)
     await MyAxios(`materials/updateMaterial`, "post" ,updatedValue)
     .then((response)=>{
      getMaterials();
      formik.values.materialCode="";
    formik.values.materialName="";
    setId("");})
     .catch((error)=>console.log(error.message))

  }


  
  //get all mateials 
  async function getMaterials() {   
    await MyAxios("materials/allMaterials")
      .then((response) => {
        setMaterialData(response.data.data);    
        resetStates();
      })
      .catch((error) => console.log(error.message));
    return;
  }
  useEffect(() => {
    getMaterials();   
  }, []);

//   useEffect(()=>{
//     const getAcions =async()=>{
//      await MyAxios("" , values )
//      return;
//     }
//  }, [])
  const validationForm = Yup.object().shape({
    materialCode: Yup.string().required("کد ماده را وارد کنید"),
    materialName: Yup.string().required(" نام ماده را وارد کنید"),
  });
  const formik = useFormik({
    initialValues: {
      materialCode: "",
      materialName: "",
    },
    validationSchema: validationForm,
    onSubmit: (values) => {
     submitMaterial(values);
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
                    id="materialCode"
                    name="materialCode"
                    value={formik.values.materialCode}
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
                      formik.touched.materialCode &&
                      Boolean(formik.errors.materialCode)
                    }
                    helperText={
                      formik.touched.materialCode && formik.errors.materialCode
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
                    id="materialName"
                    name="materialName"
                    value={formik.values.materialName}
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
                      formik.touched.materialName &&
                      Boolean(formik.errors.materialName)
                    }
                    helperText={
                      formik.touched.materialName && formik.errors.materialName
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
              <MaterialsTable
                columns={["کد ماده", "نام ماده", " ویرایش "]}
                rows={materialData}
                handleDelete={deleteHandler}
                handleEdit={handleEdit}
                name={'material'}
              />
            </Grid>
          </Grid>
        </Typography>
      </Container>
    </React.Fragment>
  );
}

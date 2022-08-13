import { Box, Button, Container, CssBaseline, Grid, TextField, Typography } from '@material-ui/core';
import React from 'react';
import TableComponent from '../common/TableComponent';
import './Home.css';
import * as Yup from "yup";
import { useFormik } from "formik";

export default function Controllers() {

  const validationForm = Yup.object().shape({
    ctrAttrCode: Yup.string().required(" کد مشخصه کنترلی جدید  را وارد کنید"),
    ctrAttrName: Yup.string().required(" نام مشخصه کنترلی جدید را وارد کنید"),
  });
  const formik = useFormik({
    initialValues: {
      ctrAttrCode: "",
      ctrAttrName: "",
    },
    validationSchema: validationForm,
    onSubmit: (values) => {
      console.log(values);
    },
  });


  return (    
    <React.Fragment>
    <CssBaseline />
    <Container maxWidth="xl">
      <Typography component="div" style={{ backgroundColor: "white", height: '100vh' }} >
        <form onSubmit={formik.handleSubmit} className='formContainer'>
        <Grid container style={{textAlign:"center"}}>        
          <Grid item xs>            
          <Typography className="title" variant="h5"> ثبت مشخصات کنترلی</Typography>
          </Grid>      
        </Grid>

        <Grid container style={{textAlign:"center"}}>        
          <Grid item style={{display:"flex",alignItems:"center", justifyContent:"center"}} xs>            
          <div className="title-text-input">کد مشخصه :</div>
      <div >
      <TextField
       id="ctrAttrCode"
       name="ctrAttrCode"
       value={formik.values.ctrAttrCode}
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
        formik.touched.ctrAttrCode &&
        Boolean(formik.errors.ctrAttrCode)
      }
      helperText={
        formik.touched.ctrAttrCode &&
        formik.errors.ctrAttrCode
      }
      />
      
      </div>
          </Grid>      
        </Grid>

        <Grid container style={{ textAlign:"center",display:"flex",alignItems:"center", justifyContent:"center"}}>        
        <Grid item xs> 
        </Grid>        
        <Grid item style={{display:"flex",justifyContent:"center",alignItems:"center"}} lg>           
        <div className="title-text-input">نام مشخصه :</div>
        
      <div>
      <TextField
       id="ctrAttrName"
       name="ctrAttrName"
       value={formik.values.ctrAttrName}
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
        formik.touched.ctrAttrName &&
        Boolean(formik.errors.ctrAttrName)
      }
      helperText={
        formik.touched.ctrAttrName &&
        formik.errors.ctrAttrName
      }
    />
      </div>  
          </Grid> 
          <Grid item xs style={{}}   >
          <Button type="submit" variant="contained" color="primary">
  ثبت
</Button>
            </Grid>  
        </Grid>
        </form>

        <Grid container style={{textAlign:"center"}}>        
          <Grid item xs>            
          <TableComponent 
          columns={["کد مشخصه"  , "نام مشخصه", " ویرایش "]}
          rows={[{"name":"a" , "code":11}, {"name":"b", "code":12}]}
          />
          </Grid>      
        </Grid>
        
     
      </Typography>
      
    </Container>
  </React.Fragment>
  );
}

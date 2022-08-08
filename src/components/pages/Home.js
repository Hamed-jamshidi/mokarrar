import { Container, CssBaseline, TextField, Typography } from '@material-ui/core';
import React from 'react';
import './Home.css';

export default function Home() {
  return (
    
    <React.Fragment>
    <CssBaseline />
    <Container maxWidth="xl">
      <Typography component="div" style={{ backgroundColor: "white", height: '100vh' }} >
      <Typography className="title" variant="h5"> ثبت مشخصات کنترلی</Typography>
      <div className="text-input">
      <div className="title-text-input">کد ماده :</div>
      <div >
      <TextField
      id="productCode"     
      style={{ margin: 8 }}
      placeholder="کد ماده"      
      fullWidth
      margin="normal"
      InputLabelProps={{
        shrink: true,
      }}
      variant="outlined"
    />
      </div>      
      </div>

      <div className="text-input">
      <div className="title-text-input">نام ماده :</div>
      <div>
      <TextField
      id="productName"     
      style={{ margin: 8 }}
      placeholder="نام ماده"      
      fullWidth
      margin="normal"
      InputLabelProps={{
        shrink: true,
      }}
      variant="outlined"
    />
      </div>      
      </div>
     
   
      </Typography>
      
    </Container>
  </React.Fragment>
  );
}

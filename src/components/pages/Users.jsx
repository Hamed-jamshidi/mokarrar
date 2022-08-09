import { Box, Button, Container, CssBaseline, Grid, TextField, Typography } from '@material-ui/core';
import React from 'react';
import TableComponent from '../common/TableComponent';
import './Home.css';

export default function Users() {
  return (
    
    <React.Fragment>
    <CssBaseline />
    <Container maxWidth="xl">
      <Typography  component="div" style={{ backgroundColor: "white", height: '100vh' }} >
        < Box className='formContainer'>
        <Grid container style={{textAlign:"center"}}>        
          <Grid item xs>            
          <Typography className="title" variant="h5"> تعریف مدیران و روسا</Typography>
          </Grid>      
        </Grid>

        <Grid container style={{textAlign:"center"}}>        
          <Grid item style={{display:"flex" ,justifyContent:"center" , alignItems:"center"}} xs>            
          <div className="title-text-input">کد کاربری :</div>
      <div >
      <TextField
      id="productCode"     
      style={{ margin: 8 }}
      placeholder="کد کاربری"      
      fullWidth
      margin="normal"
      InputLabelProps={{
        shrink: true,
      }}
      variant="outlined" />
      </div>
          </Grid>      
          <Grid item style={{display:"flex" ,justifyContent:"center" , alignItems:"center"}} xs>             
          <div className="title-text-input">نام مدیر  :</div>
      <div >
      <TextField
      id="productCode"     
      style={{ margin: 8 }}
      placeholder="نام مدیر"  
      fullWidth
      margin="normal"
      InputLabelProps={{
        shrink: true,
      }}
      variant="outlined" />
      </div>
          </Grid>      
          <Grid item style={{display:"flex" ,justifyContent:"center" , alignItems:"center"}} xs>             
          <div className="title-text-input">نام کاربری :</div>
      <div >
      <TextField
      id="نام کاربری"     
      style={{ margin: 8 }}
      placeholder="نام کاربری "      
      fullWidth
      margin="normal"
      InputLabelProps={{
        shrink: true,
      }}
      variant="outlined" />
      </div>
          </Grid>      
        </Grid>
        <Grid container style={{textAlign:"center"}}>        
          <Grid item style={{display:"flex" ,justifyContent:"center" , alignItems:"center"}} xs>            
          <div className="title-text-input">شماره سشاخص  :</div>
      <div >
      <TextField
      id="productCode"     
      style={{ margin: 8 }}
      placeholder="شماره شاخص "      
      fullWidth
      margin="normal"
      InputLabelProps={{
        shrink: true,
      }}
      variant="outlined" />
      </div>
          </Grid>      
          <Grid item style={{display:"flex" ,justifyContent:"center" , alignItems:"center"}} xs>             
          <Button variant="contained" color="primary">
  ثبت
</Button>
          </Grid>      
          <Grid item style={{display:"flex" ,justifyContent:"center" , alignItems:"center"}} xs>             
         
          </Grid>      
        </Grid>
        </Box>
       

        <Grid container style={{textAlign:"center"}}>        
          <Grid item xs>            
          <TableComponent 
          columns={['کد کاربر', "نام کاربر " , " نام رییس ","کد شاخص", " ویرایش "]}
          rows={[{"name":"a" , "code":11,"manager":"hamed" , "controll":"c"}, {"name":"b", "code":12,"manager":"jamshidi", "controll":"c"}]}
          />
          </Grid>      
        </Grid>
        
     
      </Typography>
      
    </Container>
  </React.Fragment>
  );
}

import { Box, Button, Container, CssBaseline, Grid, TextField, Typography } from '@material-ui/core';
import React from 'react';
import TableComponent from '../common/TableComponent';
import './Home.css';

export default function Home() {
  return (
    
    <React.Fragment>
    <CssBaseline />
    <Container maxWidth="xl">
      <Typography component="div" style={{ backgroundColor: "white", height: '100vh' }} >
        <Box className='formContainer'>
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
      id="productCode"     
      style={{ margin: 8 }}
      placeholder="کد مشخطه"      
      fullWidth
      margin="normal"
      InputLabelProps={{
        shrink: true,
      }}
      variant="outlined" />
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
      id="productName"     
      style={{ margin: 8 }}
      placeholder="نام مشخصه"      
      fullWidth
      margin="normal"
      InputLabelProps={{
        shrink: true,
      }}
      variant="outlined"
    />
      </div>  
          </Grid> 
          <Grid item xs style={{}}   >
          <Button variant="contained" color="primary">
  ثبت
</Button>
            </Grid>  
        </Grid>
        </Box>

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

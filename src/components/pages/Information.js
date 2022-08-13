import { Box, Button, Container, CssBaseline, Grid, InputAdornment, MenuItem, OutlinedInput, Select, StylesProvider, TextField, Typography } from '@material-ui/core';
import React from 'react';
import TableComponent from '../common/TableComponent';
import './Home.css';
import styles from './Information.module.css';
import {RadioGroup, Radio} from 'react-radio-group'
import {
  DatePicker,
  DateTimePicker,
  DateRangePicker,
  DateTimeRangePicker
} from "react-advance-jalaali-datepicker";
import CollapsibleTable from '../common/CollapsibleTable';

export default function Information() {

  return (
    
    <React.Fragment>
    <CssBaseline />
    <Container maxWidth="xl">
      <Typography component="div" style={{ backgroundColor: "white", height: '100vh' }} >
        <form >
        <Box className='formContainer'>
          
          <h3 className={styles.title}> فرم ابلاغ تولید محصول و کنترل حین فرآیند</h3>
  
          <Grid container spacing={3}>
  
          <Grid className={styles.holder} item  md={4} xs={12} sm={6}>
          <span className={styles.titleInput}>
          نام محصول
         </span>
          <TextField
        id="productName"     
        style={{ margin: 8 }}
        placeholder="نام محصول "      
        maxWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
      />
          </Grid>
  
          <Grid className={styles.holder} item md={4} xs={12} sm={6} >
          <span className={styles.titleInput}>
          محل تولید
         </span>
         
  
        <Select
        className={styles.select}
           native
           value={12}
           // onChange={handleChange}
            id="demo-simple-select-outlined"
            inputProps={{
              name: "age",
              id: "outlined-age-native-simple",
            }}>
            <option aria-label='None' value=""/>
            <option value={10}>اکریلیک</option>
            <option value={20}>اپوکسی</option>
            <option value={30}>بازیافت</option>
            <option value={40}>پلی پورتان</option>
            <option value={50}>بازرگانی شیمیایی</option>
          </Select> 
          </Grid>
  
          <Grid className={styles.holder} item  md={4} xs={12} sm={6}>
          <span className={styles.titleInput}>
         مقدار بچ
         </span>
         <OutlinedInput
              id="outlined-adornment-weight"
              // value={10}
              // onChange={handleChange('weight')}
              endAdornment={<InputAdornment position="end">Kg</InputAdornment>}
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                'aria-label': 'weight',
              }}
              labelWidth={0}
            />
          </Grid>      
          <Grid className={styles.holder} item md={4} xs={12} sm={6}>
          <span className={styles.titleInput}>
         شماره بچ
         </span>
          <TextField
        id="batchNumber"     
        style={{ margin: 8 }}
        placeholder="شماره بج"    
        type="number"  
        maxWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
      />
          </Grid>
  
          <Grid className={styles.holder} item md={4} xs={12} sm={6} >
          <span className={styles.titleInput}>
         مرحله تولید
         </span>
         
  
        <Select
       className={styles.select}
           native
           value={12}
           // onChange={handleChange}
            id="demo-simple-select-outlined"
            inputProps={{
              name: "age",
              id: "outlined-age-native-simple",
            }}>
            <option aria-label='None' value=""/>
            <option value={10}>تولید پایلوت</option>
            <option value={20}>تولید آزمایشی</option>
            <option value={30}>تولید انبوه</option>         
          </Select> 
          </Grid>
  
          <Grid className={styles.holder} item md={4} xs={12} sm={6}>
          <span className={styles.titleInput}>
        نام مشتری
         </span>
          <TextField
        id="costumerName"     
        style={{ margin: 8 }}
        
        placeholder="شماره بج"      
        maxWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
      />
          </Grid>
  
          <Grid className={styles.holder} item   md={4} xs={12} sm={6}>
          <span className={styles.titleInput}>
      تاریخ ابلاغ تولید
         </span>
         <DatePicker
         className={styles.dataPicker}
            // inputComponent={this.DatePickerInput}
            placeholder="انتخاب تاریخ"
            format="jYYYY/jMM/jDD"
            // onChange={this.change}
            id="datePicker"
            preSelected="1396/05/15"
          />
          </Grid>      
          <Grid className={styles.holder} item  md={4} xs={12} sm={6}>
          <span className={styles.titleInput}>
      تاریخ  تولید
         </span>
         <DatePicker
         className={styles.dataPicker}
            // inputComponent={this.DatePickerInput}
            placeholder="انتخاب تاریخ"
            format="jYYYY/jMM/jDD"
            // onChange={this.change}
            id="datePicker"
            preSelected="1396/05/15"
          />
          </Grid>      
         
        </Grid>
   </Box>
  
          <Box className='formContainer'>
            
         
  
          <Grid container spacing={3}>
  
          <Grid className={styles.holder} item md={4} xs={12} sm={6}>
          <span className={styles.titleInput}>
          نام عملیات
         </span>
         <Select
        className={styles.select}
           native
           value={12}
           // onChange={handleChange}
            id="demo-simple-select-outlined"
            inputProps={{
              name: "actions",
              id: "outlined-age-native-simple",
            }}>
            <option aria-label='None' value=""/>
            <option value={10}>والفجر 1</option>
            <option value={20}>والفجر 2</option>
           
          </Select> 
          </Grid>
  
          <Grid className={styles.holder} item md={4} xs={12} sm={6} >
          <span className={styles.titleInput}>
         مشخصات کنترلی
         </span>
         
  
        <Select
       className={styles.select}
           native
           value={12}
           // onChange={handleChange}
            id="demo-simple-select-outlined"
            inputProps={{
              name: "controllItem",
              id: "outlined-age-native-simple",
            }}>
            <option aria-label='None' value=""/>
            <option value={10}>مشخصه 1</option>
            <option value={20}>مشخصه 2</option>
          
          </Select> 
          </Grid>
  
          <Grid className={styles.holder} item md={4} xs={12} sm={6}>
          <span className={styles.titleInput}>
       نام اپراتور تولید
         </span>
         <TextField
        id="operatorName"     
        style={{ margin: 8 }}
        placeholder="نام اپراتور تولید"     
        maxWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
      />
          </Grid>      
          <Grid className={styles.holder} item md={4} xs={12} sm={6}>
          <span className={styles.titleInput}>
        نام ایستگاه
         </span>
         <Select
        className={styles.select}
           native
           value={12}
           // onChange={handleChange}
            id="demo-simple-select-outlined"
            inputProps={{
              name: "stationNumber",
              id: "outlined-age-native-simple",
            }}>
            <option aria-label='None' value=""/>
            <option value={10}> ایستگاه یک</option>
            <option value={20}>ایستگاه دو </option>
       
          </Select> 
          </Grid>
  
          <Grid className={styles.holder} item md={4} xs={12} sm={6} >
          <span className={styles.titleInput}>
        معیار / مقدار پذیرش
         </span>
         
  
         <TextField
        id="acceptValue"     
        style={{ margin: 8 }}
        placeholder="معیار پذیرش"     
        maxWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
      />
          </Grid>
  
          <Grid className={styles.holder} item md={4} xs={12} sm={6}>
          <span className={styles.titleInput}>
        نام ماده
         </span>
         <Select
         className={styles.select}
           native
           value={12}
           // onChange={handleChange}
            id="demo-simple-select-outlined"
            inputProps={{
              name: "madeName",
              id: "outlined-age-native-simple",
            }}>
            <option aria-label='None' value=""/>
            <option value={10}> ماده یک</option>
            <option value={20}>ماده دو </option>
       
          </Select>
          </Grid>
          <Grid className={styles.holder} item md={4} xs={12} sm={6} >
          <span className={styles.titleInput}
          
          >
       مقدار اندازه گیری شده
         </span>
         <TextField
        id="measuredValue"     
        style={{ margin: 8 }}
        placeholder="مقدار اندازگیری شده "      
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
      />
          </Grid>
          <Grid className={styles.holder} item md={4} xs={12} sm={6}>
          <span className={styles.titleInput}>
       کد شناسایی
         </span>
         <TextField
        id="acceptValue"     
        style={{ margin: 8 }}
        placeholder="کد شناسایی"
        type="number"
        maxWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
      />
          </Grid>
  
          <Grid className={styles.holder} item md={4} xs={12} sm={6}>
          <span className={styles.titleInput}>
      زمان شروع
         </span>
         <DatePicker
         className={styles.dataPicker}
            // inputComponent={this.DatePickerInput}
            placeholder="انتخاب تاریخ"
            format="jYYYY/jMM/jDD"
            // onChange={this.change}
            id="datePicker"
            preSelected="1396/05/15"
          />
          </Grid>      
          <Grid className={styles.holder} item  md={4} xs={12} sm={6}>
          <span className={styles.titleInput}>
           زمان پایان
         </span>
         <DatePicker
         className={styles.dataPicker}
            // inputComponent={this.DatePickerInput}
            placeholder="انتخاب تاریخ"
            format="jYYYY/jMM/jDD"
            // onChange={this.change}
            id="datePicker"
            preSelected="1396/05/15"
          />
          </Grid>      
         
        </Grid>
   </Box>
  
        </form>
       
        <Grid container style={{textAlign:"center"}}>        
          <Grid item xs>            
         <CollapsibleTable/>
          </Grid>      
        </Grid>
        
     
      </Typography>
      
    </Container>
  </React.Fragment>
  );
}

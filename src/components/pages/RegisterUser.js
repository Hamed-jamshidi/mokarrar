import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import * as Yup from "yup";
import { useFormik } from "formik";
import MyAxios from "../myAxios";
import { useState } from "react";
import { useProductActions } from "../context/ProductProvider";

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

import FormControl from '@material-ui/core/FormControl';
import { Select } from '@material-ui/core';
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="">
      
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function RegisterUser() {
  const [error , setError] = useState("");
  const [successMessage , setSuccessMessage] = useState("")
  const ProductDispatcher = useProductActions()
  const classes = useStyles();
  const validationForm = Yup.object().shape({
    userName: Yup.string().required("نام کاربری را وارد کنید  "),
    password: Yup.string().required(" رمز عبور را وارد کنید"),
    firstName: Yup.string().required(" نام  را وارد کنید  "),
    lastName: Yup.string().required(" نام خانوادگی را وارد کنید"),
    partition:Yup.number().required(" نام واحد  را وارد کنید"),

  });
 
  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
      firstName: "",
      lastName: "",
      partition:""
    },
    validationSchema: validationForm,
    onSubmit:async(values) => {
      await MyAxios("user/register" , "post" , values )
      .then((response) =>{
        setSuccessMessage("کاربر جدید با موفقیت ایجاد گردید");
      setError ("");
      // ProductDispatcher({type:"GET_PARTITION", data:response.data.partition});
      // window.location.replace('/'); 
    }).catch((err)=>{console.log(err.message);
    console.log("login failed!")});
    setError("login failed!")
   },
  });

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
         ثبت کاربر جدید
        </Typography>
        <form className={classes.form} onSubmit={formik.handleSubmit} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="نام"
                onChange={formik.handleChange}
                value={formik.values.firstName}
                autoFocus
                error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                helperText={formik.touched.firstName && formik.errors.firstName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="نام خانوادگی"
                onChange={formik.handleChange}
                value={formik.values.lastName}
                name="lastName"
                autoComplete="lname"
                error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                helperText={formik.touched.lastName && formik.errors.lastName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="userName"
                label="نام کاربری"
                onChange={formik.handleChange}
                value={formik.values.userName}
                name="userName"
                autoComplete="userName"
                error={formik.touched.userName && Boolean(formik.errors.userName)}
              helperText={formik.touched.userName && formik.errors.userName}
              />
            </Grid>
           
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="رمز عبور"
                onChange={formik.handleChange}
                value={formik.values.password}
                type="Password"
                id="password"
                autoComplete="current-password"
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
              />
            </Grid>
           

            <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">واحد</InputLabel>
        <Select
          labelId="partition"
          id="partition"
          name='partition'
          value={formik.values.partition}    
          onChange={formik.handleChange}    
          label="واحد کاربر"
          error={formik.touched.partition && Boolean(formik.errors.partition)}
          helperText={formik.touched.partition && formik.errors.partition}
        >
          <MenuItem value="">
            <em>واحد کاربر </em>
          </MenuItem>
          <MenuItem value={1}>پلی اورتان </MenuItem>
          <MenuItem value={2}>اپوکسی</MenuItem>
          <MenuItem value={3}>الکید</MenuItem>
        </Select>
      </FormControl>


          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
           ثبت نام
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
               قبلا ثبت نام کرده اید  ؟ وارد شوید
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
      
      </Box>
    </Container>
  );
}
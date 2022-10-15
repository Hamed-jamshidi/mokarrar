import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ProductCard from '../common/Card';
import { useEffect } from 'react';
import MyAxios from '../myAxios';
import ProductsTable from '../productsTable';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Home() {
  const [productsData ,setProductsData]= useState([]);
  const [completedProduct ,setCompletedProduct]= useState([]);
  console.log("compelted products is :" , completedProduct)
  //get all products 
  const getAllProducts=async()=>{
    await MyAxios(`eblaghiats/allProducts/0`)
    .then((response)=>{
      console.log(response.data.data)
      setProductsData(response.data.data);
    }).catch((err)=>{
        console.log(err.message);
    })
  }
  const getCompletedProducts=async()=>{
    await MyAxios(`eblaghiats/allProducts/1`)
    .then((response)=>{
      console.log(response.data.data)
      setCompletedProduct(response.data.data);
    }).catch((err)=>{
        console.log(err.message);
    })
  }
 useEffect(()=>{
  getAllProducts();
  getCompletedProducts();
 },[])

  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        {productsData.map((product)=>{
            return ( <Grid key={product.id} item md={4} xs={12} sm={6}>
                <Paper className={classes.paper}><ProductCard key={product.id} product={product}/></Paper>
              </Grid>)
        })}
       
       
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
         <Grid container item xs={12} spacing={3}> <FormRow/></Grid>  
         <Grid container item xs={12} spacing={3} > 
         <ProductsTable 
         products={completedProduct}
        

         /></Grid>  
    </div>
  );
}
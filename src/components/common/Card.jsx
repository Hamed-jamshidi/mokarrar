import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../pages/Home.css'
import { constants } from '../../constants';
import { Link } from 'react-router-dom';
import { useProductActions } from '../context/ProductProvider';
import MyAxios from '../myAxios';
import { useEffect } from 'react';
const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function ProductCard(product) {
  const [process , setProcess] = useState([]);
  
  const getAllProcess =async(product)=>{
    // const url =`eblaghiats/getProcess/${parseInt(product.batchNumber)}`;
    const url =`eblaghiats/getProcess/${product.product.batchNumber}`;    
      console.log("batchNumber ........." , product.product.batchNumber)
    await MyAxios(url)
    .then((response)=>setProcess(response.data.data) )    
    .catch((err)=>console.log(err.message));
}
useEffect(()=>{
  getAllProcess(product)
},[])
  const productDispatcher = useProductActions();
  
// handle click Edit fill a product to reducer state
  const handleClickEdit =(product) =>{
  
  productDispatcher({type:"GET_PROCESS",payload:product,data:process});
   
  }
 
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined" >
      <CardContent >
       

        <div className="cardRows fard">
           <span>نام قسمت</span>
           <span>{constants.partitionName[`${product.product.partition}`]}</span>            
        </div>
        <div className="cardRows">
           <span>نام محصول</span>
           <span>{product.product.productName}</span>   
        </div>
        <div className="cardRows fard">
           <span>شماره بچ </span>
           <span>{product.product.batchNumber}</span>            
        </div>
        <div className="cardRows">
           <span>نوع تولید </span>
           <span>{product.product.produtionType}</span>      
        </div>
       
      </CardContent>
      <CardActions className='btnBox' >
        {/* <Button variant="contained" color="primary" size="small">ویرایش</Button> */}
        <Link to="/information">
          <Button onClick={()=>handleClickEdit(product.product)} color="primary" size="small">ویرایش</Button>
          </Link>
        
        <Button  color="secondary" size="small">حذف</Button>
      </CardActions>
    </Card>
  );
}

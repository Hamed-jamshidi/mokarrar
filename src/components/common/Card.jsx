import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../pages/Home.css'
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

export default function ProductCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined" >
      <CardContent >
        {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
        <p>اکریلییک</p>
        </Typography>
        <Typography variant="h5" component="h2">
         <p>نام محصول</p>
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
         <p>شماره بچ</p>
        </Typography>
        <Typography variant="body2" component="p">
          <p>نتیجه</p>
          <br />
         <hr/>
        </Typography> */}

        <div className="cardRows fard">
           <span>نام قسمت</span>
           <span>اکریلییک</span>            
        </div>
        <div className="cardRows">
           <span>نام محصول</span>
           <span>xxxx</span>            
        </div>
        <div className="cardRows fard">
           <span>شماره بچ </span>
           <span>123456</span>            
        </div>
        <div className="cardRows">
           <span>نتیجه تولید </span>
           <span>مثبت</span>            
        </div>
       
      </CardContent>
      <CardActions className='btnBox' >
        {/* <Button variant="contained" color="primary" size="small">ویرایش</Button> */}
        <Button  color="primary" size="small">ویرایش</Button>
        <Button  color="secondary" size="small">حذف</Button>
      </CardActions>
    </Card>
  );
}

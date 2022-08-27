import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ProductCard from '../common/Card';

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
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        {[1 , 2  , 3 , 4 , 5 , 6 ].map((item)=>{
            return ( <Grid item md={4} xs={12} sm={6}>
                <Paper className={classes.paper}><ProductCard/></Paper>
              </Grid>)
        })}
       
       
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
         <Grid container item xs={12} spacing={3}> <FormRow/></Grid>  
    </div>
  );
}
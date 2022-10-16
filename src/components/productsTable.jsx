import React , {useRef} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import PrintComponent from './common/PrintComponent'
import {useReactToPrint} from "react-to-print"
import ComponentToPrint from './ComponentToPrint';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});




function Row(props) {
  const ComponentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () =>ComponentRef.current,
  })
  
  const { row } = props;
  console.log("props in function row is : ",props)
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell align="right" component="th" scope="row">
          {row.productName}
        </TableCell>
        <TableCell align="right">{row.partition}</TableCell>
        <TableCell align="right">{row.customerName}</TableCell>
        <TableCell align="right">{row.batchNumber}</TableCell>
        <TableCell align="right">{row.produtionType}</TableCell>
        <TableCell align="right">
         <div style={{display:"none"}}>
<ComponentToPrint row={row} ref={ComponentRef} />
         </div>
         <div>
          <button onClick={handlePrint}>print</button>
         </div>

        </TableCell>
      
       
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
               <span style={{marginLeft:"100%" , fontSize:"20px"}}>فرآیندها</span>
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                   
                    <TableCell align="right">شماره بچ</TableCell>
                    <TableCell align="right">نام عملیات </TableCell>
                    <TableCell align="right"> نام کنترلر</TableCell>
                    <TableCell align="right">نام اپراتور </TableCell>
                    <TableCell align="right">نام ایستگاه </TableCell>
                    <TableCell align="right">مقدار پذیرفته </TableCell>
                    <TableCell align="right"> مقدار اندازه شده</TableCell>
                  
                  </TableRow>
                </TableHead>
                <TableBody>
                   {row.processes.map((ProcessRow) => (
                    <TableRow key={ProcessRow.id}>
                      <TableCell  align="right" component="th" scope="row">
                        {ProcessRow.batchNumber}
                      </TableCell>
                      <TableCell  align="right">{ProcessRow.actionName}</TableCell>
                      <TableCell align="right">{ProcessRow.controllerName}</TableCell>
                      <TableCell align="right">{ProcessRow.operatorName}</TableCell>
                      <TableCell align="right">{ProcessRow.stationName}</TableCell>
                      <TableCell align="right">{ProcessRow.acceptValue}</TableCell>
                      <TableCell align="right">{ProcessRow.measuredValue}</TableCell>
                     
                    </TableRow>
                  ))} 
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};



export default function ProductsTable({products}) {
 
    console.log('product in producdt table is : ' , products)
  return (
    <TableContainer component={Paper} style={{marginTop:"50px"}}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell align="right">نام محصول</TableCell>
            <TableCell align="right">نام قسمت</TableCell>
            <TableCell align="right">نام مشتری</TableCell>
            <TableCell align="right">شماره بچ</TableCell>
            <TableCell align="right">نوع تولید</TableCell>
            <TableCell align="right">پرینت</TableCell>
            
          
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((row) => (
            <Row key={row.id} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

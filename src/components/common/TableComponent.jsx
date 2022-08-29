import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { FiEdit } from 'react-icons/fi';
import { MdDelete } from 'react-icons/md';
import { useState } from 'react';
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function TableComponent({rows,columns}) {
  const [satr, setSatr] = useState(rows)
  console.log(rows , columns);
  const classes = useStyles();
   
  return (
    <TableContainer component={Paper} >
      <Table className={classes.table} npm aria-label="customized table">
        <TableHead>
          <TableRow>          
              {columns.map((column , index)=>  <StyledTableCell key={index} align="center">{column}</StyledTableCell>)}
          </TableRow>
        </TableHead>
        <TableBody>
          {satr.map((row,index) => (
          
            <StyledTableRow key={row.id}>
              <StyledTableCell align="center">{row.code }</StyledTableCell>
              <StyledTableCell align="center">{row.name}</StyledTableCell>  
              { row.manager && <StyledTableCell align="center">{row.manager }</StyledTableCell>}          
              { row.controll && <StyledTableCell align="center">{row.controll }</StyledTableCell>}          
              <StyledTableCell align="center"> 
              <span style={{marginLeft:"10px", color:"green"}}><FiEdit style={{fontSize:"1.4rem"}}/></span>
              <span style={{ color:"red"}}><MdDelete style={{fontSize:"1.4rem"}}/></span>
               </StyledTableCell>            
            
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

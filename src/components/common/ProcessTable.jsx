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
import { useProduct } from '../context/ProductProvider';
import ColumnName from './ColumnName';
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





const useStyles = makeStyles({
  table: {
    minWidth: 700,
    marginBottom:20,
  },
});

export default function ProcessTable({rows,columns,columnNames,reset,name,handleDelete,handleEdit}) {

  // const [rows ,setRows]= useState(rows)
  // console.log("table name : " , name)
  // function convertRows(rows, name) {
  //   console.log(" i am in convertrows" , name , rows)  
  //   (rows && name==='actions') && (
  //     rows.map(({ id, missionCode, missionName }) => {
  //       console.log( { id: id, code: missionCode, name: missionName })
  //       return {id:id, code:missionCode, name:missionName};
  //     })
  //  ) }
  
  // const changeRows = convertRows(rows, name);
  // console.log("change rows : ", changeRows);
  const classes = useStyles();
  const [productName, stationName, controllerName, actionName] = columnNames;
  productName.
  console.log("this is varlist  in processList", columnNames);
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} npm aria-label="customized table">
        <TableHead>
          <TableRow>          
              {columns.map((column , index)=><StyledTableCell key={index} align="center">{column}</StyledTableCell>)}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,index) => (
              <StyledTableRow key={row.id}>
              <StyledTableCell align="center">{actionName.filter((item)=>{if(item === item )}}</StyledTableCell>
              <StyledTableCell align="center">{controllerName[row.controllerName]}</StyledTableCell>  
              <StyledTableCell align="center">{row.operatorName}</StyledTableCell>
              <StyledTableCell align="center">{stationName[row.stationName]}</StyledTableCell>  
              <StyledTableCell align="center">{row.measuredValue}</StyledTableCell>
              <StyledTableCell align="center">{productName[row.materialName]}</StyledTableCell>  
              <StyledTableCell align="center">{row.acceptValue}</StyledTableCell>
              <StyledTableCell align="center">{row.identifyCode}</StyledTableCell>  
              <StyledTableCell align="center">{row.startTime}</StyledTableCell>
              <StyledTableCell align="center">{row.endTime}</StyledTableCell>  
              <StyledTableCell align="center">{row.result}</StyledTableCell>  
              { row.manager && <StyledTableCell align="center">{row.manager }</StyledTableCell>}          
              { row.controll && <StyledTableCell align="center">{row.controll }</StyledTableCell>}          
              <StyledTableCell align="center"> 
              <span style={{marginLeft:"10px", color:"green"}} onClick={()=>handleEdit(row.id)}><FiEdit style={{fontSize:"1.4rem"}}/></span>
              <span style={{ color:"red"}} onClick={()=>handleDelete(row.id)}><MdDelete style={{fontSize:"1.4rem"}}/></span>
               </StyledTableCell>            
            
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

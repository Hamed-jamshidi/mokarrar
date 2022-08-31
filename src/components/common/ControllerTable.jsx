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
  },
});

export default function ControllerTable ({rows,columns,name,handleDelete,handleEdit}) {
  // console.log("table rowssss : " , rows)
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
   
  return (
    <TableContainer component={Paper} >
      <Table className={classes.table} npm aria-label="customized table">
        <TableHead>
          <TableRow>          
              {columns.map((column , index)=>  <StyledTableCell key={index} align="center">{column}</StyledTableCell>)}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,index) => (
          
            <StyledTableRow key={row.id}>
              <StyledTableCell align="center">{row.controlCode }</StyledTableCell>
              <StyledTableCell align="center">{row.controlName}</StyledTableCell>  
              { row.manager && <StyledTableCell align="center">{row.manager }</StyledTableCell>}          
              { row.controll && <StyledTableCell align="center">{row.controll }</StyledTableCell>}          
              <StyledTableCell align="center"> 
              <span style={{marginLeft:"10px", color:"green"}} onClick={(e)=>handleEdit(e,row)}><FiEdit style={{fontSize:"1.4rem"}}/></span>
              <span style={{ color:"red"}} onClick={()=>handleDelete(row.id)}><MdDelete style={{fontSize:"1.4rem"}}/></span>
               </StyledTableCell>            
            
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

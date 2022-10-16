import React from "react";
const  ComponentToPrint =React.forwardRef ((props ,ref) => {
          const {row} = props;
    return ( 
    
          <div ref={ref}>
            <h2>
                first print
            </h2>
            <table>
          <thead>
            <th>S/N</th>
            <th>Name</th>
            <th>Email</th>
            <th>Email</th>
          </thead>
          <tbody>
            <tr>
                
              <td>{row.partition}</td>
              <td>{row.customerName}</td>
              <td>{row.batchNumber}</td>
              <td>{row.produtionType}</td>
              
            </tr>
            
          </tbody>
        </table>
        </div>
 
      
      );
});
 
export default ComponentToPrint;
 
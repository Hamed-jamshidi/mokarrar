import React from "react";
import "./componentToPrint.css";
import logo from "../logo-flat.png";
const  ComponentToPrint =React.forwardRef ((props ,ref) => {
          const {row} = props;
          console.log("row in component print is :" ,row)
    return (
    <div ref={ref}>
      <h2 style={{textAlign:"center", marginTop:"10px"}} >بسمه تعالی</h2>
             <table className="printTable">
        
          <tbody>
            <tr className="PrintRow">                
             <td colSpan={2} rowSpan={3} className="logo">{<img style={{maxWidth:"50px", maxHeight:"75px"}} src={logo} alt="logo"/>}</td>
             <td colSpan={5} > فرم ابلاغ تولید محصول وکنترل حین فرایند </td>
             <td > em-prf001 </td>
            </tr>
            <tr className="PrintRow">              
             <td  rowSpan={2} >{row.partition == 1 && "*" } اکریلیک </td>
             <td  rowSpan={2}> {row.partition == 2 && "*" }اپوکسی  </td>
             <td rowSpan={2} >{row.partition == 3 && "*" } بازیافت  </td>
             <td  rowSpan={2}> {row.partition == 4 && "*" }پلی اورتان </td>
             <td  rowSpan={2}> {row.partition == 5 && "*" } شیمیایی </td>
             
             <td >  شماره بازنگری</td>
            
             
            </tr>
            <tr className="PrintRow">                
           
            
             <td > صفحه یک ازیک </td>
            
             
            </tr>
            <tr className="PrintRow">                
             <td colSpan={2} > نام محصول:{row.productName}  </td>
             <td colspan={3} > شماره بچ محصول:{row.batchNumber}</td>
             <td colspan={2}>  مقدار محصول (کیلوگرم ):{row.batchValue} </td>
             <td > نام مشتری: {row.customerName}</td>
           
            
             
            
             
            </tr>
            <tr className="PrintRow">                
             <td >{row.ProductionType ==1 && "*"} مرحله تولید : پایلوت </td>
             <td >{row.ProductionType ==2 && "*"} تولید ازمایشسی </td>
             <td colspan={2}>{row.ProductionType ==3 && "*"} تولید انبوه  </td>
             <td colspan={2}> تاریخ ابلاغ تولید {row.sayDate}</td>
             <td colspan={2}> تاریخ تولید  {row.startDate}</td>        
          </tr>
          
            
          </tbody>
        </table>

             <table className="printTable">
        
          <tbody>
          <tr>
            <td rowSpan={2} style={{width:"30px"}}>ترتیب عملیات</td>
            <td rowSpan={2}>نام عملیات</td>
            <td rowSpan={2}>نام ایستگاه</td>
            <td colSpan={2}>مشخصات ماده اولیه</td>
            <td rowSpan={2}>مشخصه کنترلی</td>
            <td rowSpan={2}>معیار پذیرش</td>
            <td rowSpan={2}>مقدار اندازه گیری شده</td>
            <td rowSpan={2}>زمان شروع</td>
            <td rowSpan={2}>زمان پایان</td>
            <td colSpan={2}>نتیجه</td>
            <td rowSpan={2}>نام اپراتور تولید</td>      
           </tr>
          <tr>
            <td style={{width:"50px"}} >نام ماده</td>
            <td style={{width:"50px"}}>کد شناسایی انبار</td>
            <td style={{width:"30px"}}> ok </td>
            <td style={{width:"30px"}}> not ok </td>
            
          
          </tr>
          {row.processes.map((value ,index)=>{
            return(
              <tr id ={index}>
              <td>{index}</td>
              <td>{value.operatorName}</td>
              <td>{value.stationName}</td>
              <td>{value.stationName}</td>
              <td>{value.materialName}</td>
              <td>{value.controllerName}</td>
              <td>{value.acceptValue}</td>
              <td>{value.stationName}</td>
              <td>{value.stationName}</td>
              <td>{value.stationName}</td>
              <td>{value.stationName}</td>
              <td>{value.stationName}</td>
              <td>{value.stationName}</td>
            </tr>
            )
           
          })}
            
          </tbody>
         
        </table> 




           
        </div>
 
      
      );
});
 
export default ComponentToPrint;
 
import React from 'react';
import { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import ComponentToPrint from '../ComponentToPrint';


const PrintComponent = () => {
   const componentRef = useRef();

    return ( <div>
        <ReactToPrint 
        trigger={()=><button>Print</button>}
        content={()=>componentRef.current} />
        <ComponentToPrint ref={componentRef}/>
    </div>  );
}
 
export default PrintComponent;
import {
  ContactsOutlined,
  LocalConvenienceStoreOutlined,
} from "@material-ui/icons";
import MyAxios from "../myAxios";
import { useProduct } from "./ProductProvider";

const ProductReducer = (state, action) => {
  switch (action.type) {

    case "GET_PROCESS":
      return { ...state, product:action.payload, processes: action.data };

    case "RESET_STATE":
      
      return {...state,
        product :[],
        processes:[],
        selectedProcess:[{}]};

    case "RESET_SELECTED":      
    console.log("handleprocess")
      return {...state , selectedProcess:[{}]};

    case "UPDATE_PROCESS":
      const  process1 = [...state.processes];
      console.log("action in update process",action)
      const updatedProcessIndex = process1.findIndex((item)=>item.id === parseInt(action.payload.id));
    //  console.log('updated process index', updatedProcessIndex)
      console.log('updated process index ', updatedProcessIndex)
      if (updatedProcessIndex >= 0 ){
        process1[updatedProcessIndex] = action.payload;

      }
      // console.log("updateted process", updatedProcess)
      return {...state, processes:process1};

    case "ADD_PROCESS":
      console.log('payload', action.payload)
      const process2 = [...state.processes]
      process2.push(action.payload);
      return {...state , processes:process2};

   
    case "GET_SELECTED":
      const processes = [...state.processes];
      console.log("selected item in product :", action.payload);
      const selectedItem = processes.filter(
        (item) => item.id === parseInt(action.payload)
      );
      console.log("selected item in product :", selectedItem);
      return { ...state, selectedProcess: selectedItem };

    case "DELETE_PROCESS":
      deleteProcess(action.payload);
      const product = { ...state };
      const process = product.processes.filter(
        (item) => item.id !== parseInt(action.payload)       
      );

      console.log("process in delete process" , process);      
      console.log("product in delete process" , product);  
      
      if(product.selectedItem && (product.selectedItem).length > 0 && product.selectedItem.id === parseInt(action.payload) ) return{...state ,processes:process,selectedItem:[{}]}
  
      else return { ...state, processes: process};  
     

    case "GET_PARTITION":
      console.log("action in get Partition is : " )
      const {accessLevel , partition} = action.payload;
      console.log("get partition" , accessLevel, partition);   
      
      localStorage.setItem('getPartitionA',accessLevel);
      localStorage.setItem('getPartitionP',partition);

      return { ...state, accessLevel:accessLevel };

    case "GET_STATE":      
      return localStorage.setItem() ;
  
    default:
      return state;
  }
};

export default ProductReducer;

const deleteProcess = async (id) => {
  await MyAxios(`eblaghiats/deleteProcess/${id}`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err.message);
    });

  return;
};

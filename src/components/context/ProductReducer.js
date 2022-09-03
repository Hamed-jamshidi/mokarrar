import { ContactsOutlined } from "@material-ui/icons";
import MyAxios from "../myAxios";
import { useProduct } from "./ProductProvider";

const ProductReducer = (state, action) => {   
    
  switch (action.type) {
    case "GET_PROCESS":     
      return {...state , product:action.payload , processes:action.data}
    case "GET_PARTITION":
      return {...state , partition:action.partition}
    case "ADD_PROCESS":
      return state;
    default:
      return state;
  }
};

export default ProductReducer;

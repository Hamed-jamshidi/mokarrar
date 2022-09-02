import { ContactsOutlined } from "@material-ui/icons";
import MyAxios from "../myAxios";
import { useProduct } from "./ProductProvider";

const ProductReducer = (state, action) => {   
    
  switch (action.type) {
    case "GET_PROCESS":
      console.log("state....................................eddded",{...state , product:action.payload.product,processes:action.payload.process})
      return {...state , product:action.payload.product,processes:action.payload.process}
    case "ADD_PROCESS":
      return state;
    default:
      return state;
  }
};

export default ProductReducer;

import {
  ContactsOutlined,
  LocalConvenienceStoreOutlined,
} from "@material-ui/icons";
import MyAxios from "../myAxios";
import { useProduct } from "./ProductProvider";

const ProductReducer = (state, action) => {
  switch (action.type) {
    case "GET_PROCESS":
      return { ...state, product: action.payload, processes: action.data };
    case "RESET_STATE":
      return state;
    case "GET_SELECTED":   
    const product1 = { ...state };
    console.log("selected item in product :" ,action.payload) 
      const selectedItem = product1.processes.filter(
        (item) => item.id === parseInt(action.payload)
      );  
      console.log("selected item in product :" ,selectedItem) 
      return { ...state, selectedProcess:selectedItem};
    case "DELETE_PROCESS":
      deleteProcess(action.payload);

      const product = { ...state };

      const process = product.processes.filter(
        (item) => item.id !== parseInt(action.payload)
      );
      return { ...state, processes: process, selectedProcess: {} };
    case "GET_PARTITION":
      return { ...state, partition: action.partition };
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

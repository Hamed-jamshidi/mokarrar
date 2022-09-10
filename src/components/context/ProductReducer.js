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

    case "UPDATE_PROCESS":
      const  process1 = [...state.processes];
      console.log("action in update process",action)
      const updatedProcessIndex = process1.findIndex((item)=>item.id === action.payload.id);
    //  console.log('updated process index', updatedProcessIndex)
      console.log('updated process index ', updatedProcessIndex)
      if (updatedProcessIndex >= 0 ){
        process1[updatedProcessIndex] = action.payload;

      }
      // console.log("updateted process", updatedProcess)
      return {...state, Processes:process1};

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
      return { ...state, processes: process };

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

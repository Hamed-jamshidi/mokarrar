import React from "react"
import { useContext } from "react";
import { useReducer } from "react";
import { createContext } from "react";
import ProductReducer from "./ProductReducer";
const productContext = createContext()
const productContextDispatcher = createContext()
const ProductProvider = ({children}) => {
   
    const initialState={
        product :[],
        processes:[],
        selectedProcess:[{}],
        partition:0
    };
    const [product , dispatcher] = useReducer(ProductReducer ,initialState);
    return (
     <productContext.Provider value={product} >
     <productContextDispatcher.Provider  value={dispatcher}>
     {children}
     </productContextDispatcher.Provider>
     </productContext.Provider>

      );
}
 
export default ProductProvider;
export  const useProduct =()=>useContext(productContext);
export  const useProductActions =()=>useContext(productContextDispatcher);

import { useEffect } from "react";
import { useState } from "react";
import MyAxios from "../myAxios";
const ColumnNameByCode = () => {
    const [productName , setProductName] = useState([]);
    const [stationName ,setStationName] = useState([]);
    const [controllerName ,setControllerName]= useState([]);
    const [ actionName , setActionName] = useState([]);
 
    useEffect(()=>{
        getProductNameByCode ();
        getStationByCode();
        getControllerByCode ();
        getActionByCode();

    },[])
    
   

// get all product list
const getProductNameByCode = async (code) => {
    await MyAxios(`materials/allMaterials/${code}`)
      .then((res) => {
        setProductName(res.data.data);
        
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  //get all station list
  const getAllStationList = async (code) => {
    await MyAxios(`stations/allStations/${code}`)
      .then((res) => {
        setStationName(res.data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  //get all Controller list
  const getControllerByCode  = async (code) => {
    await MyAxios(`controls/allControls/${code}`)
      .then((res) => {
        setControllerName(res.data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  //get all actions list
  const getActionByCode = async (code) => {
    await MyAxios(`missions/allMissions/${code}`)
      .then((res) => {
        setActionName(res.data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return ({"productName" : productName , "stationName":stationName , "controllerName":controllerName ,"actionName":actionName });
}
 
export default ColumnNameByCode;
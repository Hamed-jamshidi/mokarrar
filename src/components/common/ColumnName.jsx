import { useEffect } from "react";
import { useState } from "react";
import MyAxios from "../myAxios";
const ColumnName = () => {
    const [productName , setProductName] = useState([]);
    const [stationName ,setStationName] = useState([]);
    const [controllerName ,setControllerName]= useState([]);
    const [ ActionName , setActionName] = useState([]);
      
    useEffect(()=>{
        getAllProductNameList ();
        getAllStationList();
        getAllControllerList();
        getAllActionList();

    },[])
    
   

// get all product list
const getAllProductNameList = async () => {
    await MyAxios("materials/allMaterials")
      .then((res) => {
        setProductName(res.data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  //get all station list
  const getAllStationList = async () => {
    await MyAxios("stations/allStations")
      .then((res) => {
        setStationName(res.data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  //get all Controller list
  const getAllControllerList = async () => {
    await MyAxios("controls/allControls")
      .then((res) => {
        setControllerName(res.data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  //get all actions list
  const getAllActionList = async () => {
    await MyAxios("missions/allMissions")
      .then((res) => {
        setActionName(res.data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return ({"productName" : productName , "stationName":stationName , "controllerName":controllerName ,"actionName":ActionName });
}
 
export default ColumnName;
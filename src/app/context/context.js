"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

const MyContext = createContext();

const MyProvider = ({ children }) => {

  const [count, setCount] = useState(0);
  const [cartDetails, setCartDetails] = useState([]);


  const isItemAdded=(details)=>{

    if (cartDetails.map((ele) => ele.id).includes(details.id)) {
      setCartDetails(cartDetails.filter((item)=>item.id !== details.id));
    }else{
      const newDetails = [details, ...cartDetails]
      setCartDetails(newDetails);
    }
  }
  
  useEffect(() => {
    setCount(cartDetails.length);
  }, [cartDetails])
  
  const clearOut = ()=>{
    setCartDetails([]);
  }

  const value = {
    count,
    isItemAdded,
    cartDetails,
    clearOut,
  };

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};

const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyProvider");
  }
  return context;
};

export { MyProvider, useMyContext };

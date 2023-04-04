import React, { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import "./LightMode.css";
import "./DarkMode.css";

import Inputfield from "../InputField/Inputfield";
import FotterButton from "../ButtonComponent/FotterButton";
import HeadingComp from "../Heading/HeadingComp";

const Foam1 = () => {
  const [status, setstatus] = useState(0);

  const getlightvalue=(value)=>{
    setstatus(value)
  }
  const getdarkvalue=(values)=>{
    setstatus(values)
  }


  return (
    <>
      <div className={status === 0 ? "maindiv" : "maindivdark"}>
       <HeadingComp getlightvalue={getlightvalue} getdarkvalue={getdarkvalue}/>
        <Inputfield status={status}/>   
        <FotterButton status={status}/>
      </div>
    </>
  );
};

export default Foam1;

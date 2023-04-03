import React, { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import "./LightMode.css";
import "./DarkMode.css";

const HeadingComp = ({ getlightvalue,getdarkvalue}) => {
    const [status, setstatus] = useState(0);
    const lightclick=()=>{
        debugger
        setstatus(0)
         getlightvalue(0) 
    }
   
   const darkclick=()=>{
    debugger
        setstatus(1)
         getdarkvalue(1) 
    }
  return (
    <>
       <div className={status === 0 ? "headingclass" : "headingclassdark"}>
          <h2> Dark Mode Challenge</h2>
          {status === 1 && (
            <FaSun class="bi bi-sun" onClick={lightclick}/>
          )}
          {status === 0 && (
            <FaMoon class="bi bi-moon" onClick={darkclick} />
          )}
        </div>
        <div className="prclass">
          <div className={status === 0 ? "p1class" : "p1classdark"}>
            <p>
              Online Grammar and Writing Checker To Help You Deliver Impeccable,
              Mistake-free Writing. Grammarly Has a Tool For Just About Every
              Kind Of Writing You Do. Try It Out For Yourself! Find and Add
              Sources Fast. Eliminate Grammar Errors. Easily Improve Any Text.
            </p>
          </div>
          <div className={status === 0 ? "p2class" : "p2classdark"}>
            <p>
              Online Grammar and Writing Checker To Help You Deliver Impeccable,
              Mistake-free Writing. Grammarly Has a Tool For Just About Every
              Kind Of Writing You Do. Try It Out For Yourself! Find and Add
              Sources Fast. Eliminate Grammar Errors. Easily Improve Any Text.
            </p>
          </div>
        </div>
    </>
  )
}

export default HeadingComp

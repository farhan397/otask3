import React, { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import "./LightMode.css";
import "./DarkMode.css";
import HeadingComp from "./HeadingComp";

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
        {/* <div className={status === 0 ? "headingclass" : "headingclassdark"}>
          <h2> Dark Mode Challenge</h2>
          {status === 1 && (
            <FaSun class="bi bi-sun"onClick={() => { setstatus(0); }}/>
          )}
          {status === 0 && (
            <FaMoon class="bi bi-moon"onClick={() => { setstatus(1); }} />
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
        </div> */}
        <HeadingComp getlightvalue={getlightvalue} getdarkvalue={getdarkvalue}/>
        
        <div className={status === 0 ? "inputfield" : "inputfielddark"}>
          <input type="text" id="fname" name="firstname" placeholder="Name.." />
          <input type="text" id="email"name="firstname"placeholder="Email.."/>
        </div>
        <div className="btnclass">
          <button class={status === 0 ? "button button1" : "button button1dark"}>Save</button>
          <button class={status === 0 ? "button button2" : "button button2dark"}>Submit</button>
        </div>
      </div>
    </>
  );
};

export default Foam1;

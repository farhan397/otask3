import React from 'react'
// import "./LightMode.css";
// import "./DarkMode.css";

const Inputfield = ({status}) => {
  return (
    <div>
       <div className={status === 0 ? "inputfield" : "inputfielddark"}>
          <input type="text" id="fname" name="firstname" placeholder="Name.." />
          <input type="text" id="email"name="firstname"placeholder="Email.."/>
        </div>
    </div>
  )
}

export default Inputfield

import React from 'react'

const FotterButton = ({status}) => {
  return (
    <div className="btnclass">
          <button class={status === 0 ? "button button1" : "button button1dark"}>Save</button>
          <button class={status === 0 ? "button button2" : "button button2dark"}>Submit</button>
    </div>
  )
}

export default FotterButton

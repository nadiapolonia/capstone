import React from 'react'

const Hamburger = props => {
  return (
    <div>
      <button className="togglebutton" onClick={props.click}>
        <div className="toggle-button-line1"></div>
        <div className="toggle-button-line2"></div>
        <div className="toggle-button-line3"></div>
      </button>
    </div>
  )
}

export default Hamburger

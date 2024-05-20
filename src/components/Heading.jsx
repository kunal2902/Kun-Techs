import React from 'react'
import './App.css'

const Heading = (props) => {
  return (<>
    <div className="heading-section">
      <h1 className="text-center">{props.head}</h1>
      </div>
    </>
  )
}

export default Heading
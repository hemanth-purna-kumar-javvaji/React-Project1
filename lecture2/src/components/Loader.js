import React from 'react'
import loader from './Spinner.gif';
function Loader() {
  return (
    <div>
      <img style={{height:"100px",backgroundColor:"blue"}} src={loader} />
    </div>
  )
}

export default Loader

import React from 'react'


const OnservHeading = (props) => {
  return (<>
    <div  style={{width:"30vw"}} className='m-auto text-center mt-5 d-flex align-items-center'>
        <h1>{props.title}</h1>
    </div>
    <hr className=' w-25 mx-auto' />
    </>
  )
}

export default OnservHeading
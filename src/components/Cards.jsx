import React from 'react'
import './App.css'

const Cards = () => {
  return (
    <>
     <div className="cards">
    <div className="card" style={{width:"85%",height:"100%"}}>
      <div className="image">
     <img src={require('../images/link.gif')} class="card-img-top" alt="..."/></div>
  <div className="card-body">
    <h5 className="card-title">Link Building</h5>
    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nam ipsum excepturi ipsa perspiciatis porro praesentium soluta explicabo nesciunt</p>
    <a href="#" class="btn btn-primary"><i className='fa fa-arrow-right'></i></a>
  </div>
</div>       </div>

  <div className="cards" >
    <div className="card" style={{width:"85%",height:"100%"}}>
    <div className="image">

     <img src={require('../images/speaker.gif')} class="card-img-top" alt="..."/></div>
       
    <div className="card-body">
    <h5 className="card-title text-center">Content Marketing</h5>
    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nam ipsum excepturi ipsa perspiciatis porro praesentium soluta explicabo nesciunt </p>
    <a href="#" class="btn btn-primary"><i className='fa fa-arrow-right'></i></a>
  </div>
</div></div>
  <div className="cards" >
    <div className="card" style={{width:"85%",height:"100%"}}>
    <div className="image">

     <img src={require('../images/seo.gif')} class="card-img-top" alt="..."/></div>
       
         <div className="card-body">
    <h5 className="card-title">On Page Seo</h5>
    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nam ipsum excepturi ipsa perspiciatis porro praesentium soluta explicabo nesciunt</p>
    <a href="#" class="btn btn-primary"><i className='fa fa-arrow-right'></i></a>
  </div>
</div></div>
    </>
  )
}

export default Cards
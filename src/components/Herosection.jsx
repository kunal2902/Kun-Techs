import React from 'react'
import './App.css'
import vids from '../images/hero.mp4'

const Herosection = () => {
  return (<>
  <div className="cont">
      <div className="main-cont col-12">
        <div className="row">
            <div className="left-section order-lg-0 order-md-0 order-1  col-lg-6 col-md-6 ">
                <div className="left" style={{width:"60%",margin:"auto"}}>
                <h1>We Collect High Quality Leads</h1>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat debitis esse accusamus! Debitis iusto id blanditiis aliquam dolor corporis saepe quae quaerat, eum, adipisci fugiat. </p>
                <button type="button" class="btn btn-primary">Primary</button></div>
            </div>
            <div className="right-section order-lg-1 order-md-1 order-0 col-lg-6 col-md-6 m-auto ">
                <video src={vids} style={{borderRadius:"3rem"}} loop muted autoPlay></video>
            </div>
        </div>
      </div>
      <div className="custom-shape-divider-bottom-1708533178">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
    </svg>
</div>
</div>
      </>
  )
}

export default Herosection
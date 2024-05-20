import React from 'react'
import './App.css'
import phone from '../images/phone.gif'

const Services = (props) => {
  return (
    <>
    <div className="service-cont">
        <div className="service-section col-12">
            <div className="serv-row ">
                <div className="left-serv-sec col-lg-5 col-md-6 col-sm-6">
                      <img src={phone} alt="" />
                </div>
                <div className="right-serv-sec col-lg-7 col-md-6 col-sm-6">
                      <h1>{props.headLine}</h1>
                      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis quidem delectus, consectetur vel laboriosam atque soluta praesentium a aperiam in et corrupti amet ipsum sed voluptates nihil accusamus sapiente perspiciatis!</p>
                      <button type="button" class="btn btn-primary">Contact us</button>

                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Services
import React, { useState } from 'react'

const ContactUs = () => {

  const [val, setVal] = useState({
    fname: "",
    lname: "",
    email: "",
    mess: "",
  })

  const varable = (e) => {
    e.preventDefault()
    const name = e.target.name;
    const value = e.target.value;

    setVal({ ...val, [name]: value })
  }
  const submitted = async (event) => {
    event.preventDefault()

    const { fname, lname, email, mess } = val
    if (fname && lname && email && mess) {
      alert('Registered successfully')
      const res = await fetch('https://kuntechs-d6699-default-rtdb.firebaseio.com/KunTechs.json', {
        method:"POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          fname,
          lname,
          email,
          mess,
        })
      }

      )
    }
    else {
      alert('All fields are mandatory')
    }
  }

  return (
    <>
      <div className="contact-cont pt-5 bg-black">
        <div className="common-section m-auto fw-bold">
          <h2 className='text-white text-center'>Contact Us</h2>
          <hr className='w-25 text-white m-auto' />
        </div>
        <form class="row gy-5 mx-auto p-5" style={{ width: "40%", height: "80%" }} onSubmit={submitted}>
          <div class="col-md-6" >
            <input type="text" name='fname' value={val.fname} onChange={varable} class="form-control" id="inputEmail4" placeholder="First Name" />
          </div>
          <div class="col-md-6">
            <input type="text" name='lname' value={val.lname} onChange={varable} class="form-control" id="inputPassword4" placeholder="Last Name" />
          </div>
          <div class="col-12">
            <input type="text" name='email' value={val.email} onChange={varable} class="form-control" id="inputAddress" placeholder="E-mail" />
          </div>
          <div className="col-12">
            <textarea name="mess" value={val.mess} onChange={varable} id="" cols="77" rows="5" placeholder="Enter your message here"></textarea></div>

          <div class="col-12 text-center">
            <button type="submit" class="btn btn-primary">Sign in</button>
          </div>
        </form>

        <div className="icons d-flex justify-content-between mx-auto p-3" style={{ width: "60%" }}>
          <div className="image1 d-flex flex-column justify-content-center align-items-center"><img src={require('../images/map.gif')} alt="" width={"90rem"} height={"70rem"} />
            <p className=' text-white'>Faridabad,india</p>
          </div>
          <div className="image2 d-flex flex-column justify-content-center align-items-center"><img src={require('../images/telephone-434_256.gif')} alt="" width={"90rem"} height={"70rem"} />
            <p className='text-white'>+91 0023183456</p>
          </div>
          <div className="image3 d-flex flex-column justify-content-center align-items-center"><img src={require('../images/letter-1174_256.gif')} alt="" width={"90rem"} height={"70rem"} />
            <p className='text-white'>bhardwajkunal768@gmail.com</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactUs
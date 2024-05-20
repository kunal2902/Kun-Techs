import React from 'react'
import './App.css'

const Carousel = () => {
  return (
    <>
    <div className="main-carousel bg-black text-center mt-5 mt-md-5 mt-sm-5" style={{color:"#c6c6c6"}}>
    <h1 style={{paddingTop: "2rem"}}>What Client Say About us</h1>
    <div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
     <div className="car-cont">
        <div className="row py-3 overflow-auto mx-5 mx-md-auto mx-sm-auto">
            <div className='col-12'>
                <div className='carousel-cont d-lg-flex d-md-block justify-content-center align-items-center' style={{marginRight:"8rem"}}>

          <div class="card p-2 cardys col-lg-4 col-md-12 col-sm-12" style={{width: "20rem"}}>
                <img src={require('../images/20210114_125746.jpg')} class="card-img-top" height={"250px"} alt="..."/>
                    <div class="card-body">
                    <h5 class="card-title">Awesome platform with brilliant…</h5>
                    <p class="card-text">Awesome platform with brilliant instructors and one of the best curriculum. The after sales support if also commendable. A must try platform for all coders.</p>
                    <div className=' mt-3'>
                        <i className='fa-solid fa-star'></i>
                        <i className='fa-solid fa-star'></i>
                        <i className='fa-solid fa-star'></i>
                        <i className='fa-solid fa-star'></i>
                        <i className='far fa-star'></i>
                    </div>                     </div>
            </div>
          <div class="card p-2 cardys col-lg-4 col-md-12 g-md-5 col-sm-12" style={{width: "20rem"}}>
                <img src={require('../images/20210118_102717.jpg')} class="card-img-top" height={"250px"} alt="..."/>
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div className=' mt-3'>
                        <i className='fa-solid fa-star'></i>
                        <i className='fa-solid fa-star'></i>
                        <i className='fa-solid fa-star'></i>
                        <i className='fa-solid fa-star'></i>
                        <i className='fa-solid fa-star'></i>
                    </div>
                     </div>
            </div>
          <div class="card p-2 cardys col-lg-4 col-md-12 g-md-5 col-sm-12" style={{width: "20rem"}}>
                <img src={require('../images/20210119_140027.jpg')} class="card-img-top" height={"250px"} alt="..."/>
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div className=' mt-3'>
                        <i className='fa-solid fa-star'></i>
                        <i className='fa-solid fa-star'></i>
                        <i className='fa-solid fa-star'></i>
                        <i className='fa-solid fa-star'></i>
                        <i className='far fa-star'></i>
                    </div>
                     </div>
            </div></div>
        </div>
     </div>
</div>
    </div>
    <div class="carousel-item">
    <div className="row py-3 overflow-auto mx-5 mx-md-auto">
            <div className='col-12'>
                <div className='carousel-cont d-lg-flex d-md-block justify-content-center align-items-center' style={{marginRight:"8rem"}}>
          <div class="card p-2 cardys col-lg-4 col-md-12 g-md-5 col-sm-12" style={{width: "20rem"}}>
                <img src={require('../images/20210114_125746.jpg')} class="card-img-top" height={"250px"} alt="..."/>
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div className=' mt-3'>
                        <i className='fa-solid fa-star'></i>
                        <i className='fa-solid fa-star'></i>
                        <i className='fa-solid fa-star'></i>
                        <i className='fa-solid fa-star'></i>
                        <i className='far fa-star'></i>
                    </div>                     </div>
            </div>
          <div class="card p-2 cardys col-lg-4 col-md-12 g-md-5 col-sm-12" style={{width: "20rem"}}>
                <img src={require('../images/20210118_102717.jpg')} class="card-img-top" height={"250px"} alt="..."/>
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div className=' mt-3'>
                        <i className='fa-solid fa-star'></i>
                        <i className='fa-solid fa-star'></i>
                        <i className='fa-solid fa-star'></i>
                        <i className='fa-solid fa-star'></i>
                        <i className='fa-solid fa-star'></i>
                    </div>
                     </div>
            </div>
          <div class="card p-2 cardys col-lg-4 col-md-12 g-md-5 col-sm-12" style={{width: "20rem"}}>
                <img src={require('../images/20210119_140027.jpg')} class="card-img-top" height={"250px"} alt="..."/>
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div className=' mt-3'>
                        <i className='fa-solid fa-star'></i>
                        <i className='fa-solid fa-star'></i>
                        <i className='fa-solid fa-star'></i>
                        <i className='fa-solid fa-star'></i>
                        <i className='far fa-star'></i>
                    </div>
                     </div>
            </div></div>
        </div>
     </div>    </div>
    <div class="carousel-item">
    <div className="row py-3 overflow-auto mx-5 mx-md-auto">
            <div className='col-12'>
                <div className='carousel-cont d-lg-flex d-md-block justify-content-center align-items-center' style={{marginRight:"8rem"}}>
          <div class="card p-2 cardys col-lg-4 col-md-12 g-md-5 col-sm-12" style={{width: "20rem"}}>
                <img src={require('../images/20210114_125746.jpg')} class="card-img-top" height={"250px"} alt="..."/>
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div className=' mt-3'>
                        <i className='fa-solid fa-star'></i>
                        <i className='fa-solid fa-star'></i>
                        <i className='fa-solid fa-star'></i>
                        <i className='fa-solid fa-star'></i>
                        <i className='far fa-star'></i>
                    </div>                     </div>
            </div>
          <div class="card p-2 cardys col-lg-4 col-md-12 g-md-5 col-sm-12" style={{width: "20rem"}}>
                <img src={require('../images/20210118_102717.jpg')} class="card-img-top" height={"250px"} alt="..."/>
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div className=' mt-3'>
                        <i className='fa-solid fa-star'></i>
                        <i className='fa-solid fa-star'></i>
                        <i className='fa-solid fa-star'></i>
                        <i className='fa-solid fa-star'></i>
                        <i className='fa-solid fa-star'></i>
                    </div>
                     </div>
            </div>
          <div class="card p-2 cardys col-lg-4 col-md-12 g-md-5 col-sm-12" style={{width: "20rem"}}>
                <img src={require('../images/20210119_140027.jpg')} class="card-img-top" height={"250px"} alt="..."/>
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div className=' mt-3'>
                        <i className='fa-solid fa-star'></i>
                        <i className='fa-solid fa-star'></i>
                        <i className='fa-solid fa-star'></i>
                        <i className='fa-solid fa-star'></i>
                        <i className='far fa-star'></i>
                    </div>
                     </div>
            </div></div>
        </div>
     </div>    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div></div>
    </>
  )
}

export default Carousel
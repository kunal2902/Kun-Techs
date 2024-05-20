import React from 'react'
import './App.css'

const Navbar = (props) => {
  return (
    <nav class="navbar navbar-expand-lg">
  <div class="container p-2 mt-2">
    <a class="kuntechs navbar-brand" href="#">{props.title}</a>
    <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0" style={{gap:"2rem"}}>
        <li class="nav-item">
          <a class="nav-link fw-medium fs-5" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fw-medium fs-5" href="#">About</a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link fw-medium fs-5" aria-disabled="true">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar
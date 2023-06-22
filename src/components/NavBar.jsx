import React from 'react';

import "bootstrap/dist/css/bootstrap.css";



const NavBar = () => {
  return (

    <div>

    
    <nav data-bs-theme="dark" class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
  

  <a class="navbar-brand" href="#">
      <img src="src/assets/react.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top" />
      
    </a>


    <a class="navbar-brand" href="#">Navbar w/ text</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
      </ul>
      <span class="navbar-text">
        Navbar text with an inline element
      </span>
    </div>
  </div>
</nav>
    
    <div id="myCarousel" class="carousel slide" data-ride="carousel">
 
  <ol class="carousel-indicators">
    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
    <li data-target="#myCarousel" data-slide-to="1"></li>
    <li data-target="#myCarousel" data-slide-to="2"></li>
  </ol>

  
  <div class="carousel-inner">
    <div class="item active">
      <img src="src/assets/carousal 1.jpg" alt="Los Angeles"/>
    </div>

    <div class="item">
      <img src="src/assets/carousal 2.jpg" alt="Chicago"/>
    </div>

    <div class="item">
      <img src="src/assets/carousal 3.jpg" alt="New York"/>
    </div>
  </div>


  <a class="left carousel-control" href="#myCarousel" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="right carousel-control" href="#myCarousel" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right"></span>
    <span class="sr-only">Next</span>
  </a>
</div>



</div>
  )
}

export default NavBar;
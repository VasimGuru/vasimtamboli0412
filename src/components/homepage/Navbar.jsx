
import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    // <div className="container">
    //   <div className='row'>
    //     <div className='col sm-12 md-12 lg-12'>
<div id="navbar">
        <div className="logo">
            <img src="/assets/img/logo/practo logo.jpeg" alt="practo logo" width="100%" height="60%"/>
        </div>

        <div className="box">
            <h4><a href="findDr.html">Find Doctors</a></h4>
           
        </div>
        <div className="box">
            <h4>Video Consult</h4>
        </div>

        <div className="box">
            <h4><a href="medicines.html">Medicines</a></h4>
        </div>
        <div className="box">
            <h4>Lab Tests</h4>
        </div>
        <div className="box">
            <h4>Surgeries</h4>
        </div>

<div className="m-auto p-1 d-inline-block">
<div className="m-auto p-1 d-inline-block">
<div className="btn-group">
          <div className='badge'> <span className="badge bg-primary">New</span></div>
  <button type="button" className="btn  dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    For Corporates
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="/">Health and Welness plans</a></li>
    <li><a className="dropdown-item active" href="/" aria-current="true">Group Insurance</a></li>
  </ul>
</div>
</div>

<div className="m-auto p-1  d-inline-block">
<div className="btn-group">
  <button type="button" className="btn  dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    For Providers
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="/">Practo Primes</a></li>
    <li><a className="dropdown-item " href="/">Softwares for Providers</a></li>
    <li><a className="dropdown-item" href="/">List Ypur Practice for free</a></li>
    <li><a className="dropdown-item " href="/" >ABDM</a></li>
  </ul>
</div>
</div>

 <div className="m-auto  d-inline-block">
 <div className="btn-group">
  <button type="button" className="btn  dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
   Security & Help
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="/">Data Security</a></li>
    <li><a className="dropdown-item " href="/">Help</a></li>
  </ul>
</div>
  </div>       
</div>
<div id="login">
            <div><a href="login.html">Login</a></div>
            <div> / </div>
            <div><a href="register.html">Signup</a></div>
        </div>
</div>

    // </div>
    // </div>
    // </div>  
  )
}

export default Navbar
















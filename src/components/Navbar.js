import React from 'react'
// import { Link } from 'react-router-dom'
export default function Navbar(props) {
    
  return (
    <div>
      <nav className={`navbar navbar-expand-lg bg-${props.theme}`}>
        <div className="container-fluid">
         <a className={`navbar-brand text-${props.theme==='light' ? 'dark':'light'}`} href="/">Edit💕Easy</a>
         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
         </button>
           <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-5">
        <li className="nav-item">
          <a className={`nav-link active text-${props.theme==='light' ? 'dark':'light'}`} aria-current="page" href="#">{props.one}</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link text-${props.theme==='light' ? 'dark':'light'}`} href="#">{props.two}</a>
        </li>
        <li className="nav-item dropdown">
          <a className={`nav-link dropdown-toggle text-${props.theme==='light' ? 'dark':'light'}`} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className={`dropdown-menu text-${props.theme==='light' ? 'dark':'light'}`}>
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className='nav-item '>
          <a className={`nav-link disabled text-${props.theme==='light' ? 'dark':'light'}`}>Disabled</a>
        </li>
      </ul>
      <form className="d-flex mx-4" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      <div className="pallete d-flex">
        {/* <div className="box rounded bg-primary my-2 mx-2" onClick={()=>{props.mode('primary')}} style={{height : '30px' , width : '30px'}}></div> */}
        <div className="box rounded bg-danger mx-2 my-2" onClick={()=>{props.mode('danger')}} style={{height : '30px' , width : '30px'}}></div>
        <div className="box rounded bg-success mx-2 my-2" onClick={()=>{props.mode('success')}} style={{height : '30px' , width : '30px'}}></div>
        {/* <div className="box rounded bg-warning mx-2 my-2" onClick={()=>{props.mode('warning')}} style={{height : '30px' , width : '30px'}}></div> */}
        <div className="box rounded bg-light mx-2 my-2" onClick={()=>{props.mode('light')}} style={{height : '30px' , width : '30px' ,border : '2px solid black'}}></div>
        <div className={`box rounded mx-2 my-2 bg-${props.mode==='dark'?'light':'dark'}`}  onClick={()=>{props.mode('dark')}} style={{height : '30px' , width : '30px' , border : '2px solid white'}}></div>
      </div>

    </div>
  </div>
</nav>
    </div>
  )
}

import React, {useEffect } from 'react'
// import PropTypes from 'prop-types'
import { Link, useLocation } from "react-router-dom";


export default function Navbar({setCetegory}) {
  let location = useLocation();
  useEffect(() => {
    
    console.log(location.pathname);
  }, [location]);
  return (
   
    <nav className="navbar navbar-expand-lg bg-dark " data-bs-theme="dark">
        <div className="container-fluid">
        <Link className="navbar-brand" to="/"> <span className="badge bg-light fs-4 text-dark">NewsMonkey</span></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <Link className={`nav-link ${location.pathname==="/" ? "active": ""}`}aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
              <Link  className={`nav-link ${location.pathname === "/technology" ? "active" : ""}`} to="/technology">technology</Link>
              </li>
              <li className="nav-item">
              <Link  className={`nav-link ${location.pathname === "/sports" ? "active" : ""}`} to="/sports">sports</Link>
              </li>
              <li className="nav-item">
              <Link  className={`nav-link ${location.pathname === "/science" ? "active" : ""}`} to="/science">science</Link>
              </li>
              <li className="nav-item">
              <Link  className={`nav-link ${location.pathname === "/health" ? "active" : ""}`} to="/health">health</Link>
              </li>
              <li className="nav-item">
              <Link  className={`nav-link ${location.pathname === "/general" ? "active" : ""}`} to="/general">general</Link>
              </li>
              <li className="nav-item">
              <Link  className={`nav-link ${location.pathname === "/entertainment" ? "active" : ""}`} to="/entertainment">entertainment</Link>
              </li>
              <li className="nav-item">
              <Link  className={`nav-link ${location.pathname === "/business" ? "active" : ""}`} to="/business">business</Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
   
  )
}

// Navbar.prototype = {
//   about: PropTypes.string
  


// }
// Navbar.defaultProps = {
//   about: 'Set title here'
// };

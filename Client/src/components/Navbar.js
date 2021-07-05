import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

const Navbar = () =>{
    return(
    <nav>
        <div className="nav-wrapper">
          <Link to="#" className="brand-logo left">Logo</Link>
          <ul id="nav-mobile" className="right">
            <li><Link to="sass.html">Sass</Link></li>
            <li><Link to="badges.html">Components</Link></li>
            <li><Link to="collapsible.html">JavaScript</Link></li>
          </ul>
        </div>
    </nav>
    )
}

export default Navbar
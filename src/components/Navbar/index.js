import './index.css'
import logo from './Logo.png'
import { NavLink, useLocation} from "react-router-dom";
import React from 'react'
  
 
export default function NavBar({props}) {
 
const location = useLocation()
   let  navClass
if(location.pathname === '/'){
 navClass = 'onLanding';
 
}
console.log(location.pathname);

    return (
        <div className="navbar">

            <nav className={`navbar_Links ${navClass}`}>

                <NavLink to='/'className="navbar_item">
                    <div className="navbar_logo">
                            <img src={logo} alt=""  className='navbar_LogoImage'/>
                            
                    </div>
                    
                </NavLink>
                {/*<NavLink  activeClassName="is-active" className="navbar_item" to='/Services'>
                Services</NavLink>*/}
  
                <NavLink  activeClassName="is-active" className="navbar_item" to='/Gallery'>
                Gallery</NavLink>

                <NavLink  activeClassName="is-active" className="navbar_item" to='/About'>
                About</NavLink>

                <NavLink  activeClassName="is-active" className="navbar_item" to='/Contact'>
                Contact</NavLink>
            </nav>
        </div>
    )
}

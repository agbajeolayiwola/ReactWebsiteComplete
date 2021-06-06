import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './menu.styled';
import { NavLink} from "react-router-dom";
const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
        <nav className={`navbar_Links`}>

        <NavLink to='/'className="navbar_item">
            <div className="navbar_logo">
                    <img src='' alt=""  className='navbar_LogoImage'/>
                    
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
    </StyledMenu>
  )
}
Menu.propTypes = {
  open: bool.isRequired,
}
export default Menu;
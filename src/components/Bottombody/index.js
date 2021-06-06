import React from 'react';
import './style.css';
import {  Link} from "react-router-dom";

export default function Bottombody() {
    return (
        <div className="bottombody">
            
        
        <div className="bottombody_text">
        <h1 className="bottombody_textH1">3D Printing Materials and Printed Objects</h1>

        </div>
        <div className='bottombody_btndiv'>
        
                    <Link  
                    className="navbar_item" 
                    to='/Gallery'>
                        <button className='bottombody_button'>Gallery</button>
                    </Link>
        </div>
            
        </div>
    )
}

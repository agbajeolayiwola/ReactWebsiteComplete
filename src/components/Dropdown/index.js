import React from 'react'
import './style.css'
//create Service Component
function DropDown() {
    return (
        <div>
            <div className="dd-wrapper">
            <div className="dd-header">
                <div className="dd-header-title">Services</div>
            </div>
            <div className="dd-list">
                <button className="dd-list-item">Custom 3D Printing</button>
                <button className="dd-list-item">3D Design</button>
                <button className="dd-list-item">3D Replacement Parts</button>
            </div>
            </div>
        </div>
    )
}

export default DropDown

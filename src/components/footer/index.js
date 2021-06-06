import React from 'react'
import './style.css'

export default function Footer() {
    return (
        <div className="footer">
        <div className='footer_sections'>
          <div className='footer_section1'>
             <h3>Categories</h3>
                        <ul className='footer_section1List'>
                            <li>Small Scale Manufacturing</li>
                            <li>3D Printing</li>
                            <li>Prototyping</li>
                            <li>Laser Engraving</li>
                        </ul>
          </div>
          <div className='footer_section2'>
          <h3>Popular</h3>
                        <ul className='footer_section1List1'>
                            <li>CNC Miling</li>
                            <li>Laser Cutting</li>
                            <li>Prototyping</li>
                            <li>Electronics</li>
                        </ul>
          </div>
          <div className='footer_section3'>
          <h3>TronicLab</h3>
                        <p>Tronic lab is redefining product creation in Africa. Our goal is to enable Start-ups and businesses to bring their ideas from inception to post production by providing a product solution that is affordable, shorthen the manufacturing
                            process and minimizing production cost.<br></br></p>
          </div>

          <p className="copyright">Company Name © 2017</p>
        </div>
        </div>
    )
}

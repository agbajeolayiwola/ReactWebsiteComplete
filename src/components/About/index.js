import React from 'react'
import About_TopImage from './About_Top.jpg'
import About_Side from './tom-claes-mNVh70d9zUU-unsplash (1).jpg'
import './style.css'
import ContactBtn from '../Contact_Btn';

export default function AboutComp() {
    return (
        <div className='about'>
            <div className='about_Top'>
                <img src={About_TopImage} 
                className='about_TopImage' 
                alt='TronicLab About' />
                <h1 className='About_H1'>
                    About
                </h1>
            </div>
            <div className='About_Mid'>
                <div className='About_MidSection1'>
                    <img src={About_Side} alt="" className='About_MidSection1Image'/>
                </div>
                <div>
                    <h1>Design And Production For Products</h1>
                    <p>
                    The Troniclab team has in-house experts specialized in product development, 
                    organic sculpting and digital design for the newest production technologies
                    Including industrial 3D printing, using several filaments such as SLA, PlA, 
                    PetG, and ABS.
                    </p>
                    <p>
                    Starting from your briefing we jump on a journey to transform your vision to high-end design
                    perfection. 
                    We provide advice and consultancy on the right materials
                    and production techniques to fulfill them with our production 
                    utilities and partners.
                    </p>
                    <p>
                    Starting from your briefing we jump on a journey to transform your vision to high-end design
                    perfection. 
                    We provide advice and consultancy on the right materials
                    and production techniques to fulfill them with our production 
                    utilities and partners.
                    </p>
                </div>
            </div>
            
            <div className='About_Bottom'>
                <div className='About_BottomDiv'>
                    <h1 className='About_BottomH1'>
                    LET'S TALK ABOUT YOUR PROJECT   
                    </h1>
                    <p className='About_BottomPara'>
                    Send us an email with you project details. Our team will get back to you within 1 working day to schedule a meeting on initial project scope and feasibility.
                    </p>
                    <ContactBtn/>
                </div>
            </div>
        </div>
    )
}

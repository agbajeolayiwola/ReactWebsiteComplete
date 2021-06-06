import React from 'react'
import './style.css'
import Sample from './thee3Dmodelcomponent/box';

export default function Midbody() {
    return (
        <div className="midbody">
            <div className="midbody_grid">
                <div className="midbody_side1">
                    <Sample/>
                    <p>Use Mouse/Trackpad to Interact With 3D models</p>
                </div>
                <div className="midbody_side2">
                    <h1>
                    Design And Production For Products
                    </h1>
                    <p>
                    The Troniclab team has in-house experts specialized in product development, 
                    organic sculpting and digital design for the newest production technologies
                    Including industrial 3D printing, using several filaments such as SLA, PlA, PetG, and ABS.
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
                <div className="midbody_bottom">
                    <div className="midbody_bottomh1">
                        <h1>
                            Examples
                        </h1>
                    </div>
                    <div>
                        <p className="midbody_p">
                        Our expertise was build through activities in a wide range of markets 
                        including the gaming industry, automotive, high-end trophies and business gifts. 
                        We are open to explore any market on your request to research and develop high-end 
                        custom products for your industry.
                        </p>
                    </div>
                </div>
        </div>
    )
}

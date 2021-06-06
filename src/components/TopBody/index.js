import React from 'react'
import './index.css'
import MainSlide from './slidercomponent/mainSlide';
import { Slider } from './slidercomponent/silder';


export default function Body() {
    return (
        <div className="body" >

<MainSlide slides={Slider}/>
        <div className="BodyText">
            <h1 className="BodyText_1"><span className="BodyText_DesProd">Design</span> and <span className="BodyText_DesProd">Production</span> fufilment for<br></br> highend projects</h1>
        </div>
        </div>
    )
}

import React, {useState} from 'react'
import { Slider } from './silder';
import './style.css';
import {AiOutlineArrowRight, AiOutlineArrowLeft} from 'react-icons/ai';

const MainSlide = ({slides}) => {
    const [current, setCurrent] = useState(0);

    const length= slides.length;

 const nextSlide = () =>{
     setCurrent(current === length - 1 ? 0: current +1)
 }
 const prevSlide = () =>{
    setCurrent(current === 0 ? length - 1 : current -1)
}
 console.log(current);

   if(!Array.isArray(slides) || slides.length <= 0){
      return null;
   }

    return (
        <section className='slider'>
        <AiOutlineArrowLeft className='left' onClick={nextSlide} />
        <AiOutlineArrowRight className='right' onClick={prevSlide} />

            {Slider.map((slide, index)=>{
                return(
                    <div className={index === current ? 'slide active':'slide'} 
                    key={index}>
                       {index === current && (<div>
                         <img className='slideImage' src={slide.image} alt='slide images'/></div>
                         )}
                    </div>
                    
                );
            })}
        </section>
    )
}

export default MainSlide

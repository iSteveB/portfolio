import {useState} from 'react';
import { SliderData } from './SliderData';

import leftArrow from '../assets/images/left-arrow.svg'
import rightArrow from '../assets/images/right-arrow.svg'

const Slider = ({slides}) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if (!Array.isArray(slides) || slides.lenghth <= 0){
        return null;
    }

    return (
        <div className='slider'>

            <img src={leftArrow} alt="left arrow" className='arrow' onClick={prevSlide}/>

            {SliderData.map((slide, index, id) => {

                return(
                    <div className={index === current ? 'slide-active' : 'slide'} key={id}>
                        {index === current && (<img src={slide.image} alt={slide.name} />)}
                    </div>
                    )
                    
                })}

            <img src={rightArrow} alt="right arrow" className='arrow' onClick={nextSlide} />

        </div>
    );
};

export default Slider;
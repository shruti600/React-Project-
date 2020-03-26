import React from 'react';
import { Slide } from 'react-slideshow-image';
import first from '../images/first.jpg';
import second from '../images/second.jpg';
import third from '../images/third.jpg';
import fourth from '../images/fourth.jpg';

const slideImages = [
    first,
    second,
    third,
    fourth
];
 
const properties = {
  duration: 4000,
  transitionDuration: 500,
  infinite: true,
  //indicators: true,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}
const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide {...properties}>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[3]})`}}>
            </div>
          </div>
        </Slide>
      </div>
    )
};
export default Slideshow;
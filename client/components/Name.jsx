import React from 'react';
import { TweenMax } from 'gsap';
import nebula from '../../public/assets/nebula.jpg';

const background = {
  color: 'pink',
  backgroundImage: 'url(' + nebula + ')',
};

const Name = () => {
  return (
    <div className="background" style={background}>
      <h1 className="name" >silvia sonn</h1>
    </div>
  )
}

export default Name;
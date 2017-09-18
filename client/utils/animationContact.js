import helpers from './helpers';
// const {isMobile, random, randomRange} = helpers;

const ContactOptions = {

  startPos(screen) {
    let menuWidthPercent;
    const {width, height} = screen;
    if (!helpers.isMobile()) menuWidthPercent = .08;
    else menuWidthPercent = .2;

// #F8F1CE
    return {
      // left:"50%", 
      // top:"50%", 
      // xPercent:-50, 
      // yPercent:-50, 
      force3D:true,
      backgroundColor: "#ADA8ED",
      rotation: 0, 
      width: width * menuWidthPercent, 
      height: "2.5px", 
      x: -width * menuWidthPercent / 2, 
      y: 0
    }
  },

  endPosLine1(screen, rotation) {
    const {width, height} = screen;
    const menuWidthPercent = .05;

     return {
        // 300017 ADA8ED 6B8591 C0B2B9
        backgroundColor:"#b5a4ac",
        stroke: "black",
        rotation: rotation, 
        width: width, 
        height: height * .01, 
        x: -width, 
        y: -height*.5 + height*.08, 
        ease: Back.easeInOut.config(1),
        opacity: .6,
        // zIndex: 4001,
        position:"absolute"
    }
  },

  endPosLine2(screen, rotation) {
    const {width, height} = screen;

    return {
        backgroundColor:"#b5a4ac",
        rotation: rotation, 
        width: width, 
        height: height * .01, 
        x: 0, 
        y: -height*.5 + height*.05, 
        ease: Back.easeInOut.config(1),
        opacity: .6,
        // zIndex: 4001,
        position:"absolute"
    }
  },

  tweenLayer(color, x, y, delay) {
    return {
      backgroundColor: color, 
      opacity: .8, 
      x: x, 
      y: y, 
      yoyo: true, 
      repeat: 1, 
      delay: delay
    }
  }
};

export default ContactOptions;

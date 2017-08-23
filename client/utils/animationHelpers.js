//helper functions
import { TweenLite, TweenMax } from 'gsap';

const Fns = {

	random(max) {
		return Math.random() * max
	},

	animateStar(el, w, h) {
	  el.Tween = TweenMax.to(
	      el,
	      Fns.random(20)+30,
	      {
	        bezier:{values:[{x: Fns.random(w),y:Fns.random(h)},{x:Fns.random(w),y:Fns.random(h)}]},
	        opacity:Fns.random(1),
	        scale:Fns.random(4),
	        delay:Fns.random(2),
	        onComplete:Fns.animateStar,
	        onCompleteParams:[el, w, h]
	      }
	    )
		return el;
	},

	animateStaticStar(el) {
		el.Tween1 = TweenMax.to(
			el,
			Fns.random(10)+5,
			{
				scale:Fns.random(1)+8,
				repeat:-1,
				yoyo:true,
				ease:Sine.easeInOut,
        onComplete:Fns.animateStaticStar,
        onCompleteParams:[el]
      });

    el.Tween2 = TweenMax.to(
    	el,
    	Fns.random(10)+5,
    	{
    		opacity:0, 
    		repeat:-1,
    		yoyo:true,
    		ease:Quad.easeInOut, 
    		onComplete:Fns.animateStaticStaticStar,
        onCompleteParams:[el]
      })
    return el;
	},

	setTween(el, classname, w, h, opacity) {
		return TweenMax.set(
      el,
      {
        attr: {class: classname},
        x: Fns.random(w),
        y: Fns.random(h),
        opacity: Fns.random(opacity)
      }
    );
	}

}
export default Fns;

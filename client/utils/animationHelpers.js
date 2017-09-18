//animation helper functions
import { TweenLite, TweenMax } from 'gsap';
import helpers from './helpers';
const {isMobile, random, randomRange} = helpers;


const Fns = {

	animateStar(el, w, h) {
		el.Tween = TweenMax.to(
			el,
			random(20)+30,
			{
				bezier:{type:'soft', values:[{x: random(w),y:random(h)},{x:random(w),y:random(h)}]},
				opacity:randomRange(.15, .8),
				scale:randomRange(1, 3),
				delay:random(2),
				onComplete:Fns.animateStar,
				onCompleteParams:[el, w, h]
			}
		)
		return el;
	},

	animateStaticStar(el, userScale, userDelay) {
		let scale, delay;

		if (!userScale) {
			scale = isMobile() ? randomRange(1, 5) : randomRange(1, 8);
		} else scale = userScale;

		if (!userDelay) {
			delay = random(8) + 5
		} else delay = userDelay;

		el.Tween1 = TweenMax.to(
			el,
			delay,
			{
				scale:scale,
				repeat:-1,
				yoyo:true,
				ease:Sine.easeInOut,
				onComplete:Fns.animateStaticStar,
				onCompleteParams:[el]
			});

		el.Tween2 = TweenMax.to(
			el,
			random(10)+5,
			{
				opacity:0, 
				repeat:-1,
				yoyo:true,
				ease:Quad.easeInOut, 
				onComplete:Fns.animateStaticStaticStar,
				onCompleteParams:[el]
			}
		)
		return el;
	},

	setTween(el, classname, w, h, opacity) {
		return TweenMax.set(
			el,
			{
				attr: {class: classname},
				x: random(w),
				y: random(h),
				opacity: random(opacity)
			}
		);
	},

	animateBurst(el, w, h, cb) {
		el.Tween = TweenMax.to(
			el,
			random(15) + 5,
			{
				bezier:{values:[{x: random(w),y:random(h)},{x:random(w),y:random(h)}]},
				opacity:random(1),
				scale:random(4),
				delay:random(2),
				onComplete:cb
			}
		)
		return el;
	},

	setTweenEmit(el, classname, w, h) {
		return TweenMax.set(
			el,
			{
				attr: {class: classname},
				// opacity:Fns.randomRange(.7,1),
				x: random(w),
				y: random(h),
				// force3D:false
			}
		);
	},
	// rgba(200, 237, 244, 1)
	animateTransition(el, repeatCB, cb) {
		const scale = window.innerWidth / 70 > window.innerHeight / 60 ? window.innerWidth / 70 : window.innerHeight / 60;
		return TweenMax.fromTo(
			el,
			1,
			{ scale:0, opacity: 1 },
			{
				backgroundColor: "#F2F4FA", 
				opacity: 1,
				scale: scale,
				ease: Sine.easeInOut,
				yoyo: true,
				repeat: 1,
				onRepeat: repeatCB,
				repeatDelay: .5,
				onComplete: cb
			}
		)
	},

	setTweenTransition(el, classname, x, y) {
		return TweenMax.set(
			el,
			{
				attr: {class: classname},
				x,
				y,
				opacity: 0,
				backgroundColor: "#F2F4FA"
			}
		)
	}

}

export default Fns;

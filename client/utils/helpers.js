// other helper functions

const helpers = {

	isMobile() {
		return !!("ontouchstart" in window);
	},

	random(max) {
			return Math.random() * max;
	},

	randomRange(min, max) {
			return Math.random() * (max - min) + min;
	},

	shuffle(array) {
	  let currentIndex = array.length, temporaryValue, randomIndex ;
	  // while remaining elements
	  while (0 !== currentIndex) {
	    // pick a remaining element
	    randomIndex = Math.floor(Math.random() * currentIndex);
	    currentIndex--;
	    // swap it with the current element.
	    temporaryValue = array[currentIndex];
	    array[currentIndex] = array[randomIndex];
	    array[randomIndex] = temporaryValue;
	  }
	  return array;
	},

	getRandomNum(n) {
		if (typeof n === "number") return helpers.random(n)
		else return helpers.randomRange(n[0], n[1])
	}
}

export default helpers

// other helper functions

const Fns = {
	isMobile() {
		return !!("ontouchstart" in window);
	}
}

export default Fns;
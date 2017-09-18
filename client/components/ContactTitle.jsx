import React, { Component } from 'react';


export default class ContactTitle extends Component {
	constructor(props) {
		super(props)
		this.state = {
			letters: null
		}
	}

	animateIn(els) {
		const spanElements = Array.from(els)
		spanElements.forEach((el, i) => this.props.animation(el, i))
	}	

	// animateOut(els) {
	// 	const spanElements = Array.from(els)
	// 	spanElements.forEach((el, i) => {
	// 		// el.className += "-leave"
	// 		return this.props.animationLeave(el, i)
	// 	})
	// }

	shouldComponentUpdate(nextProps, nextState) {
		return nextProps.name !== this.props.name
	}

	componentWillUpdate(nextProps, nextState) {
		// if (nextProps.name === "") this.animateOut(this.state.letters)
	}

	componentDidUpdate() {
		if (this.title.children) this.animateIn(this.title.children)
		this.setState({letters: this.title.children})	
	}

	componentDidMount() {
		setTimeout(() => this.animateIn(this.title.children), 500)
		this.setState({letters: this.title.children})	
	}

	render() {
		let letters = null
		const name = this.props.name
		if (name) {
			letters = name.split("").map( (letter, i) => {
				if (letter !== ' ') return (<span className="contactLetter" key={`${name} ${i}`}>{letter}</span>)
				else return (<span className="contactLetter" key={`${name} ${i}`}>&ensp;</span>)
			})
		}

		return(
			<div className="contactTitle" ref={c => this.title = c}>{letters}</div>
		)
	}
}


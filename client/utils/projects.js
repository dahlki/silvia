import thePalaceOfMusic from '../../public/assets/thepalaceofmusic.jpg';
import bloomingIce from '../../public/assets/bloomingice.jpg';
import dryGoods from '../../public/assets/drygoods.jpg';
import techTalk from '../../public/assets/techtalk.jpg'

const palace = `${thePalaceOfMusic}`
const blooming = `${bloomingIce}`
const goods = `${dryGoods}`
const talk = `${techTalk}`

const projects = [

	{
		title: 'projects',
		image: null
	},

	{ 
		title: 'the palace of music',
		image: palace,
		github: "https://github.com/dahlki/palace-of-music",
		link: "http://the-palace-of-music.herokuapp.com",
		video: "https://www.youtube.com/watch?v=6ZMnH9mle-k",
		header: "a virtual classical music museum",
		description: "walk through the museum with arrow keys, turn with your mouse, and when close enough, click on the portraits to learn more about the composers and listen to a selection of their pieces"
	},

	{
		title: 'blooming ice',
		image: blooming,
		github: "https://github.com/dahlki/blooming-ice",
		video: "https://www.youtube.com/watch?v=cbNb8kF49JI",
		header: "an experiment with Paper.js",
		description: ""
	},

	{
		title: 'dry goods',
		image: goods,
		github: "https://github.com/dahlki/graceshopper",
		header: "a simple mock ecommerce site",
		description: ""
	},

	{
		title: '" tech talk " : react native',
		image: talk,
		video: "https://www.youtube.com/watch?v=8I1dKwL9rV4",
		header: "an introduction to react native for javascript developers",
		description: ""
	}

]

export default projects;

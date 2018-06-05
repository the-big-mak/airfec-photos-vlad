import React from 'react';
import Carousel from './Carousel.jsx';
import MainSlide from './MainSlide.jsx';


class App extends React.Component {
	constructor(props) {
		super(props);
	    this.state = {
			collection: ['https://s3.us-east-2.amazonaws.com/airfec/dummy-1000x1000-ArchConversation.jpg', 'https://s3.us-east-2.amazonaws.com/airfec/dummy-1000x1000-Entrance.jpg', 'https://s3.us-east-2.amazonaws.com/airfec/dummy-1000x1000-NYSkyline.jpg'],
			showCarousel: false
		 };
		this.onMainSlideClick = this.onMainSlideClick.bind(this);
	}
	
	onMainSlideClick() {
		this.setState({
			showCarousel: true
		});
	}

	render() {
		return (
		<div id='main-slide'>
			<MainSlide clickFunction={this.onMainSlideClick} url={this.state.collection[0]} />
			{this.state.showCarousel ?
			<Carousel collection={this.state.collection} /> :
			null
			}
		</div>
		)
	}
}

export default App;

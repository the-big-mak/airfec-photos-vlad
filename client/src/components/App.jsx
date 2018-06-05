import React from 'react';
import Carousel from './Carousel.jsx';
import Banner from './Banner.jsx';


class App extends React.Component {
	constructor(props) {
		super(props);
	    this.state = {
			collection: [{
					"id": 1,
					"roomid": 22,
					"posted": "2017-08-04T07:00:00.000Z",
					"verification": 0,
					"url": "https://s3.us-east-2.amazonaws.com/airfec/dummy-2560x1920-Namur.jpg",
					"description": "Sed ante. Vivamus tortor. Duis mattis egestas metus."
				}, 
				{
					"id": 2,
					"roomid": 20,
					"posted": "2017-12-24T08:00:00.000Z",
					"verification": 0,
					"url": "https://s3.us-east-2.amazonaws.com/airfec/dummy-1440x960-Balconies.jpg",
					"description": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum."
				},
				{
					"id": 3,
					"roomid": 68,
					"posted": "2017-08-24T07:00:00.000Z",
					"verification": 1,
					"url": "https://s3.us-east-2.amazonaws.com/airfec/dummy-1024x1820-Stairs.jpg",
					"description": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus."
				}],
			showCarousel: false
		 };
		this.onBannerClick = this.onBannerClick.bind(this);
	}
	
	onBannerClick() {
		this.setState({
			showCarousel: !this.state.showCarousel
		});
	}

	render() {
		return (
		<div id='main-slide'>
			<Banner clickFunction={this.onBannerClick} room={this.state.collection[0]} />
			{this.state.showCarousel ?
			<Carousel collection={this.state.collection} /> :
			null
			}
		</div>
		)
	}
}

export default App;

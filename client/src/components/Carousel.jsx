import React from 'react';
import ImageSlide from './ImageSlide.jsx'
import Arrow from './Arrow.jsx'


class Carousel extends React.Component {
    constructor (props) {
        super(props);
    
        this.state = {
        	currentImageIndex: 0
        };
        this.nextSlide = this.nextSlide.bind(this);
        this.previousSlide = this.previousSlide.bind(this);
    }

    previousSlide () {
        const imgUrls = this.props.collection;
        const lastIndex = imgUrls.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === 0;
        const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;
    
        this.setState({
        	currentImageIndex: index
        });
    }
    
    nextSlide () {
        const imgUrls = this.props.collection;
        const lastIndex = imgUrls.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === lastIndex;
        const index =  shouldResetIndex ? 0 : currentImageIndex + 1;
        this.setState({
        	currentImageIndex: index
        });
    }

    render () {
        return (
			<div className="carousel">
				<Arrow direction="left" clickFunction={this.previousSlide} glyph="&#9664;" />
				<ImageSlide clickFunction={this.props.clickFunction} room={this.props.collection[this.state.currentImageIndex]} />
				<Arrow direction="right" clickFunction={this.nextSlide} glyph="&#9654;" />
			</div>
        );
    }
 }

export default Carousel;

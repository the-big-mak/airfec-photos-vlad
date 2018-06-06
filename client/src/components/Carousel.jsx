import React from 'react';
import ImageSlide from './ImageSlide.jsx'
import Arrow from './Arrow.jsx'


class Carousel extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
        	currentImageIndex: 0
        };
        this.crossButtonStyles = {
            float: "right",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            cursor: 'pointer'
        }
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
                <button style={this.crossButtonStyles} onClick={this.props.clickFunction}></button>
				<span>
                    <Arrow direction="left" clickFunction={this.previousSlide} glyph="&#9664;" />
                </span>
				<span>
                    <ImageSlide room={this.props.collection[this.state.currentImageIndex]} />
				</span>
				<span>
                <Arrow direction="right" clickFunction={this.nextSlide} glyph="&#9654;" />
				</span>
            </div>
        );
    }
 }

export default Carousel;

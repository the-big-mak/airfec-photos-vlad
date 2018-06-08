import React from 'react';
import ImageSlide from './ImageSlide.jsx';
import Arrow from './Arrow.jsx';
import SlideShow from './SlideShow.jsx';


class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImageIndex: 0,
      currectSlideDeck: this.props.collection.slice(0, 7),
    };
    this.crossButtonStyles = {
      float: 'right',
      marginLeft: 'auto',
      marginRight: 'auto',
      cursor: 'pointer',
    };
    this.leftArrowButtonStyles = {
      position: 'fixed',
      top: '50%',
      float: 'left',
      display: 'block',
    };
    this.rightArrowButtonStyles = {
      position: 'fixed',
      top: '40%',
      float: 'right',
      display: 'block',
    };
    this.ImageSlideStyles = {
      position: 'fixed',
      float: 'center',
      width: '650px',
      height: '480px',
      left: '50%',
      top: '50%',
      marginLeft: '-296px',
      marginTop: '-256px',
    };
    this.SmallSlideStyles = {
      position: 'fixed',
      width: '100px',
      height: '67px',
    };
    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
    this.currectSlideDeckGenerator = this.currectSlideDeckGenerator.bind(this);
  }

  currectSlideDeckGenerator(collection, currentIndex) {
    if (currentIndex < 5) {
      return collection.slice(0, 7);
    }
    return currentIndex > collection.length - 3 ? collection.slice(collection.length - 7) : collection.slice(currentIndex - 4, currentIndex + 3);
  };

  previousSlide() {
    const imgUrls = this.props.collection;
    const lastIndex = imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

    this.setState({
      currentImageIndex: index,
      currectSlideDeck: this.currectSlideDeckGenerator(imgUrls, index),
    });
  }

  nextSlide() {
    const imgUrls = this.props.collection;
    const lastIndex = imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentImageIndex + 1;

    this.setState({
      currentImageIndex: index,
    });
  }

  render() {
    return (
      <div>
          <button style={this.crossButtonStyles} onClick={this.props.clickFunction}>
          &#xe079;
          </button>
          <div>
              <span>
                  <button style={this.leftArrowButtonStyles}>
                      <Arrow direction="left" clickFunction={this.previousSlide} glyph="&#9664;" />
                  </button>
              </span>
              <span>
                  <ImageSlide styles={this.ImageSlideStyles} room={this.props.collection[this.state.currentImageIndex]} clickFunction={this.nextSlide} />
              </span>
              <span>
                  <button style={this.rightArrowButtonStyles}>
                      <Arrow direction="right" clickFunction={this.nextSlide} glyph="&#9654;" />
                  </button>
              </span>
          </div>
          <div>
            <SlideShow styles={this.SmallSlideStyles} collection={this.state.currectSlideDeck} />
          </div>
      </div>
    );
  }
}

export default Carousel;

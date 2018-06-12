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
    this.FlexCol = {
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'nowrap',
      cursor: 'pointer',
    };
    this.FlexRow = {
      display: 'flex',
      flexWrap: 'nowrap',
      alignItems: 'center',
      justifyContent: 'space-between',
      cursor: 'pointer',
    };
    this.CrossButtonStyles = {
      alignSelf: 'flex-end',
      cursor: 'pointer',
    };
    this.LeftArrowButtonStyles = {
      alignContent: 'center',
      justifyContent: 'center',
      order: 1,
    };
    this.RightArrowButtonStyles = {
      justifyContent: 'center',
      order: 3,
    };
    this.MainSlide = {
      maxWidth: '650px',
      maxHeight: '480px',
      minWidth: '650px',
      minHeight: '480px',
    };
    this.ImageSlidePosition = {
      alignSelf: 'center',
      alignContent: 'center',
      order: 2,
    };
    this.SlideShowFlexBox = {
      alignSelf: 'center',
      order: 4,
    };
    this.SmallSlideStyles = {
      width: '100px',
      height: '67px',
    };
    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
  }

  currectSlideDeckGenerator(collection, currentIndex) {
    if (currentIndex < 4) {
      return collection.slice(0, 7);
    }
    return currentIndex > collection.length - 4 ? collection.slice(collection.length - 7) : collection.slice(currentIndex - 3, currentIndex + 4);
  }

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
      currectSlideDeck: this.currectSlideDeckGenerator(imgUrls, index),
    });
  }

  render() {
    return (
      <div style={this.FlexCol}>
        <div style={this.CrossButtonStyles}>
          <button onClick={this.props.clickFunction}>
          &#xe079;
          </button>
        </div>
        <div style={this.FlexRow}>
          <div style={this.LeftArrowButtonStyles}>
            <Arrow direction="left" clickFunction={this.previousSlide} glyph="&#9664;" />
          </div>
          <div style={this.ImageSlidePosition}>
              <ImageSlide styles={this.MainSlide} room={this.props.collection[this.state.currentImageIndex]} clickFunction={this.nextSlide} />
          </div>
          <div style={this.RightArrowButtonStyles}>
            <Arrow direction="right" clickFunction={this.nextSlide} glyph="&#9654;" />
          </div>
        </div>
        <div style={this.SlideShowFlexBox}>
          <SlideShow styles={this.SmallSlideStyles} collection={this.state.currectSlideDeck} />
        </div>
      </div>
    );
  }
}

export default Carousel;

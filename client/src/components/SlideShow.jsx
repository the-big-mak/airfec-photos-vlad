import React from 'react';
import ImageSlide from './ImageSlide.jsx';


class SlideShow extends React.Component {
  constructor(props) {
    super(props);
    this.imageContainer = {
      textAlign: 'center',
    };
    this.alignCenter = {
      display: 'block',
      float: 'left',
      margin: '40px',
    };
  }

  render() {
    return (
      <div>
        <div style={this.imageContainer}>
            {this.props.collection.map((room, index) => (<ul key={index} style={this.alignCenter}><ImageSlide room={room} styles={this.props.styles} /></ul>))}
        </div>
      </div>
    );
  }
}
export default SlideShow;

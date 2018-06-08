import React from 'react';

const ImageSlide = (props) => {
  const slideStyles = {
    position: 'fixed',
    float: 'center',
    width: '650px',
    height: '480px',
    left: '50%',
    top: '50%',
    marginLeft: '-296px',
    marginTop: '-256px',
  };

  return (
      <div>
          <div className="slide">
          <img src={props.room.url} style={slideStyles} onClick={props.clickFunction}></img>
          </div>
          <div>{props.room.description}</div>
      </div>
  );
};

export default ImageSlide;

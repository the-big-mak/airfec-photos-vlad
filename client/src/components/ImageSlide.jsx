import React from 'react';

const ImageSlide = (props) => {
    const styles = {
        backgroundImage: `url(${props.room.url})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 60%'
      }

    return (
        <div>
            <div className="slide" style={styles}>
            <button onClick={props.clickFunction}>[X]</button>
            </div>
            <div>{props.room.description}</div>
        </div>
    );
}

export default ImageSlide;

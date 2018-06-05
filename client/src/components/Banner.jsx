import React from 'react';

const Banner = (props) => {
    const styles = {
        backgroundImage: `url(${props.room.url})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 60%'
      }
    return (
        <div className="banner" style={styles} onClick={props.clickFunction}>
        hi
        </div>
    );
}

export default Banner;

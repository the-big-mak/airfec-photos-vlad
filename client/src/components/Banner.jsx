import React from 'react';

const Banner = (props) => {
  const styles = {
    position: 'relative',
    backgroundImage: `url(${props.room.url})`,
    height: 702,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };
  return (
    <div className="slide" style={styles} onClick={props.clickFunction}>
    </div>
  );
};

export default Banner;

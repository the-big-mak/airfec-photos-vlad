import React from 'react';

const Banner = (props) => {
    const styles = {
        // backgroundImage: `url(${props.room.url})`,
        backgroundImage: `url(https://a0.muscache.com/im/pictures/763ad5c8-c951-43e0-b926-4a98c25c45e8.jpg?aki_policy=large)`,
        height: 325,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      }
      return (
        <div className="slide" style={styles} onClick={props.clickFunction}>
        </div>
    );
}

export default Banner;

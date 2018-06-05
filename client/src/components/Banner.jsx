import React from 'react';

const Banner = (props) => {

    return (
        <img src={props.room.url} width="600" height="333" onClick={props.clickFunction}></img>
    );
}

export default Banner;

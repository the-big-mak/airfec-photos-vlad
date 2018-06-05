import React from 'react';

const MainSlide = (props) => {
    console.log(props);
    return (
        <img src={props.url} width="600" height="333" onClick={props.clickFunction}></img>
    );
}

export default MainSlide;

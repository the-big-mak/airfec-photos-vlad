import React from 'react';

const ImageSlide = (props) => {
    const slideStyles = {
        height: "70%",
        width: "70%",
        float: "center",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto"
      }

    return (
        <div>
            <div className="slide">
            <img src={props.room.url} style={slideStyles}></img>
            </div>
            <div>{props.room.description}</div>
        </div>
    );
    // return (
    //     <img src={props.room.url} width="600" height="333" onClick={props.clickFunction}></img>
    // );
}

export default ImageSlide;

import React from 'react';

const ImageSlide = (props) => {
    const slideStyles = {
        height: "70%",
        width: "70%",
        float: "center",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        // backgroundSize: '100%',
        // backgroundColor: "rgb(0,0,0)",
        // backgroundRepeat: 'no-repeat',
        opacity: 1
      }

    return (
        <div>
            <div className="slide">
            <img src={props.room.url} style={slideStyles}></img>
            <button onClick={props.clickFunction}>[X]</button>
            </div>
            <div>{props.room.description}</div>
        </div>
    );
    // return (
    //     <img src={props.room.url} width="600" height="333" onClick={props.clickFunction}></img>
    // );
}

export default ImageSlide;

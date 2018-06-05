import React from 'react';

const Arrow = (props) => (
    <div
      className={ `slide-arrow ${props.direction}` }
      onClick={ props.clickFunction }>
      { props.glyph }
    </div>
  );

  export default Arrow;
  
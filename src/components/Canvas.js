import '../styles/Canvas.css';

import React from "react";


function Canvas({children}) {
    console.log(children)
  return (
    <div className='Canvas'>
      {/* <canvas>

      </canvas> */}
    {children}

    </div>
  );
}

export default Canvas;



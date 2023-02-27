import '../styles/App.css';
import React from "react";

import ToolBar from './ToolBar';
import TestComponents from './TestComponents';
import Canvas from './Canvas';


function App() {
  return (
    <div className='App'>
      <ToolBar/>
      <Canvas>
        <TestComponents />
      </Canvas>

    </div>
  );
}

export default App;



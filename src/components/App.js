import React, {useEffect, useState} from 'react'
import '../styles/App.css';

const App = () => {
//code here 
  const [color, setColor] = useState(false);

   const handleClick =()=>{
    setColor(!color);
   };

  return (
    <div id="main">
      <p className={color ? "redColor" : "blueColor"} >Newton School</p>
      <button id='button' onClick={handleClick}>Change Style</button>
    </div>
  )
}


export default App;

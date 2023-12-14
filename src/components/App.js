
import React, {useState} from "react";
import './../styles/App.css';

const App = () => {
  const [text, setText] = useState("");
  

  return (
    <div>
        {/* Do not remove the main div */}
        <p>Enter your Name</p>
        <input type="text" onChange={(e)=>setText(e.target.value)} value={text}/>
        {
          text && <p>Hello {text}</p>
        }
    </div>
  )
}

export default App

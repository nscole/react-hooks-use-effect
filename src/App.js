import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  useEffect(() => {
    console.log("useEffect called");
  });

  function UpdateCounter(){
    setCount(count + 1);
  }

  function UpdateText(obj){
    setText(obj.target.value)
  }

  console.log("Component rendering");

  return <div>
    <button onClick={UpdateCounter}>I've been clicked {count} times.</button>
    <input type="text" placeholder="type away"
    value={text} 
    onChange={UpdateText}/> 

    </div>
}

export default App;

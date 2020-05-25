import React from 'react';

const App = () =>{
  const message ="Reacts the bomb"

  const handleClick = () =>{
    alert('You clicked the message')
  }
  return (
    <div>
      <h1>hello world!! 
      </h1>
  <h2 onClick={handleClick}>Click {message} here</h2>
    </div>
  )
}

export default App;

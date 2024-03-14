import { useCallback, useEffect, useState } from 'react';
import './App.css';

function App() {
  

  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  
  const passwordGenerator = useCallback(() => {
    let pass = ""
    // let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let str = "habdioncepcmdscjnlmdskcndwjcno"

    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)

    }
    
    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])
 

  useEffect(() => {
      passwordGenerator()
    }, [length, numberAllowed, charAllowed, passwordGenerator]);
    function copyText(){
      let textAreaValue = document.getElementById("copy-text");
      if (textAreaValue.value.trim() !==""){ //navigator.clipboard.writeText(textAreaValue);
        textAreaValue.select() ;
        document.execCommand("copy");
       
      }
     
    }
  let obj = {
    color: 'white',
    textAlign: 'center',
  }
  let color = {
    color: 'black',
    fontWeight: 'bolder',
    fontStyle: 'italic',
    padding: '2px',
  }


  return (
    <div className="App">
      <div className='pass-cont'>
        <h2 style={obj}>Passward Generator</h2>
        <div className='flex'>
          <input
          id='copy-text'
            type="text"
            value={password}
            placeholder="Password"
            readOnly
          />
          <button
          onClick={copyText}
          id='btn'>copy</button>
        </div>
        <div style={color} >
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '70%' }}>
            <input
              type='range'
              min={8}
              max={20}
              value={length}
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label style={{ margin: '5px' }}>Length:{length}</label>
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              onChange={() => { setNumberAllowed((prev) => !prev) }}
            />
            <label style={{ margin: '5px' }}>Number</label>
            <input
              type="checkbox"
              onChange={() => { setCharAllowed((prev) => !prev) }}
              defaultChecked={charAllowed} />
            <label style={{ margin: '5px' }}>Character</label>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;

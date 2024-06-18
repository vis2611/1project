import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)



  //let counter=15
  const addvalue = () => {
    //console.log("value added",counter);
    //counter=counter+1
    //setCounter(counter+1)
    if (counter>19){
      return <p>Cannot be added</p>
    }else {
      return setCounter(counter+1)
    }
  }

  const removevalue = () => {
    //console.log("value removed",remove);
    //counter=counter+1
    //setCounter(counter-1)
    if (counter<1){
      return <p>Cannot be added</p>
    }else {
      return setCounter(counter-1)
    }
  }

  return (
    <>
      <h1>First project.Hello world</h1>
      <h2>counter value:{counter}</h2>
      
      <button
      onClick={addvalue}>Add Value:</button>
      <br/>
      <button
      onClick={removevalue}>Remove Value:</button>


    </>
  )
}

export default App

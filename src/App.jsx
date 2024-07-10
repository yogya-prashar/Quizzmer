import { useState } from 'react'
import FrontPage from './components/frontPage'
import Selection from './components/selection'

document.body.style.backgroundColor = "#93c5fd"

function App() {
  
  const [init,setInit] = useState(true)
  
  function start(){
    setInit(prev => false)
  }


  return (
    <>
      { init 
      ? <FrontPage
        onClick={start}
      />
      : <Selection/>
      }

    </>
  )
}

export default App

//https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple
import { useState } from 'react'
import './App.css'
import Opponents from './Opponents'
import Bouts from './Bouts'

function App() {
  const [oppoView, setOppoView] = useState("opponents")

  const switchView = () => {
    if (oppoView === "opponents") {
      setOppoView("bouts")
    } else {
      setOppoView("opponents")
    }
  }

  return (
    <>
      <div id="header">
    <div id="menu">bars</div>
    <h1 id="title">Fencing Notebook</h1>
    <div id="profile">silohuette</div>
  </div>
  <div id="statsBlock">
    <div>
      <button onClick={switchView}>{oppoView}</button>
      {(oppoView === "opponents") ? <Opponents /> : <Bouts />}
    </div>
  </div>
  <div id="footer">
    <div id="email">email@email.com</div>
    <div id="git">github.link</div>
  </div>
    </>
  )
}

export default App

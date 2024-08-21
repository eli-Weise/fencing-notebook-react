import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="header">
    <div id="menu">bars</div>
    <h1 id="title">Fencing Notebook</h1>
    <div id="profile">silohuette</div>
  </div>
  <div id="statsBlock">
    <div id="winrate">pie chart</div>
    <div>
      <ul id="opponents">
        <li>place holder 1</li>
        <li>place holder 2</li>
        <li>place holder 3</li>
      </ul>
      <a href="new-fencer.html" className="button">Add a New Opponent!</a>
      <a href="new-bout.html" className="button">Add a New Bout!</a>
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

import { useState } from "react"
import AddOpponent from "./AddOpponent"
import './view.css'

function Opponents() {

  const [add, setAdd] = useState(false)

  const showAdd = () => {
    setAdd(!add)
  }

  return (
    <div display="flex" flexDirection="row">
      <ul id="opponents">
        <li>opponent 1</li>
        <li>opponent 2</li>
        <li>opponent 3</li>
      </ul>
      <input onClick={showAdd} type="checkbox" name="addOpponent" />
      {add ? <AddOpponent /> : <></>}
    </div>
  )
}

export default Opponents
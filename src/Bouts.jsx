import { useState } from "react"
import AddBout from "./AddBout"
import './view.css'

function Bouts() {

  const [add, setAdd] = useState(false)

  const showAdd = () => {
    setAdd(!add)
  }

  return (
    <div display="flex" flexDirection="row">
      <ul id="bouts">
        <li>bout 1</li>
        <li>bout 2</li>
        <li>bout 3</li>
      </ul>
      <input onClick={showAdd} type="checkbox" name="addBout" />
      {add ? <AddBout /> : <></>}
    </div>
  )
}

export default Bouts
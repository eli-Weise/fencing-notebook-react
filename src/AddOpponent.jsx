

function AddOpponent() {

  return (
    <>
      <h1>Add a Fencer</h1>
    <form action="FAIL!" method="post" id="add-an-opponent">
      <label for="first_name">First Name:</label>
      <input type="text" id="first_name" name="first_name" placeholder="Eli" />
      <label for="last_name">Last Name:</label>
      <input type="text" id="last_name" name="last_name" placeholder="Weise" required />
      
      <label for="rating">Rating</label>
      <select name="rating" id="rating">
        <option value="empty">Choose a rating</option>
        <option value="U">U</option>
        <option value="E">E</option>
        <option value="D">D</option>
        <option value="C">C</option>
        <option value="B">B</option>
        <option value="A">A</option>
      </select>

      <div>Hand: </div>
      <label for="left">Left</label>
      <input type="radio" id="left" name="hand" value="left" required />
      <label for="right">Right</label>
      <input type="radio" id="right" name="hand" value="right" required />

      <div>Grip: </div>
      <label for="french">french</label>
      <input type="checkbox" id="french" name="grip" value="french" />
      <label for="pistol">pistol</label>
      <input type="checkbox" id="pistol" name="grip" value="pistol" />

      <label for="yob">Birth Year:</label>
      <input type="number" id="yob" name="yob" min="1900" max="2099" step="1" />

      <label for="height">Height:</label>
      <select id="height" name="height">
        <option value="empty">Choose a height</option>
        <option value="l5">&lt;5'0"</option>
        <option value="5-3">5'0" - 5'3"</option>
        <option value="3-6">5'3" - 5'6"</option>
        <option value="6-9">5'6" - 5'9"</option>
        <option value="9-12">5'9" - 6'0"</option>
        <option value="6f-3">6'0" - 6'3"</option>
        <option value="g63">6'3"&lt;</option>
      </select>

      <label for="notes">Initial Notes</label>
      <textarea id="notes" name="notes"></textarea>
      <button type="submit" id="submit">Submit</button>
      <button type="reset">Reset</button>
    </form>
    </>
  )
}

export default AddOpponent
import React from 'react';
// import { Field, reduxForm } from 'redux-form'
// import { Row } from 'react-materialize'
import Multiselect from 'react-widgets/lib/Multiselect'
import 'react-widgets/dist/css/react-widgets.css'

let PresIn = (props) => {
  const {formSubmit, textChange, selectionChange, value, selection } = props
  // console.log(value, selection, 'check');
  // console.log(props, 'properties1');
  // console.log(input,'this');
  return (
    <form onSubmit={formSubmit.bind(this)} id="valueForm" className="maxW">
      <div>
        <label>Value</label>
        <textarea rows="3" cols="50" id="textarea" value={value} onChange={textChange}>
        </textarea>
      </div>
      <div>
        <label>Your Number</label>
        <select multiple={true} id="selector" value={selection} onChange={selectionChange}>
          <option value="one">one</option>
          <option value="two">two</option>
          <option value="three">three</option>
          <option value="four">four</option>
          <option value="five">five</option>
        </select>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>

  )
}

{/* <form>
<fieldset>
<legend>Choose your Adventure</legend>

  <div>
    <input type="checkbox" id="coding" name="interest" value="coding">
    <label for="coding">Coding</label>
  </div>
  <div>
    <input type="checkbox" id="music" name="interest" value="music">
    <label for="music">Music</label>
  </div>
  <div>
    <input type="checkbox" id="art" name="interest" value="art">
    <label for="art">Art</label>
  </div>
  <div>
    <input type="checkbox" id="sports" name="interest" value="sports">
    <label for="sports">Sports</label>
  </div>
  <div>
    <input type="checkbox" id="cooking" name="interest" value="cooking">
    <label for="cooking">Cooking</label>
  </div>
  <div>
    <input type="checkbox" id="other" name="interest" value="other">
    <label for="other">Other</label>
    <input type="text" id="otherValue" name="other">
  </div>
  <div>
    <button type="submit">Submit form</button>
  </div>
</fieldset>
</form> */}
// PresIn = reduxForm({
//   form: 'presIn',
//   propNamespace: 'containerProps'
// })(PresIn)

export default PresIn

// First Presentation component [named: PresIn] should contain a textarea that
// will update a localstorage field ‘stored_value’, and a multiselect that will
// have options [one, two, three, four, five] that will update localstorage field ‘stored_selection’

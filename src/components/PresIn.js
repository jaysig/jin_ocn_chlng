import React from 'react';
import Multiselect from 'react-widgets/lib/Multiselect'
import { Link } from 'react-router';
import 'react-widgets/dist/css/react-widgets.css'

let PresIn = (props) => {
  const {formSubmit, textChange, selectionChange, value, selection } = props
  return (
    <form onSubmit={formSubmit.bind(this)} id="valueForm" className="maxW">
      <h3>Character Creator</h3>
      <div>
        <label>Tell their story</label>
        <textarea rows="3" cols="50" id="textarea" value={value} onChange={textChange}>
        </textarea>
      </div>
      <div>
        <label>What are their favorite numbers</label>
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
        <button className="greeting">
          <Link to='/contout' onClick={props.header}>View Characters</Link>
        </button>
      </div>
    </form>

  )
}

export default PresIn

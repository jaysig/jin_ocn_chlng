import React from 'react';
import { Field, reduxForm } from 'redux-form'
// import { Row } from 'react-materialize'
import Multiselect from 'react-widgets/lib/Multiselect'
import 'react-widgets/dist/css/react-widgets.css'

let PresIn = props => {
  const { pristine, reset, submitting } = props
  return (
    <form onSubmit={props.onFormSubmit}>
      <div>
        <label>Value</label>
        <Field
          name="value"
          component="textarea"
          onChange={props.onTextChange}
        />
      </div>
      <div className="maxW">
        <label>Your Number</label>
        <Field
          name="numbers"
          component={Multiselect}
          defaultValue={[]}
          onBlur={() => props.onBlur()}
          onChange={props.onSelectionChange}
          data={['one', 'two', 'three', 'four', 'five']}/>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>Reset Values
        </button>
      </div>
    </form>
  )
}

PresIn = reduxForm({
  form: 'presIn'
})(PresIn)

export default PresIn

// First Presentation component [named: PresIn] should contain a textarea that
// will update a localstorage field ‘stored_value’, and a multiselect that will
// have options [one, two, three, four, five] that will update localstorage field ‘stored_selection’

import React from 'react';
import { Field, reduxForm } from 'redux-form'
// import { Row } from 'react-materialize'
import Multiselect from 'react-widgets/lib/Multiselect'
import 'react-widgets/dist/css/react-widgets.css'

let PresIn = (props) => {
  const {formSubmit, textChange, selectionChange, value, selection } = props
  console.log(value, selection, 'check');
  console.log(props, 'properties1');
  // console.log(input,'this');
  return (
    <form onSubmit={formSubmit.bind(this)}>
      <div>
        <label>Value</label>
        <Field
          name="value"
          value={value}
          component="textarea"
          onChange={textChange}
        />
      </div>
      <div className="maxW">
        <label>Your Number</label>
        <Field
          name="numbers"
          component={Multiselect}
          defaultValue={[]}
          onBlur={() => props.onBlur()}
          onChange={selectionChange}
          data={['one', 'two', 'three', 'four', 'five']}/>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  )
}

PresIn = reduxForm({
  form: 'presIn',
  propNamespace: 'containerProps'
})(PresIn)

export default PresIn

// First Presentation component [named: PresIn] should contain a textarea that
// will update a localstorage field ‘stored_value’, and a multiselect that will
// have options [one, two, three, four, five] that will update localstorage field ‘stored_selection’

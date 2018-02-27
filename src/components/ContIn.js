import React, { Component } from 'react';
import PresIn from './PresIn';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class ContIn extends Component {
  constructor(props) {
    super(props)

    this.state = {
      stored_value: '',
      stored_selection: ''
    }

    this.onTextChange = this.onTextChange.bind(this);
    this.onSelectionChange = this.onSelectionChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);

  }

  onTextChange(event) {
    this.setState({ stored_value: event.target. value });
  }

  onSelectionChange(event) {
    this.setState({ stored_selection: event.target. value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    // this.props.   TODO:Add function
    this.setState({stored_value: '', stored_selection: ''})
  }

  render() {
    return (
      <PresIn
        textChange=this.onTextChange
        selectionChange=this.onSelectionChange
        formSubmit=this.onFormSubmit
      />

    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch)  //TODO needs action
}

export default connect(null, mapDispatchToProps)(ContIn)

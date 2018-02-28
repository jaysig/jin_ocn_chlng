import React, { Component } from 'react';
import PresIn from './PresIn';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addPost } from '../actions'
import _ from 'lodash';

class ContIn extends Component {
  constructor(props) {
    super(props)

    this.state = {
      stored_value: '',
      stored_selection: []
    }

    this.onTextChange = this.onTextChange.bind(this);
    this.onSelectionChange = this.onSelectionChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);

  }

  onTextChange(event) {
    this.setState({ stored_value: event.target.value });
  }

  onSelectionChange(event) {
    if(!_.includes(this.state.stored_selection, event.target.value)) {
      this.state.stored_selection.push(event.target.value)
    }
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.dispatch(addPost(this.state))
    this.setState({stored_value: '', stored_selection: []})
  }

  render() {
    return (
      <PresIn
        textChange={this.onTextChange}
        selectionChange={this.onSelectionChange}
        formSubmit={this.onFormSubmit}
        value={this.state.stored_value}
        selection={this.state.stored_selection}
      />

    )
  }
}

export default connect()(ContIn)

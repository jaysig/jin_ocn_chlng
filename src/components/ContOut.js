import React, { Component } from 'react';
import PresOut from './PresOut';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class ContOut extends Component {
  constructor(props) {
    super(props)

    this.state = {
      page: '',
    }

  }

  //Shift page function
  render() {
    return (
      <PresOut
        data={this.onTextChange}
        selectionChange={this.pageChange}
      />

    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch)  //TODO needs action
}

export default connect(null, mapDispatchToProps)(ContOut)

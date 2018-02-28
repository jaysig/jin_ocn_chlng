import React, { Component } from 'react';
import PresOut from './PresOut';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

class ContOut extends Component {
  constructor(props) {
    super(props)
    console.log(this.props.posts,'post check');

    this.state = {
      page: 0,
      posts: _.chunk(this.props.posts, 10)
    }

  }

  // componentDidMount() {
  //   let selected = "";
  //   _.each(this.props.posts, (input, i) => {
  //     selected+= ` ${input}`
  //   })
  //   console.log(selected,'Selected');
  // }
  //Shift page function
  pageShift(event) {
    console.log(event.target.id,'id');
    let id = parseInt(event.target.id, 10)
    this.setState({ page: id });
    console.log(this.state,'state');
  }
  render() {
    let page = this.state.page
    let posts = this.state.posts
    console.log(posts,'post check');
    console.log(page,'This is our page');
    console.log(posts[page],'p check');
    return (
      <PresOut
        data={posts[page] || []}
        length={this.state.posts || []}
        pageShift={this.pageShift.bind(this)}
      />

    )
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch)  //TODO needs action
}

export default connect(mapStateToProps, mapDispatchToProps)(ContOut)

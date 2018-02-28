import React, { Component } from 'react';
import PresOut from './PresOut';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import { bindActionCreators } from 'redux';
import _ from 'lodash';

class ContOut extends Component {
  constructor(props) {
    super(props)

    this.state = {
      page: 0,
      posts: _.chunk(this.props.posts, 10)
    }

  }

  pageShift(event) {
    let id = parseInt(event.target.id, 10)
    this.setState({ page: id });
  }
  headerUpdate() {
    document.getElementById("contin").classList.add("active")
    document.getElementById("contout").classList.remove("active")
  }
  render() {
    let page = this.state.page
    let posts = this.state.posts
    if(posts.length === 0) {
      return (
        <div className="greeting">
          <h3>You haven't added anything </h3>
          <button>
            <Link to='/contin' onClick={this.headerUpdate}>Go To Form</Link>
          </button>

        </div>
      )
    } else {
      return (
        <PresOut
          data={posts[page] || []}
          length={this.state.posts || []}
          pageShift={this.pageShift.bind(this)}
        />

      )
    }
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, null)(ContOut)

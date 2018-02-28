import React, { Component } from 'react';
import { Link } from 'react-router';
import _ from 'lodash'

export default class Header extends Component {

  clicker(event){
    let id = event.target.id;
    if (id === "contout") {
      document.getElementById("contout").classList.add("active")
      document.getElementById("contin").classList.remove("active")
    } else {
      document.getElementById("contin").classList.add("active")
      document.getElementById("contout").classList.remove("active")
    }
  }

  componentDidMount() {
    let location = _.last(window.location.href.split("/"));
    document.getElementById(location).classList.add("active")
  }

  render() {
    return (
      <nav>
        <div className="header">
          <ul className="content">
            <div>
              <li>
                <Link id="contout" to='/contout' onClick={this.clicker}>Charcter List</Link>
              </li>
              <li>
                <Link id="contin" to='/contin' onClick={this.clicker}>Character Form</Link>
              </li>
            </div>
          </ul>
        </div>
      </nav>
    );
  }
}

import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Header extends Component {

  clicker(event){
    let id = event.target.id;
    console.log(event.target.id,'ider');
    if (id === "out") {
      document.getElementById("out").classList.add("active")
      document.getElementById("in").classList.remove("active")
    } else {
      document.getElementById("in").classList.add("active")
      document.getElementById("out").classList.remove("active")
    }
  }

  render() {
    return (
      <nav>
        <div className="header">
          <ul className="content">
            <div>
              <li>
                <Link id="out" to='/contout' onClick={this.clicker}>ContOut</Link>
              </li>
              <li>
                <Link className="active" id="in" to='/contin' onClick={this.clicker}>ContIn</Link>
              </li>
            </div>
          </ul>
        </div>
      </nav>
    );
  }
}

import React from 'react';
import _ from 'lodash';
import { TablePagination } from 'react-pagination-table';

let PresOut = (props) => {
  return (
  <div>
    <table id="posts">
      <thead>
        <tr>
          <th>Character's Story</th>
          <th>Chacter's Favorite #'s'</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((input, i) => {
          // Create new row per each level of data
          return (
            <tr key={i}>
              <td>{input.value}</td>
              <td>{input.selected}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
    <h3>Page #</h3>
    {props.length.map((input, i) => {
      // Create new button for every 10 inputs
      return (
        <button key={i} id={i} onClick={props.pageShift}>{i}</button>
      )
    })}
  </div>

  )
}

export default PresOut;

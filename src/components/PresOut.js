import React from 'react';
import _ from 'lodash';
import { TablePagination } from 'react-pagination-table';

let PresOut = (props) => {
  return (
  // Have a table
  <div>
    <table id="posts">
      <thead>
        <tr>
          <th>Stored Value</th>
          <th>Stored Selection</th>
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
    {/* {_.each(props.data, (arr, i) => {
      console.log(arr,i, 'check');
      return (
        <button key={i}>{i}</button>
      )
    })} */}
    <h3>Page #</h3>
    {props.length.map((input, i) => {
      // Create new row per each level of data
      return (
        <button key={i} id={i} onClick={props.pageShift}>{i}</button>
      )
    })}
  </div>

  // Create paginated view of ten values per page
  )
}

// Add redux

export default PresOut;

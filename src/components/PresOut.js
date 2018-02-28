import React from 'react';

let PresIn = (props) => {
  // Have a table
  <table>
    <thead>
      <tr>
        <th>Stored Value</th>
        <th>Stored Selection</th>
      </tr>
    </thead>
    <tbody>
        {/* // Map over data that comes from user inputs  */}
      {props.inputeddata.map((input), => {
          // Create new row per each level of data
        return (
          <tr>
            <td>{input.value}</td>
            <td>{input.selected}</td>
          </tr>
        )
      })}
    </tbody>
  </table>

  // Create paginated view of ten values per page
}

// Add redux

export default PresOut;

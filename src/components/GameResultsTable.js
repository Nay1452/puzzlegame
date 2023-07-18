import React from 'react';

const GameResultTable = ({ results }) => {
  return (
    <table className="result-table">
      <thead>
        <tr>
          <th>Player</th>
          <th>Wins</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>X</td>
          <td>{results.xScore}</td>
        </tr>
        <tr>
          <td>O</td>
          <td>{results.oScore}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default GameResultTable;

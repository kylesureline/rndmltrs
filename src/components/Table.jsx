import React from 'react';

const Table = ({ table }) => {
  return (
    <div className="table">
      {table.map(row => (
        row.map((col, index) => <div key={index} className={col.className}>{col.value}</div>)
      ))}
    </div>
  );
};

export default Table;

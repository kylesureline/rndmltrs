import React from 'react';

const Table = ({ table, fontSize }) => {
  return (
    <div className="table" style={{fontSize: `${fontSize}px`}}>
      {table.map(row => (
        row.map((col, index) => <div key={index} className={col.className}>{col.value}</div>)
      ))}
    </div>
  );
};

export default Table;

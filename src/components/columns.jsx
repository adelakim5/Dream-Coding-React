import React, { useState } from "react";
import Column from "./column";

const Columns = (props) => {
  const [columns, setColumns] = useState([{ title: "해야할 일", id: 0 }]);

  const addColumn = (title) => {
    setColumns(columns.concat({ title, id: Date.now() }));
  };

  const deleteColumn = (target) => {
    setColumns(columns.filter((col) => col.id !== target.id));
  };

  return (
    <ul className="column-list">
      {columns.map((col) => (
        <Column key={col.id} column={col} onAdd={addColumn} onDelete={deleteColumn} />
      ))}
    </ul>
  );
};

export default Columns;

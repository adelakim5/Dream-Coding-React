import React, { memo } from "react";

const Input = memo((props) => {
  const formRef = React.createRef();
  const inputRef = React.createRef();

  const onSubmit = (e) => {
    e.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name);
    formRef.current.reset();
  };

  return (
    <form ref={formRef} className="add-form" onSubmit={onSubmit}>
      <input type="text" ref={inputRef} placeholder="Habit..." />
      <button className="input-addButton">Add</button>
    </form>
  );
});

export default Input;

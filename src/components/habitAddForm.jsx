import React, { memo } from "react";

// rsi
// memo에다가 function 전달
// props가 변경되지 않으면 function 호출 안함.

const HabitAddForm = memo((props) => {
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
      <input ref={inputRef} type="text" className="add-input" placeholder="Habit" />
      <button className="add-button">Add</button>
    </form>
  );
});

export default HabitAddForm;

// class HabitAddForm extends PureComponent {
//   formRef = React.createRef();
//   inputRef = React.createRef();

//   onSubmit = (e) => {
//     e.preventDefault();
//     const name = this.inputRef.current.value;
//     name && this.props.onAdd(name);
//     // this.inputRef.current.value = "";
//     this.formRef.current.reset();
//   };
//   render() {
//     return (
//       <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
//         <input ref={this.inputRef} type="text" className="add-input" placeholder="Habit" />
//         <button className="add-button">Add</button>
//       </form>
//     );
//   }
// }

// export default HabitAddForm;

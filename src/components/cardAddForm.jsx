import React from "react";

const CardAddForm = (props) => {
  const titleRef = React.createRef();
  const contentRef = React.createRef();
  const formRef = React.createRef();

  const onSubmit = (e) => {
    e.preventDefault();
    const title = titleRef.current.value;
    const content = contentRef.current.value;
    console.log(title, content);
    title && content && props.onAdd(title, content);
    formRef.current.reset();
  };

  return (
    <form ref={formRef} className="add-form">
      <input type="text" ref={titleRef} placeholder="제목을 입력하세요..." />
      <textarea name="" id="" cols="30" rows="10" ref={contentRef} placeholder="내용을 입력하세요..."></textarea>
      <div className="add-form-button">
        <button onClick={props.onClose}>취소</button>
        <button onClick={onSubmit}>등록</button>
      </div>
    </form>
  );
};

export default CardAddForm;

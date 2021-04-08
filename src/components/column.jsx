import React, { useState } from "react";
import Card from "./card";
import CardAddForm from "./cardAddForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";

const Column = (props) => {
  const [cards, setCards] = useState([{ title: "Github 공부하기", content: "add, commit, push", id: 1 }]);

  const [showStatus, setShowStatus] = useState(false);

  // const show = () => {
  //   setShowStatus("block");
  // };

  const close = () => setShowStatus(false);

  const addCard = (title, content) => {
    setCards(cards.concat({ title, content, id: Date.now() }));
  };

  const deleteCard = (target) => {
    setCards(cards.filter((card) => card.id !== target.id));
  };

  const { title } = props.column;

  return (
    <li className="column">
      <div className="column-header">
        <div className="column-header-title">
          <span className="column-title">{title}</span>
          <span className="column-count">{cards.length}</span>
        </div>
        <div className="column-header-button">
          <button className="column-button column-add-card" onClick={() => setShowStatus(true)}>
            {/* 이걸 누르면 카드 생성하는 창이  나와야 함 */}
            <FontAwesomeIcon icon={faPlus} />
          </button>
          <button className="column-button column-delete" onClick={() => props.onDelete(props.column)}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
      </div>
      {showStatus ? <CardAddForm className={showStatus} onAdd={addCard} onClose={close} /> : null}

      <ul className="card-list">
        {cards.map((card) => (
          <Card key={card.id} card={card} onDelete={deleteCard} />
        ))}
      </ul>
    </li>
  );
};

export default Column;

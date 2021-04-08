import React, { useCallback, useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import "../app.css";

const SimpleHabit = (props) => {
  const [count, setCount] = useState(0); // 초기값
  const spanRef = useRef(); // 한번만 만들고 메모리에 저장후 재사용

  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  });

  useEffect(() => {
    console.log(`mounted & updated: ${count}`);
  }, [count]); // count가 변경 될때마다 콜백함수 호출, 아무것도 전달하지 않으면 state가 변경될때마다 호출, [] : 첫 변경때만 호출

  return (
    <li className="habit">
      <span className="habit-name" ref={spanRef}>
        Reading
      </span>
      <span className="habit-count">{count}</span>
      <button className="habit-button habit-increase" onClick={handleIncrement}>
        <FontAwesomeIcon icon={faPlusSquare} />
      </button>
    </li>
  );
};

// class SimpleHabit extends Component {
//   state = {
//     count: 0,
//   };

//   handleIncrement = () => {
//     this.setState({ count: this.state.count + 1 });
//   };
//   render() {
//     return (
//       <li className="habit">
//         <span className="habit-name">Reading</span>
//         <span className="habit-count">{this.state.count}</span>
//         <button className="habit-button habit-increate" onClick={this.handleIncrement}>
//           <FontAwesomeIcon icon={faPlusSquare} />
//         </button>
//       </li>
//     );
//   }
// }

export default SimpleHabit;

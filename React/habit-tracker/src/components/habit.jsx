import React, { Component } from 'react';

class Habit extends Component {
    state = {
        count: 0,
    }

    handleIncrement = () => {
        // state object 안에 있는 count 증가한 뒤 state update
        // this.state.count++; 이렇게 하면 리액트는 업데이트 됐는지 아닌지 모름 
        // 그래서 state를 업데이트 할때는 반드시 setState를 호출해주어야 함
        this.setState({count:this.state.count+1})
    }

    handleDecrement = () => {
        const count = this.state.count - 1
        this.setState({count: count < 0 ? 0 : count})
    }
    render() {
        return (
            <li className="habit">
                <span className="habit-name">Reading</span>
                <span className="habit-count">{this.state.count}</span>
                <button className="habit-btn habit-increase" onClick={this.handleIncrement}>
                    <i className="fas fa-plus-square"></i>
                </button>
                <button className="habit-btn habit-decrease" onClick={this.handleDecrement}>
                    <i className="fas fa-minus-square"></i>
                </button>
                <button className="habit-btn habit-delete">
                    <i class="fas fa-trash"></i>
                </button>
            </li>
        )
    }
}

export default Habit;
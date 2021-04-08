import "./app.css";
import { useState } from "react";
import Habits from "./components/habits";
import Input from "./components/input";
import Navbar from "./components/navbar";
import Reset from "./components/reset";

const App = (props) => {
  const [habits, setHabits] = useState([
    { name: "Reading", count: 0, id: 1 },
    { name: "Running", count: 0, id: 2 },
    { name: "Coding", count: 0, id: 3 },
  ]);

  const handleIncrement = (habit) => {
    setHabits(
      habits.map((item) => {
        if (item.id === habit.id) return { ...item, count: item.count + 1 };
        return item;
      })
    );
  };

  const handleDecrement = (habit) => {
    setHabits(
      habits.map((item) => {
        if (item.id === habit.id) {
          const count = item.count - 1;
          return { ...item, count: count >= 0 ? count : 0 };
        }
        return item;
      })
    );
  };

  const handleDelete = (habit) => {
    setHabits([...habits.filter((item) => item.id !== habit.id)]);
  };

  const addHabit = (habit) => {
    setHabits([...habits, { name: habit, count: 0, id: Date.now() }]);
  };

  const reset = () => {
    setHabits(
      habits.map((item) => {
        if (item.count !== 0) return { ...item, count: 0 };
        return item;
      })
    );
  };

  return (
    <>
      <Navbar totalCount={[...habits.filter((item) => item.count > 0)].length} />
      <Input onAdd={addHabit} />
      <Habits habits={habits} onIncrement={handleIncrement} onDecrement={handleDecrement} onDelete={handleDelete} />
      <Reset onReset={reset} />
    </>
  );
};

export default App;

import { ChangeEvent, useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";

let nextId = 0;

function App() {
  const [form, setForm] = useState({
    id: nextId++,
    content: "",
    isComplete: false,
  });

  const onChange = (e) => {};

  return (
    <div className="App">
      <div className="deco" />
      <div className="container">
        <TodoList />

        <div className="addContents">
          <input name="content" className="input" onChange={onChange} />
          <button type="submit" className="btn">
            제출
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

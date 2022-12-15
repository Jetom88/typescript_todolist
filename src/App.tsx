import { ChangeEvent, useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";

export type Todo = {
  id: number;
  content: string;
  isComplete: boolean;
};

let nextId = 0;

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [form, setForm] = useState<Todo>({
    id: nextId++,
    content: "",
    isComplete: false,
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, content: e.target.value });
  };

  const onSubmit = () => {
    setTodos([...todos, form]);

    setForm({
      ...form,
      id: form.id + 1,
      content: "",
      isComplete: false,
    });
  };

  return (
    <div className="App">
      <div className="deco" />
      <div className="container">
        <TodoList todos={todos} />

        <div className="addContents">
          <input name="content" className="input" onChange={onChange} />
          <button type="submit" className="btn" onClick={onSubmit}>
            제출
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

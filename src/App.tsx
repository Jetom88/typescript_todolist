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
    if (form.content === "") {
      return alert("내용 ㄱㄱ");
    }
    setTodos([...todos, form]);

    setForm({
      ...form,
      id: form.id + 1,
      content: "",
    });
  };

  const onDelete = (id: number) => {
    setTodos((todos) => todos.filter((list) => list.id !== id));
  };

  const onComplete = (id: number) => {
    setTodos((todos) =>
      todos.map((list) =>
        list.id === id ? { ...list, isComplete: !list.isComplete } : list
      )
    );
  };

  return (
    <div className="App">
      <div className="deco" />
      <div className="container">
        <TodoList todos={todos} onDelete={onDelete} onComplete={onComplete} />

        <div className="addContents">
          <input
            name="content"
            className="input"
            onChange={onChange}
            value={form.content}
          />
          <button type="submit" className="btn" onClick={onSubmit}>
            submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

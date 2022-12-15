import { Todo } from "../App";
import "../App.css";

type TodosProps = {
  todos: Todo[];
};

const TodoList = ({ todos }: TodosProps) => {
  return (
    <ul className="todoList">
      {todos.map((todo) => (
        <li key={todo.id} className="todo">
          {todo.content}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;

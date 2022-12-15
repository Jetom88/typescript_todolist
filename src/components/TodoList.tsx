import { Todo } from "../App";
import "../App.css";

type TodosProps = {
  todos: Todo[];
  onDelete: (todo: number) => void;
  onComplete: (todo: number) => void;
};

const TodoList = ({ todos, onDelete, onComplete }: TodosProps) => {
  return (
    <ul className="todoList">
      {todos.map((todo) => (
        <li key={todo.id} className="todo">
          <p className={`${todo.isComplete ? "completeText" : null}`}>
            {todo.content}
          </p>
          <div className="todoBtn">
            <button
              className="todoDelete"
              onClick={() => {
                onDelete(todo.id);
              }}
            >
              ❌
            </button>
            <button
              className="todoCheck"
              onClick={() => {
                onComplete(todo.id);
              }}
            >
              ⭕
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;

import { useSelector } from "react-redux";

import Todo from "./Todo";

const TodoList = ({ comp }) => {
  const { todos } = useSelector((state) => state);

  if (todos.length === 0) {
    return <></>;
  }

  if (comp === undefined) {
    return (
      <>
        <ul className="todolist">
          {todos.map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
          <p className="todolist-left">
            {todos.length === 1 ? (
              <span>{todos.length} item left</span>
            ) : (
              <span>{todos.length} items left</span>
            )}
          </p>
        </ul>
      </>
    );
  }
  return (
    <>
      <ul className="todolist">
        {todos
          .filter((v) => v.completed === comp)
          .map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
        <p className="todolist-left">
          {todos.length === 1 ? (
            <span>{todos.length} item left</span>
          ) : (
            <span>{todos.length} items left</span>
          )}
        </p>
      </ul>
    </>
  );
};

export default TodoList;

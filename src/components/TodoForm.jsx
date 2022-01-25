import { useCallback, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import {
  addtodo,
  clearcompletetodos,
  completealltodo,
  uncompletealltodo,
} from "../redux/todoReducer";
import Active from "./Active";
import All from "./All";
import Completed from "./Completed";
import Navigation from "./Navgation";

const TodoForm = () => {
  const inputRef = useRef();
  const dispatch = useDispatch();
  const toggleRef = useRef();
  const clearCompleteRef = useRef();
  const [toggle, setToggle] = useState(false);
  const { todos } = useSelector((state) => state);

  const keydownHandler = useCallback(
    (e) => {
      if (e.key === "Enter") {
        dispatch(addtodo(inputRef.current.value));
        inputRef.current.value = "";
      }
    },
    [dispatch]
  );

  const clearCompleteHandler = useCallback(() => {
    dispatch(clearcompletetodos());
  }, [dispatch]);

  const onToggleAllHandler = useCallback(() => {
    setToggle((toggle) => !toggle);
    if (!toggle) {
      toggleRef.current.classList.add("toggle");
      dispatch(completealltodo());
    } else {
      toggleRef.current.classList.remove("toggle");
      dispatch(uncompletealltodo());
    }
  }, [toggle, dispatch]);

  return (
    <section className="todoform">
      <h1>Todos</h1>
      <div className="todoform-container">
        <header>
          <div className="todoform-newtodo">
            {todos.length > 0 && (
              <label
                className="toggle-All"
                onClick={onToggleAllHandler}
                ref={toggleRef}
              />
            )}
            <input
              placeholder="What needs to be done ?"
              ref={inputRef}
              onKeyPress={keydownHandler}
            ></input>
          </div>
        </header>
        <section>
          <Routes>
            <Route path="/" element={<All />} />
            <Route path="active" element={<Active />} />
            <Route path="completed" element={<Completed />} />
          </Routes>
        </section>
        <footer>
          <Navigation />
          {todos.find((todo) => todo.completed === true) && (
            <p
              className="clearComplete"
              ref={clearCompleteRef}
              onClick={clearCompleteHandler}
            >
              Clear completed
            </p>
          )}
        </footer>
      </div>
    </section>
  );
};

export default TodoForm;

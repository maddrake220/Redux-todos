import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import {
  completetodo,
  uncompletetodo,
  deletetodo,
  updatetodo,
} from "../redux/todoReducer";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  const deleteRef = useRef();
  const [text, setText] = useState(todo.text);
  const [toggle, setToggle] = useState(todo.completed);
  const inputRef = useRef();
  const { id } = todo;

  useEffect(() => {
    setText(todo.text);
    setToggle(todo.completed);
  }, [todo]);

  useEffect(() => {
    if (toggle) {
      inputRef.current.classList.add("checked");
    } else {
      inputRef.current.classList.remove("checked");
    }
  }, [toggle]);

  const onToggleChangeHandler = useCallback(() => {
    setToggle((toggle) => !toggle);
    if (!toggle) {
      inputRef.current.classList.add("checked");
      dispatch(completetodo(id));
    } else {
      inputRef.current.classList.remove("checked");
      dispatch(uncompletetodo(id));
    }
  }, [toggle, dispatch, id]);

  const onDoubleClickHandler = useCallback(() => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  }, []);

  const onBlurHandler = useCallback(() => {
    dispatch(updatetodo({ id, text }));
  }, [dispatch, id, text]);

  const onChangeHandler = useCallback((e) => {
    setText(e.target.value);
  }, []);

  const onDeleteHandler = useCallback(() => {
    dispatch(deletetodo(id));
  }, [dispatch, id]);

  const onKeyPressHandler = useCallback((e) => {
    if (e.key === "Enter") {
      inputRef.current.blur();
    }
  }, []);
  const onMouseOverHandler = useCallback(() => {
    deleteRef.current.style.opacity = 0.4;
  }, []);

  const onMouseLeaveHandler = useCallback(() => {
    deleteRef.current.style.opacity = 0;
  }, []);
  return (
    <li
      className="todo"
      onMouseOver={onMouseOverHandler}
      onMouseLeave={onMouseLeaveHandler}
    >
      <label>
        <input
          className="toggle"
          type="checkbox"
          checked={toggle}
          onChange={onToggleChangeHandler}
        />
        <span></span>
      </label>

      <div onDoubleClick={onDoubleClickHandler}>
        <input
          disabled
          className="todo-input"
          onBlur={onBlurHandler}
          onChange={onChangeHandler}
          onKeyPress={onKeyPressHandler}
          value={text}
          ref={inputRef}
        ></input>
      </div>
      <img
        className="delete"
        onClick={onDeleteHandler}
        src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/000000/external-delete-multimedia-kiranshastry-gradient-kiranshastry.png"
        alt="delete"
        ref={deleteRef}
      />
    </li>
  );
};

export default Todo;

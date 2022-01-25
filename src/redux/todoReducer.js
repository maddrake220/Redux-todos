import { v4 as uuidv4 } from "uuid";

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const UPDATE_TODO = "UPDATE_TODO";
const COMPLETE_TODO = "COMPLETE_TODO";
const UNCOMPLETE_TODO = "UNCOMPLETE_TODO";
const COMPLETE_ALL_TODO = "COMPLETE_ALL_TODO";
const UNCOMPLETE_ALL_TODO = "UNCOMPLETE_ALL_TODO";
const CLEAR_COMPLETE_TODOS = "CLEAR_COMPLETE_TODOS";

export const addtodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const deletetodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

export const updatetodo = (payload) => {
  return {
    type: UPDATE_TODO,
    payload,
  };
};

export const completetodo = (payload) => {
  return {
    type: COMPLETE_TODO,
    payload,
  };
};

export const uncompletetodo = (payload) => {
  return {
    type: UNCOMPLETE_TODO,
    payload,
  };
};

export const completealltodo = () => {
  return {
    type: COMPLETE_ALL_TODO,
  };
};
export const uncompletealltodo = () => {
  return {
    type: UNCOMPLETE_ALL_TODO,
  };
};

export const clearcompletetodos = () => {
  return {
    type: CLEAR_COMPLETE_TODOS,
  };
};
const initialState = {
  todos: [],
};
const todoReducer = (state = initialState, action) => {
  const { todos } = state;
  switch (action.type) {
    case ADD_TODO: {
      const id = uuidv4();
      const newTodo = {
        id,
        text: action.payload,
        completed: false,
      };
      return {
        todos: [...todos, newTodo],
      };
    }
    case DELETE_TODO: {
      const newTodos = todos.filter((todo) => todo.id !== action.payload);
      return {
        todos: [...newTodos],
      };
    }
    case UPDATE_TODO: {
      const newTodos = todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, text: action.payload.text };
        }
        return todo;
      });
      return {
        todos: [...newTodos],
      };
    }
    case COMPLETE_TODO: {
      const newTodos = todos.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, completed: true };
        }
        return todo;
      });

      return {
        todos: [...newTodos],
      };
    }
    case UNCOMPLETE_TODO: {
      const newTodos = todos.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, completed: false };
        }
        return todo;
      });

      return {
        todos: [...newTodos],
      };
    }
    case COMPLETE_ALL_TODO: {
      const newTodos = todos.map((todo) => {
        return { ...todo, completed: true };
      });
      return {
        todos: [...newTodos],
      };
    }

    case UNCOMPLETE_ALL_TODO: {
      const newTodos = todos.map((todo) => {
        return { ...todo, completed: false };
      });
      return {
        todos: [...newTodos],
      };
    }

    case CLEAR_COMPLETE_TODOS: {
      const newTodos = todos.filter((todo) => todo.completed !== true);
      return {
        todos: [...newTodos],
      };
    }
    default:
      return {
        ...state,
      };
  }
};
export default todoReducer;

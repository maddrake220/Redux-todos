import { applyMiddleware, createStore } from "redux";
import todoReducer from "./todoReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "root",
  storage,
};

const enhancedReducer = persistReducer(persistConfig, todoReducer);

const loggerMiddleware = (store) => (next) => (action) => {
  console.log(action);
  return next(action);
};
export const store = createStore(
  enhancedReducer,
  applyMiddleware(loggerMiddleware)
);

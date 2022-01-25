import { BrowserRouter, Route, Routes } from "react-router-dom";
import Active from "./components/Active";
import Completed from "./components/Completed";
import TodoForm from "./components/TodoForm";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<TodoForm />}>
            <Route path="active" element={<Active />} />
            <Route path="completed" element={<Completed />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const { todos } = useSelector((state) => state);
  if (todos.length === 0) {
    return <div></div>;
  }
  return (
    <nav className="navigation">
      <NavLink
        to="/"
        style={({ isActive }) => ({
          border: isActive ? "1px solid rgba(175, 47, 47, 0.2)" : "",
        })}
      >
        Home
      </NavLink>
      <NavLink
        to="/active"
        style={({ isActive }) => ({
          border: isActive ? "1px solid rgba(175, 47, 47, 0.2)" : "",
        })}
      >
        Active
      </NavLink>
      <NavLink
        to="/completed"
        style={({ isActive }) => ({
          border: isActive ? "1px solid rgba(175, 47, 47, 0.2)" : "",
        })}
      >
        Completed
      </NavLink>
    </nav>
  );
};

export default Navigation;

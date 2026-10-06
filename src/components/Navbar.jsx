import { Link, useNavigate } from "react-router";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div
        className="logo"
        onClick={() => navigate("/dashboard")}
      >
        AI Smart Learning Assistant
      </div>

      <div className="nav-links">
        <Link to="/dashboard">Dashboard</Link>

        <Link to="/home">Learn</Link>

        <Link to="/topics">Topics</Link>

        <Link to="/profile">Profile</Link>

        <button
          className="logout-btn"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
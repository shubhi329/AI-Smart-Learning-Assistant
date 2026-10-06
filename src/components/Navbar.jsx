import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";

function Navbar() {
  const navigate = useNavigate();

  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  const toggleTheme = () => {
    setIsDarkMode((previousMode) => !previousMode);
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
        <Link to="/upload-material">Upload</Link>
        <Link to="/profile">Profile</Link>

        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle theme"
          title={
            isDarkMode
              ? "Switch to light mode"
              : "Switch to dark mode"
          }
        >
          {isDarkMode ? "☀️" : "🌙"}
        </button>

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
import { useState } from "react";
import { useNavigate, Link } from "react-router";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleEmailChange = (event) => {
    const value = event.target.value;

    setEmail(value);
    setEmailError("");
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;

    setPassword(value);

    if (value.length > 0 && value.length < 6) {
      setPasswordError(
        "Password must be at least 6 characters."
      );
    } else {
      setPasswordError("");
    }
  };

  const handleLogin = () => {
    let valid = true;

    setEmailError("");
    setPasswordError("");

    if (email.trim() === "") {
      setEmailError("Please enter your email.");
      valid = false;
    } else if (!email.includes("@")) {
      setEmailError("Please enter a valid email address.");
      valid = false;
    }

    if (password.trim() === "") {
      setPasswordError("Please enter your password.");
      valid = false;
    } else if (password.length < 6) {
      setPasswordError(
        "Password must be at least 6 characters."
      );
      valid = false;
    }

    if (!valid) {
      return;
    }

    localStorage.setItem("isAuthenticated", "true");

    navigate("/dashboard");
  };

  return (
    <main className="auth-page">
      <div className="auth-container">

        <div className="auth-brand">
          <p className="page-label">
            AI SMART LEARNING ASSISTANT
          </p>

          <h1>Welcome Back</h1>

          <p>
            Continue your learning journey, practice your
            skills, and track your progress.
          </p>
        </div>

        <div className="auth-card">
          <h2>Login</h2>

          <p className="auth-subtitle">
            Login to continue your learning journey.
          </p>

          <label>Email</label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
          />

          {emailError && (
            <p className="auth-error">
              {emailError}
            </p>
          )}

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
          />

          {passwordError && (
            <p className="auth-error">
              {passwordError}
            </p>
          )}

          <button
            className="auth-button"
            onClick={handleLogin}
          >
            Login
          </button>

          <p className="auth-switch">
            Don't have an account?{" "}
            <Link to="/register">
              Create an account
            </Link>
          </p>
        </div>

      </div>
    </main>
  );
}

export default Login;
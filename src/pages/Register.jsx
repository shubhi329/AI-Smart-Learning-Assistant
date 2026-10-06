import { useState } from "react";
import { useNavigate, Link } from "react-router";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
    setNameError("");
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
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

  const handleRegister = () => {
    let valid = true;

    setNameError("");
    setEmailError("");
    setPasswordError("");

    if (name.trim() === "") {
      setNameError("Please enter your name.");
      valid = false;
    }

    if (email.trim() === "") {
      setEmailError("Please enter your email.");
      valid = false;
    } else if (!email.includes("@")) {
      setEmailError("Please enter a valid email address.");
      valid = false;
    }

    if (password.trim() === "") {
      setPasswordError("Please create a password.");
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

    localStorage.setItem("userName", name.trim());
    localStorage.setItem("userEmail", email.trim());

    navigate("/login");
  };

  return (
    <main className="auth-page">
      <div className="auth-container">

        <div className="auth-brand">
          <p className="page-label">
            AI SMART LEARNING ASSISTANT
          </p>

          <h1>Start Your Learning Journey</h1>

          <p>
            Create your account and get a personalized
            learning experience.
          </p>
        </div>

        <div className="auth-card">
          <h2>Create Account</h2>

          <p className="auth-subtitle">
            Sign up to start learning smarter.
          </p>

          <label>Name</label>

          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={handleNameChange}
          />

          {nameError && (
            <p className="auth-error">
              {nameError}
            </p>
          )}

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
            placeholder="Create a password"
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
            onClick={handleRegister}
          >
            Create Account
          </button>

          <p className="auth-switch">
            Already have an account?{" "}
            <Link to="/login">
              Login
            </Link>
          </p>
        </div>

      </div>
    </main>
  );
}

export default Register;
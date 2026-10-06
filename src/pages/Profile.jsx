import { useState } from "react";
import { useNavigate } from "react-router";
import Navbar from "../components/Navbar";

function Profile() {
  const navigate = useNavigate();

  const [userName, setUserName] = useState(
    localStorage.getItem("userName") || "Student"
  );

  const [userEmail, setUserEmail] = useState(
    localStorage.getItem("userEmail") || "No email available"
  );

  const [isEditing, setIsEditing] = useState(false);

  const [editName, setEditName] = useState(userName);
  const [editEmail, setEditEmail] = useState(userEmail);

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");

  const quizHistory = JSON.parse(
    localStorage.getItem("quizHistory") || "[]"
  );

  const completedTopics = JSON.parse(
    localStorage.getItem("completedTopics") || "[]"
  );

  const averageScore =
    quizHistory.length > 0
      ? Math.round(
          quizHistory.reduce(
            (total, result) =>
              total +
              (result.score / result.total) * 100,
            0
          ) / quizHistory.length
        )
      : 0;

  const initials = userName
    .trim()
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word.charAt(0).toUpperCase())
    .join("");

  const handleEdit = () => {
    setEditName(userName);
    setEditEmail(userEmail);
    setNameError("");
    setEmailError("");
    setIsEditing(true);
  };

  const handleCancel = () => {
    setEditName(userName);
    setEditEmail(userEmail);
    setNameError("");
    setEmailError("");
    setIsEditing(false);
  };

  const handleSave = () => {
    let valid = true;

    setNameError("");
    setEmailError("");

    if (editName.trim() === "") {
      setNameError("Please enter your name.");
      valid = false;
    }

    if (editEmail.trim() === "") {
      setEmailError("Please enter your email.");
      valid = false;
    } else if (!editEmail.includes("@")) {
      setEmailError("Please enter a valid email address.");
      valid = false;
    }

    if (!valid) {
      return;
    }

    const updatedName = editName.trim();
    const updatedEmail = editEmail.trim();

    localStorage.setItem("userName", updatedName);
    localStorage.setItem("userEmail", updatedEmail);

    setUserName(updatedName);
    setUserEmail(updatedEmail);

    setIsEditing(false);
  };

  return (
    <div>
      <Navbar />

      <main className="dashboard-page">

        {/* Profile Header */}
        <div className="dashboard-header">
          <div>
            <p className="page-label">
              ACCOUNT
            </p>

            <h1>Your Profile</h1>

            <p>
              Manage your learning identity and view your
              overall progress.
            </p>
          </div>

          <button
            className="start-learning-btn"
            onClick={() => navigate("/dashboard")}
          >
            Back to Dashboard
          </button>
        </div>

        {/* Profile Card */}
        <div className="dashboard-box">

          {!isEditing ? (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "20px",
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  flexWrap: "wrap",
                }}
              >
                <div
                  style={{
                    width: "76px",
                    height: "76px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background:
                      "linear-gradient(135deg, #4f46e5, #06b6d4)",
                    color: "#ffffff",
                    fontSize: "24px",
                    fontWeight: "800",
                    boxShadow:
                      "0 10px 24px rgba(79, 70, 229, 0.18)",
                  }}
                >
                  {initials || "S"}
                </div>

                <div>
                  <h2
                    style={{
                      marginBottom: "6px",
                    }}
                  >
                    {userName}
                  </h2>

                  <p>
                    {userEmail}
                  </p>
                </div>
              </div>

              <button
                className="auth-button"
                onClick={handleEdit}
                style={{
                  width: "auto",
                  padding: "12px 22px",
                }}
              >
                Edit Profile
              </button>
            </div>
          ) : (
            <div>

              <h2
                style={{
                  marginBottom: "20px",
                }}
              >
                Edit Profile
              </h2>

              <label>Name</label>

              <input
                type="text"
                value={editName}
                onChange={(event) => {
                  setEditName(event.target.value);
                  setNameError("");
                }}
                placeholder="Enter your name"
              />

              {nameError && (
                <p className="auth-error">
                  {nameError}
                </p>
              )}

              <label>Email</label>

              <input
                type="email"
                value={editEmail}
                onChange={(event) => {
                  setEditEmail(event.target.value);
                  setEmailError("");
                }}
                placeholder="Enter your email"
              />

              {emailError && (
                <p className="auth-error">
                  {emailError}
                </p>
              )}

              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  marginTop: "20px",
                  flexWrap: "wrap",
                }}
              >
                <button
                  className="auth-button"
                  onClick={handleSave}
                  style={{
                    width: "auto",
                    padding: "12px 22px",
                  }}
                >
                  Save Changes
                </button>

                <button
                  onClick={handleCancel}
                  style={{
                    padding: "12px 22px",
                    borderRadius: "10px",
                    border: "1px solid #d7dce5",
                    background: "#ffffff",
                    cursor: "pointer",
                    fontWeight: "600",
                  }}
                >
                  Cancel
                </button>
              </div>

            </div>
          )}

        </div>

        {/* Statistics */}
        <div className="progress-section">
          <h2>Learning Statistics</h2>

          <div className="dashboard-container">

            <div className="dashboard-card">
              <span>Quizzes Attempted</span>

              <h3>
                {quizHistory.length}
              </h3>

              <p>
                Total attempts
              </p>
            </div>

            <div className="dashboard-card">
              <span>Topics Completed</span>

              <h3>
                {completedTopics.length}
              </h3>

              <p>
                Topics finished
              </p>
            </div>

            <div className="dashboard-card">
              <span>Average Score</span>

              <h3>
                {quizHistory.length > 0
                  ? `${averageScore}%`
                  : "—"}
              </h3>

              <p>
                Overall performance
              </p>
            </div>

            <div className="dashboard-card">
              <span>Learning Status</span>

              <h3>
                {quizHistory.length === 0
                  ? "Getting Started"
                  : averageScore >= 80
                  ? "Excellent"
                  : averageScore >= 60
                  ? "On Track"
                  : "Keep Practicing"}
              </h3>

              <p>
                Based on your activity
              </p>
            </div>

          </div>
        </div>

        {/* Recent Performance */}
        <div className="dashboard-box">
          <h2>Recent Performance</h2>

          {quizHistory.length > 0 ? (
            <div className="quiz-history-list">
              {quizHistory
                .slice()
                .reverse()
                .slice(0, 5)
                .map((result, index) => {
                  const percentage =
                    Math.round(
                      (result.score / result.total) * 100
                    );

                  return (
                    <div
                      className="history-item"
                      key={index}
                    >
                      <div>
                        <strong>
                          {result.topic}
                        </strong>

                        <p>
                          {result.subject}
                          {" • "}
                          {result.date}
                        </p>
                      </div>

                      <div className="history-score">
                        <strong>
                          {result.score}/{result.total}
                        </strong>

                        <span>
                          {percentage}%
                        </span>
                      </div>
                    </div>
                  );
                })}
            </div>
          ) : (
            <p>
              Your quiz performance will appear here after
              you complete your first quiz.
            </p>
          )}
        </div>

        {/* Learning Summary */}
        <div className="dashboard-sections">

          <div className="dashboard-box">
            <h2>Learning Summary</h2>

            {quizHistory.length > 0 ? (
              <>
                <p>
                  You have attempted{" "}
                  <strong>
                    {quizHistory.length}
                  </strong>{" "}
                  quiz
                  {quizHistory.length > 1 ? "zes" : ""}.
                </p>

                <p>
                  You have completed{" "}
                  <strong>
                    {completedTopics.length}
                  </strong>{" "}
                  topic
                  {completedTopics.length !== 1 ? "s" : ""}.
                </p>

                <p>
                  Your current average score is{" "}
                  <strong>
                    {averageScore}%
                  </strong>.
                </p>
              </>
            ) : (
              <p>
                Start learning and complete your first quiz
                to build your profile activity.
              </p>
            )}
          </div>

          <div className="dashboard-box">
            <h2>Next Step</h2>

            <p>
              Continue learning, complete more topics, and
              improve your quiz performance.
            </p>

            <button
              onClick={() => navigate("/home")}
            >
              Continue Learning
            </button>
          </div>

        </div>

      </main>
    </div>
  );
}

export default Profile;
import { useNavigate } from "react-router";
import Navbar from "../components/Navbar";

function Home() {
  const navigate = useNavigate();

  const userName =
    localStorage.getItem("userName") || "Student";

  const selectedSubject =
    localStorage.getItem("selectedSubject") || "";

  const selectedTopic =
    localStorage.getItem("selectedTopic") || "";

  const quizHistory = JSON.parse(
    localStorage.getItem("quizHistory") || "[]"
  );

  const completedTopics = JSON.parse(
    localStorage.getItem("completedTopics") || "[]"
  );

  const subjects = [
    {
      name: "DBMS",
      description:
        "Learn databases, SQL, normalization, transactions and more.",
    },
    {
      name: "Python",
      description:
        "Build your programming foundation with Python concepts and practice.",
    },
    {
      name: "Data Structures",
      description:
        "Understand arrays, linked lists, stacks, queues, trees and algorithms.",
    },
    {
      name: "Operating Systems",
      description:
        "Explore processes, memory, scheduling, files and OS fundamentals.",
    },
    {
      name: "Computer Networks",
      description:
        "Learn networking concepts, protocols, layers and communication.",
    },
    {
      name: "Machine Learning",
      description:
        "Understand ML fundamentals, algorithms, training and evaluation.",
    },
  ];

  const getStarted = (subject) => {
    localStorage.setItem("selectedSubject", subject);
    localStorage.removeItem("selectedTopic");

    navigate("/topics");
  };

  return (
    <div>
      <Navbar />

      <main className="dashboard-page">

        {/* Hero Section */}
        <div className="dashboard-header">
          <div>
            <p className="page-label">
              LEARNING HUB
            </p>

            <h1>
              Welcome, {userName}
            </h1>

            <p>
              Choose a subject, explore topics, and test your
              knowledge with personalized quizzes.
            </p>
          </div>

          <button
            className="start-learning-btn"
            onClick={() => navigate("/dashboard")}
          >
            View Dashboard
          </button>
        </div>

        {/* Continue Learning */}
        {selectedSubject && selectedTopic && (
          <div className="dashboard-box">

            <p className="page-label">
              CONTINUE LEARNING
            </p>

            <h2>
              Continue with {selectedSubject}
            </h2>

            <p>
              You were learning{" "}
              <strong>{selectedTopic}</strong>.
            </p>

            <button
              onClick={() => navigate("/quiz")}
            >
              Continue Quiz
            </button>

          </div>
        )}

        {/* Quick Stats */}
        <div className="progress-section">

          <h2>
            Your Learning Overview
          </h2>

          <div className="dashboard-container">

            <div className="dashboard-card">
              <span>
                Subjects Available
              </span>

              <h3>
                {subjects.length}
              </h3>

              <p>
                Core CS subjects
              </p>
            </div>

            <div className="dashboard-card">
              <span>
                Topics Completed
              </span>

              <h3>
                {completedTopics.length}
              </h3>

              <p>
                Keep progressing
              </p>
            </div>

            <div className="dashboard-card">
              <span>
                Quizzes Attempted
              </span>

              <h3>
                {quizHistory.length}
              </h3>

              <p>
                Practice sessions
              </p>
            </div>

            <div className="dashboard-card">
              <span>
                Current Subject
              </span>

              <h3>
                {selectedSubject || "—"}
              </h3>

              <p>
                Your latest selection
              </p>
            </div>

          </div>
        </div>

        {/* Subject Section */}
        <div className="progress-section">

          <h2>
            Choose a Subject
          </h2>

          <p>
            Select a subject to explore its topics and start
            learning.
          </p>

          <div className="dashboard-container">

            {subjects.map((subject) => (
              <div
                className="dashboard-card"
                key={subject.name}
              >

                <span>
                  SUBJECT
                </span>

                <h3>
                  {subject.name}
                </h3>

                <p>
                  {subject.description}
                </p>

                <button
                  onClick={() =>
                    getStarted(subject.name)
                  }
                >
                  Explore Topics
                </button>

              </div>
            ))}

          </div>
        </div>

        {/* Learning Tip */}
        <div className="dashboard-box">

          <p className="page-label">
            LEARNING TIP
          </p>

          <h2>
            Learn → Practice → Improve
          </h2>

          <p>
            Don't just read the concepts. Complete quizzes
            after each topic to identify your strengths and
            areas that need more practice.
          </p>

        </div>

      </main>
    </div>
  );
}

export default Home;
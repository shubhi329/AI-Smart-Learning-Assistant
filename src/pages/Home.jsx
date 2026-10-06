import { useState } from "react";
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

  const [subjectQuery, setSubjectQuery] = useState("");
  const [searchedSubject, setSearchedSubject] = useState("");

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

  const filteredSubjects = subjects.filter((subject) => {
    const query = searchedSubject.trim().toLowerCase();

    if (!query) {
      return true;
    }

    return (
      subject.name.toLowerCase().includes(query) ||
      subject.description.toLowerCase().includes(query)
    );
  });

  const getStarted = (subject) => {
    localStorage.setItem(
      "selectedSubject",
      subject
    );

    localStorage.removeItem("selectedTopic");

    navigate("/topics");
  };

  const handleSubjectSearch = () => {
    setSearchedSubject(subjectQuery);
  };

  const handleSearchKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSubjectSearch();
    }
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
              Search for a subject, explore important topics,
              and test your knowledge with personalized quizzes.
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

        {/* Subject Search + Subject Section */}
        <div className="progress-section">

          <h2>
            Select a Subject
          </h2>

          <p>
            Search for a subject or choose one from the available subjects.
          </p>

          <div className="subject-input-box">

            <input
              type="text"
              placeholder="Search subject e.g. DBMS, Python, Machine Learning..."
              value={subjectQuery}
              onChange={(event) =>
                setSubjectQuery(event.target.value)
              }
              onKeyDown={handleSearchKeyDown}
            />

            <button
              type="button"
              onClick={handleSubjectSearch}
            >
              Search
            </button>

          </div>

          <p className="suggestion-text">
            Try: DBMS • Python • Data Structures • Operating Systems • Computer Networks • Machine Learning
          </p>

          {filteredSubjects.length > 0 ? (
            <div className="dashboard-container">

              {filteredSubjects.map((subject) => (
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
          ) : (
            <div className="dashboard-box">
              <p className="page-label">
                NO MATCH FOUND
              </p>

              <h2>
                Subject not available yet
              </h2>

              <p>
                Try searching for DBMS, Python, Data Structures,
                Operating Systems, Computer Networks, or Machine Learning.
              </p>
            </div>
          )}

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
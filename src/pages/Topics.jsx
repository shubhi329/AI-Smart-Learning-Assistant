import { useNavigate } from "react-router";
import Navbar from "../components/Navbar";

function Topics() {
  const navigate = useNavigate();

  const selectedSubject =
    localStorage.getItem("selectedSubject") || "DBMS";

  const completedTopics = JSON.parse(
    localStorage.getItem("completedTopics") || "[]"
  );

  const topicsBySubject = {
    DBMS: [
      "Introduction and Fundamentals",
      "Core Concepts",
      "Important Terminology",
      "Intermediate Concepts",
      "Practical Applications",
      "Advanced Concepts",
    ],

    Python: [
      "Introduction and Fundamentals",
      "Core Concepts",
      "Important Terminology",
      "Intermediate Concepts",
      "Practical Applications",
      "Advanced Concepts",
    ],

    "Data Structures": [
      "Introduction and Fundamentals",
      "Core Concepts",
      "Important Terminology",
      "Intermediate Concepts",
      "Practical Applications",
      "Advanced Concepts",
    ],

    "Operating Systems": [
      "Introduction and Fundamentals",
      "Core Concepts",
      "Important Terminology",
      "Intermediate Concepts",
      "Practical Applications",
      "Advanced Concepts",
    ],

    "Computer Networks": [
      "Introduction and Fundamentals",
      "Core Concepts",
      "Important Terminology",
      "Intermediate Concepts",
      "Practical Applications",
      "Advanced Concepts",
    ],

    "Machine Learning": [
      "Introduction and Fundamentals",
      "Core Concepts",
      "Important Terminology",
      "Intermediate Concepts",
      "Practical Applications",
      "Advanced Concepts",
    ],
  };

  const topics =
    topicsBySubject[selectedSubject] ||
    topicsBySubject.DBMS;

  const isTopicCompleted = (topic) => {
    return completedTopics.some(
      (item) =>
        item.subject === selectedSubject &&
        item.topic === topic
    );
  };

  const startTopic = (topic) => {
    localStorage.setItem(
      "selectedSubject",
      selectedSubject
    );

    localStorage.setItem(
      "selectedTopic",
      topic
    );

    navigate("/quiz");
  };

  const completedCount = topics.filter((topic) =>
    isTopicCompleted(topic)
  ).length;

  const progressPercentage = Math.round(
    (completedCount / topics.length) * 100
  );

  return (
    <div>
      <Navbar />

      <main className="dashboard-page">

        {/* Header */}
        <div className="dashboard-header">

          <div>
            <p className="page-label">
              TOPIC LIBRARY
            </p>

            <h1>
              {selectedSubject}
            </h1>

            <p>
              Explore topics, practice your knowledge, and
              complete quizzes to track your progress.
            </p>
          </div>

          <button
            className="start-learning-btn"
            onClick={() => navigate("/home")}
          >
            Change Subject
          </button>

        </div>

        {/* Progress */}
        <div className="dashboard-box">

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "15px",
              flexWrap: "wrap",
            }}
          >

            <div>
              <p className="page-label">
                SUBJECT PROGRESS
              </p>

              <h2>
                {completedCount} of {topics.length} topics
                completed
              </h2>
            </div>

            <strong>
              {progressPercentage}%
            </strong>

          </div>

          <div
            style={{
              width: "100%",
              height: "10px",
              background: "#e8ebf2",
              borderRadius: "10px",
              marginTop: "20px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${progressPercentage}%`,
                height: "100%",
                background:
                  "linear-gradient(90deg, #4f46e5, #06b6d4)",
                borderRadius: "10px",
                transition: "width 0.3s ease",
              }}
            />
          </div>

        </div>

        {/* Topics */}
        <div className="progress-section">

          <h2>
            Choose a Topic
          </h2>

          <p>
            Select a topic below to start your quiz.
          </p>

          <div className="dashboard-container">

            {topics.map((topic, index) => {

              const completed =
                isTopicCompleted(topic);

              return (
                <div
                  className="dashboard-card"
                  key={topic}
                >

                  <span>
                    TOPIC {index + 1}
                  </span>

                  <h3>
                    {topic}
                  </h3>

                  <p>
                    {completed
                      ? "You have already completed this topic."
                      : "Learn the concepts and test your knowledge."}
                  </p>

                  <button
                    onClick={() => startTopic(topic)}
                  >
                    {completed
                      ? "Practice Again"
                      : "Start Quiz"}
                  </button>

                  {completed && (
                    <p
                      style={{
                        marginTop: "12px",
                        fontWeight: "600",
                      }}
                    >
                      ✓ Completed
                    </p>
                  )}

                </div>
              );
            })}

          </div>

        </div>

        {/* Learning Flow */}
        <div className="dashboard-box">

          <p className="page-label">
            YOUR LEARNING FLOW
          </p>

          <h2>
            Learn → Practice → Review
          </h2>

          <p>
            Choose a topic, attempt the quiz, review your
            answers, and keep practicing until you master
            the concept.
          </p>

        </div>

      </main>
    </div>
  );
}

export default Topics;
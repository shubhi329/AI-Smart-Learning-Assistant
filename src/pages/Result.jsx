import { useNavigate } from "react-router";
import Navbar from "../components/Navbar";

function Result() {
  const navigate = useNavigate();

  const selectedSubject =
    localStorage.getItem("selectedSubject") || "Computer Science";

  const selectedTopic =
    localStorage.getItem("selectedTopic") || "Fundamentals";

  const score =
    Number(localStorage.getItem("quizScore")) || 0;

  const totalQuestions =
    Number(localStorage.getItem("totalQuestions")) || 3;

  const quizReview = JSON.parse(
    localStorage.getItem("quizReview") || "[]"
  );

  const percentage =
    totalQuestions > 0
      ? Math.round((score / totalQuestions) * 100)
      : 0;

  const incorrectAnswers =
    totalQuestions - score;

  let message =
    "Keep practicing to improve your score.";

  if (percentage === 100) {
    message = "Excellent! Perfect score. 🎉";
  } else if (percentage >= 67) {
    message =
      "Great performance! Keep improving.";
  } else {
    message =
      "Good effort! Review the answers below and keep practicing.";
  }

  return (
    <div>
      <Navbar />

      <main className="result-page">
        <div className="result-header">
          <p className="page-label">
            QUIZ COMPLETED
          </p>

          <h1>
            Great Job! 🎉
          </h1>

          <p>
            You completed the quiz for{" "}
            <strong>{selectedTopic}</strong>.
          </p>
        </div>

        <div className="selected-subject">
          <span>Subject</span>

          <h2>{selectedSubject}</h2>
        </div>

        <div className="score-card">
          <p className="score-label">
            Your Score
          </p>

          <h2>
            {score} / {totalQuestions}
          </h2>

          <div className="score-percentage">
            {percentage}%
          </div>

          <p className="score-message">
            {message}
          </p>
        </div>

        <div className="result-summary">
          <div className="summary-card">
            <span>Correct Answers</span>

            <strong>{score}</strong>
          </div>

          <div className="summary-card">
            <span>Incorrect Answers</span>

            <strong>{incorrectAnswers}</strong>
          </div>

          <div className="summary-card">
            <span>Total Questions</span>

            <strong>{totalQuestions}</strong>
          </div>
        </div>

        <div className="dashboard-box">
          <h2>
            Review Your Answers
          </h2>

          {quizReview.length > 0 ? (
            quizReview.map((item, index) => {
              const isCorrect =
                item.selectedAnswer ===
                item.correctAnswer;

              return (
                <div
                  className="dashboard-box"
                  key={index}
                  style={{
                    marginTop: "20px",
                  }}
                >
                  {/* Question Number */}
                  <p
                    style={{
                      marginBottom: "12px",
                      fontWeight: "800",
                      color: "#111827",
                      letterSpacing: "0.2px",
                    }}
                  >
                    Question {index + 1}
                  </p>

                  {/* Question */}
                  <p
                    style={{
                      marginBottom: "15px",
                      fontWeight: "750",
                      color: "#111827",
                      lineHeight: "1.6",
                    }}
                  >
                    {item.question}
                  </p>

                  {/* Your Answer */}
                  <p
                    style={{
                      marginBottom: "8px",
                      color: "#111827",
                    }}
                  >
                    <strong
                      style={{
                        color: "#111827",
                        fontWeight: "800",
                      }}
                    >
                      Your Answer:
                    </strong>{" "}
                    {item.options[item.selectedAnswer]}
                  </p>

                  {/* Correct Answer */}
                  <p
                    style={{
                      marginBottom: "8px",
                      color: "#111827",
                    }}
                  >
                    <strong
                      style={{
                        color: "#111827",
                        fontWeight: "800",
                      }}
                    >
                      Correct Answer:
                    </strong>{" "}
                    {item.options[item.correctAnswer]}
                  </p>

                  {/* Status */}
                  <p
                    style={{
                      marginBottom: "12px",
                      fontWeight: "800",
                      color: "#111827",
                    }}
                  >
                    <span
                      style={{
                        color: isCorrect
                          ? "#16a34a"
                          : "#dc2626",
                        fontWeight: "900",
                        marginRight: "5px",
                      }}
                    >
                      {isCorrect ? "✓" : "✗"}
                    </span>

                    {isCorrect
                      ? "Correct"
                      : "Incorrect"}
                  </p>

                  {/* Explanation */}
                  <p
                    style={{
                      color: "#111827",
                      lineHeight: "1.7",
                    }}
                  >
                    <strong
                      style={{
                        color: "#111827",
                        fontWeight: "800",
                      }}
                    >
                      Explanation:
                    </strong>{" "}
                    {item.explanation}
                  </p>
                </div>
              );
            })
          ) : (
            <p>
              Answer review is not available for this quiz.
            </p>
          )}
        </div>

        <div className="result-actions">
          <button
            onClick={() => navigate("/quiz")}
          >
            Try Again
          </button>

          <button
            onClick={() => navigate("/dashboard")}
          >
            Go to Dashboard
          </button>
        </div>
      </main>
    </div>
  );
}

export default Result;
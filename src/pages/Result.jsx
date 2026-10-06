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

  const percentage = Math.round(
    (score / totalQuestions) * 100
  );

  const incorrectAnswers =
    totalQuestions - score;

  let message = "Keep practicing to improve your score.";

  if (percentage === 100) {
    message = "Excellent! Perfect score. 🎉";
  } else if (percentage >= 67) {
    message = "Great performance! Keep improving.";
  } else {
    message =
      "Good effort! Review the answers below and keep practicing.";
  }

  return (
    <div>
      <Navbar />

      <main className="result-page">
        <div className="result-header">
          <p className="page-label">QUIZ COMPLETED</p>

          <h1>Great Job! 🎉</h1>

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
          <p className="score-label">Your Score</p>

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
          <h2>Review Your Answers</h2>

          {quizReview.length > 0 ? (
            quizReview.map((item, index) => {
              const isCorrect =
                item.selectedAnswer === item.correctAnswer;

              return (
                <div
                  className="dashboard-box"
                  key={index}
                  style={{
                    marginTop: "20px",
                  }}
                >
                  <p
                    style={{
                      fontWeight: "700",
                      marginBottom: "12px",
                    }}
                  >
                    Question {index + 1}
                  </p>

                  <p
                    style={{
                      fontWeight: "600",
                      marginBottom: "15px",
                    }}
                  >
                    {item.question}
                  </p>

                  <p
                    style={{
                      marginBottom: "8px",
                    }}
                  >
                    <strong>Your Answer:</strong>{" "}
                    {item.options[item.selectedAnswer]}
                  </p>

                  <p
                    style={{
                      marginBottom: "8px",
                    }}
                  >
                    <strong>Correct Answer:</strong>{" "}
                    {item.options[item.correctAnswer]}
                  </p>

                  <p
                    style={{
                      marginBottom: "12px",
                      fontWeight: "600",
                    }}
                  >
                    {isCorrect
                      ? "✓ Correct"
                      : "✗ Incorrect"}
                  </p>

                  <p>
                    <strong>Explanation:</strong>{" "}
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
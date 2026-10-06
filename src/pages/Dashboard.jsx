import Navbar from "../components/Navbar";
import { useNavigate } from "react-router";

function Dashboard() {
  const navigate = useNavigate();

  const userName =
    localStorage.getItem("userName") || "Student";

  const selectedSubject =
    localStorage.getItem("selectedSubject") || "No subject selected";

  const selectedTopic =
    localStorage.getItem("selectedTopic") || "No topic selected";

  const quizScore = Number(
    localStorage.getItem("quizScore")
  );

  const totalQuestions = Number(
    localStorage.getItem("totalQuestions")
  );

  const quizHistory = JSON.parse(
    localStorage.getItem("quizHistory") || "[]"
  );

  const completedTopics = JSON.parse(
    localStorage.getItem("completedTopics") || "[]"
  );

  const currentHour = new Date().getHours();

  let greeting = "Good evening";

  if (currentHour < 12) {
    greeting = "Good morning";
  } else if (currentHour < 17) {
    greeting = "Good afternoon";
  }

  const hasQuizResult =
    !isNaN(quizScore) &&
    !isNaN(totalQuestions) &&
    totalQuestions > 0;

  const latestPercentage = hasQuizResult
    ? Math.round(
        (quizScore / totalQuestions) * 100
      )
    : 0;

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

  const totalTopics = 6;

  const completedCurrentSubject =
    completedTopics.filter(
      (item) =>
        item.subject === selectedSubject
    ).length;

  const learningProgress =
    totalTopics > 0
      ? Math.min(
          Math.round(
            (completedCurrentSubject /
              totalTopics) *
              100
          ),
          100
        )
      : 0;

  let progressMessage =
    "Start your first topic to begin building your learning progress.";

  if (
    completedCurrentSubject > 0 &&
    completedCurrentSubject < totalTopics
  ) {
    progressMessage =
      "You're making steady progress. Keep going!";
  }

  if (completedCurrentSubject === totalTopics) {
    progressMessage =
      "Excellent! You've completed all available topics.";
  }

  let performanceMessage =
    "Complete a quiz to start tracking your performance.";

  if (hasQuizResult) {
    if (latestPercentage >= 80) {
      performanceMessage =
        "Excellent work! You're showing strong understanding.";
    } else if (latestPercentage >= 60) {
      performanceMessage =
        "Good progress. A little more practice can improve your score.";
    } else {
      performanceMessage =
        "Keep practicing and review the topic before trying again.";
    }
  }

  return (
    <div>
      <Navbar />

      <main className="dashboard-page">

        {/* Header */}
        <div className="dashboard-header">
          <div>
            <p className="page-label">
              PERSONALIZED LEARNING
            </p>

            <h1>
              {greeting}, {userName}!
            </h1>

            <p>
              Welcome back. Let's continue your learning journey.
            </p>
          </div>

          <button
            className="start-learning-btn"
            onClick={() => navigate("/home")}
          >
            Continue Learning
          </button>
        </div>

        {/* Main Stats */}
        <section className="progress-section">
          <h2>Your Overview</h2>

          <div className="dashboard-container">

            <div className="dashboard-card">
              <span>Current Subject</span>

              <h3>
                {selectedSubject}
              </h3>

              <p>
                {selectedSubject !==
                "No subject selected"
                  ? "Currently learning"
                  : "Choose a subject to begin"}
              </p>
            </div>

            <div className="dashboard-card">
              <span>Latest Quiz</span>

              <h3>
                {hasQuizResult
                  ? `${quizScore}/${totalQuestions}`
                  : "—"}
              </h3>

              <p>
                {hasQuizResult
                  ? `${latestPercentage}% score`
                  : "No quiz completed yet"}
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
                {quizHistory.length > 0
                  ? `Across ${quizHistory.length} quiz${
                      quizHistory.length > 1
                        ? "zes"
                        : ""
                    }`
                  : "No quiz attempts yet"}
              </p>
            </div>

            <div className="dashboard-card">
              <span>Topics Completed</span>

              <h3>
                {completedCurrentSubject}/{totalTopics}
              </h3>

              <p>
                {completedCurrentSubject === 0
                  ? "Not started"
                  : `${learningProgress}% completed`}
              </p>
            </div>

          </div>
        </section>

        {/* Learning Progress */}
        <div className="dashboard-box">

          <h2>Learning Progress</h2>

          <p>
            {progressMessage}
          </p>

          <div className="progress-info">
            <span>
              {completedCurrentSubject} of{" "}
              {totalTopics} topics
            </span>

            <span>
              {learningProgress}%
            </span>
          </div>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{
                width: `${learningProgress}%`,
              }}
            ></div>
          </div>

        </div>

        {/* Continue + Performance */}
        <div className="dashboard-sections">

          <div className="dashboard-box">
            <h2>Continue Learning</h2>

            {selectedTopic !==
            "No topic selected" ? (
              <>
                <p>
                  Continue with:
                </p>

                <p>
                  <strong>
                    {selectedTopic}
                  </strong>
                </p>

                <button
                  onClick={() =>
                    navigate("/quiz")
                  }
                >
                  Continue Quiz
                </button>
              </>
            ) : (
              <>
                <p>
                  Choose a subject and explore
                  personalized topics to begin learning.
                </p>

                <button
                  onClick={() =>
                    navigate("/home")
                  }
                >
                  Explore Subjects
                </button>
              </>
            )}
          </div>

          <div className="dashboard-box">

            <h2>Latest Performance</h2>

            {hasQuizResult ? (
              <>
                <p>
                  Latest topic:
                </p>

                <p>
                  <strong>
                    {selectedTopic}
                  </strong>
                </p>

                <p>
                  Score:{" "}
                  {quizScore}/
                  {totalQuestions}
                </p>

                <p>
                  {performanceMessage}
                </p>
              </>
            ) : (
              <p>
                {performanceMessage}
              </p>
            )}

          </div>

        </div>

        {/* Areas to Improve */}
        <div className="dashboard-box">

          <h2>Areas to Improve</h2>

          {quizHistory.length > 0 ? (
            (() => {
              const topicPerformance = {};

              quizHistory.forEach((result) => {
                if (!topicPerformance[result.topic]) {
                  topicPerformance[result.topic] = {
                    total: 0,
                    attempts: 0,
                  };
                }

                topicPerformance[result.topic].total +=
                  (result.score /
                    result.total) *
                  100;

                topicPerformance[result.topic].attempts +=
                  1;
              });

              const weakAreas =
                Object.entries(
                  topicPerformance
                )
                  .map(
                    ([topic, data]) => ({
                      topic,
                      score: Math.round(
                        data.total /
                          data.attempts
                      ),
                    })
                  )
                  .filter(
                    (item) =>
                      item.score < 70
                  )
                  .sort(
                    (a, b) =>
                      a.score - b.score
                  );

              return weakAreas.length > 0 ? (
                weakAreas
                  .slice(0, 3)
                  .map((item, index) => (
                    <div
                      className="result-row"
                      key={index}
                    >
                      <span>
                        {item.topic}
                      </span>

                      <strong>
                        {item.score}%
                      </strong>
                    </div>
                  ))
              ) : (
                <p>
                  No major weak areas yet. Keep
                  practicing to maintain your progress.
                </p>
              );
            })()
          ) : (
            <p>
              Complete a few quizzes and we'll identify
              topics that need more practice.
            </p>
          )}

        </div>

        {/* Quiz History */}
        <div className="dashboard-box recent-results">

          <h2>Recent Quiz Activity</h2>

          {quizHistory.length > 0 ? (
            <div className="quiz-history-list">

              {quizHistory
                .slice()
                .reverse()
                .slice(0, 5)
                .map(
                  (result, index) => {
                    const percentage =
                      Math.round(
                        (result.score /
                          result.total) *
                          100
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
                            {result.score}/
                            {result.total}
                          </strong>

                          <span>
                            {percentage}%
                          </span>

                        </div>

                      </div>
                    );
                  }
                )}

            </div>
          ) : (
            <p>
              No quiz activity yet. Your recent attempts
              will appear here.
            </p>
          )}

        </div>

      </main>
    </div>
  );
}

export default Dashboard;
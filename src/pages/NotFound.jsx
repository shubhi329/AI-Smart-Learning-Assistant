import { useNavigate } from "react-router";

function NotFound() {
  const navigate = useNavigate();

  return (
    <main className="auth-page">
      <div className="auth-card" style={{ maxWidth: "500px", width: "100%", textAlign: "center" }}>
        <p className="page-label">404 ERROR</p>

        <h1 style={{ fontSize: "64px", margin: "10px 0" }}>
          404
        </h1>

        <h2>Page Not Found</h2>

        <p
          style={{
            color: "#666",
            lineHeight: "1.6",
            margin: "15px 0 25px",
          }}
        >
          The page you are looking for does not exist or
          may have been moved.
        </p>

        <button
          className="auth-button"
          onClick={() => navigate("/dashboard")}
        >
          Go to Dashboard
        </button>
      </div>
    </main>
  );
}

export default NotFound;
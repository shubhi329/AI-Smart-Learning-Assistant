import { useState } from "react";
import { useNavigate } from "react-router";
import Navbar from "../components/Navbar";
import "./UploadMaterial.css";

function UploadMaterial() {
  const navigate = useNavigate();

  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];

    setError("");
    setMessage("");

    if (!file) {
      return;
    }

    const allowedTypes = [
      "application/pdf",
      "application/vnd.ms-powerpoint",
      "application/vnd.openxmlformats-officedocument.presentationml.presentation",
      "text/plain",
    ];

    const fileExtension = file.name
      .split(".")
      .pop()
      .toLowerCase();

    const allowedExtensions = ["pdf", "ppt", "pptx", "txt"];

    if (
      !allowedTypes.includes(file.type) &&
      !allowedExtensions.includes(fileExtension)
    ) {
      setError(
        "Please upload a PDF, PowerPoint, or text file."
      );
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      setError("File size must be less than 10 MB.");
      return;
    }

    setSelectedFile(file);
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    setError("");
    setMessage("");
  };

  const handleGenerateQuiz = () => {
    if (!selectedFile) {
      setError("Please choose a study file first.");
      return;
    }

    localStorage.setItem(
      "uploadedMaterialName",
      selectedFile.name
    );

    setMessage(
      "Your material has been selected. Direct quiz generation from the uploaded material will be connected to the backend."
    );
  };

  return (
    <div>
      <Navbar />

      <main className="page-container upload-material-page">
        <section className="upload-material-header">
          <p className="page-label">STUDY MATERIAL</p>

          <h1>Upload Your Study Material</h1>

          <p>
            Upload your PDF, PowerPoint, or notes.
            Your quiz will be generated directly from
            the uploaded study material.
          </p>
        </section>

        <section className="dashboard-box upload-material-card">
          <div className="upload-material-intro">
            <div className="upload-material-icon">
              📚
            </div>

            <h2>Choose Your Study Material</h2>

            <p>
              Upload your learning material and get ready
              to test your knowledge with a quiz.
            </p>
          </div>

          <div className="upload-drop-zone">
            <div className="upload-drop-icon">
              ↑
            </div>

            <h3>Upload your file</h3>

            <p>
              Select a PDF, PowerPoint, or text file from
              your device.
            </p>

            <p className="upload-supported-text">
              Supported formats: PDF, PPT, PPTX, TXT ·
              Maximum size: 10 MB
            </p>

            <label className="upload-choose-btn">
              Choose File

              <input
                type="file"
                accept=".pdf,.ppt,.pptx,.txt"
                onChange={handleFileChange}
                hidden
              />
            </label>
          </div>

          {selectedFile && (
            <div className="upload-selected-file">
              <div className="upload-file-icon">
                📄
              </div>

              <div className="upload-file-details">
                <strong>{selectedFile.name}</strong>

                <span>
                  {(selectedFile.size / 1024 / 1024).toFixed(
                    2
                  )}{" "}
                  MB
                </span>
              </div>

              <button
                type="button"
                className="upload-remove-btn"
                onClick={handleRemoveFile}
              >
                Remove
              </button>
            </div>
          )}

          {error && (
            <p className="upload-material-error">
              {error}
            </p>
          )}

          {message && (
            <p className="upload-material-success">
              {message}
            </p>
          )}

          <div className="upload-material-actions">
            <button
              type="button"
              className="upload-primary-btn"
              onClick={handleGenerateQuiz}
            >
              Generate Quiz
            </button>
          </div>
        </section>

        <section className="upload-steps-section">
          <div className="upload-steps-grid">
            <div className="dashboard-box upload-step-card">
              <p className="page-label">STEP 01</p>
              <h3>Upload</h3>
              <p>
                Upload your study material.
              </p>
            </div>

            <div className="dashboard-box upload-step-card">
              <p className="page-label">STEP 02</p>
              <h3>Read Material</h3>
              <p>
                The complete material will be used to
                create your quiz.
              </p>
            </div>

            <div className="dashboard-box upload-step-card">
              <p className="page-label">STEP 03</p>
              <h3>Take Quiz</h3>
              <p>
                Test your understanding with questions
                from your material.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default UploadMaterial;
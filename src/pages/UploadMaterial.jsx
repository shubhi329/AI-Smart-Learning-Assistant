import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import Navbar from "../components/Navbar";
import "./UploadMaterial.css";

function UploadMaterial() {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const allowedExtensions = [".pdf", ".ppt", ".pptx", ".txt"];
  const maxFileSize = 10 * 1024 * 1024;

  const handleFile = (file) => {
    setError("");
    setMessage("");

    if (!file) {
      return;
    }

    const fileName = file.name.toLowerCase();

    const hasValidExtension = allowedExtensions.some((extension) =>
      fileName.endsWith(extension)
    );

    if (!hasValidExtension) {
      setSelectedFile(null);
      setError("Please upload a PDF, PPT, PPTX, or TXT file.");
      return;
    }

    if (file.size > maxFileSize) {
      setSelectedFile(null);
      setError("File size must be 10 MB or less.");
      return;
    }

    setSelectedFile(file);
  };

  const handleInputChange = (event) => {
    const file = event.target.files?.[0];
    handleFile(file);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files?.[0];
    handleFile(file);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleChooseFile = () => {
    fileInputRef.current?.click();
  };

  const handlePrepareMaterial = () => {
    if (!selectedFile) {
      setError("Please select a study material file first.");
      return;
    }

    setError("");
    setMessage(
      "Material selected successfully. PDF/PPT parsing will be connected through the backend next."
    );
  };

  const formatFileSize = (bytes) => {
    if (bytes < 1024) {
      return `${bytes} B`;
    }

    if (bytes < 1024 * 1024) {
      return `${(bytes / 1024).toFixed(1)} KB`;
    }

    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  };

  const removeFile = () => {
    setSelectedFile(null);
    setError("");
    setMessage("");

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div>
      <Navbar />

      <main className="dashboard-page upload-material-page">
        <div className="dashboard-header upload-material-header">
          <div>
            <p className="page-label">STUDY MATERIAL</p>

            <h1>Upload Study Material</h1>

            <p>
              Upload your PDF, PowerPoint, or notes and prepare them
              for your personalized learning experience.
            </p>
          </div>

          <button
            className="start-learning-btn"
            onClick={() => navigate("/home")}
          >
            Back to Learning
          </button>
        </div>

        <div className="dashboard-box upload-material-card">
          <div className="upload-material-intro">
            <div className="upload-material-icon">📚</div>

            <h2>Upload your material</h2>

            <p>
              Choose a study file from your device. The actual parsing,
              text extraction, summaries, and quiz generation will be
              connected through the backend.
            </p>
          </div>

          <div
            className="upload-drop-zone"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            <div className="upload-drop-icon">↑</div>

            <h3>Drag and drop your file here</h3>

            <p>or choose a file from your device</p>

            <p className="upload-supported-text">
              PDF, PPT, PPTX, TXT • Maximum 10 MB
            </p>

            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf,.ppt,.pptx,.txt,application/pdf"
              onChange={handleInputChange}
              hidden
            />

            <button
              type="button"
              className="upload-choose-btn"
              onClick={handleChooseFile}
            >
              Choose File
            </button>
          </div>

          {selectedFile && (
            <div className="upload-selected-file">
              <div className="upload-file-icon">📄</div>

              <div className="upload-file-details">
                <strong>{selectedFile.name}</strong>
                <span>{formatFileSize(selectedFile.size)}</span>
              </div>

              <button
                type="button"
                className="upload-remove-btn"
                onClick={removeFile}
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
              onClick={handlePrepareMaterial}
            >
              Prepare Material
            </button>
          </div>
        </div>

        <div className="progress-section upload-steps-section">
          <h2>How it will work</h2>

          <div className="dashboard-container upload-steps-grid">
            <div className="dashboard-card upload-step-card">
              <span>STEP 01</span>

              <h3>Upload</h3>

              <p>
                Select your PDF, PowerPoint, or notes file.
              </p>
            </div>

            <div className="dashboard-card upload-step-card">
              <span>STEP 02</span>

              <h3>Parse</h3>

              <p>
                The backend will extract useful content from your file.
              </p>
            </div>

            <div className="dashboard-card upload-step-card">
              <span>STEP 03</span>

              <h3>Learn</h3>

              <p>
                Use the extracted content for summaries, topics, and quizzes.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default UploadMaterial;
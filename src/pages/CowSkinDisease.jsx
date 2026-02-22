import { useState } from "react";
import { postForm } from "../api/http";
import '../styles/CowSkinDisease.css'; 

export default function CowSkinDisease() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    setError("");
    setResult(null);
    if (!file) return setError("Please select an image.");

    try {
      const fd = new FormData();
      fd.append("animal_image", file);
      const data = await postForm("/api/cow/predict", fd);
      setResult(data);
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className="feature-section">
      <h1>🐄 Cow Skin Disease Detection</h1>
      <p>Upload an image of the cow skin to detect possible diseases.</p>

      <form onSubmit={onSubmit} encType="multipart/form-data" className="form-container">
        <label htmlFor="animal_image">Upload Animal Image:</label>
        <input
          type="file"
          id="animal_image"
          accept="image/*"
          required
          onChange={(e) => setFile(e.target.files?.[0] || null)}
        />
        <button type="submit" className="btn-submit">Detect Disease</button>
      </form>

      {result && (
        <div className="result">
          <h2>Detection Result</h2>
          <p><strong>Disease:</strong> {result.disease}</p>
          <p><strong>Confidence:</strong> {Number(result.confidence).toFixed(2)}%</p>
          <p><strong>Advice:</strong></p>
          <p>{result.advice}</p>
        </div>
      )}

      {error && <div className="error-message">{error}</div>}
    </div>
  );
}
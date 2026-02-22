import { useState } from "react";
import { postJson } from "../api/http";
import '../styles/CropSuggestion.css'; 

export default function CropSuggestion() {
  const [form, setForm] = useState({
    N: "", P: "", K: "",
    temperature: "", humidity: "", ph: "", rainfall: ""
  });
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  function onChange(e) {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    setError("");
    setResult(null);
    try {
      const payload = Object.fromEntries(
        Object.entries(form).map(([k, v]) => [k, Number(v)])
      );
      const data = await postJson("/api/crop/predict", payload);
      setResult(data);
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className="feature-section">
      <h1>🌱 Crop Recommendation System</h1>
      <p>Enter soil and weather details to get the most suitable crop.</p>

      <form onSubmit={onSubmit} className="crop-form">
        {["N", "P", "K", "temperature", "humidity", "ph", "rainfall"].map((key) => (
          <div key={key} className="form-group">
            <label htmlFor={key}>{key === "ph" ? "Soil pH" : key}</label>
            <input
              type="number"
              step="any"
              name={key}
              id={key}
              value={form[key]}
              onChange={onChange}
              required
            />
          </div>
        ))}
        <button type="submit" className="btn-submit">Get Crop Recommendation</button>
      </form>

      {result && (
        <div className="result">
          <h2>Crop Recommendation Result</h2>
          <p><strong>Recommended Crop:</strong> {result.predicted_crop}</p>
          <hr />
          <p><strong>Recommended Fertilizer:</strong> {result.fertilizer}</p>
          <p><strong>Suitable Season:</strong> {result.season}</p>
          <p><strong>Ideal Soil pH:</strong> {String(result.ph_level).replaceAll("_", " ")}</p>
          <p><strong>Rainfall Requirement:</strong> {String(result.rainfall_level).replaceAll("_", " ")}</p>
        </div>
      )}

      {error && <div className="error-message">{error}</div>}
    </div>
  );
}
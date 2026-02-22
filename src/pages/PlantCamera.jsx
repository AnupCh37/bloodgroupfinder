import { useEffect, useState } from "react";
import { apiUrl } from "../api/http";
import "../styles/PlantCamera.css"; // Ensure you have this stylesheet for styling

export default function PlantCamera() {
  const [running, setRunning] = useState(false);
  const [prediction, setPrediction] = useState("Waiting...");
  const [error, setError] = useState("");

  // Directly handle the stream URL here without `useMemo`
  const streamSrc = running ? apiUrl(`/api/camera/stream?t=${Date.now()}`) : "";

  useEffect(() => {
    if (!running) return;

    let alive = true;
    const timer = setInterval(async () => {
      try {
        const res = await fetch(apiUrl("/api/camera/latest"), { cache: "no-store" });
        if (!res.ok) throw new Error("Failed to fetch prediction");
        const j = await res.json();
        if (alive && j?.result) setPrediction(j.result);
      } catch (e) {
        setError("Error fetching prediction data.");
      }
    }, 1000);

    // Cleanup the timer when the component unmounts or the camera stops
    return () => {
      alive = false;
      clearInterval(timer);
    };
  }, [running]);

 async function start() {
  setError("");  // Clear previous error
  try {
    const res = await fetch(apiUrl("/api/camera/start"), { method: "POST" });
    if (!res.ok) {
      const j = await res.json().catch(() => ({}));
      throw new Error(j.message || "Failed to start camera");
    }
    setRunning(true);
    setStreamSrc("/api/camera/stream"); 
    console.log("Camera started and stream should be accessible now.");
  } catch (e) {
    setError(e.message);
  }
}

  async function stop() {
    setError("");
    try {
      await fetch(apiUrl("/api/camera/stop"), { method: "POST" });
    } catch {
      /* ignore */
    }
    setRunning(false);
    setPrediction("Waiting...");
  }

  return (
    <div className="container mx-auto max-w-xl p-6">
      <h1 className="text-2xl font-bold mb-4">Plant Camera</h1>

      <div className="controls mb-4 flex gap-4 items-center">
        <button onClick={start} disabled={running} className="btn-primary">
          Start Camera
        </button>
        <button onClick={stop} disabled={!running} className="btn-secondary">
          Stop Camera
        </button>

        <span className="ml-4">
          Stream:{" "}
          <span className={`badge ${running ? "bg-green-500" : "bg-red-500"}`}>
            {running ? "Running" : "Stopped"}
          </span>{" "}
          | Prediction: <span className="badge">{prediction}</span>
        </span>
      </div>

      <div className="stream-container mb-4 border border-gray-300" style={{ background: "#000" }}>
        {running ? (
          <img src={streamSrc} alt="Video stream" className="block w-full" />
        ) : (
          <div className="text-white p-6">Video stream will appear here</div>
        )}
      </div>

      {error && <div className="error-message text-red-500 mt-4">{error}</div>}
    </div>
  );
}
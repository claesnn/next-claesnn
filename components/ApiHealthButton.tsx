"use client";
import React, { useState } from "react";

export default function ApiHealthButton() {
  const [apiStatus, setApiStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const checkApiHealth = async () => {
    setLoading(true);
    setApiStatus(null);
    try {
      const res = await fetch("https://api.claesnn.com/health/");
      const data = await res.json();
      setApiStatus(data.status);
    } catch (err) {
      setApiStatus("error");
    }
    setLoading(false);
  };

  return (
    <div style={{ margin: "2rem 0" }}>
      <button
        onClick={checkApiHealth}
        style={{ padding: "0.5rem 1rem", fontSize: "1rem" }}
      >
        {loading ? "Checking..." : "Check API Health"}
      </button>
      {apiStatus && (
        <div style={{ marginTop: "1rem" }}>
          API status: <strong>{apiStatus}</strong>
        </div>
      )}
    </div>
  );
}

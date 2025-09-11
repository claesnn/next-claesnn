"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";

interface HealthResponse {
  status: string;
}

const fetchHealthStatus = async (): Promise<HealthResponse> => {
  const res = await fetch("https://api.claesnn.com/health/");
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
};

export default function ApiHealthButton() {
  const { data, isLoading, isError, error, refetch, isFetching } = useQuery({
    queryKey: ["apiHealth"],
    queryFn: fetchHealthStatus,
    enabled: false, // Don't automatically fetch on mount
    retry: 1,
    staleTime: 30 * 1000, // Data is fresh for 30 seconds
  });

  const handleCheckHealth = () => {
    refetch();
  };

  const getStatusDisplay = () => {
    if (isError) {
      return (
        <div style={{ marginTop: "1rem", color: "red" }}>
          API status: <strong>Error</strong>
          {error instanceof Error && (
            <div style={{ fontSize: "0.9em", opacity: 0.7 }}>
              {error.message}
            </div>
          )}
        </div>
      );
    }

    if (data) {
      return (
        <div style={{ marginTop: "1rem", color: "green" }}>
          API status: <strong>{data.status}</strong>
        </div>
      );
    }

    return null;
  };

  return (
    <div style={{ margin: "2rem 0" }}>
      <button
        onClick={handleCheckHealth}
        disabled={isLoading || isFetching}
        style={{
          padding: "0.5rem 1rem",
          fontSize: "1rem",
          opacity: isLoading || isFetching ? 0.6 : 1,
          cursor: isLoading || isFetching ? "not-allowed" : "pointer",
        }}
      >
        {isLoading || isFetching ? "Checking..." : "Check API Health"}
      </button>
      {getStatusDisplay()}
    </div>
  );
}

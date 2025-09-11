"use client";
import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

interface Counter {
  id: number;
  name: string;
  count: number;
  created_at: string;
  updated_at: string;
}

const fetchCounter = async (id: number): Promise<Counter> => {
  const res = await fetch(`https://api.claesnn.com/counters/${id}/`);
  if (!res.ok) {
    throw new Error("Failed to fetch counter");
  }
  return res.json();
};

const incrementCounter = async (id: number): Promise<Counter> => {
  const res = await fetch(`https://api.claesnn.com/counters/${id}/increment/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });
  if (!res.ok) {
    throw new Error("Failed to increment counter");
  }
  return res.json();
};

const decrementCounter = async (id: number): Promise<Counter> => {
  const res = await fetch(`https://api.claesnn.com/counters/${id}/decrement/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });
  if (!res.ok) {
    throw new Error("Failed to decrement counter");
  }
  return res.json();
};

export default function CounterComponent() {
  const counterId = 1;
  const queryClient = useQueryClient();

  // Fetch counter data
  const {
    data: counter,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["counter", counterId],
    queryFn: () => fetchCounter(counterId),
    refetchInterval: 5000, // Refetch every 5 seconds
  });

  // Increment mutation
  const incrementMutation = useMutation({
    mutationFn: () => incrementCounter(counterId),
    onSuccess: (updatedCounter) => {
      // Update the cache with the new counter value
      queryClient.setQueryData(["counter", counterId], updatedCounter);
    },
    onError: (error) => {
      console.error("Increment failed:", error);
    },
  });

  // Decrement mutation
  const decrementMutation = useMutation({
    mutationFn: () => decrementCounter(counterId),
    onSuccess: (updatedCounter) => {
      // Update the cache with the new counter value
      queryClient.setQueryData(["counter", counterId], updatedCounter);
    },
    onError: (error) => {
      console.error("Decrement failed:", error);
    },
  });

  const handleIncrement = () => {
    incrementMutation.mutate();
  };

  const handleDecrement = () => {
    decrementMutation.mutate();
  };

  if (isLoading) {
    return (
      <div style={{ margin: "2rem 0", textAlign: "center" }}>
        <div>Loading counter...</div>
      </div>
    );
  }

  if (isError) {
    return (
      <div style={{ margin: "2rem 0", color: "red", textAlign: "center" }}>
        <div>
          Error:{" "}
          {error instanceof Error ? error.message : "Failed to load counter"}
        </div>
      </div>
    );
  }

  return (
    <div style={{ margin: "2rem 0", textAlign: "center" }}>
      <div style={{ marginBottom: "1rem" }}>
        <h3 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
          Counter: {counter?.name || `Counter ${counterId}`}
        </h3>
        <div style={{ fontSize: "2rem", fontWeight: "bold", margin: "1rem 0" }}>
          {counter?.count ?? 0}
        </div>
      </div>

      <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
        <button
          onClick={handleDecrement}
          disabled={decrementMutation.isPending}
          style={{
            padding: "0.75rem 1.5rem",
            fontSize: "1.1rem",
            backgroundColor: "#ef4444",
            color: "white",
            border: "none",
            borderRadius: "0.5rem",
            cursor: decrementMutation.isPending ? "not-allowed" : "pointer",
            opacity: decrementMutation.isPending ? 0.6 : 1,
          }}
        >
          {decrementMutation.isPending ? "−..." : "− Decrease"}
        </button>

        <button
          onClick={handleIncrement}
          disabled={incrementMutation.isPending}
          style={{
            padding: "0.75rem 1.5rem",
            fontSize: "1.1rem",
            backgroundColor: "#22c55e",
            color: "white",
            border: "none",
            borderRadius: "0.5rem",
            cursor: incrementMutation.isPending ? "not-allowed" : "pointer",
            opacity: incrementMutation.isPending ? 0.6 : 1,
          }}
        >
          {incrementMutation.isPending ? "+..." : "+ Increase"}
        </button>
      </div>

      {(incrementMutation.isError || decrementMutation.isError) && (
        <div style={{ marginTop: "1rem", color: "red" }}>
          <div>
            {incrementMutation.error instanceof Error &&
              incrementMutation.error.message}
            {decrementMutation.error instanceof Error &&
              decrementMutation.error.message}
          </div>
        </div>
      )}

      <div style={{ marginTop: "1rem", fontSize: "0.9rem", opacity: 0.7 }}>
        Last updated:{" "}
        {counter?.updated_at
          ? new Date(counter.updated_at).toLocaleTimeString()
          : "N/A"}
      </div>
    </div>
  );
}

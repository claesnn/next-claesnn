"use client";
import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Loader2 } from "lucide-react";

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

  // Format date helper
  const formatLastUpdated = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInMinutes = Math.floor(
      (now.getTime() - date.getTime()) / (1000 * 60)
    );

    if (diffInMinutes < 1) {
      return "Just now";
    } else if (diffInMinutes < 60) {
      return `${diffInMinutes} minute${diffInMinutes !== 1 ? "s" : ""} ago`;
    } else {
      return date.toLocaleString();
    }
  };

  // Skeleton component to prevent layout shift
  const CounterSkeleton = () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <div className="h-6 bg-gray-200 rounded animate-pulse w-32 mx-auto"></div>
        <div className="h-12 bg-gray-200 rounded animate-pulse w-16 mx-auto"></div>
      </div>
      <div className="flex gap-3 justify-center">
        <div className="h-10 bg-gray-200 rounded animate-pulse w-24"></div>
        <div className="h-10 bg-gray-200 rounded animate-pulse w-24"></div>
      </div>
      <div className="h-4 bg-gray-200 rounded animate-pulse w-40 mx-auto"></div>
    </div>
  );

  if (isLoading) {
    return (
      <div className="py-8 text-center">
        <CounterSkeleton />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="py-8 text-center text-red-600">
        <div>
          Error:{" "}
          {error instanceof Error ? error.message : "Failed to load counter"}
        </div>
      </div>
    );
  }

  return (
    <div className="py-8 text-center space-y-6">
      <div className="space-y-2">
        <h3 className="text-xl font-semibold text-gray-800">
          {counter?.name || `Counter ${counterId}`}
        </h3>
        <div className="text-4xl font-bold text-gray-900 min-h-[3rem] flex items-center justify-center">
          {counter?.count ?? 0}
        </div>
      </div>

      <div className="flex gap-3 justify-center">
        <Button
          onClick={handleDecrement}
          disabled={decrementMutation.isPending}
          variant="destructive"
          size="lg"
          className="min-w-[120px]"
        >
          {decrementMutation.isPending ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Loading
            </>
          ) : (
            <>
              <Minus className="w-4 h-4 mr-2" />
              Decrease
            </>
          )}
        </Button>

        <Button
          onClick={handleIncrement}
          disabled={incrementMutation.isPending}
          variant="default"
          size="lg"
          className="min-w-[120px] bg-green-600 hover:bg-green-700"
        >
          {incrementMutation.isPending ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Loading
            </>
          ) : (
            <>
              <Plus className="w-4 h-4 mr-2" />
              Increase
            </>
          )}
        </Button>
      </div>

      {(incrementMutation.isError || decrementMutation.isError) && (
        <div className="text-red-600 text-sm">
          {incrementMutation.error instanceof Error &&
            incrementMutation.error.message}
          {decrementMutation.error instanceof Error &&
            decrementMutation.error.message}
        </div>
      )}

      <div className="text-sm text-gray-500 min-h-[1.25rem]">
        {counter?.updated_at ? (
          <>
            Last updated: {formatLastUpdated(counter.updated_at)}
            <br />
            <span className="text-xs opacity-75">
              {new Date(counter.updated_at).toLocaleString()}
            </span>
          </>
        ) : (
          "No updates yet"
        )}
      </div>
    </div>
  );
}

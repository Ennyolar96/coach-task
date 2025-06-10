import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import type { MoodStats } from "../interface/mode.interface";

const API_BASE = import.meta.env.VITE_API_BASE;

export const useMood = () => {
  const [selectedMood, setSelectedMood] = useState<string>("");
  const [todayStats, setTodayStats] = useState<MoodStats>({
    happy: 0,
    neutral: 0,
    sad: 0,
  });
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const submitMood = async (moodType: string) => {
    setIsLoading(true);
    setSelectedMood(moodType);
    try {
      await fetch(`${API_BASE}/mood`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ emoji: moodType }),
      });
      setMessage("Mood recorded! 🎉");
      setTimeout(() => {
        setMessage("");
        setSelectedMood("");
      }, 2000);
    } catch {
      setMessage("Failed to record mood 😞");
      setTimeout(() => setMessage(""), 2000);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchTodayStats = useCallback(
    async (isMounted?: { current: boolean }) => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `${API_BASE}/moods?date=${selectedDate}`
        );
        const { data } = response.data;
        if (!isMounted || isMounted.current) setTodayStats(data);
      } catch {
        if (!isMounted || isMounted.current)
          setMessage("Failed to fetch stats");
      } finally {
        if (!isMounted || isMounted.current) setIsLoading(false);
      }
    },
    [selectedDate]
  );

  useEffect(() => {
    const isMounted = { current: true };
    fetchTodayStats(isMounted);
    const interval = setInterval(() => fetchTodayStats(isMounted), 10000);
    return () => {
      isMounted.current = false;
      clearInterval(interval);
    };
  }, [fetchTodayStats]);

  const totalMoods = Object.values(todayStats).reduce(
    (sum, count) => sum + count,
    0
  );
  return {
    state: {
      selectedMood,
      todayStats,
      selectedDate,
      isLoading,
      message,
      setIsLoading,
      setSelectedMood,
      setTodayStats,
      setSelectedDate,
      setMessage,
    },
    actions: {
      submitMood,
      fetchTodayStats,
    },
    totalMoods,
  };
};

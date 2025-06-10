import type { Mood } from "../../interface/mode.interface";

export const moods: Mood[] = [
  {
    emoji: "😊",
    name: "happy",
    label: "Happy",
    color: "bg-green-100 hover:bg-green-200 border-green-300",
  },
  {
    emoji: "😐",
    name: "neutral",
    label: "Neutral",
    color: "bg-yellow-100 hover:bg-yellow-200 border-yellow-300",
  },
  {
    emoji: "😢",
    name: "sad",
    label: "Sad",
    color: "bg-red-100 hover:bg-red-200 border-red-300",
  },
];

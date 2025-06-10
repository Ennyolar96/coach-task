export type MoodStats = {
  happy: number;
  neutral: number;
  sad: number;
  [key: string]: number;
};

export interface Mood {
  name: string;
  emoji: string;
  label: string;
  color: string;
}

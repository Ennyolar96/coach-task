import { Outlet } from "react-router-dom";

export default function MoodLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-4">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8 pt-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Mood Tracker
          </h1>
          <p className="text-gray-600">How are you feeling today?</p>
        </div>

        <div>
          <Outlet />
        </div>

        <div className="text-center mt-8 text-sm text-gray-500">
          <p>Track your daily emotions • Stay mindful</p>
        </div>
      </div>
    </div>
  );
}

import { BarChart3, Calendar, TrendingUp } from "lucide-react";
import { useMood } from "../hooks/useMood";
import { moods } from "../pages/create/mode";
import { formatDateToLong } from "../helper/format-date";
import { Fragment } from "react/jsx-runtime";

const CoachDashboard = () => {
  const { state, totalMoods } = useMood();

  return (
    <Fragment>
      <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
        <div className="flex items-center gap-2 mb-4">
          <Calendar className="w-5 h-5 text-gray-600" />
          <label className="text-sm font-medium text-gray-700">
            Select Date
          </label>
        </div>
        <input
          type="date"
          value={state.selectedDate}
          onChange={(e) => state.setSelectedDate(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center gap-2 mb-4">
          <BarChart3 className="w-5 h-5 text-gray-600" />
          <h2 className="text-lg font-semibold text-gray-800">
            Stats for {formatDateToLong(state.selectedDate)}
          </h2>
        </div>

        {totalMoods > 0 ? (
          <div className="space-y-3">
            {moods.map((mood) => {
              const count = state.todayStats[mood.name];
              const percentage =
                totalMoods > 0 ? (count / totalMoods) * 100 : 0;

              return (
                <div key={mood.name} className="flex items-center gap-3">
                  <span className="text-2xl">{mood.emoji}</span>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-gray-700">
                        {mood.label}
                      </span>
                      <span className="text-sm text-gray-600">{count}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all duration-300 ${
                          mood.name === "happy"
                            ? "bg-green-500"
                            : mood.name === "neutral"
                            ? "bg-yellow-500"
                            : "bg-red-500"
                        }`}
                        style={{
                          width: `${percentage}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="pt-3 border-t border-gray-200">
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span className="flex items-center gap-1">
                  <TrendingUp className="w-4 h-4" />
                  Total entries
                </span>
                <span className="font-semibold">{totalMoods}</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-8 text-gray-500">
            <div className="text-4xl mb-2">📊</div>
            <p>No mood entries for this date</p>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default CoachDashboard;

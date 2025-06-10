import { useMood } from "../hooks/useMood";
import { moods } from "../pages/create/mode";

const MoodTrackers = () => {
  const { state, actions } = useMood();
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4 text-center">
        Record Your Mood
      </h2>

      <div className="grid grid-cols-1 gap-4">
        {moods.map((mood) => (
          <button
            key={mood.name}
            onClick={() => actions.submitMood(mood.name)}
            disabled={state.isLoading}
            className={`
                  ${mood.color} 
                  border-2 rounded-xl p-4 transition-all duration-200 
                  ${
                    state.selectedMood === mood.name
                      ? "scale-95 shadow-inner"
                      : "hover:scale-105 shadow-md"
                  }
                  ${
                    state.isLoading
                      ? "opacity-50 cursor-not-allowed"
                      : "cursor-pointer"
                  }
                  flex items-center justify-center gap-3
                `}
          >
            <span className="text-3xl">{mood.emoji}</span>
            <span className="text-lg font-medium text-gray-800">
              {mood.label}
            </span>
            {state.isLoading && state.selectedMood === mood.name && (
              <div className="w-5 h-5 border-2 border-gray-600 border-t-transparent rounded-full animate-spin"></div>
            )}
          </button>
        ))}
      </div>

      {/* Message */}
      {state.message && (
        <div className="mt-4 p-3 bg-blue-100 border border-blue-300 rounded-lg text-center text-blue-800 font-medium">
          {state.message}
        </div>
      )}
    </div>
  );
};

export default MoodTrackers;

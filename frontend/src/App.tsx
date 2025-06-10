import { Route, Routes } from "react-router-dom";
import MoodLayout from "./layout";
import Coach from "./pages/coach";
import MoodTracker from "./pages/create";

const App = () => {
  return (
    <Routes>
      <Route key="/" path="/" element={<MoodLayout />}>
        <Route path="/" element={<MoodTracker />} />
        <Route path="/coach" element={<Coach />} />
      </Route>
    </Routes>
  );
};

export default App;

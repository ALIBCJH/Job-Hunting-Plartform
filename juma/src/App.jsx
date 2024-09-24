import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import JobPage from "./pages/JobPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import JobsPages from "./pages/JobPages.jsx";

const App = () => {
  return (
    <Router>
      <HomePage />

      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/listings" element={<HomePage />} />
        <Route path="/jobs" element={<JobsPages />} />
      </Routes>
    </Router>
  );
};

export default App;

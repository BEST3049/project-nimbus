

import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HeroPage";
import DashboardPage from "./pages/DashboardPage";
import "./index.css"; // Ensure Tailwind CSS is imported

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  );
}

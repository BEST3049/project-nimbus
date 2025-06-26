// import PromptInput from "./components/PromptInput";
// import { useSensorFeed } from "./hooks/useSensorFeed";
// import { useThemeEngine } from "./hooks/useThemeEngine";
// import { motion } from "framer-motion";
// import { useEffect } from "react";
// export default function App() {
//   const sensor = useSensorFeed();
//   const themeClass = useThemeEngine(sensor);
//   useEffect(() => {
//   let audio = new Audio("/rain.mp3");
//   if (sensor.precipitation !== "none") {
//     audio.loop = true;
//     audio.volume = 0.2;
//     audio.play();
//   } else {
//     audio.pause();
//   }
//   return () => audio.pause();
// }, [sensor]);
//   return (
//     <>
//   {themeClass.includes("stars") && <div className="stars" />}
//   {themeClass.includes("lightning") && <div className="lightning" />}

//   <motion.div
//     initial={{ opacity: 0, y: 30 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.5 }}
//   >
//     <div className={`${themeClass} min-h-screen transition-all duration-700 ease-in-out`}>
//       <div className="relative z-10 p-8">
//         <h1 className="text-2xl font-bold mb-4">🌩 Project Nimbus</h1>
//         <PromptInput />
//       </div>
//     </div>
//   </motion.div>
// </>

//   );
// }


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

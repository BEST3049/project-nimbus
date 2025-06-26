
// import { useState, useEffect } from "react";
// import { FaUser, FaCog, FaSignOutAlt, FaPlus, FaRocket, FaHistory, FaSearch, FaBrain, FaEye, FaCloud, FaWind } from "react-icons/fa";

// // Mock LLM function that returns different component types
// const mockLLM = async (prompt) => {
//   await new Promise(resolve => setTimeout(resolve, 1500));
  
//   const lowerPrompt = prompt.toLowerCase();
  
//   if (lowerPrompt.includes('weather')) {
//     return {
//       type: "weather",
//       title: "Weather Information",
//       data: {
//         location: "Kurnool, Andhra Pradesh",
//         date: new Date().toLocaleDateString(),
//         temperature: 42,
//         units: "°C",
//         condition: "Sunny",
//         humidity: 65,
//         windSpeed: 12
//       }
//     };
//   } else if (lowerPrompt.includes('chart') || lowerPrompt.includes('graph')) {
//     return {
//       type: "chart",
//       title: "Data Visualization",
//       data: {
//         labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
//         values: [65, 59, 80, 81, 56]
//       }
//     };
//   } else if (lowerPrompt.includes('analytics') || lowerPrompt.includes('metrics')) {
//     return {
//       type: "metrics",
//       title: "Analytics Dashboard",
//       data: {
//         totalUsers: 12540,
//         activeUsers: 8320,
//         revenue: 45670,
//         conversion: 3.2
//       }
//     };
//   } else {
//     return {
//       type: "info",
//       title: "AI Response",
//       data: {
//         response: `I've processed your request: "${prompt}". This is a dynamic component generated based on your natural language input.`,
//         timestamp: new Date().toLocaleTimeString(),
//         confidence: 0.95
//       }
//     };
//   }
// };

// // Weather Card Component
// function WeatherCard({ data }) {
//   return (
//     <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-cyan-500/20 rounded-2xl p-6 backdrop-blur-md hover:border-cyan-400/40 transition-all duration-500 group">
//       <div className="flex items-center justify-between mb-4">
//         <div className="flex items-center gap-3">
//           <FaCloud className="text-cyan-400 text-xl group-hover:text-cyan-300 transition-colors" />
//           <h3 className="text-white font-semibold">Weather</h3>
//         </div>
//         <div className="text-xs text-cyan-400 bg-cyan-500/10 px-2 py-1 rounded-full">
//           LIVE
//         </div>
//       </div>
      
//       <div className="space-y-4">
//         <div>
//           <div className="text-3xl font-bold text-white mb-1">
//             {data.temperature}{data.units}
//           </div>
//           <div className="text-cyan-300 text-sm">{data.location}</div>
//           <div className="text-cyan-400/70 text-xs">{data.date}</div>
//         </div>
        
//         <div className="grid grid-cols-2 gap-4 pt-4 border-t border-cyan-500/20">
//           <div className="flex items-center gap-2">
//             <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
//             <span className="text-sm text-white">{data.humidity}%</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <FaWind className="text-cyan-400 text-sm" />
//             <span className="text-sm text-white">{data.windSpeed} km/h</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // Chart Component
// function ChartCard({ data }) {
//   const maxValue = Math.max(...data.values);
  
//   return (
//     <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/20 rounded-2xl p-6 backdrop-blur-md hover:border-purple-400/40 transition-all duration-500 group">
//       <div className="flex items-center gap-3 mb-6">
//         <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
//         <h3 className="text-white font-semibold">Data Visualization</h3>
//       </div>
      
//       <div className="space-y-4">
//         {data.labels.map((label, i) => (
//           <div key={label} className="flex items-center gap-4">
//             <div className="w-8 text-xs text-purple-300">{label}</div>
//             <div className="flex-1 bg-purple-900/30 rounded-full h-3 overflow-hidden">
//               <div 
//                 className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000 ease-out"
//                 style={{ 
//                   width: `${(data.values[i] / maxValue) * 100}%`,
//                   animationDelay: `${i * 0.2}s`
//                 }}
//               />
//             </div>
//             <div className="w-12 text-xs text-white text-right">{data.values[i]}</div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// // Metrics Component
// function MetricsCard({ data }) {
//   const metrics = [
//     { label: "Total Users", value: data.totalUsers.toLocaleString(), icon: FaUser, colorClass: "emerald" },
//     { label: "Active Users", value: data.activeUsers.toLocaleString(), icon: FaEye, colorClass: "blue" },
//     { label: "Revenue", value: `$${data.revenue.toLocaleString()}`, icon: FaRocket, colorClass: "yellow" },
//     { label: "Conversion", value: `${data.conversion}%`, icon: FaBrain, colorClass: "purple" }
//   ];
  
//   return (
//     <div className="bg-gradient-to-br from-emerald-900/30 to-teal-900/30 border border-emerald-500/20 rounded-2xl p-6 backdrop-blur-md hover:border-emerald-400/40 transition-all duration-500 group col-span-2">
//       <div className="flex items-center gap-3 mb-6">
//         <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
//         <h3 className="text-white font-semibold">Analytics Overview</h3>
//       </div>
      
//       <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
//         {metrics.map((metric, i) => {
//           const Icon = metric.icon;
//           return (
//             <div key={metric.label} className="text-center group/metric hover:scale-105 transition-transform duration-300">
//               <div className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-${metric.colorClass}-500/20 border border-${metric.colorClass}-500/30 flex items-center justify-center group-hover/metric:bg-${metric.colorClass}-500/30 transition-colors`}>
//                 <Icon className={`text-${metric.colorClass}-400 text-lg`} />
//               </div>
//               <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
//               <div className={`text-xs text-${metric.colorClass}-300`}>{metric.label}</div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// // Info Card Component
// function InfoCard({ data }) {
//   return (
//     <div className="bg-gradient-to-br from-slate-900/30 to-zinc-900/30 border border-slate-500/20 rounded-2xl p-6 backdrop-blur-md hover:border-slate-400/40 transition-all duration-500 group">
//       <div className="flex items-center gap-3 mb-4">
//         <FaBrain className="text-slate-400 text-xl group-hover:text-slate-300 transition-colors" />
//         <h3 className="text-white font-semibold">AI Response</h3>
//       </div>
      
//       <div className="space-y-4">
//         <p className="text-slate-200 leading-relaxed">{data.response}</p>
//         <div className="flex items-center justify-between pt-4 border-t border-slate-500/20">
//           <div className="text-xs text-slate-400">{data.timestamp}</div>
//           <div className="flex items-center gap-2">
//             <div className="w-2 h-2 bg-green-400 rounded-full"></div>
//             <span className="text-xs text-green-400">
//               {Math.round(data.confidence * 100)}% confidence
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // Dynamic Component Renderer
// function DynamicRenderer({ type, title, data }) {
//   switch (type) {
//     case 'weather':
//       return <WeatherCard data={data} />;
//     case 'chart':
//       return <ChartCard data={data} />;
//     case 'metrics':
//       return <MetricsCard data={data} />;
//     default:
//       return <InfoCard data={data} />;
//   }
// }

// // Prompt Input Component
// function PromptInput() {
//   const [prompt, setPrompt] = useState("");
//   const [components, setComponents] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async () => {
//     if (!prompt.trim()) return;
//     setLoading(true);
//     const res = await mockLLM(prompt);
//     setComponents((prev) => [...prev, res]);
//     setPrompt("");
//     setLoading(false);
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       handleSubmit();
//     }
//   };

//   const suggestions = [
//     "What's the weather today in Kurnool?",
//     "Show me analytics metrics",
//     "Create a sales chart for this month",
//     "Display user engagement data"
//   ];

//   return (
//     <div className="w-full max-w-7xl mx-auto">
//       {/* Prompt Input */}
//       <div className="relative mb-8">
//         <div className="flex items-center bg-zinc-900/80 backdrop-blur-xl border border-zinc-700/50 rounded-2xl px-6 py-5 shadow-2xl hover:border-zinc-600/50 transition-all duration-300 group">
//           <FaSearch className="text-zinc-500 mr-4 group-hover:text-zinc-400 transition-colors" />
//           <input
//             value={prompt}
//             onChange={(e) => setPrompt(e.target.value)}
//             onKeyPress={handleKeyPress}
//             placeholder="Ask Genesys to generate adaptive UI components..."
//             className="bg-transparent outline-none text-white flex-1 placeholder:text-zinc-500 text-lg"
//           />
//           <button
//             onClick={handleSubmit}
//             disabled={loading}
//             className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold px-8 py-3 rounded-xl ml-4 hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95"
//           >
//             {loading ? (
//               <div className="flex items-center gap-2">
//                 <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
//                 Generating...
//               </div>
//             ) : (
//               "Generate"
//             )}
//           </button>
//         </div>
        
//         {/* Suggestions */}
//         {components.length === 0 && (
//           <div className="mt-6">
//             <div className="text-sm text-zinc-400 mb-3">Try these examples:</div>
//             <div className="flex flex-wrap gap-2">
//               {suggestions.map((suggestion, i) => (
//                 <button
//                   key={i}
//                   onClick={() => setPrompt(suggestion)}
//                   className="px-4 py-2 bg-zinc-800/50 border border-zinc-700/50 rounded-lg text-sm text-zinc-300 hover:text-white hover:border-zinc-600/50 transition-all duration-300 hover:scale-105"
//                 >
//                   {suggestion}
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}
        
//         {loading && (
//           <div className="flex items-center justify-center mt-8">
//             <div className="flex items-center gap-4 text-cyan-400">
//               <div className="flex gap-1">
//                 <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
//                 <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
//                 <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
//               </div>
//               <span className="text-sm font-medium">Genesys AUI is crafting your component...</span>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Generated Components */}
//       {components.length > 0 && (
//         <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 auto-rows-max">
//           {components.map((comp, i) => (
//             <div 
//               key={i} 
//               className="opacity-0 animate-fadeIn"
//               style={{animationDelay: `${i * 0.1}s`, animationFillMode: 'forwards'}}
//             >
//               <DynamicRenderer {...comp} />
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// // Main Dashboard Component - Single Default Export
// export default function DashboardPage() {
//   const [activeTab, setActiveTab] = useState("generator");

//   return (
//     <div className="flex h-screen bg-black text-white overflow-hidden transition-all duration-1000 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950">
      
//       {/* Ambient Background Effects */}
//       <div className="fixed inset-0 opacity-20 pointer-events-none">
//         <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
//       </div>

//       {/* Sidebar */}
//       <aside className="w-80 bg-zinc-950/90 backdrop-blur-xl border-r border-zinc-800/50 flex flex-col relative z-10">
//         {/* Header */}
//         <div className="p-6 border-b border-zinc-800/50">
//           <div className="flex items-center gap-3 mb-6 group">
//             <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
//               <FaBrain className="text-white text-lg" />
//             </div>
//             <div>
//               <h1 className="text-xl font-bold">Genesys AUI</h1>
//               <div className="text-xs text-cyan-400">Adaptive User Interface</div>
//             </div>
//           </div>
          
//           <button className="w-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 hover:border-cyan-400/50 text-cyan-400 font-medium py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 active:scale-95">
//             <FaPlus className="text-sm" />
//             New Generation
//           </button>
//         </div>

//         {/* Navigation */}
//         <nav className="flex-1 px-6 py-4">
//           <div className="space-y-2">
//             <button
//               onClick={() => setActiveTab("generator")}
//               className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 hover:scale-105 ${
//                 activeTab === "generator" 
//                   ? "bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 shadow-lg shadow-cyan-500/10" 
//                   : "text-zinc-400 hover:text-white hover:bg-zinc-800/50"
//               }`}
//             >
//               <div className="flex items-center gap-3">
//                 <FaBrain className="text-sm" />
//                 <span>AI Generator</span>
//               </div>
//             </button>
            
//             <button
//               onClick={() => setActiveTab("history")}
//               className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 hover:scale-105 ${
//                 activeTab === "history" 
//                   ? "bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 shadow-lg shadow-cyan-500/10" 
//                   : "text-zinc-400 hover:text-white hover:bg-zinc-800/50"
//               }`}
//             >
//               <div className="flex items-center gap-3">
//                 <FaHistory className="text-sm" />
//                 <span>Generation History</span>
//               </div>
//             </button>
//           </div>

//           {/* System Status */}
//           <div className="mt-8">
//             <h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-4">System Status</h3>
//             <div className="space-y-3">
//               <div className="flex items-center gap-3 p-3 rounded-lg bg-green-500/10 border border-green-500/20">
//                 <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
//                 <div className="flex-1">
//                   <div className="text-sm text-green-400">AI Engine</div>
//                   <div className="text-xs text-green-300/70">Online & Ready</div>
//                 </div>
//               </div>
              
//               <div className="flex items-center gap-3 p-3 rounded-lg bg-blue-500/10 border border-blue-500/20">
//                 <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
//                 <div className="flex-1">
//                   <div className="text-sm text-blue-400">Theme Engine</div>
//                   <div className="text-xs text-blue-300/70">Adaptive Mode</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </nav>

//         {/* User Section */}
//         <div className="p-6 border-t border-zinc-800/50">
//           <div className="space-y-2">
//             <button className="w-full flex items-center gap-3 px-4 py-3 text-zinc-400 hover:text-white hover:bg-zinc-800/50 rounded-xl transition-all hover:scale-105">
//               <FaUser className="text-sm" />
//               <span>Profile</span>
//             </button>
//             <button className="w-full flex items-center gap-3 px-4 py-3 text-zinc-400 hover:text-white hover:bg-zinc-800/50 rounded-xl transition-all hover:scale-105">
//               <FaCog className="text-sm" />
//               <span>Settings</span>
//             </button>
//             <button className="w-full flex items-center gap-3 px-4 py-3 text-zinc-400 hover:text-white hover:bg-zinc-800/50 rounded-xl transition-all hover:scale-105">
//               <FaSignOutAlt className="text-sm" />
//               <span>Log out</span>
//             </button>
//           </div>
//         </div>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 flex flex-col overflow-hidden relative z-10">
//         {/* Header */}
//         <header className="px-8 py-6 border-b border-zinc-800/50 backdrop-blur-xl">
//           <div className="flex items-center justify-between">
//             <div>
//               <h2 className="text-3xl font-bold text-white mb-2 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
//                 Adaptive Interface Generator
//               </h2>
//               <p className="text-zinc-400">
//                 Speak naturally, get adaptive UI components instantly
//               </p>
//             </div>
//             <div className="flex items-center gap-4">
//               <div className="flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500/40 rounded-xl">
//                 <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
//                 <span className="text-green-400 text-sm font-medium">Live</span>
//               </div>
//             </div>
//           </div>
//         </header>

//         {/* Content Area */}
//         <div className="flex-1 overflow-y-auto">
//           <div className="p-8 min-h-full">
//             {activeTab === "generator" ? (
//               <div className="max-w-none">
//                 <PromptInput />
//               </div>
//             ) : (
//               <div className="text-center py-20">
//                 <FaHistory className="mx-auto text-6xl text-zinc-600 mb-6" />
//                 <h3 className="text-2xl font-semibold text-zinc-400 mb-3">No generations yet</h3>
//                 <p className="text-zinc-500 mb-6">Start generating adaptive UI components to see them here</p>
//                 <button 
//                   onClick={() => setActiveTab("generator")}
//                   className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-xl hover:scale-105 transition-transform"
//                 >
//                   Start Generating
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </main>

//       <style jsx>{`
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
        
//         .animate-fadeIn {
//           animation: fadeIn 0.6s ease-out;
//         }
//       `}</style>
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import { FaUser, FaCog, FaSignOutAlt, FaPlus, FaRocket, FaHistory, FaSearch, FaBrain, FaEye, FaCloud, FaWind, FaBars, FaTimes } from "react-icons/fa";

// Mock LLM function that returns different component types
const mockLLM = async (prompt) => {
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  const lowerPrompt = prompt.toLowerCase();
  
  if (lowerPrompt.includes('weather')) {
    return {
      type: "weather",
      title: "Weather Information",
      data: {
        location: "Kurnool, Andhra Pradesh",
        date: new Date().toLocaleDateString(),
        temperature: 42,
        units: "°C",
        condition: "Sunny",
        humidity: 65,
        windSpeed: 12
      }
    };
  } else if (lowerPrompt.includes('chart') || lowerPrompt.includes('graph')) {
    return {
      type: "chart",
      title: "Data Visualization",
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        values: [65, 59, 80, 81, 56]
      }
    };
  } else if (lowerPrompt.includes('analytics') || lowerPrompt.includes('metrics')) {
    return {
      type: "metrics",
      title: "Analytics Dashboard",
      data: {
        totalUsers: 12540,
        activeUsers: 8320,
        revenue: 45670,
        conversion: 3.2
      }
    };
  } else {
    return {
      type: "info",
      title: "AI Response",
      data: {
        response: `I've processed your request: "${prompt}". This is a dynamic component generated based on your natural language input.`,
        timestamp: new Date().toLocaleTimeString(),
        confidence: 0.95
      }
    };
  }
};

// Weather Card Component
function WeatherCard({ data }) {
  return (
    <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-cyan-500/20 rounded-2xl p-4 sm:p-6 backdrop-blur-md hover:border-cyan-400/40 transition-all duration-500 group">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <FaCloud style={{ color: '#22d3ee' }} className="text-lg sm:text-xl group-hover:text-cyan-300 transition-colors" />
          <h3 className="text-white font-semibold text-sm sm:text-base">Weather</h3>
        </div>
        <div className="text-xs bg-cyan-500/10 px-2 py-1 rounded-full" style={{ color: '#22d3ee' }}>
          LIVE
        </div>
      </div>
      
      <div className="space-y-4">
        <div>
          <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
            {data.temperature}{data.units}
          </div>
          <div className="text-sm" style={{ color: '#67e8f9' }}>{data.location}</div>
          <div className="text-xs" style={{ color: '#22d3ee80' }}>{data.date}</div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-cyan-500/20">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
            <span className="text-sm text-white">{data.humidity}%</span>
          </div>
          <div className="flex items-center gap-2">
            <FaWind style={{ color: '#22d3ee' }} className="text-sm" />
            <span className="text-sm text-white">{data.windSpeed} km/h</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Chart Component
function ChartCard({ data }) {
  const maxValue = Math.max(...data.values);
  
  return (
    <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/20 rounded-2xl p-4 sm:p-6 backdrop-blur-md hover:border-purple-400/40 transition-all duration-500 group">
      <div className="flex items-center gap-3 mb-4 sm:mb-6">
        <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
        <h3 className="text-white font-semibold text-sm sm:text-base">Data Visualization</h3>
      </div>
      
      <div className="space-y-3 sm:space-y-4">
        {data.labels.map((label, i) => (
          <div key={label} className="flex items-center gap-2 sm:gap-4">
            <div className="w-6 sm:w-8 text-xs" style={{ color: '#c4b5fd' }}>{label}</div>
            <div className="flex-1 bg-purple-900/30 rounded-full h-2 sm:h-3 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000 ease-out"
                style={{ 
                  width: `${(data.values[i] / maxValue) * 100}%`,
                  animationDelay: `${i * 0.2}s`
                }}
              />
            </div>
            <div className="w-8 sm:w-12 text-xs text-white text-right">{data.values[i]}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Metrics Component
function MetricsCard({ data }) {
  const metrics = [
    { label: "Total Users", value: data.totalUsers.toLocaleString(), icon: FaUser, color: '#10b981' },
    { label: "Active Users", value: data.activeUsers.toLocaleString(), icon: FaEye, color: '#3b82f6' },
    { label: "Revenue", value: `$${data.revenue.toLocaleString()}`, icon: FaRocket, color: '#eab308' },
    { label: "Conversion", value: `${data.conversion}%`, icon: FaBrain, color: '#8b5cf6' }
  ];
  
  return (
    <div className="bg-gradient-to-br from-emerald-900/30 to-teal-900/30 border border-emerald-500/20 rounded-2xl p-4 sm:p-6 backdrop-blur-md hover:border-emerald-400/40 transition-all duration-500 group col-span-1 sm:col-span-2">
      <div className="flex items-center gap-3 mb-4 sm:mb-6">
        <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
        <h3 className="text-white font-semibold text-sm sm:text-base">Analytics Overview</h3>
      </div>
      
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
        {metrics.map((metric, i) => {
          const Icon = metric.icon;
          return (
            <div key={metric.label} className="text-center group/metric hover:scale-105 transition-transform duration-300">
              <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 rounded-xl bg-opacity-20 border border-opacity-30 flex items-center justify-center transition-colors"
                   style={{ 
                     backgroundColor: `${metric.color}20`, 
                     borderColor: `${metric.color}50` 
                   }}>
                <Icon style={{ color: metric.color }} className="text-base sm:text-lg" />
              </div>
              <div className="text-lg sm:text-2xl font-bold text-white mb-1">{metric.value}</div>
              <div className="text-xs" style={{ color: metric.color }}>{metric.label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Info Card Component
function InfoCard({ data }) {
  return (
    <div className="bg-gradient-to-br from-slate-900/30 to-zinc-900/30 border border-slate-500/20 rounded-2xl p-4 sm:p-6 backdrop-blur-md hover:border-slate-400/40 transition-all duration-500 group">
      <div className="flex items-center gap-3 mb-4">
        <FaBrain style={{ color: '#94a3b8' }} className="text-lg sm:text-xl group-hover:text-slate-300 transition-colors" />
        <h3 className="text-white font-semibold text-sm sm:text-base">AI Response</h3>
      </div>
      
      <div className="space-y-4">
        <p className="text-slate-200 leading-relaxed text-sm sm:text-base">{data.response}</p>
        <div className="flex items-center justify-between pt-4 border-t border-slate-500/20">
          <div className="text-xs" style={{ color: '#94a3b8' }}>{data.timestamp}</div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span className="text-xs text-green-400">
              {Math.round(data.confidence * 100)}% confidence
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Dynamic Component Renderer
function DynamicRenderer({ type, title, data }) {
  switch (type) {
    case 'weather':
      return <WeatherCard data={data} />;
    case 'chart':
      return <ChartCard data={data} />;
    case 'metrics':
      return <MetricsCard data={data} />;
    default:
      return <InfoCard data={data} />;
  }
}

// Prompt Input Component
function PromptInput() {
  const [prompt, setPrompt] = useState("");
  const [components, setComponents] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    const res = await mockLLM(prompt);
    setComponents((prev) => [...prev, res]);
    setPrompt("");
    setLoading(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  const suggestions = [
    "What's the weather today in Kurnool?",
    "Show me analytics metrics",
    "Create a sales chart for this month",
    "Display user engagement data"
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-0">
      {/* Prompt Input */}
      <div className="relative mb-6 sm:mb-8">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center bg-zinc-900/80 backdrop-blur-xl border border-zinc-700/50 rounded-2xl p-4 sm:px-6 sm:py-5 shadow-2xl hover:border-zinc-600/50 transition-all duration-300 group gap-4 sm:gap-0">
          <div className="flex items-center flex-1">
            <FaSearch style={{ color: '#71717a' }} className="mr-3 sm:mr-4 group-hover:text-zinc-400 transition-colors flex-shrink-0" />
            <input
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask Genesys to generate adaptive UI components..."
              className="bg-transparent outline-none text-white flex-1 placeholder:text-zinc-500 text-base sm:text-lg"
            />
          </div>
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold px-6 sm:px-8 py-3 rounded-xl sm:ml-4 hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95"
          >
            {loading ? (
              <div className="flex items-center gap-2 justify-center">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                <span className="hidden sm:inline">Generating...</span>
                <span className="sm:hidden">Gen...</span>
              </div>
            ) : (
              <>
                <span className="hidden sm:inline">Generate</span>
                <span className="sm:hidden">Gen</span>
              </>
            )}
          </button>
        </div>
        
        {/* Suggestions */}
        {components.length === 0 && (
          <div className="mt-6">
            <div className="text-sm text-zinc-400 mb-3">Try these examples:</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {suggestions.map((suggestion, i) => (
                <button
                  key={i}
                  onClick={() => setPrompt(suggestion)}
                  className="px-4 py-2 bg-zinc-800/50 border border-zinc-700/50 rounded-lg text-sm text-zinc-300 hover:text-white hover:border-zinc-600/50 transition-all duration-300 hover:scale-105 text-left"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        )}
        
        {loading && (
          <div className="flex items-center justify-center mt-8">
            <div className="flex items-center gap-4" style={{ color: '#22d3ee' }}>
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
              </div>
              <span className="text-sm font-medium">Genesys AUI is crafting your component...</span>
            </div>
          </div>
        )}
      </div>

      {/* Generated Components */}
      {components.length > 0 && (
        <div className="grid gap-4 sm:gap-6 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 auto-rows-max">
          {components.map((comp, i) => (
            <div 
              key={i} 
              className="opacity-0 animate-fadeIn"
              style={{animationDelay: `${i * 0.1}s`, animationFillMode: 'forwards'}}
            >
              <DynamicRenderer {...comp} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// Sidebar Component
function Sidebar({ activeTab, setActiveTab, isOpen, setIsOpen }) {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <aside className={`fixed lg:relative z-50 lg:z-10 w-80 h-full bg-zinc-950/90 backdrop-blur-xl border-r border-zinc-800/50 flex flex-col transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}>
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-zinc-800/50">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3 group">
              <div className="w-8 h-8 text-3xl sm:w-10 sm:h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {/* <FaBrain className="text-white text-sm sm:text-lg" /> */}✳
              </div>
              <div>
                <h1 className="text-lg sm:text-xl font-bold">Genesys AUI</h1>
                <div className="text-xs" style={{ color: '#22d3ee' }}>Adaptive User Interface</div>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="lg:hidden p-2 text-zinc-400 hover:text-white transition-colors"
            >
              <FaTimes />
            </button>
          </div>
          
          <button className="w-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 hover:border-cyan-400/50 font-medium py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 active:scale-95"
                  style={{ color: '#22d3ee' }}>
            <FaPlus className="text-sm" />
            <span className="hidden sm:inline">New Generation</span>
            <span className="sm:hidden">New</span>
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 sm:px-6 py-4">
          <div className="space-y-2">
            <button
              onClick={() => {
                setActiveTab("generator");
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 hover:scale-105 ${
                activeTab === "generator" 
                  ? "bg-cyan-500/20 border border-cyan-500/40 shadow-lg shadow-cyan-500/10" 
                  : "text-zinc-400 hover:text-white hover:bg-zinc-800/50"
              }`}
              style={activeTab === "generator" ? { color: '#22d3ee' } : {}}
            >
              <div className="flex items-center gap-3">
                <FaBrain className="text-sm" />
                <span>AI Generator</span>
              </div>
            </button>
            
            <button
              onClick={() => {
                setActiveTab("history");
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 hover:scale-105 ${
                activeTab === "history" 
                  ? "bg-cyan-500/20 border border-cyan-500/40 shadow-lg shadow-cyan-500/10" 
                  : "text-zinc-400 hover:text-white hover:bg-zinc-800/50"
              }`}
              style={activeTab === "history" ? { color: '#22d3ee' } : {}}
            >
              <div className="flex items-center gap-3">
                <FaHistory className="text-sm" />
                <span>Generation History</span>
              </div>
            </button>
          </div>

          {/* System Status */}
          <div className="mt-8">
            <h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-4">System Status</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <div className="flex-1">
                  <div className="text-sm text-green-400">AI Engine</div>
                  <div className="text-xs" style={{ color: '#22c55e80' }}>Online & Ready</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 rounded-lg bg-blue-500/10 border border-blue-500/20">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <div className="flex-1">
                  <div className="text-sm text-blue-400">Theme Engine</div>
                  <div className="text-xs" style={{ color: '#3b82f680' }}>Adaptive Mode</div>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* User Section */}
        <div className="p-4 sm:p-6 border-t border-zinc-800/50">
          <div className="space-y-2">
            <button className="w-full flex items-center gap-3 px-4 py-3 text-zinc-400 hover:text-white hover:bg-zinc-800/50 rounded-xl transition-all hover:scale-105">
              <FaUser className="text-sm" />
              <span>Profile</span>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 text-zinc-400 hover:text-white hover:bg-zinc-800/50 rounded-xl transition-all hover:scale-105">
              <FaCog className="text-sm" />
              <span>Settings</span>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 text-zinc-400 hover:text-white hover:bg-zinc-800/50 rounded-xl transition-all hover:scale-105">
              <FaSignOutAlt className="text-sm" />
              <span>Log out</span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}

// Main Dashboard Component - Single Default Export
export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("generator");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-black text-white overflow-hidden transition-all duration-1000 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950">
      
      {/* Ambient Background Effects */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Sidebar */}
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        isOpen={sidebarOpen} 
        setIsOpen={setSidebarOpen} 
      />

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden relative z-10">
        {/* Header */}
        <header className="px-4 sm:px-8 py-4 sm:py-6 border-b border-zinc-800/50 backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 text-zinc-400 hover:text-white transition-colors"
              >
                <FaBars />
              </button>
              <div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1 sm:mb-2 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Adaptive Interface Generator
                </h2>
                <p className="text-zinc-400 text-sm sm:text-base">
                  <span className="hidden sm:inline">Speak naturally, get adaptive UI components instantly</span>
                  <span className="sm:hidden">AI-powered UI generator</span>
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-green-500/20 border border-green-500/40 rounded-xl">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-xs sm:text-sm font-medium">Live</span>
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-4 sm:p-8 min-h-full">
            {activeTab === "generator" ? (
              <div className="max-w-none">
                <PromptInput />
              </div>
            ) : (
              <div className="text-center py-12 sm:py-20">
                <FaHistory/>
                <h3 className="text-xl sm:text-2xl font-semibold text-zinc-400 mb-2 sm:mb-3">No generations yet</h3>
                <p className="text-zinc-500 mb-4 sm:mb-6 text-sm sm:text-base px-4">Start generating adaptive UI components to see them here</p>
                <button 
                  onClick={() => setActiveTab("generator")}
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl hover:scale-105 transition-transform text-sm sm:text-base"
                >
                  Start Generating
                </button>
              </div>
            )}
          </div>
        </div>
      </main>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}
// import PromptInput from "../components/PromptInput";

// export default function DashboardPage() {
//   return (
//     <div className="flex min-h-screen text-white">
//       {/* Sidebar */}
//       <aside className="w-[240px] bg-[#121212] p-6 flex flex-col border-r border-white/10">
//         <div className="text-xl font-semibold mb-8 flex items-center gap-2">
//           ✳ Project Nimbus
//         </div>
//         <nav className="flex flex-col gap-4 text-sm text-zinc-300">
//           <button className="bg-[#6366f1] text-white px-4 py-2 rounded font-medium hover:brightness-110 transition-all">
//             + New Chat
//           </button>
//           <a href="#" className="hover:text-white transition">💬 My Chats</a>
//           <a href="#" className="hover:text-white transition">⚙️ Settings</a>
//           <a href="#" className="hover:text-white transition mt-auto">🚪 Logout</a>
//         </nav>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 relative overflow-y-auto">
//         {/* BACKGROUND LAYER */}
//         <div className="absolute inset-0 z-0">
//           <div className="absolute inset-0 bg-gradient-to-br from-[#0d0d0d] via-[#1c1c1c] to-[#2a2a2a] opacity-90" />
//           <div className="absolute -top-40 left-1/3 w-[800px] h-[800px] bg-[#ffffff1a] rounded-full blur-3xl opacity-20" />
//           <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#ff80b5]/10 blur-2xl opacity-20" />
//           <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-soft-light" />
//         </div>

//         <div className="relative z-10 px-6 py-12 sm:px-12">
//           <h2 className="text-2xl font-semibold mb-4">Trending Prompts</h2>
//           <PromptInput />
//         </div>
//       </main>
//     </div>
//   );
// }


// import { useState } from "react";
// import { mockLLM } from "../library/mockLLM";
// import DynamicRenderer from "./DynamicRenderer";
// import { Loader2 } from "lucide-react"; // Optional: for loading animation

// export default function PromptInput() {
//   const [prompt, setPrompt] = useState("");
//   const [components, setComponents] = useState<any[]>([]);
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async () => {
//     if (!prompt.trim()) return;
//     setLoading(true);
//     const res = await mockLLM(prompt);
//     setComponents((prev) => [...prev, res]);
//     setLoading(false);
//     setPrompt("");
//   };

//   return (
//     <div className="w-full max-w-3xl mx-auto">
//       {/* Input Container */}
//       <div className="flex items-center gap-2 bg-zinc-900 rounded-xl px-4 py-2 border border-zinc-700 focus-within:ring-2 focus-within:ring-white/20 transition">
//         <input
//           value={prompt}
//           onChange={(e) => setPrompt(e.target.value)}
//           placeholder="Ask Nimbus to generate something UI-based..."
//           className="flex-grow bg-transparent text-white placeholder-zinc-500 outline-none text-sm sm:text-base"
//         />
//         <button
//           onClick={handleSubmit}
//           className="bg-white text-black text-sm px-4 py-1.5 rounded-full font-medium hover:bg-zinc-200 transition-all disabled:opacity-50"
//           disabled={loading}
//         >
//           {loading ? (
//             <div className="flex items-center gap-2">
//               <Loader2 className="w-4 h-4 animate-spin" /> Thinking...
//             </div>
//           ) : (
//             "Generate"
//           )}
//         </button>
//       </div>

//       {/* AI Output */}
//       <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {components.map((comp, i) => (
//           <DynamicRenderer key={i} {...comp} />
//         ))}
//       </div>
//     </div>
//   );
// }
import { useState } from "react";
import { mockLLM } from "../library/mockLLM";
import DynamicRenderer from "./DynamicRenderer";

export default function PromptInput() {
  const [prompt, setPrompt] = useState("");
  const [components, setComponents] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    const res = await mockLLM(prompt);
    setComponents((prev) => [...prev, res]);
    setPrompt("");
    setLoading(false);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Prompt Box */}
      <div className="flex items-center bg-black px-6 py-3 rounded-full shadow-md">
        <input
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Ask Nimbus to generate something UI-based..."
          className="bg-transparent outline-none text-white flex-1 placeholder:text-zinc-400"
        />
        <button
          onClick={handleSubmit}
          className="bg-white text-black font-semibold px-4 py-1.5 rounded-full ml-4 hover:bg-zinc-100 transition"
        >
          Generate
        </button>
      </div>

      {loading && (
        <p className="text-zinc-600 mt-6 text-sm animate-pulse">AI is thinking...</p>
      )}

      <div className="mt-10 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {components.map((comp, i) => (
          <DynamicRenderer key={i} {...comp} />
        ))}
      </div>
    </div>
  );
}


// import { useNavigate } from "react-router-dom";
// import { Button } from "@material-tailwind/react";
// export default function HeroPage() {
//   const navigate = useNavigate();

//   return (
//     <div className="relative min-h-screen bg-black text-white overflow-hidden">
//       {/* NAVBAR */}
//         <nav className="w-full fixed top-0 left-0 z-50 flex justify-between items-center px-6 sm:px-12 py-4 backdrop-blur-xl bg-black/60 border-b border-white/10 transition-all duration-300">
//         {/* Logo */}
//         <div className="flex items-center gap-2 font-semibold text-white text-xl">
//             <span className="text-lg">✳</span> Nimbus
//         </div>

//         {/* Nav Links */}
//         <div className="hidden md:flex gap-8 text-sm font-medium">
//             <a href="#" className="text-zinc-300 hover:text-white hover:underline transition-all duration-200">Features</a>
//             <a href="#" className="text-zinc-300 hover:text-white hover:underline transition-all duration-200">Pricing</a>
//             <a href="#" className="text-zinc-300 hover:text-white hover:underline transition-all duration-200">Docs</a>
//             <a href="#" className="text-zinc-300 hover:text-white hover:underline transition-all duration-200">Blog</a>
//         </div>

//         {/* Auth Buttons */}
//         <div className="hidden md:flex gap-4">
//             <button className="text-sm px-4 py-1 text-zinc-300 hover:text-white transition-all duration-200">Login</button>
//             <button className="bg-white text-black px-4 py-1.5 text-sm rounded-full font-medium hover:scale-105 hover:bg-zinc-100 transition-all duration-200">
//             Sign Up
//             </button>
//         </div>

//         {/* Mobile Icon */}
//         <div className="md:hidden">
//             <button className="text-white text-2xl">☰</button>
//         </div>
//         </nav>


//       {/* BACKGROUND LAYERS */}
//       <div className="absolute inset-0 z-0">
//         <div className="absolute inset-0 bg-gradient-to-br from-[#0d0d0d] via-[#1c1c1c] to-[#2a2a2a] opacity-80" />
//         <div className="absolute -top-40 left-1/3 w-[800px] h-[800px] bg-[#ffffff1a] rounded-full blur-3xl opacity-20" />
//         <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#ff80b5]/10 blur-2xl opacity-20" />
//         <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-soft-light" />
//       </div>

//       {/* HERO SECTION */}
//       <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-24 sm:py-40">
//         <h1 className="text-4xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-[#BABABA] bg-clip-text text-transparent">
//           AI for teams building<br />what's next.
//         </h1>
//         <p className="text-zinc-400 max-w-xl mb-8">
//           Nimbus gives you the tools to build custom agents and workflows in record time.
//         </p>
//         {/* <button
//           onClick={() => navigate("/dashboard")}
//           className="bg-white text-black rounded-full px-6 py-3 text-lg font-semibold hover:scale-105 transition-all"
//         >
//           Get Started →
//         </button> */}
//         {/* <Button variant="gradient" className="rounded-full bg-white text-black" onClick={() => navigate("/dashboard")}>Get Started</Button> */}
//         {/* <Button
//             className="bg-white text-black rounded-full px-6 py-3 text-lg font-semibold hover:bg-zinc-100 transition-all"
//             onClick={() => navigate("/dashboard")} >
//             Get Started →
//         </Button> */}
//        <Button
//   className="bg-white text-black rounded-full px-6 py-3 text-lg font-semibold transition-transform duration-150 
//              hover:bg-zinc-100 active:bg-black active:text-white active:scale-95"
//   onClick={() => navigate("/dashboard")}
// >
//   Get Started →
// </Button>   

//       </div>
//     </div>
//   );
// }
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function HeroPage() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const navigate = useNavigate();

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
//       {/* BACKGROUND LAYERS */}
//       <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-teal-900/20"></div>
//       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-gray-900/50 to-gray-900"></div>
      
//       {/* NAVBAR */}
//       <nav className="relative z-50 flex items-center justify-between px-6 py-4 lg:px-8">
//         {/* Logo */}
//         <div className="flex items-center space-x-2">
//           <span className="text-white text-2xl font-bold">✳ Genesys AUI</span>
//         </div>
        
//         {/* Nav Links - Hidden on mobile */}
//         <div className="hidden md:flex items-center space-x-8">
//           <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
//           <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
//           <a href="#docs" className="text-gray-300 hover:text-white transition-colors">Docs</a>
//           <a href="#blog" className="text-gray-300 hover:text-white transition-colors">Blog</a>
//         </div>
        
//         {/* Auth Buttons - Hidden on mobile */}
//         <div className="hidden md:flex items-center space-x-4">
//           <button className="text-gray-300 hover:text-white px-4 py-2 rounded-lg transition-colors">
//             Login
//           </button>
//           <button className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white/20 transition-all border border-white/20">
//             Sign Up
//           </button>
//         </div>
        
//         {/* Mobile Menu Icon */}
//         <div className="md:hidden">
//           <button 
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className="text-white text-2xl"
//           >
//             ☰
//           </button>
//         </div>
//       </nav>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="md:hidden absolute top-16 left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-b border-white/10 z-40">
//           <div className="flex flex-col space-y-4 px-6 py-6">
//             <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
//             <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
//             <a href="#docs" className="text-gray-300 hover:text-white transition-colors">Docs</a>
//             <a href="#blog" className="text-gray-300 hover:text-white transition-colors">Blog</a>
//             <hr className="border-white/10" />
//             <button className="text-gray-300 hover:text-white text-left">Login</button>
//             <button className="bg-white/10 text-white px-4 py-2 rounded-lg hover:bg-white/20 transition-all border border-white/20 text-left">
//               Sign Up
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Beta Badge */}
//       <div className="flex justify-center mt-8 mb-12">
//         <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
//           <span className="text-white text-sm">✳ Genesys AUI</span>
//           <span className="text-gray-300 text-sm">is currently in beta</span>
//           <span className="text-white">›</span>
//         </div>
//       </div>

//       {/* HERO SECTION */}
//       <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-16 pb-32">
//         <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
//           AI for teams building<br />
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400">
//             what's next.
//           </span>
//         </h1>
        
//         <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl leading-relaxed">
//           Genesys AUI gives you the tools to build custom agents and workflows in record time.
//         </p>
        
//         <button 
//           onClick={() => navigate("/dashboard")}
//           className="bg-white text-black rounded-full px-8 py-4 text-lg font-semibold hover:scale-105 hover:shadow-2xl transition-all duration-300 flex items-center space-x-2 group"
//         >
//           <span>Get Started</span>
//           <span className="group-hover:translate-x-1 transition-transform">→</span>
//         </button>
//       </div>

//       {/* Decorative Elements */}
//       <div className="absolute top-1/4 left-10 w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-pulse"></div>
//       <div className="absolute top-1/3 right-20 w-1 h-1 bg-purple-400 rounded-full opacity-80 animate-pulse delay-1000"></div>
//       <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-teal-400 rounded-full opacity-70 animate-pulse delay-500"></div>
//       <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-blue-300 rounded-full opacity-60 animate-pulse delay-700"></div>
//     </div>
//   );
// }
import { useState } from "react";

export default function HeroPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navigate = (path) => {
    // Replace with your actual navigation logic
    console.log(`Navigate to ${path}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background gradient layers matching the image */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-900/30 via-slate-800/50 to-purple-900/30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent"></div>
      
      {/* NAVBAR */}
      <nav className="relative z-50 flex items-center justify-between px-6 py-6 lg:px-12">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-white text-xl font-medium">✳ Genesys AUI</span>
        </div>
        
        {/* Nav Links - Hidden on mobile */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-300 hover:text-white transition-colors text-sm">Features</a>
          <a href="#pricing" className="text-gray-300 hover:text-white transition-colors text-sm">Pricing</a>
          <a href="#docs" className="text-gray-300 hover:text-white transition-colors text-sm">Docs</a>
          <a href="#blog" className="text-gray-300 hover:text-white transition-colors text-sm">Blog</a>
        </div>
        
        {/* Auth Buttons - Hidden on mobile */}
        <div className="hidden md:flex items-center space-x-3">
          <button className="text-gray-300 hover:text-white px-4 py-2 rounded-full transition-colors text-sm border border-gray-600 hover:border-gray-500">
            Login
          </button>
          <button className="bg-white text-black px-5 py-2 rounded-full hover:bg-gray-100 transition-all font-medium text-sm">
            Sign Up
          </button>
        </div>
        
        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white text-xl"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-slate-900/95 backdrop-blur-sm border-b border-white/10 z-40">
          <div className="flex flex-col space-y-4 px-6 py-6">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
            <a href="#docs" className="text-gray-300 hover:text-white transition-colors">Docs</a>
            <a href="#blog" className="text-gray-300 hover:text-white transition-colors">Blog</a>
            <hr className="border-white/10" />
            <button className="text-gray-300 hover:text-white text-left">Login</button>
            <button className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-100 transition-all text-left">
              Sign Up
            </button>
          </div>
        </div>
      )}

      {/* HERO SECTION */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 min-h-[80vh]">
        {/* Beta Badge */}
        <div className="flex items-center space-x-2 text-gray-400 mb-12 text-sm">
          <span>✳ Genesys AUI</span>
          <span>is currently in beta</span>
          <span className="text-gray-500">›</span>
        </div>

        {/* Main Heading - Matching the exact style from image */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-light text-white mb-8 leading-[0.9] tracking-tight">
          AI for teams building<br />
          <span className="text-gray-400">what's next.</span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl leading-relaxed font-light">
          Genesys AUI gives you the tools to build custom agents and workflows in record time.
        </p>
        
        {/* CTA Button - Matching the exact style */}
        <button 
          onClick={() => navigate("/dashboard")}
          className="bg-white text-black rounded-full px-8 py-3 text-base font-medium hover:bg-gray-100 hover:scale-105 transition-all duration-200 flex items-center space-x-2 shadow-lg cursor-pointer"
        >
          <span>Get Started</span>
          <span>›</span>
        </button>
      </div>

      {/* Bottom fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>
    </div>
  );
}
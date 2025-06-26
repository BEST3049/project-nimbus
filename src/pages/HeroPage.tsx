import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function HeroPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
const navigate = useNavigate();

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
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 min-h-[80vh]">
        {/* Beta Badge */}
        <div className="flex items-center space-x-2 text-gray-400 mb-12 text-sm">
          <span>✳ Genesys AUI</span>
          <span>is currently in beta</span>
          <span className="text-gray-500">›</span>
        </div>


        <h1 className="text-6xl md:text-7xl lg:text-8xl font-light text-white mb-8 leading-[0.9] tracking-tight">
          AI for teams building<br />
          <span className="text-gray-400">what's next.</span>
        </h1>
        

        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl leading-relaxed font-light">
          Genesys AUI gives you the tools to build custom agents and workflows in record time.
        </p>
        <button 
          onClick={() => navigate("/dashboard")}
          className="bg-white text-black rounded-full px-8 py-3 text-base font-medium hover:bg-gray-100 hover:scale-105 transition-all duration-200 flex items-center space-x-2 shadow-lg cursor-pointer"
        >
          <span>Get Started</span>
          <span>›</span>
        </button>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>
    </div>
  );
}
import { useCallback, useState } from "react";
import { StateSelect } from "./StateSelect";
import { useLocation } from "../context/LocationContext";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Shield, Menu, Bell, User } from "lucide-react";

// Simple smooth scroll helper with header offset
function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const headerOffset = 80; // adjust if header height changes
  const y = el.getBoundingClientRect().top + window.scrollY - headerOffset;
  window.scrollTo({ top: y, behavior: 'smooth' });
}

export function Header() {
  const { selectedState, setSelectedState } = useLocation();
  const handleNav = useCallback((id: string) => () => scrollToSection(id), []);
  return (
    <header className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50 transition-all duration-300 hover:bg-white/90 hover:shadow-lg hover:shadow-blue-100/50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="p-2 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-500/50 group-hover:rotate-3">
              <Shield className="h-6 w-6 text-white transition-transform duration-300 group-hover:scale-110" />
            </div>
            <div className="transition-all duration-300 group-hover:translate-x-1">
              <h1 className="text-xl font-semibold text-gray-900 transition-colors duration-300 group-hover:text-blue-600">SafeEdu</h1>
              <p className="text-xs text-gray-500 transition-colors duration-300 group-hover:text-blue-500">Disaster Preparedness Platform</p>
            </div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-2">
          <Button onClick={handleNav('dashboard')} variant="ghost" className="text-gray-600 hover:text-blue-600 hover:bg-blue-50 hover:shadow-md hover:shadow-blue-100/50 transition-all duration-300 hover:scale-105 relative group">
            <span className="relative z-10">Dashboard</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 to-blue-600/0 group-hover:from-blue-400/10 group-hover:to-blue-600/10 rounded-md transition-all duration-300" />
          </Button>
          <Button onClick={handleNav('learn')} variant="ghost" className="text-gray-600 hover:text-blue-600 hover:bg-blue-50 hover:shadow-md hover:shadow-blue-100/50 transition-all duration-300 hover:scale-105 relative group">
            <span className="relative z-10">Learn</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 to-blue-600/0 group-hover:from-blue-400/10 group-hover:to-blue-600/10 rounded-md transition-all duration-300" />
          </Button>
          <Button onClick={handleNav('drills')} variant="ghost" className="text-gray-600 hover:text-blue-600 hover:bg-blue-50 hover:shadow-md hover:shadow-blue-100/50 transition-all duration-300 hover:scale-105 relative group">
            <span className="relative z-10">Virtual Drills</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 to-blue-600/0 group-hover:from-blue-400/10 group-hover:to-blue-600/10 rounded-md transition-all duration-300" />
          </Button>
            <Button onClick={handleNav('emergency')} variant="ghost" className="text-gray-600 hover:text-red-600 hover:bg-red-50 hover:shadow-md hover:shadow-red-100/50 transition-all duration-300 hover:scale-105 relative group">
            <span className="relative z-10">Emergency</span>
            <div className="absolute inset-0 bg-gradient-to-r from-red-400/0 to-red-600/0 group-hover:from-red-400/10 group-hover:to-red-600/10 rounded-md transition-all duration-300" />
          </Button>
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <StateSelect value={selectedState} onChange={setSelectedState} />
          </div>
          <Button variant="ghost" size="sm" className="relative hover:bg-red-50 hover:text-red-600 hover:scale-110 hover:shadow-lg hover:shadow-red-200/50 transition-all duration-300 group">
            <Bell className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
            <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full animate-pulse"></span>
            <div className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full animate-ping"></div>
          </Button>
          <Button variant="ghost" size="sm" className="hover:bg-blue-50 hover:text-blue-600 hover:scale-110 hover:shadow-lg hover:shadow-blue-200/50 transition-all duration-300 group">
            <User className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
          </Button>
          <Button variant="ghost" size="sm" className="md:hidden hover:bg-gray-50 hover:scale-110 hover:shadow-lg hover:shadow-gray-200/50 transition-all duration-300 group">
            <Menu className="h-4 w-4 transition-transform duration-300 group-hover:rotate-90" />
          </Button>
        </div>
      </div>
    </header>
  );
}
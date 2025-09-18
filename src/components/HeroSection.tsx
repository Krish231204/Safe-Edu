import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { Shield, Play, Users, BookOpen, Target } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroSection() {
  return (
    <section id="hero" className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 overflow-hidden">
      {/* Animated background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-green-200/30 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-yellow-200/30 rounded-full blur-xl animate-pulse delay-500"></div>
        <div className="absolute top-1/4 right-1/3 w-24 h-24 bg-purple-200/20 rounded-full blur-2xl animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <Badge className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 border-blue-200 hover:shadow-lg hover:shadow-blue-200/50 hover:scale-105 transition-all duration-300 cursor-pointer animate-bounce">
                🇮🇳 Built for Indian Schools & Colleges
              </Badge>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                <span className="text-transparent bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text hover:from-blue-700 hover:to-blue-900 transition-all duration-300">Disaster</span> Preparedness
                <br />
                Education Platform
              </h1>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Empower students and staff with life-saving knowledge through interactive learning modules, 
                virtual drills, and region-specific emergency protocols. Building a safer, more resilient India.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white hover:shadow-xl hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300 relative group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-white/20 to-blue-400/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <Play className="h-5 w-5 mr-2 transition-transform duration-300 group-hover:scale-110" />
                Start Learning
              </Button>
              <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-blue-300 hover:text-blue-600 hover:shadow-lg hover:shadow-gray-200/50 hover:scale-105 transition-all duration-300 group">
                <Shield className="h-5 w-5 mr-2 transition-transform duration-300 group-hover:rotate-12" />
                View Demo
              </Button>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center group cursor-pointer">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg mx-auto mb-2 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-200/50 group-hover:rotate-3">
                  <Users className="h-6 w-6 text-blue-600 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <p className="text-2xl font-semibold text-gray-900 transition-colors duration-300 group-hover:text-blue-600">50K+</p>
                <p className="text-sm text-gray-600 transition-colors duration-300 group-hover:text-blue-500">Students Trained</p>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-lg mx-auto mb-2 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-green-200/50 group-hover:rotate-3">
                  <BookOpen className="h-6 w-6 text-green-600 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <p className="text-2xl font-semibold text-gray-900 transition-colors duration-300 group-hover:text-green-600">200+</p>
                <p className="text-sm text-gray-600 transition-colors duration-300 group-hover:text-green-500">Institutions</p>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-lg mx-auto mb-2 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-yellow-200/50 group-hover:rotate-3">
                  <Target className="h-6 w-6 text-yellow-600 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <p className="text-2xl font-semibold text-gray-900 transition-colors duration-300 group-hover:text-yellow-600">95%</p>
                <p className="text-sm text-gray-600 transition-colors duration-300 group-hover:text-yellow-500">Preparedness Score</p>
              </div>
            </div>
          </div>

          {/* Right Content - Enhanced Hero Image */}
          <div className="relative group">
            <Card className="overflow-hidden border-0 shadow-2xl hover:shadow-3xl hover:shadow-blue-500/20 transition-all duration-500 hover:scale-105 relative">
              <div className="aspect-[4/3] relative overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/flagged/photo-1574097656146-0b43b7660cb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzdHVkZW50cyUyMGxlYXJuaW5nfGVufDF8fHx8MTc1NzQ5NzQyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Students learning disaster preparedness"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 transform transition-transform duration-300 group-hover:translate-y-[-4px]">
                  <Badge className="bg-white/90 text-gray-800 mb-2 hover:bg-white hover:shadow-lg transition-all duration-300">
                    🎯 Interactive Learning in Progress
                  </Badge>
                  <p className="text-white text-sm">
                    Students engaging with earthquake response simulation
                  </p>
                </div>
              </div>
            </Card>

            {/* Enhanced floating elements */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-green-600 text-white p-3 rounded-lg shadow-lg hover:shadow-xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-110 cursor-pointer animate-pulse">
              <p className="text-sm font-semibold">99% Uptime</p>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white p-3 rounded-lg shadow-lg hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-110 cursor-pointer animate-pulse delay-300">
              <p className="text-sm font-semibold">NDMA Approved</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
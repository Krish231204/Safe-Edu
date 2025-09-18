import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { Shield, Play, Users, BookOpen, Target } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-green-200/30 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-yellow-200/30 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                🇮🇳 Built for Indian Schools & Colleges
              </Badge>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                <span className="text-blue-600">Disaster</span> Preparedness
                <br />
                Education Platform
              </h1>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Empower students and staff with life-saving knowledge through interactive learning modules, 
                virtual drills, and region-specific emergency protocols. Building a safer, more resilient India.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <Play className="h-5 w-5 mr-2" />
                Start Learning
              </Button>
              <Button size="lg" variant="outline" className="border-gray-300 text-gray-700">
                <Shield className="h-5 w-5 mr-2" />
                View Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-2">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <p className="text-2xl font-semibold text-gray-900">50K+</p>
                <p className="text-sm text-gray-600">Students Trained</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mx-auto mb-2">
                  <BookOpen className="h-6 w-6 text-green-600" />
                </div>
                <p className="text-2xl font-semibold text-gray-900">200+</p>
                <p className="text-sm text-gray-600">Institutions</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-lg mx-auto mb-2">
                  <Target className="h-6 w-6 text-yellow-600" />
                </div>
                <p className="text-2xl font-semibold text-gray-900">95%</p>
                <p className="text-sm text-gray-600">Preparedness Score</p>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <Card className="overflow-hidden border-0 shadow-2xl">
              <div className="aspect-[4/3] relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/flagged/photo-1574097656146-0b43b7660cb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzdHVkZW50cyUyMGxlYXJuaW5nfGVufDF8fHx8MTc1NzQ5NzQyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Students learning disaster preparedness"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <Badge className="bg-white/90 text-gray-800 mb-2">
                    🎯 Interactive Learning in Progress
                  </Badge>
                  <p className="text-white text-sm">
                    Students engaging with earthquake response simulation
                  </p>
                </div>
              </div>
            </Card>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-green-500 text-white p-3 rounded-lg shadow-lg">
              <p className="text-sm font-semibold">99% Uptime</p>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white p-3 rounded-lg shadow-lg">
              <p className="text-sm font-semibold">NDMA Approved</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { 
  BookOpen, 
  Gamepad2, 
  Shield, 
  Users, 
  MapPin, 
  AlertTriangle,
  BarChart3,
  MessageSquare,
  Play,
  Star
} from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: BookOpen,
      title: "Interactive Learning Modules",
      description: "Comprehensive courses on earthquake, flood, fire safety with multimedia content",
      badge: "🎓 Learn",
      color: "blue",
      stats: "50+ Modules"
    },
    {
      icon: Gamepad2,
      title: "Gamified Experience",
      description: "Earn points, badges, and certificates while learning life-saving skills",
      badge: "🎮 Play",
      color: "purple",
      stats: "Achievement System"
    },
    {
      icon: Shield,
      title: "Virtual Emergency Drills",
      description: "Immersive 3D simulations for earthquake, fire, and evacuation scenarios",
      badge: "🚨 Practice",
      color: "red",
      stats: "VR Ready"
    },
    {
      icon: MapPin,
      title: "Region-Specific Alerts",
      description: "Real-time disaster warnings and localized preparedness protocols",
      badge: "📍 Location",
      color: "green",
      stats: "28 States Covered"
    },
    {
      icon: Users,
      title: "Emergency Contacts",
      description: "Quick access to local authorities, hospitals, and emergency services",
      badge: "📞 Connect",
      color: "orange",
      stats: "24/7 Support"
    },
    {
      icon: BarChart3,
      title: "Progress Dashboard",
      description: "Track institutional readiness, drill participation, and student progress",
      badge: "📊 Analytics",
      color: "cyan",
      stats: "Real-time Data"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600 border-blue-200",
      purple: "bg-purple-100 text-purple-600 border-purple-200",
      red: "bg-red-100 text-red-600 border-red-200",
      green: "bg-green-100 text-green-600 border-green-200",
      orange: "bg-orange-100 text-orange-600 border-orange-200",
      cyan: "bg-cyan-100 text-cyan-600 border-cyan-200"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-blue-100 text-blue-800 border-blue-200 mb-4">
            🌟 Platform Features
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Disaster Education Ecosystem
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From interactive learning to real-time emergency response, our platform provides everything 
            educational institutions need to build disaster resilience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="border-0 shadow-md hover:shadow-xl transition-all duration-300 group bg-white">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className={`p-3 rounded-xl ${getColorClasses(feature.color)} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-gray-900 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-green-600 flex items-center gap-1">
                      <Star className="h-3 w-3 fill-current" />
                      {feature.stats}
                    </span>
                    <Button size="sm" variant="ghost" className="text-blue-600 hover:text-blue-800">
                      <Play className="h-3 w-3 mr-1" />
                      Explore
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="inline-block p-8 bg-gradient-to-r from-blue-600 to-blue-700 border-0 text-white">
            <div className="flex items-center gap-4 mb-4">
              <AlertTriangle className="h-8 w-8 text-yellow-300" />
              <div className="text-left">
                <h3 className="text-xl font-semibold">Ready to get started?</h3>
                <p className="text-blue-100">Join thousands of institutions building disaster resilience</p>
              </div>
            </div>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <MessageSquare className="h-4 w-4 mr-2" />
              Request Demo
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
}
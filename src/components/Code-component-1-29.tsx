import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { 
  Zap, 
  Waves, 
  Flame, 
  Wind, 
  Mountain, 
  Clock,
  Users,
  CheckCircle,
  Play,
  Lock
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function LearningModules() {
  const modules = [
    {
      id: 1,
      title: "Earthquake Safety & Response",
      description: "Learn how to respond during earthquakes, safe spots, and post-earthquake protocols",
      icon: Zap,
      level: "Beginner",
      duration: "45 min",
      participants: 1234,
      progress: 75,
      status: "In Progress",
      image: "https://images.unsplash.com/photo-1689307181986-8b2c2afb58c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWVyZ2VuY3klMjBwcmVwYXJlZG5lc3MlMjBlZHVjYXRpb258ZW58MXx8fHwxNzU3NDk3NDIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      unlocked: true
    },
    {
      id: 2,
      title: "Flood Preparedness & Evacuation",
      description: "Comprehensive guide to flood safety, early warning systems, and evacuation procedures",
      icon: Waves,
      level: "Intermediate",
      duration: "60 min",
      participants: 892,
      progress: 45,
      status: "Available",
      image: "https://images.unsplash.com/photo-1581094373271-1fa59e2ab263?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXNhc3RlciUyMHJlc3BvbnNlJTIwdHJhaW5pbmd8ZW58MXx8fHwxNzU3NDk3NDIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      unlocked: true
    },
    {
      id: 3,
      title: "Fire Safety & Emergency Exits",
      description: "Fire prevention, evacuation routes, and emergency equipment usage",
      icon: Flame,
      level: "Beginner",
      duration: "30 min",
      participants: 1567,
      progress: 0,
      status: "Available",
      image: "https://images.unsplash.com/photo-1625958936686-a9343dc35b5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBlbWVyZ2VuY3klMjBkcmlsbHxlbnwxfHx8fDE3NTc0OTc0MjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      unlocked: true
    },
    {
      id: 4,
      title: "Cyclone & Storm Preparedness",
      description: "Understanding cyclone warnings and protective measures for coastal regions",
      icon: Wind,
      level: "Advanced",
      duration: "90 min",
      participants: 456,
      progress: 0,
      status: "Locked",
      image: "https://images.unsplash.com/photo-1689307181986-8b2c2afb58c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWVyZ2VuY3klMjBwcmVwYXJlZG5lc3MlMjBlZHVjYXRpb258ZW58MXx8fHwxNzU3NDk3NDIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      unlocked: false
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner": return "bg-green-100 text-green-800";
      case "Intermediate": return "bg-yellow-100 text-yellow-800";
      case "Advanced": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Progress": return "bg-blue-100 text-blue-800";
      case "Available": return "bg-green-100 text-green-800";
      case "Locked": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-green-100 text-green-800 border-green-200 mb-4">
            📚 Learning Modules
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Interactive Disaster Preparedness Courses
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Master essential skills through our scientifically-designed modules. Each course includes 
            interactive simulations, real-world scenarios, and region-specific protocols.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {modules.map((module) => {
            const Icon = module.icon;
            return (
              <Card key={module.id} className={`overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${!module.unlocked ? 'opacity-75' : ''}`}>
                <div className="relative h-48">
                  <ImageWithFallback
                    src={module.image}
                    alt={module.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Status Badge */}
                  <Badge className={`absolute top-3 left-3 ${getStatusColor(module.status)}`}>
                    {module.status === "In Progress" && <CheckCircle className="h-3 w-3 mr-1" />}
                    {module.status === "Locked" && <Lock className="h-3 w-3 mr-1" />}
                    {module.status}
                  </Badge>

                  {/* Icon */}
                  <div className="absolute top-3 right-3 p-2 bg-white/90 rounded-lg">
                    <Icon className="h-5 w-5 text-blue-600" />
                  </div>

                  {/* Play Button */}
                  {module.unlocked && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <Button size="lg" className="bg-white/90 text-blue-600 hover:bg-white">
                        <Play className="h-5 w-5 mr-2" />
                        Start Module
                      </Button>
                    </div>
                  )}
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline" className={getLevelColor(module.level)}>
                      {module.level}
                    </Badge>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Clock className="h-3 w-3" />
                      {module.duration}
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-500 ml-auto">
                      <Users className="h-3 w-3" />
                      {module.participants.toLocaleString()}
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {module.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {module.description}
                  </p>

                  {module.progress > 0 && (
                    <div className="mb-4">
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>Progress</span>
                        <span>{module.progress}%</span>
                      </div>
                      <Progress value={module.progress} className="h-2" />
                    </div>
                  )}

                  <div className="flex gap-2">
                    {module.unlocked ? (
                      <>
                        <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                          {module.progress > 0 ? 'Continue Learning' : 'Start Module'}
                        </Button>
                        <Button variant="outline" size="sm">
                          Preview
                        </Button>
                      </>
                    ) : (
                      <Button variant="outline" className="flex-1" disabled>
                        <Lock className="h-4 w-4 mr-2" />
                        Complete previous modules to unlock
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Module Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <Card className="text-center p-6 bg-blue-50 border-blue-200">
            <div className="text-2xl font-bold text-blue-600 mb-1">25+</div>
            <div className="text-sm text-gray-600">Total Modules</div>
          </Card>
          <Card className="text-center p-6 bg-green-50 border-green-200">
            <div className="text-2xl font-bold text-green-600 mb-1">4.8⭐</div>
            <div className="text-sm text-gray-600">Average Rating</div>
          </Card>
          <Card className="text-center p-6 bg-purple-50 border-purple-200">
            <div className="text-2xl font-bold text-purple-600 mb-1">50K+</div>
            <div className="text-sm text-gray-600">Completions</div>
          </Card>
          <Card className="text-center p-6 bg-orange-50 border-orange-200">
            <div className="text-2xl font-bold text-orange-600 mb-1">28</div>
            <div className="text-sm text-gray-600">Languages</div>
          </Card>
        </div>
      </div>
    </section>
  );
}
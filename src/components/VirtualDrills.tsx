import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { 
  Play, 
  Users, 
  Clock, 
  Target,
  Zap,
  Waves,
  Flame,
  Activity,
  Trophy,
  Calendar,
  MapPin
} from "lucide-react";

export function VirtualDrills() {
  const drills = [
    {
      id: 1,
      title: "Earthquake Evacuation Drill",
      description: "Practice rapid response to earthquake warnings in a 3D school environment",
      type: "Earthquake",
      icon: Zap,
      duration: "10-15 min",
      participants: 45,
      difficulty: "Medium",
      score: 85,
      status: "Active",
      bgColor: "bg-yellow-500"
    },
    {
      id: 2,
      title: "Fire Emergency Protocol",
      description: "Navigate through smoke-filled corridors and locate emergency exits safely",
      type: "Fire",
      icon: Flame,
      duration: "8-12 min",
      participants: 32,
      difficulty: "High",
      score: 92,
      status: "Completed",
      bgColor: "bg-red-500"
    },
    {
      id: 3,
      title: "Flood Response Simulation",
      description: "Learn evacuation procedures during flash flood scenarios",
      type: "Flood",
      icon: Waves,
      duration: "15-20 min",
      participants: 0,
      difficulty: "Low",
      score: 0,
      status: "Available",
      bgColor: "bg-blue-500"
    }
  ];

  const upcomingDrills = [
    {
      date: "Today, 2:30 PM",
      title: "School-wide Earthquake Drill",
      participants: "All Students & Staff",
      location: "Building A & B"
    },
    {
      date: "Tomorrow, 10:00 AM",
      title: "Fire Safety Assessment",
      participants: "Grade 9-12",
      location: "Science Block"
    },
    {
      date: "Friday, 11:15 AM",
      title: "Evacuation Route Practice",
      participants: "Grade 6-8",
      location: "Main Campus"
    }
  ];

  return (
    <section id="drills" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-red-100 text-red-800 border-red-200 mb-4">
            🚨 Virtual Drills
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Immersive Emergency Response Training
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Practice life-saving procedures in safe, controlled virtual environments. 
            Build muscle memory and confidence through realistic simulations.
          </p>
        </div>

        <Tabs defaultValue="virtual" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="virtual">Virtual Simulations</TabsTrigger>
            <TabsTrigger value="scheduled">Scheduled Drills</TabsTrigger>
          </TabsList>

          <TabsContent value="virtual" className="space-y-8">
            {/* Performance Overview */}
            <Card className="p-6 bg-white border-0 shadow-lg">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mx-auto mb-2">
                    <Trophy className="h-6 w-6 text-green-600" />
                  </div>
                  <p className="text-2xl font-semibold text-gray-900">89%</p>
                  <p className="text-sm text-gray-600">Average Score</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-2">
                    <Activity className="h-6 w-6 text-blue-600" />
                  </div>
                  <p className="text-2xl font-semibold text-gray-900">12</p>
                  <p className="text-sm text-gray-600">Drills Completed</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mx-auto mb-2">
                    <Target className="h-6 w-6 text-purple-600" />
                  </div>
                  <p className="text-2xl font-semibold text-gray-900">4.2s</p>
                  <p className="text-sm text-gray-600">Avg Response Time</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg mx-auto mb-2">
                    <Users className="h-6 w-6 text-orange-600" />
                  </div>
                  <p className="text-2xl font-semibold text-gray-900">Class 9A</p>
                  <p className="text-sm text-gray-600">Best Performing</p>
                </div>
              </div>
            </Card>

            {/* Virtual Drill Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {drills.map((drill) => {
                const Icon = drill.icon;
                return (
                  <Card key={drill.id} className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group hover:scale-105 hover:-translate-y-2 relative">
                    <div className={`h-2 ${drill.bgColor} transition-all duration-300 group-hover:h-3`}></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-x-full group-hover:translate-x-full"></div>
                    
                    <CardHeader className="pb-4 relative z-10">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className={`p-3 rounded-xl bg-gray-100 text-gray-600 group-hover:${drill.bgColor.replace('bg-', 'bg-')} group-hover:text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-xl`}>
                            <Icon className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
                          </div>
                          <div>
                            <Badge variant="outline" className="text-xs mb-1 hover:scale-105 transition-transform duration-300">
                              {drill.type}
                            </Badge>
                            <p className="text-xs text-gray-500 group-hover:text-gray-600 transition-colors duration-300">{drill.difficulty} Difficulty</p>
                          </div>
                        </div>
                        <Badge className={`transition-all duration-300 hover:scale-105 ${
                          drill.status === 'Active' ? 'bg-green-100 text-green-800 hover:shadow-green-200/50' :
                          drill.status === 'Completed' ? 'bg-blue-100 text-blue-800 hover:shadow-blue-200/50' :
                          'bg-gray-100 text-gray-800 hover:shadow-gray-200/50'
                        } hover:shadow-lg`}>
                          {drill.status}
                        </Badge>
                      </div>
                      
                      <CardTitle className="text-lg text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                        {drill.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                        {drill.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-4 relative z-10">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center gap-2 text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                          <Clock className="h-3 w-3 transition-transform duration-300 group-hover:rotate-12" />
                          {drill.duration}
                        </div>
                        <div className="flex items-center gap-2 text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                          <Users className="h-3 w-3 transition-transform duration-300 group-hover:scale-110" />
                          {drill.participants} participants
                        </div>
                      </div>

                      {drill.status === 'Completed' && (
                        <div>
                          <div className="flex justify-between text-sm text-gray-600 mb-1">
                            <span>Best Score</span>
                            <span className="group-hover:text-green-600 transition-colors duration-300">{drill.score}%</span>
                          </div>
                          <Progress value={drill.score} className="h-2 transition-all duration-300 group-hover:h-3" />
                        </div>
                      )}

                      <div className="flex gap-2 pt-2">
                        <Button 
                          className={`flex-1 transition-all duration-300 hover:scale-105 hover:shadow-xl relative group/btn overflow-hidden ${
                            drill.status === 'Active' ? 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 hover:shadow-green-500/50' : 
                            'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 hover:shadow-blue-500/50'
                          }`}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                          <Play className="h-4 w-4 mr-2 transition-transform duration-300 group-hover/btn:scale-110 relative z-10" />
                          <span className="relative z-10">
                            {drill.status === 'Active' ? 'Continue' : 
                             drill.status === 'Completed' ? 'Replay' : 'Start Drill'}
                          </span>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="scheduled" className="space-y-6">
            <Card className="p-6 bg-white border-0 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="h-6 w-6 text-blue-600" />
                <h3 className="text-xl font-semibold">Upcoming Physical Drills</h3>
              </div>
              
              <div className="space-y-4">
                {upcomingDrills.map((drill, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{drill.title}</h4>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                        <span>{drill.date}</span>
                        <span className="flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          {drill.participants}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {drill.location}
                        </span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Join
                    </Button>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
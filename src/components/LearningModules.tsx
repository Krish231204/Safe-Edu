import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { 
  BookOpen, 
  Shield, 
  Zap, 
  Waves,
  Clock, 
  Users, 
  Play, 
  CheckCircle, 
  Lock,
  Star,
  Mountain,
  Wind,
  Thermometer,
  Home,
  Building,
  GraduationCap,
  Baby,
  Heart,
  Eye,
  Gamepad2,
  Video,
  FileText,
  Headphones,
  Globe,
  Award,
  Target,
  Lightbulb,
  Activity,
  AlertTriangle,
  Navigation,
  Truck,
  Radio,
  MapPin,
  Camera,
  Smartphone
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function LearningModules() {
  const moduleCategories = {
    "Natural Disasters": {
      icon: Mountain,
      color: "from-orange-500 to-red-600",
      modules: [
        {
          id: "earthquake-basics",
          title: "Earthquake Preparedness Fundamentals",
          description: "Learn about earthquake science, safety protocols, and emergency response procedures.",
          level: "Beginner",
          duration: "45 min",
          participants: 15420,
          image: "https://images.unsplash.com/photo-1661520754901-bb5d6b374fde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlYXJ0aHF1YWtlJTIwZGFtYWdlJTIwYnVpbGRpbmclMjBzYWZldHl8ZW58MXx8fHwxNzU3MzkxODk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          icon: Zap,
          status: "Completed",
          progress: 100,
          unlocked: true
        },
        {
          id: "earthquake-advanced",
          title: "Advanced Earthquake Response",
          description: "Advanced techniques for post-earthquake assessment and community coordination.",
          level: "Advanced",
          duration: "65 min",
          participants: 8940,
          image: "https://images.unsplash.com/photo-1610774149656-f4d74dafa99b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlYXJ0aHF1YWtlJTIwcmVzY3VlJTIwZW1lcmdlbmN5JTIwcmVzcG9uc2V8ZW58MXx8fHwxNzU3NDk4Njk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          icon: Shield,
          status: "In Progress",
          progress: 60,
          unlocked: true
        },
        {
          id: "flood-preparedness",
          title: "Flood Safety & Prevention",
          description: "Comprehensive guide to understanding floods, evacuation procedures, and water safety.",
          level: "Beginner",
          duration: "40 min",
          participants: 12680,
          image: "https://images.unsplash.com/photo-1597253046616-913828d4e51f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG9vZCUyMHdhdGVyJTIwZGlzYXN0ZXIlMjBzYWZldHl8ZW58MXx8fHwxNzU3NDk4NzAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          icon: Waves,
          status: "Available",
          progress: 0,
          unlocked: true
        },
        {
          id: "cyclone-preparedness",
          title: "Cyclone & Hurricane Safety",
          description: "Essential knowledge about tropical cyclones, warning systems, and shelter protocols.",
          level: "Intermediate",
          duration: "50 min",
          participants: 9560,
          image: "https://images.unsplash.com/photo-1723398786622-e3b5b38a90ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxodXJyaWNhbmUlMjBjeWNsb25lJTIwc3Rvcm0lMjBzYWZldHl8ZW58MXx8fHwxNzU3NDk4NzA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          icon: Wind,
          status: "Available",
          progress: 0,
          unlocked: true
        },
        {
          id: "wildfire-safety",
          title: "Wildfire Prevention & Response",
          description: "Learn about wildfire behavior, evacuation planning, and post-fire recovery.",
          level: "Intermediate",
          duration: "55 min",
          participants: 7340,
          image: "https://images.unsplash.com/photo-1627404017595-212e8933788f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aWxkZmlyZSUyMGZvcmVzdCUyMGZpcmUlMjBzYWZldHl8ZW58MXx8fHwxNzU3NDk4NzExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          icon: AlertTriangle,
          status: "Locked",
          progress: 0,
          unlocked: false
        },
        {
          id: "drought-management",
          title: "Drought Preparedness & Water Conservation",
          description: "Understanding drought cycles, water management, and agricultural preparedness.",
          level: "Intermediate",
          duration: "45 min",
          participants: 5890,
          image: "https://images.unsplash.com/photo-1717533957568-8744c443ca1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcm91Z2h0JTIwZHJ5JTIwbGFuZCUyMHdhdGVyJTIwY29uc2VydmF0aW9ufGVufDF8fHx8MTc1NzQ5ODcxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          icon: Thermometer,
          status: "Locked",
          progress: 0,
          unlocked: false
        }
      ]
    },
    "Safety & First Aid": {
      icon: Heart,
      color: "from-pink-500 to-red-500",
      modules: [
        {
          id: "basic-first-aid",
          title: "Essential First Aid Training",
          description: "Life-saving first aid techniques for common emergency situations.",
          level: "Beginner",
          duration: "60 min",
          participants: 18760,
          image: "https://images.unsplash.com/photo-1624638746091-4b7de51514c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXJzdCUyMGFpZCUyMG1lZGljYWwlMjB0cmFpbmluZ3xlbnwxfHx8fDE3NTc0OTQwMzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          icon: Heart,
          status: "Completed",
          progress: 100,
          unlocked: true
        },
        {
          id: "cpr-training",
          title: "CPR & AED Certification",
          description: "Hands-on CPR training and automated external defibrillator usage.",
          level: "Intermediate",
          duration: "90 min",
          participants: 14230,
          image: "https://images.unsplash.com/photo-1633521251334-108664119318?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcHIlMjB0cmFpbmluZyUyMG1lZGljYWwlMjBlbWVyZ2VuY3l8ZW58MXx8fHwxNzU3NDk4NzM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          icon: Activity,
          status: "In Progress",
          progress: 45,
          unlocked: true
        },
        {
          id: "fire-safety",
          title: "Fire Prevention & Safety",
          description: "Fire prevention, evacuation procedures, and firefighting basics.",
          level: "Beginner",
          duration: "35 min",
          participants: 16540,
          image: "https://images.unsplash.com/photo-1553227960-74b87364b7ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXJlJTIwc2FmZXR5JTIwZmlyZWZpZ2h0ZXIlMjBlbWVyZ2VuY3l8ZW58MXx8fHwxNzU3NDk4NzI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          icon: Shield,
          status: "Available",
          progress: 0,
          unlocked: true
        },
        {
          id: "trauma-care",
          title: "Emergency Trauma Response",
          description: "Advanced trauma care and wound management techniques.",
          level: "Advanced",
          duration: "75 min",
          participants: 8760,
          image: "https://images.unsplash.com/photo-1677184460818-2b4bcb4c19da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF1bWElMjBjYXJlJTIwbWVkaWNhbCUyMGVtZXJnZW5jeSUyMHRyZWF0bWVudHxlbnwxfHx8fDE3NTc0OTg3Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          icon: Eye,
          status: "Locked",
          progress: 0,
          unlocked: false
        }
      ]
    },
    "Emergency Planning": {
      icon: MapPin,
      color: "from-blue-500 to-indigo-600",
      modules: [
        {
          id: "family-emergency-plan",
          title: "Family Emergency Planning",
          description: "Create comprehensive emergency plans for families and households.",
          level: "Beginner",
          duration: "40 min",
          participants: 11890,
          image: "https://images.unsplash.com/photo-1654613698246-b6d44aef0fd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBlbWVyZ2VuY3klMjBwbGFuJTIwbWVldGluZ3xlbnwxfHx8fDE3NTc0OTg3MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          icon: Home,
          status: "Available",
          progress: 0,
          unlocked: true
        },
        {
          id: "school-emergency-plan",
          title: "School Emergency Protocols",
          description: "Comprehensive emergency planning for educational institutions.",
          level: "Intermediate",
          duration: "70 min",
          participants: 9340,
          image: "https://images.unsplash.com/photo-1743422854809-7db89e0386fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBlbWVyZ2VuY3klMjBldmFjdWF0aW9uJTIwZHJpbGx8ZW58MXx8fHwxNzU3NDk4NzM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          icon: Building,
          status: "Available",
          progress: 0,
          unlocked: true
        },
        {
          id: "emergency-communication",
          title: "Emergency Communication Systems",
          description: "Learn about emergency communication protocols and backup systems.",
          level: "Intermediate",
          duration: "50 min",
          participants: 7650,
          image: "https://images.unsplash.com/photo-1562072299-8ecc43a8c709?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWVyZ2VuY3klMjBjb21tdW5pY2F0aW9uJTIwcmFkaW8lMjBzeXN0ZW18ZW58MXx8fHwxNzU3NDk4NzM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          icon: Radio,
          status: "Locked",
          progress: 0,
          unlocked: false
        },
        {
          id: "evacuation-planning",
          title: "Evacuation Route Planning",
          description: "Design and practice effective evacuation routes and assembly points.",
          level: "Advanced",
          duration: "65 min",
          participants: 6890,
          image: "https://images.unsplash.com/photo-1647451969544-2e0db88a150b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmFjdWF0aW9uJTIwcm91dGUlMjBleGl0JTIwc2lnbnxlbnwxfHx8fDE3NTc0OTg3NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          icon: Navigation,
          status: "Locked",
          progress: 0,
          unlocked: false
        }
      ]
    },
    "Age-Specific Training": {
      icon: GraduationCap,
      color: "from-green-500 to-teal-600",
      modules: [
        {
          id: "children-safety",
          title: "Child Safety & Preparedness",
          description: "Age-appropriate disaster preparedness for children and teens.",
          level: "Beginner",
          duration: "30 min",
          participants: 13450,
          image: "https://images.unsplash.com/photo-1636772523547-5577d04e8dc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHNhZmV0eSUyMGVkdWNhdGlvbiUyMGNsYXNzcm9vbXxlbnwxfHx8fDE3NTc0OTg3NDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          icon: Baby,
          status: "Available",
          progress: 0,
          unlocked: true
        },
        {
          id: "elderly-preparedness",
          title: "Senior Citizen Emergency Preparedness",
          description: "Specialized emergency planning for elderly and mobility-impaired individuals.",
          level: "Beginner",
          duration: "45 min",
          participants: 8970,
          image: "https://images.unsplash.com/photo-1525599428495-0441bd5c67de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGRlcmx5JTIwc2VuaW9yJTIwZW1lcmdlbmN5JTIwY2FyZXxlbnwxfHx8fDE3NTc0OTg3NTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          icon: Heart,
          status: "Available",
          progress: 0,
          unlocked: true
        },
        {
          id: "disability-preparedness",
          title: "Inclusive Emergency Preparedness",
          description: "Emergency planning for people with disabilities and special needs.",
          level: "Intermediate",
          duration: "55 min",
          participants: 6780,
          image: "https://images.unsplash.com/photo-1576864333223-db90dadfb975?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXNhYmlsaXR5JTIwYWNjZXNzaWJpbGl0eSUyMGVtZXJnZW5jeSUyMHN1cHBvcnR8ZW58MXx8fHwxNzU3NDk4NzYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          icon: Eye,
          status: "Locked",
          progress: 0,
          unlocked: false
        }
      ]
    },
    "Technology & Innovation": {
      icon: Smartphone,
      color: "from-purple-500 to-pink-600",
      modules: [
        {
          id: "emergency-apps",
          title: "Emergency Technology & Apps",
          description: "Leveraging mobile apps and technology for disaster preparedness.",
          level: "Beginner",
          duration: "35 min",
          participants: 10560,
          image: "https://images.unsplash.com/photo-1676139034007-6a0a01b2d937?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWVyZ2VuY3klMjB0ZWNobm9sb2d5JTIwbW9iaWxlJTIwYXBwfGVufDF8fHx8MTc1NzQ5ODc2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          icon: Smartphone,
          status: "Available",
          progress: 0,
          unlocked: true
        },
        {
          id: "social-media-alerts",
          title: "Social Media in Emergency Response",
          description: "Using social media platforms for emergency communication and alerts.",
          level: "Intermediate",
          duration: "40 min",
          participants: 8340,
          image: "https://images.unsplash.com/photo-1725393205567-54fc148b8a21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGVtZXJnZW5jeSUyMGFsZXJ0JTIwcGhvbmV8ZW58MXx8fHwxNzU3NDk4NzY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          icon: Globe,
          status: "Available",
          progress: 0,
          unlocked: true
        },
        {
          id: "drone-emergency",
          title: "Drone Technology in Disaster Response",
          description: "Understanding how drones are used in search, rescue, and assessment operations.",
          level: "Advanced",
          duration: "60 min",
          participants: 5670,
          image: "https://images.unsplash.com/photo-1640759123318-127a32594a67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcm9uZSUyMHJlc2N1ZSUyMHNlYXJjaCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU3NDk4NzcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          icon: Camera,
          status: "Locked",
          progress: 0,
          unlocked: false
        }
      ]
    },
    "Interactive & Gamified": {
      icon: Gamepad2,
      color: "from-yellow-500 to-orange-600",
      modules: [
        {
          id: "disaster-simulation-game",
          title: "Interactive Disaster Simulation",
          description: "Gamified learning experience with realistic disaster scenarios.",
          level: "All Levels",
          duration: "90 min",
          participants: 22340,
          image: "https://images.unsplash.com/photo-1734174040525-1a2b02499b5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXNhc3RlciUyMHNpbXVsYXRpb24lMjBnYW1lJTIwdHJhaW5pbmd8ZW58MXx8fHwxNzU3NDk4Nzc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          icon: Gamepad2,
          status: "Available",
          progress: 0,
          unlocked: true
        },
        {
          id: "vr-earthquake-drill",
          title: "VR Earthquake Drill Experience",
          description: "Immersive virtual reality earthquake response training.",
          level: "Intermediate",
          duration: "45 min",
          participants: 9870,
          image: "https://images.unsplash.com/photo-1640163561337-c188601ac266?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aXJ0dWFsJTIwcmVhbGl0eSUyMHZyJTIwdHJhaW5pbmclMjBoZWFkc2V0fGVufDF8fHx8MTc1NzQ5ODc4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          icon: Eye,
          status: "Available",
          progress: 0,
          unlocked: true
        },
        {
          id: "escape-room-challenge",
          title: "Digital Escape Room Challenge",
          description: "Solve emergency scenarios in a fun, puzzle-based format.",
          level: "All Levels",
          duration: "60 min",
          participants: 15670,
          image: "https://images.unsplash.com/photo-1622617760286-e11b543f5ab7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc2NhcGUlMjByb29tJTIwcHV6emxlJTIwZ2FtZXxlbnwxfHx8fDE3NTc0OTg3ODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          icon: Target,
          status: "Available",
          progress: 0,
          unlocked: true
        }
      ]
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800 border-green-200";
      case "In Progress":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Available":
        return "bg-gray-100 text-gray-800 border-gray-200";
      case "Locked":
        return "bg-orange-100 text-orange-800 border-orange-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "border-green-300 text-green-700 bg-green-50";
      case "Intermediate":
        return "border-yellow-300 text-yellow-700 bg-yellow-50";
      case "Advanced":
        return "border-red-300 text-red-700 bg-red-50";
      case "All Levels":
        return "border-purple-300 text-purple-700 bg-purple-50";
      default:
        return "border-gray-300 text-gray-700 bg-gray-50";
    }
  };

  return (
    <section id="learn" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-green-50/30 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-24 h-24 bg-blue-200/20 rounded-full blur-xl animate-pulse delay-300"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-green-200/20 rounded-full blur-xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-purple-200/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/4 right-1/4 w-28 h-28 bg-orange-200/15 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge className="bg-gradient-to-r from-blue-100 to-purple-200 text-blue-800 border-blue-200 mb-4 hover:shadow-lg hover:shadow-blue-200/50 hover:scale-105 transition-all duration-300 cursor-pointer animate-pulse">
            📚 Learning Modules
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">Disaster Education</span> Curriculum
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our extensive library of interactive learning modules designed for different age groups, 
            skill levels, and learning preferences. From basic safety to advanced emergency response.
          </p>
        </div>

        <Tabs defaultValue="Natural Disasters" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6 mb-8 bg-white/80 backdrop-blur-sm border border-gray-200 p-1 rounded-xl shadow-lg">
            {Object.entries(moduleCategories).map(([category, data]) => {
              const CategoryIcon = data.icon;
              return (
                <TabsTrigger 
                  key={category} 
                  value={category}
                  className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-600 data-[state=active]:text-white transition-all duration-300 hover:scale-105 relative group overflow-hidden rounded-lg"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-white/20 to-purple-400/0 -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
                  <CategoryIcon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110 relative z-10" />
                  <span className="hidden lg:inline text-xs font-medium relative z-10">{category.split(' ')[0]}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {Object.entries(moduleCategories).map(([category, data]) => (
            <TabsContent key={category} value={category} className="space-y-8">
              {/* Category Header */}
              <div className="text-center mb-8">
                <div className={`inline-flex items-center gap-3 p-4 rounded-2xl ${data.color} text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group cursor-pointer`}>
                  <data.icon className="h-8 w-8 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                  <div>
                    <h3 className="text-xl font-semibold">{category}</h3>
                    <p className="text-sm opacity-90">{data.modules.length} modules available</p>
                  </div>
                </div>
              </div>

              {/* Modules Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {data.modules.map((module) => {
                  const Icon = module.icon;
                  return (
                    <Card key={module.id} className={`overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${!module.unlocked ? 'opacity-75' : ''} group relative`}>
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative h-48 overflow-hidden">
                        <ImageWithFallback
                          src={module.image}
                          alt={module.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        
                        {/* Enhanced Status Badge */}
                        <Badge className={`absolute top-3 left-3 ${getStatusColor(module.status)} hover:scale-105 transition-all duration-300 shadow-lg`}>
                          {module.status === "In Progress" && <CheckCircle className="h-3 w-3 mr-1 animate-pulse" />}
                          {module.status === "Locked" && <Lock className="h-3 w-3 mr-1" />}
                          {module.status}
                        </Badge>

                        {/* Enhanced Icon */}
                        <div className="absolute top-3 right-3 p-2 bg-white/90 rounded-lg hover:bg-white hover:scale-110 hover:rotate-12 transition-all duration-300 hover:shadow-lg group/icon">
                          <Icon className="h-5 w-5 text-blue-600 transition-transform duration-300 group-hover/icon:scale-110" />
                        </div>

                        {/* Enhanced Play Button */}
                        {module.unlocked && (
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/20">
                            <Button size="lg" className="bg-white/95 text-blue-600 hover:bg-white hover:scale-110 hover:shadow-xl transition-all duration-300 group/play">
                              <Play className="h-5 w-5 mr-2 transition-transform duration-300 group-hover/play:scale-110" />
                              Start Module
                            </Button>
                          </div>
                        )}
                      </div>

                      <CardContent className="p-6 relative z-10">
                        <div className="flex items-center gap-2 mb-3">
                          <Badge variant="outline" className={`${getLevelColor(module.level)} hover:scale-105 transition-transform duration-300`}>
                            {module.level}
                          </Badge>
                          <div className="flex items-center gap-1 text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                            <Clock className="h-3 w-3 transition-transform duration-300 group-hover:rotate-12" />
                            {module.duration}
                          </div>
                          <div className="flex items-center gap-1 text-sm text-gray-500 ml-auto group-hover:text-gray-600 transition-colors duration-300">
                            <Users className="h-3 w-3 transition-transform duration-300 group-hover:scale-110" />
                            {module.participants.toLocaleString()}
                          </div>
                        </div>

                        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                          {module.title}
                        </h3>
                        <p className="text-gray-600 mb-4 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                          {module.description}
                        </p>

                        {module.progress > 0 && (
                          <div className="mb-4">
                            <div className="flex justify-between text-sm text-gray-600 mb-1">
                              <span>Progress</span>
                              <span>{module.progress}%</span>
                            </div>
                            <Progress value={module.progress} className="h-2 transition-all duration-300 hover:h-3" />
                          </div>
                        )}

                        <div className="flex gap-2">
                          {module.unlocked ? (
                            <>
                              <Button className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 group/btn">
                                <span className="relative z-10">{module.progress > 0 ? 'Continue Learning' : 'Start Module'}</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 rounded"></div>
                              </Button>
                              <Button variant="outline" size="sm" className="hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600 hover:scale-110 transition-all duration-300">
                                Preview
                              </Button>
                            </>
                          ) : (
                            <Button variant="outline" className="flex-1 hover:scale-105 transition-transform duration-300" disabled>
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
            </TabsContent>
          ))}
        </Tabs>

        {/* Enhanced Module Stats */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 mt-12">
          <Card className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 hover:shadow-lg hover:shadow-blue-200/50 hover:scale-105 transition-all duration-300 group cursor-pointer">
            <div className="text-2xl font-bold text-blue-600 mb-1 group-hover:scale-110 transition-transform duration-300">35+</div>
            <div className="text-sm text-gray-600 group-hover:text-blue-600 transition-colors duration-300">Total Modules</div>
          </Card>
          <Card className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 border-green-200 hover:shadow-lg hover:shadow-green-200/50 hover:scale-105 transition-all duration-300 group cursor-pointer">
            <div className="text-2xl font-bold text-green-600 mb-1 group-hover:scale-110 transition-transform duration-300">4.9⭐</div>
            <div className="text-sm text-gray-600 group-hover:text-green-600 transition-colors duration-300">Avg Rating</div>
          </Card>
          <Card className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 hover:shadow-lg hover:shadow-purple-200/50 hover:scale-105 transition-all duration-300 group cursor-pointer">
            <div className="text-2xl font-bold text-purple-600 mb-1 group-hover:scale-110 transition-transform duration-300">125K+</div>
            <div className="text-sm text-gray-600 group-hover:text-purple-600 transition-colors duration-300">Enrollments</div>
          </Card>
          <Card className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200 hover:shadow-lg hover:shadow-orange-200/50 hover:scale-105 transition-all duration-300 group cursor-pointer">
            <div className="text-2xl font-bold text-orange-600 mb-1 group-hover:scale-110 transition-transform duration-300">6</div>
            <div className="text-sm text-gray-600 group-hover:text-orange-600 transition-colors duration-300">Categories</div>
          </Card>
          <Card className="text-center p-6 bg-gradient-to-br from-pink-50 to-pink-100 border-pink-200 hover:shadow-lg hover:shadow-pink-200/50 hover:scale-105 transition-all duration-300 group cursor-pointer">
            <div className="text-2xl font-bold text-pink-600 mb-1 group-hover:scale-110 transition-transform duration-300">28</div>
            <div className="text-sm text-gray-600 group-hover:text-pink-600 transition-colors duration-300">Languages</div>
          </Card>
          <Card className="text-center p-6 bg-gradient-to-br from-cyan-50 to-cyan-100 border-cyan-200 hover:shadow-lg hover:shadow-cyan-200/50 hover:scale-105 transition-all duration-300 group cursor-pointer">
            <div className="text-2xl font-bold text-cyan-600 mb-1 group-hover:scale-110 transition-transform duration-300">VR/AR</div>
            <div className="text-sm text-gray-600 group-hover:text-cyan-600 transition-colors duration-300">Tech Ready</div>
          </Card>
        </div>

        {/* Featured Learning Path */}
        <Card className="mt-12 p-8 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white border-0 hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 hover:scale-105 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/0 via-white/10 to-pink-400/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">
            <div className="flex items-center gap-3 text-center md:text-left">
              <div className="p-3 bg-white/20 rounded-full">
                <Award className="h-8 w-8 animate-pulse" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Complete Learning Path Available</h3>
                <p className="text-indigo-100">
                  Follow our structured learning path from basic safety to advanced emergency response certification
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100 hover:scale-110 hover:shadow-xl transition-all duration-300 group/path">
                <Target className="h-4 w-4 mr-2 transition-transform duration-300 group-hover/path:rotate-12" />
                View Learning Path
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-indigo-600 hover:scale-110 hover:shadow-xl transition-all duration-300 group/cert">
                <Award className="h-4 w-4 mr-2 transition-transform duration-300 group-hover/cert:scale-110" />
                Get Certified
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
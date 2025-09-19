import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Alert, AlertDescription } from "./ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { 
  Phone, 
  MapPin, 
  AlertTriangle, 
  Shield,
  Heart,
  Truck,
  Clock,
  Radio,
  Users,
  Navigation,
  Zap,
  Cloud,
  CloudRain,
  Wind,
  Share,
  FileText
} from "lucide-react";
import { useEffect, useMemo, useState } from 'react';
import { useLocation } from "../context/LocationContext";
import { fetchEmergencyContactsByState, type EmergencyCategory } from "../services/api";

export function EmergencySection() {
  const { selectedState } = useLocation();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fetchedCategories, setFetchedCategories] = useState<EmergencyCategory[] | null>(null);

  const defaultContacts = [
    {
      category: "Police & Security",
      icon: Shield,
      color: "blue",
      contacts: [
        { name: "Police Emergency", number: "100", type: "National Emergency" },
        { name: "Mumbai Police", number: "022-2262-0111", type: "City Control Room" },
        { name: "Women Helpline", number: "1091", type: "24/7 Support" }
      ]
    },
    {
      category: "Medical Emergency",
      icon: Phone,
      color: "red", 
      contacts: [
        { name: "Medical Emergency", number: "108", type: "Ambulance Service" },
        { name: "COVID-19 Helpline", number: "1075", type: "Health Ministry" },
        { name: "Blood Bank", number: "104", type: "Emergency Blood" }
      ]
    },
    {
      category: "Fire & Rescue",
      icon: AlertTriangle,
      color: "orange",
      contacts: [
        { name: "Fire Brigade", number: "101", type: "Emergency Response" },
        { name: "Disaster Management", number: "108", type: "NDRF Operations" },
        { name: "Gas Leak Emergency", number: "1906", type: "24/7 Hotline" }
      ]
    }
  ];

  const currentAlerts = [
    {
      id: 1,
      title: "Heavy Rainfall Warning",
      description: "Intense rainfall expected in Mumbai region. Avoid waterlogged areas and stay indoors.",
      severity: "Medium",
      time: "2 hours ago",
      location: "Mumbai Metropolitan Region",
      icon: CloudRain,
      progress: 75,
      category: "Weather",
      expectedDuration: "Next 6 hours",
      affectedAreas: ["Andheri", "Bandra", "Colaba"],
      color: "blue"
    },
    {
      id: 2,
      title: "Earthquake Tremor Detected", 
      description: "Minor earthquake activity recorded. No immediate danger but remain alert.",
      severity: "Low",
      time: "45 minutes ago",
      location: "Delhi-NCR Region",
      icon: Zap,
      progress: 90,
      category: "Seismic",
      expectedDuration: "Monitoring ongoing",
      affectedAreas: ["Gurgaon", "Noida", "Central Delhi"],
      color: "yellow"
    },
    {
      id: 3,
      title: "Cyclone Alert - Approaching Coast",
      description: "Tropical cyclone forming in Bay of Bengal. Coastal areas advised to prepare for evacuation.",
      severity: "High",
      time: "30 minutes ago", 
      location: "Odisha & West Bengal Coast",
      icon: Wind,
      progress: 45,
      category: "Storm",
      expectedDuration: "Next 24-48 hours",
      affectedAreas: ["Puri", "Balasore", "Digha"],
      color: "red"
    },
    {
      id: 4,
      title: "Air Quality Alert",
      description: "Severe air pollution detected. Sensitive individuals advised to stay indoors.",
      severity: "Medium",
      time: "1 hour ago",
      location: "Delhi & Surrounding Areas",
      icon: AlertTriangle,
      progress: 60,
      category: "Environmental",
      expectedDuration: "Next 12 hours",
      affectedAreas: ["Central Delhi", "Ghaziabad", "Faridabad"],
      color: "orange"
    }
  ];

  const regionalProtocols = [
    {
      hazard: "Earthquake",
      riskLevel: "High",
      description: "Mumbai lies in seismic zone III with moderate earthquake risk",
      protocols: [
        "Drop, Cover, and Hold On during shaking",
        "Stay away from windows and heavy objects",
        "Use stairs, never elevators during evacuation",
        "Gather at designated assembly points"
      ]
    },
    {
      hazard: "Flooding",
      riskLevel: "Very High",
      description: "Mumbai's coastal location and monsoons create high flood risk",
      protocols: [
        "Move to higher floors immediately",
        "Avoid electrical equipment in water",
        "Do not attempt to cross flooded roads",
        "Listen to official weather updates"
      ]
    },
    {
      hazard: "Cyclone",
      riskLevel: "Medium",
      description: "Arabian Sea cyclones can impact Mumbai's coastal areas",
      protocols: [
        "Secure loose objects and windows",
        "Stock emergency supplies for 72 hours",
        "Stay indoors and away from windows",
        "Follow official evacuation orders"
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: { bg: "bg-blue-100", text: "text-blue-600", border: "border-blue-200" },
      red: { bg: "bg-red-100", text: "text-red-600", border: "border-red-200" },
      green: { bg: "bg-green-100", text: "text-green-600", border: "border-green-200" }
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "High":
        return "bg-gradient-to-r from-red-500 to-red-600 border-red-200 text-red-800";
      case "Medium":
        return "bg-gradient-to-r from-orange-500 to-orange-600 border-orange-200 text-orange-800";
      case "Low":
        return "bg-gradient-to-r from-yellow-500 to-yellow-600 border-yellow-200 text-yellow-800";
      default:
        return "bg-gradient-to-r from-gray-500 to-gray-600 border-gray-200 text-gray-800";
    }
  };

  const getAlertColorClasses = (color: string) => {
    const colorMap = {
      red: {
        bg: "from-red-500/10 to-red-600/10", 
        border: "border-red-500/30",
        icon: "text-red-600",
        glow: "shadow-red-500/20"
      },
      blue: {
        bg: "from-blue-500/10 to-blue-600/10", 
        border: "border-blue-500/30",
        icon: "text-blue-600",
        glow: "shadow-blue-500/20"
      },
      yellow: {
        bg: "from-yellow-500/10 to-yellow-600/10",
        border: "border-yellow-500/30", 
        icon: "text-yellow-600",
        glow: "shadow-yellow-500/20"
      },
      orange: {
        bg: "from-orange-500/10 to-orange-600/10",
        border: "border-orange-500/30",
        icon: "text-orange-600", 
        glow: "shadow-orange-500/20"
      }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  // Determine data source: API results or defaults
  const emergencyContacts: EmergencyCategory[] = useMemo(() => {
    if (fetchedCategories && fetchedCategories.length > 0) return fetchedCategories;
    // map default to include colors for UI
    return defaultContacts as unknown as EmergencyCategory[];
  }, [fetchedCategories, defaultContacts]);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setError(null);
    fetchEmergencyContactsByState(selectedState, controller.signal)
      .then(setFetchedCategories)
      .catch((e) => {
        console.warn('Emergency contacts fetch failed:', e);
        setError('Unable to load state contacts. Showing defaults.');
        setFetchedCategories(null);
      })
      .finally(() => setLoading(false));
    return () => controller.abort();
  }, [selectedState]);

  return (
    <section id="emergency" className="py-20 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-red-200/20 rounded-full blur-xl animate-pulse delay-300"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-orange-200/20 rounded-full blur-xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-yellow-200/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/4 right-1/4 w-36 h-36 bg-red-300/15 rounded-full blur-2xl animate-pulse delay-500"></div>
        
        {/* Animated emergency icons */}
        <div className="absolute top-10 right-20 text-red-300/30 animate-bounce delay-1000">
          <AlertTriangle className="h-16 w-16" />
        </div>
        <div className="absolute bottom-10 left-20 text-orange-300/30 animate-bounce delay-700">
          <Shield className="h-20 w-20" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge className="bg-gradient-to-r from-red-100 to-orange-200 text-red-800 border-red-200 mb-4 hover:shadow-lg hover:shadow-red-200/50 hover:scale-105 transition-all duration-300 cursor-pointer animate-pulse">
            🚨 Emergency Response Center
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Emergency <span className="text-transparent bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text">Response Hub</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Quick access to emergency services, real-time alerts, and region-specific disaster 
            response protocols. Stay informed and prepared for any situation.
          </p>
        </div>

        {/* Enhanced Emergency Alerts */}
        {currentAlerts.length > 0 && (
          <div className="mb-12">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-3 p-4 rounded-2xl bg-gradient-to-r from-red-600 to-orange-600 text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group cursor-pointer">
                <AlertTriangle className="h-8 w-8 animate-pulse" />
                <div>
                  <h3 className="text-xl font-semibold">Active Emergency Alerts</h3>
                  <p className="text-sm opacity-90">{currentAlerts.length} alerts requiring attention</p>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {currentAlerts.map((alert, index) => {
                const Icon = alert.icon;
                const colors = getAlertColorClasses(alert.color);
                return (
                  <Card key={alert.id} className={`relative overflow-hidden border-2 ${colors.border} bg-gradient-to-br ${colors.bg} hover:scale-105 hover:shadow-xl ${colors.glow} transition-all duration-500 group`}>
                    {/* Animated background pulse */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    
                    {/* Severity indicator bar */}
                    <div className={`h-2 w-full bg-gradient-to-r ${
                      alert.severity === 'High' ? 'from-red-500 to-red-600' :
                      alert.severity === 'Medium' ? 'from-orange-500 to-orange-600' :
                      'from-yellow-500 to-yellow-600'
                    } transition-all duration-300 group-hover:h-3`}></div>
                    
                    <div className="p-6 relative z-10">
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`p-3 rounded-full bg-white/90 ${colors.icon} shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-12`}>
                          <Icon className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <Badge className={`${getSeverityColor(alert.severity)} hover:scale-105 transition-all duration-300 shadow-md`}>
                              <div className={`w-2 h-2 rounded-full mr-2 ${
                                alert.severity === 'High' ? 'bg-red-500 animate-ping' :
                                alert.severity === 'Medium' ? 'bg-orange-500 animate-pulse' :
                                'bg-yellow-500'
                              }`}></div>
                              {alert.severity} Priority
                            </Badge>
                            <Badge variant="outline" className="text-xs bg-white/80 hover:scale-105 transition-transform duration-300">
                              {alert.category}
                            </Badge>
                          </div>
                          
                          <h4 className="font-semibold mb-2 text-gray-900 group-hover:text-gray-700 transition-colors duration-300 text-lg">
                            {alert.title}
                          </h4>
                          <p className="text-gray-700 mb-3 leading-relaxed group-hover:text-gray-600 transition-colors duration-300">
                            {alert.description}
                          </p>
                        </div>
                      </div>
                      
                      {/* Enhanced location and time info */}
                      <div className="space-y-3 mb-4">
                        <div className="flex items-center gap-2 text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                          <MapPin className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                          <span className="font-medium">{alert.location}</span>
                        </div>
                        
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-2 text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                            <Clock className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
                            <span>{alert.time}</span>
                          </div>
                          <div className="text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                            Duration: {alert.expectedDuration}
                          </div>
                        </div>
                      </div>
                      
                      {/* Progress indicator */}
                      <div className="mb-4">
                        <div className="flex justify-between text-sm text-gray-600 mb-1">
                          <span>Alert Progress</span>
                          <span>{alert.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div 
                            className={`h-2.5 rounded-full transition-all duration-500 ${
                              alert.severity === 'High' ? 'bg-gradient-to-r from-red-500 to-red-600' :
                              alert.severity === 'Medium' ? 'bg-gradient-to-r from-orange-500 to-orange-600' :
                              'bg-gradient-to-r from-yellow-500 to-yellow-600'
                            }`}
                            style={{ width: `${alert.progress}%` }}
                          ></div>
                        </div>
                      </div>
                      
                      {/* Affected areas */}
                      <div className="mb-4">
                        <p className="text-sm font-medium text-gray-700 mb-2">Affected Areas:</p>
                        <div className="flex flex-wrap gap-2">
                          {alert.affectedAreas.map((area, i) => (
                            <Badge key={i} variant="secondary" className="text-xs bg-white/60 hover:bg-white/80 hover:scale-105 transition-all duration-300">
                              {area}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      {/* Action buttons */}
                      <div className="flex gap-2 pt-2">
                        <Button size="sm" className={`flex-1 bg-gradient-to-r ${
                          alert.severity === 'High' ? 'from-red-600 to-red-700 hover:from-red-700 hover:to-red-800' :
                          alert.severity === 'Medium' ? 'from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800' :
                          'from-yellow-600 to-yellow-700 hover:from-yellow-700 hover:to-yellow-800'
                        } text-white hover:scale-105 hover:shadow-lg transition-all duration-300 group/btn`}>
                          <span className="relative z-10">View Details</span>
                          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 rounded"></div>
                        </Button>
                        <Button size="sm" variant="outline" className="hover:bg-white/80 hover:scale-110 transition-all duration-300 group/share">
                          <Share className="h-4 w-4 mr-2 transition-transform duration-300 group-hover/share:rotate-12" />
                          Share
                        </Button>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
            
            {/* Alert summary stats */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="text-center p-4 bg-gradient-to-br from-red-50 to-red-100 border-red-200 hover:shadow-lg hover:shadow-red-200/50 hover:scale-105 transition-all duration-300 group cursor-pointer">
                <div className="text-lg font-bold text-red-600 mb-1 group-hover:scale-110 transition-transform duration-300">
                  {currentAlerts.filter(a => a.severity === 'High').length}
                </div>
                <div className="text-sm text-gray-600 group-hover:text-red-600 transition-colors duration-300">High Priority</div>
              </Card>
              <Card className="text-center p-4 bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200 hover:shadow-lg hover:shadow-orange-200/50 hover:scale-105 transition-all duration-300 group cursor-pointer">
                <div className="text-lg font-bold text-orange-600 mb-1 group-hover:scale-110 transition-transform duration-300">
                  {currentAlerts.filter(a => a.severity === 'Medium').length}
                </div>
                <div className="text-sm text-gray-600 group-hover:text-orange-600 transition-colors duration-300">Medium Priority</div>
              </Card>
              <Card className="text-center p-4 bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200 hover:shadow-lg hover:shadow-yellow-200/50 hover:scale-105 transition-all duration-300 group cursor-pointer">
                <div className="text-lg font-bold text-yellow-600 mb-1 group-hover:scale-110 transition-transform duration-300">
                  {currentAlerts.filter(a => a.severity === 'Low').length}
                </div>
                <div className="text-sm text-gray-600 group-hover:text-yellow-600 transition-colors duration-300">Low Priority</div>
              </Card>
              <Card className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 hover:shadow-lg hover:shadow-blue-200/50 hover:scale-105 transition-all duration-300 group cursor-pointer">
                <div className="text-lg font-bold text-blue-600 mb-1 group-hover:scale-110 transition-transform duration-300">
                  {Math.round(currentAlerts.reduce((sum, a) => sum + a.progress, 0) / currentAlerts.length)}%
                </div>
                <div className="text-sm text-gray-600 group-hover:text-blue-600 transition-colors duration-300">Avg Progress</div>
              </Card>
            </div>
          </div>
        )}

        <Tabs defaultValue="contacts" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-white/80 backdrop-blur-sm border border-gray-200 p-1 rounded-xl shadow-lg">
            <TabsTrigger 
              value="contacts"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-500 data-[state=active]:to-orange-600 data-[state=active]:text-white transition-all duration-300 hover:scale-105 relative group overflow-hidden rounded-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-400/0 via-white/20 to-orange-400/0 -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
              <Phone className="h-4 w-4 mr-2 transition-transform duration-300 group-hover:scale-110 relative z-10" />
              <span className="relative z-10">Emergency Contacts</span>
            </TabsTrigger>
            <TabsTrigger 
              value="protocols"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-600 data-[state=active]:text-white transition-all duration-300 hover:scale-105 relative group overflow-hidden rounded-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-white/20 to-purple-400/0 -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
              <FileText className="h-4 w-4 mr-2 transition-transform duration-300 group-hover:scale-110 relative z-10" />
              <span className="relative z-10">Response Protocols</span>
            </TabsTrigger>
            <TabsTrigger 
              value="resources"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-teal-600 data-[state=active]:text-white transition-all duration-300 hover:scale-105 relative group overflow-hidden rounded-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/0 via-white/20 to-teal-400/0 -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
              <Truck className="h-4 w-4 mr-2 transition-transform duration-300 group-hover:scale-110 relative z-10" />
              <span className="relative z-10">Emergency Resources</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="contacts" className="space-y-8">
            {/* Emergency Contacts */}
            <div>
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-3 p-4 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group cursor-pointer">
                  <Phone className="h-8 w-8 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                  <div>
                    <h3 className="text-xl font-semibold">Emergency Contact Directory</h3>
                    <p className="text-sm opacity-90">{selectedState} • 24/7 emergency services</p>
                  </div>
                </div>
              </div>
              
              {loading && (
                <div className="text-center text-sm text-gray-600">Loading contacts for {selectedState}…</div>
              )}
              {error && (
                <div className="text-center text-xs text-orange-600">{error}</div>
              )}

              <div className="grid md:grid-cols-3 gap-6">
                {emergencyContacts.map((category, index) => {
                  const Icon = (category as any).icon ?? Shield;
                  const colors = getColorClasses((category as any).color || 'blue');
                  
                  return (
                    <Card key={index} className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 group relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-x-full group-hover:translate-x-full"></div>
                      <CardHeader className="pb-4 relative z-10">
                        <div className={`w-12 h-12 ${colors.bg} ${colors.border} rounded-lg flex items-center justify-center mb-3 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-xl`}>
                          <Icon className={`h-6 w-6 ${colors.text} transition-transform duration-300 group-hover:scale-110`} />
                        </div>
                        <CardTitle className="text-xl text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                          {category.category}
                        </CardTitle>
                        <CardDescription className="group-hover:text-gray-700 transition-colors duration-300">
                          Emergency services and contact information
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-3 relative z-10">
                        {category.contacts.map((contact, contactIndex) => (
                          <div key={contactIndex} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300 group/contact">
                            <div>
                              <p className="font-medium text-gray-900 text-sm group-hover/contact:text-blue-600 transition-colors duration-300">{contact.name}</p>
                              <p className="text-xs text-gray-500">{contact.type}</p>
                            </div>
                            <Button 
                              size="sm" 
                              className={`${colors.bg} hover:${colors.bg}/80 ${colors.text} border-0 hover:scale-110 hover:shadow-lg transition-all duration-300 group/btn`}
                              onClick={() => window.location.href = `tel:${contact.number}`}
                            >
                              <Phone className="h-3 w-3 mr-1 transition-transform duration-300 group-hover/btn:rotate-12" />
                              {contact.number}
                            </Button>
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Enhanced Quick Actions */}
              <Card className="p-6 bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white border-0 hover:shadow-2xl hover:shadow-red-500/50 transition-all duration-500 hover:scale-105 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-red-400/0 via-white/10 to-red-400/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">
                  <div className="text-center md:text-left">
                    <h3 className="text-xl font-semibold mb-2">Emergency Situation?</h3>
                    <p className="text-red-100">
                      For immediate help, call emergency services or use our panic button feature
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 hover:scale-110 hover:shadow-xl transition-all duration-300 group/call">
                      <Phone className="h-4 w-4 mr-2 transition-transform duration-300 group-hover/call:rotate-12" />
                      Call 100
                    </Button>
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600 hover:scale-110 hover:shadow-xl transition-all duration-300 group/panic">
                      <AlertTriangle className="h-4 w-4 mr-2 animate-pulse" />
                      Panic Button
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="protocols" className="space-y-6">
            <div className="grid gap-6">
              {regionalProtocols.map((protocol, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-xl text-gray-900">
                        {protocol.hazard} Response Protocol
                      </CardTitle>
                      <Badge className={
                        protocol.riskLevel === 'Very High' ? 'bg-red-100 text-red-800' :
                        protocol.riskLevel === 'High' ? 'bg-orange-100 text-orange-800' :
                        'bg-yellow-100 text-yellow-800'
                      }>
                        {protocol.riskLevel} Risk
                      </Badge>
                    </div>
                    <CardDescription className="text-gray-600">
                      {protocol.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold text-gray-900 mb-3">Emergency Response Steps:</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {protocol.protocols.map((step, stepIndex) => (
                        <div key={stepIndex} className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                          <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mt-0.5">
                            {stepIndex + 1}
                          </div>
                          <p className="text-sm text-gray-700 leading-relaxed">{step}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="resources">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 border-0 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-4">
                  <Radio className="h-6 w-6 text-blue-600 transition-transform duration-300 group-hover:scale-110" />
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">Mass Communication</h3>
                </div>
                <p className="text-gray-600 mb-6 group-hover:text-gray-700 transition-colors duration-300">
                  Instantly notify all students, staff, and parents during emergency situations
                </p>
                <div className="space-y-3">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 hover:scale-105 hover:shadow-lg transition-all duration-300 group/btn">
                    <Users className="h-4 w-4 mr-2 transition-transform duration-300 group-hover/btn:scale-110" />
                    Send Alert to All
                  </Button>
                  <Button variant="outline" className="w-full hover:bg-blue-50 hover:scale-105 transition-all duration-300 group/btn2">
                    <MapPin className="h-4 w-4 mr-2 transition-transform duration-300 group-hover/btn2:scale-110" />
                    Location-Based Alert
                  </Button>
                  <Button variant="outline" className="w-full hover:bg-blue-50 hover:scale-105 transition-all duration-300 group/btn3">
                    <Clock className="h-4 w-4 mr-2 transition-transform duration-300 group-hover/btn3:rotate-12" />
                    Schedule Drill Notification
                  </Button>
                </div>
              </Card>

              <Card className="p-6 border-0 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-4">
                  <Navigation className="h-6 w-6 text-green-600 transition-transform duration-300 group-hover:scale-110" />
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-green-600 transition-colors duration-300">Emergency Navigation</h3>
                </div>
                <p className="text-gray-600 mb-6 group-hover:text-gray-700 transition-colors duration-300">
                  Real-time evacuation routes and safe zone guidance based on current conditions
                </p>
                <div className="space-y-3">
                  <Button className="w-full bg-green-600 hover:bg-green-700 hover:scale-105 hover:shadow-lg transition-all duration-300 group/nav">
                    <MapPin className="h-4 w-4 mr-2 transition-transform duration-300 group-hover/nav:scale-110" />
                    Show Evacuation Routes
                  </Button>
                  <Button variant="outline" className="w-full hover:bg-green-50 hover:scale-105 transition-all duration-300 group/nav2">
                    <Navigation className="h-4 w-4 mr-2 transition-transform duration-300 group-hover/nav2:rotate-45" />
                    Nearest Safe Zone
                  </Button>
                  <Button variant="outline" className="w-full hover:bg-green-50 hover:scale-105 transition-all duration-300 group/nav3">
                    <Heart className="h-4 w-4 mr-2 transition-transform duration-300 group-hover/nav3:scale-110" />
                    Medical Stations  
                  </Button>
                </div>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
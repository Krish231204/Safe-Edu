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
  Cloud
} from "lucide-react";

export function EmergencySection() {
  const emergencyContacts = [
    {
      category: "Police",
      icon: Shield,
      color: "blue",
      contacts: [
        { name: "Emergency Police", number: "100", type: "National" },
        { name: "Mumbai Police Control", number: "022-2262-0111", type: "Local" },
        { name: "Traffic Police", number: "103", type: "Traffic" }
      ]
    },
    {
      category: "Fire & Rescue",
      icon: Truck,
      color: "red",
      contacts: [
        { name: "Fire Emergency", number: "101", type: "National" },
        { name: "Mumbai Fire Brigade", number: "022-2307-5555", type: "Local" },
        { name: "NDRF", number: "011-2671-8050", type: "Disaster Response" }
      ]
    },
    {
      category: "Medical",
      icon: Heart,
      color: "green",
      contacts: [
        { name: "Ambulance", number: "108", type: "National" },
        { name: "KEM Hospital", number: "022-2413-6051", type: "Hospital" },
        { name: "Poison Control", number: "1066", type: "Specialized" }
      ]
    }
  ];

  const currentAlerts = [
    {
      type: "weather",
      severity: "medium",
      title: "Heavy Rainfall Warning",
      description: "IMD forecasts heavy rainfall (65-115mm) in Mumbai region for next 24 hours",
      time: "2 hours ago",
      icon: Cloud
    },
    {
      type: "seismic",
      severity: "low",
      title: "Minor Earthquake Detected",
      description: "2.1 magnitude earthquake recorded 45km south of Mumbai at 3:20 AM",
      time: "6 hours ago",
      icon: Zap
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
      case "high": return "bg-red-100 border-red-500 text-red-800";
      case "medium": return "bg-orange-100 border-orange-500 text-orange-800";
      case "low": return "bg-yellow-100 border-yellow-500 text-yellow-800";
      default: return "bg-gray-100 border-gray-500 text-gray-800";
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-red-100 text-red-800 border-red-200 mb-4">
            🚨 Emergency Response
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            24/7 Emergency Support & Alerts
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Quick access to emergency services, real-time alerts, and region-specific 
            response protocols. Stay informed and prepared for any situation.
          </p>
        </div>

        {/* Emergency Alerts */}
        {currentAlerts.length > 0 && (
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-orange-600" />
              Active Alerts
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {currentAlerts.map((alert, index) => {
                const Icon = alert.icon;
                return (
                  <Alert key={index} className={`${getSeverityColor(alert.severity)} border-l-4`}>
                    <div className="flex items-start gap-3">
                      <Icon className="h-5 w-5 mt-0.5" />
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">{alert.title}</h4>
                        <AlertDescription className="text-sm mb-2">
                          {alert.description}
                        </AlertDescription>
                        <p className="text-xs opacity-75">{alert.time}</p>
                      </div>
                    </div>
                  </Alert>
                );
              })}
            </div>
          </div>
        )}

        <Tabs defaultValue="contacts" className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-8">
            <TabsTrigger value="contacts">Emergency Contacts</TabsTrigger>
            <TabsTrigger value="protocols">Regional Protocols</TabsTrigger>
            <TabsTrigger value="communication">Communication</TabsTrigger>
          </TabsList>

          <TabsContent value="contacts" className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              {emergencyContacts.map((category, index) => {
                const Icon = category.icon;
                const colors = getColorClasses(category.color);
                
                return (
                  <Card key={index} className="border-0 shadow-lg">
                    <CardHeader className="pb-4">
                      <div className={`w-12 h-12 ${colors.bg} ${colors.border} rounded-lg flex items-center justify-center mb-3`}>
                        <Icon className={`h-6 w-6 ${colors.text}`} />
                      </div>
                      <CardTitle className="text-xl text-gray-900">
                        {category.category}
                      </CardTitle>
                      <CardDescription>
                        Emergency services and contact information
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {category.contacts.map((contact, contactIndex) => (
                        <div key={contactIndex} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div>
                            <p className="font-medium text-gray-900 text-sm">{contact.name}</p>
                            <p className="text-xs text-gray-500">{contact.type}</p>
                          </div>
                          <Button 
                            size="sm" 
                            className={`${colors.bg} hover:${colors.bg}/80 ${colors.text} border-0`}
                            onClick={() => window.location.href = `tel:${contact.number}`}
                          >
                            <Phone className="h-3 w-3 mr-1" />
                            {contact.number}
                          </Button>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Quick Actions */}
            <Card className="p-6 bg-gradient-to-r from-red-600 to-red-700 text-white border-0">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-semibold mb-2">Emergency Situation?</h3>
                  <p className="text-red-100">
                    For immediate help, call emergency services or use our panic button feature
                  </p>
                </div>
                <div className="flex gap-3">
                  <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
                    <Phone className="h-4 w-4 mr-2" />
                    Call 100
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600">
                    <AlertTriangle className="h-4 w-4 mr-2" />
                    Panic Button
                  </Button>
                </div>
              </div>
            </Card>
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

          <TabsContent value="communication">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 border-0 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Radio className="h-6 w-6 text-blue-600" />
                  <h3 className="text-xl font-semibold text-gray-900">Mass Communication</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Instantly notify all students, staff, and parents during emergency situations
                </p>
                <div className="space-y-3">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    <Users className="h-4 w-4 mr-2" />
                    Send Alert to All
                  </Button>
                  <Button variant="outline" className="w-full">
                    <MapPin className="h-4 w-4 mr-2" />
                    Location-Based Alert
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Clock className="h-4 w-4 mr-2" />
                    Schedule Drill Notification
                  </Button>
                </div>
              </Card>

              <Card className="p-6 border-0 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Navigation className="h-6 w-6 text-green-600" />
                  <h3 className="text-xl font-semibold text-gray-900">Emergency Navigation</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Real-time evacuation routes and safe zone guidance based on current conditions
                </p>
                <div className="space-y-3">
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    <MapPin className="h-4 w-4 mr-2" />
                    Show Evacuation Routes
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Navigation className="h-4 w-4 mr-2" />
                    Nearest Safe Zone
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Heart className="h-4 w-4 mr-2" />
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
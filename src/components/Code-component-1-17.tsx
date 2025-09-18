import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Shield, Menu, Bell, User } from "lucide-react";

export function Header() {
  return (
    <header className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <Shield className="h-8 w-8 text-blue-600" />
            <div>
              <h1 className="text-xl font-semibold text-gray-900">SafeEdu</h1>
              <p className="text-xs text-gray-500">Disaster Preparedness Platform</p>
            </div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Button variant="ghost" className="text-gray-600 hover:text-blue-600">
            Dashboard
          </Button>
          <Button variant="ghost" className="text-gray-600 hover:text-blue-600">
            Learn
          </Button>
          <Button variant="ghost" className="text-gray-600 hover:text-blue-600">
            Virtual Drills
          </Button>
          <Button variant="ghost" className="text-gray-600 hover:text-blue-600">
            Emergency
          </Button>
        </nav>

        <div className="flex items-center gap-3">
          <Badge variant="secondary" className="bg-green-100 text-green-800 hidden sm:flex">
            Mumbai Region
          </Badge>
          <Button variant="ghost" size="sm" className="relative">
            <Bell className="h-4 w-4" />
            <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></span>
          </Button>
          <Button variant="ghost" size="sm">
            <User className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm" className="md:hidden">
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}
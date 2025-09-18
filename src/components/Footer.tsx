import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { 
  Shield, 
  Mail, 
  Phone, 
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Heart
} from "lucide-react";

export function Footer() {
  const quickLinks = [
    { name: "Dashboard", href: "#" },
    { name: "Learning Modules", href: "#" },
    { name: "Virtual Drills", href: "#" },
    { name: "Emergency Contacts", href: "#" },
    { name: "Reports & Analytics", href: "#" }
  ];

  const resources = [
    { name: "Documentation", href: "#" },
    { name: "API Reference", href: "#" },
    { name: "Safety Guidelines", href: "#" },
    { name: "Training Materials", href: "#" },
    { name: "Best Practices", href: "#" }
  ];

  const support = [
    { name: "Help Center", href: "#" },
    { name: "Contact Support", href: "#" },
    { name: "Community Forum", href: "#" },
    { name: "Video Tutorials", href: "#" },
    { name: "Request Demo", href: "#" }
  ];

  const compliance = [
    { name: "NDMA Guidelines", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Security Standards", href: "#" },
    { name: "Accessibility", href: "#" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-gradient-to-r from-blue-600 to-blue-700 text-white border-blue-500 mb-4 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300 cursor-pointer animate-pulse">
              🚨 Stay Informed
            </Badge>
            <h3 className="text-2xl font-semibold mb-4">
              Get Emergency Alerts & Safety Updates
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Subscribe to receive region-specific disaster warnings, safety tips, 
              and platform updates directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 hover:border-gray-600"
              />
              <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-6 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 group">
                <span className="relative z-10">Subscribe</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded"></div>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6 group cursor-pointer">
              <div className="p-2 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-500/50 group-hover:rotate-3">
                <Shield className="h-6 w-6 text-white transition-transform duration-300 group-hover:scale-110" />
              </div>
              <div className="transition-all duration-300 group-hover:translate-x-1">
                <h3 className="text-xl font-semibold transition-colors duration-300 group-hover:text-blue-400">SafeEdu</h3>
                <p className="text-sm text-gray-400 transition-colors duration-300 group-hover:text-blue-300">Disaster Preparedness Platform</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 hover:text-gray-300 transition-colors duration-300">
              Empowering educational institutions across India with comprehensive 
              disaster preparedness education, virtual training, and emergency response tools.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-400 hover:text-gray-300 transition-colors duration-300 group cursor-pointer">
                <MapPin className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                Mumbai, Maharashtra, India
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400 hover:text-gray-300 transition-colors duration-300 group cursor-pointer">
                <Phone className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
                +91-22-xxxx-xxxx
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400 hover:text-gray-300 transition-colors duration-300 group cursor-pointer">
                <Mail className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                support@safeedu.in
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Platform</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              {resources.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2">
              {support.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Compliance */}
          <div>
            <h4 className="font-semibold text-white mb-4">Compliance</h4>
            <ul className="space-y-2">
              {compliance.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Certifications & Badges */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
            <Badge variant="outline" className="border-green-500 text-green-400 hover:bg-green-500/10 hover:scale-105 hover:shadow-lg hover:shadow-green-500/30 transition-all duration-300 cursor-pointer">
              🇮🇳 NDMA Approved
            </Badge>
            <Badge variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-500/10 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 cursor-pointer">
              🔒 ISO 27001 Certified
            </Badge>
            <Badge variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500/10 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 cursor-pointer">
              ♿ WCAG 2.1 Compliant
            </Badge>
            <Badge variant="outline" className="border-orange-500 text-orange-400 hover:bg-orange-500/10 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300 cursor-pointer">
              🌐 UNDRR Aligned
            </Badge>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span>© 2025 SafeEdu. All rights reserved.</span>
              <Separator orientation="vertical" className="h-4 bg-gray-700" />
              <span>Disaster Preparedness Education Platform</span>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-400 mr-2">Follow us:</span>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2 hover:bg-blue-600 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 group">
                  <Facebook className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2 hover:bg-blue-400 hover:scale-110 hover:shadow-lg hover:shadow-blue-400/50 transition-all duration-300 group">
                  <Twitter className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2 hover:bg-blue-700 hover:scale-110 hover:shadow-lg hover:shadow-blue-700/50 transition-all duration-300 group">
                  <Linkedin className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2 hover:bg-pink-600 hover:scale-110 hover:shadow-lg hover:shadow-pink-600/50 transition-all duration-300 group">
                  <Instagram className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-4 pt-4 border-t border-gray-800">
            <p className="text-xs text-gray-500 flex items-center justify-center gap-1">
              Made with <Heart className="h-3 w-3 text-red-500 fill-current" /> for safer educational institutions across India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
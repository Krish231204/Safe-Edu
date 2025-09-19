import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { LearningModules } from "./components/LearningModules";
import { VirtualDrills } from "./components/VirtualDrills";
import { DashboardSection } from "./components/DashboardSection";
import { EmergencySection } from "./components/EmergencySection";
import { Footer } from "./components/Footer";
import { LocationProvider } from "./context/LocationContext";

export default function App() {
  return (
    <LocationProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <HeroSection />
          <FeaturesSection />
          <LearningModules />
          <VirtualDrills />
          <DashboardSection />
          <EmergencySection />
        </main>
        <Footer />
      </div>
    </LocationProvider>
  );
}
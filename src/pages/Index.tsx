
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ObjectivesSection from "@/components/ObjectivesSection";
import ImpactCounter from "@/components/ImpactCounter";
import BenefitsSection from "@/components/BenefitsSection";
import Footer from "@/components/Footer";
import ChatPlaceholder from "@/components/ChatPlaceholder";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ObjectivesSection />
        <ImpactCounter />
        <BenefitsSection />
      </main>
      <Footer />
      <ChatPlaceholder />
    </div>
  );
};

export default Index;

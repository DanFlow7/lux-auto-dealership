import { Hero } from "@/components/Hero";
import { CarCatalog } from "@/components/CarCatalog";
import { ProcessSteps } from "@/components/ProcessSteps";
import { Advantages } from "@/components/Advantages";
import { Reviews } from "@/components/Reviews";
import { Team } from "@/components/Team";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <CarCatalog />
      <ProcessSteps />
      <Advantages />
      <Reviews />
      <Team />
      <FAQ />
      <Footer />
    </main>
  );
};

export default Index;

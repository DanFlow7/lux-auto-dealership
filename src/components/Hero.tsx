import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-car.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Премиальный автомобиль" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Автомобили под заказ из <span className="text-gold">Кореи, Китая и Японии</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Экономьте до <span className="text-gold font-semibold">35%</span> на покупке автомобиля с полным сопровождением
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="gradient-gold text-lg px-8 py-6 shadow-gold hover:scale-105 transition-all duration-300 group"
            >
              Рассчитать цену
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-6 border-gold text-foreground hover:bg-gold hover:text-gold-foreground transition-all duration-300"
            >
              Подобрать авто
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-border/50">
            <div>
              <div className="text-4xl md:text-5xl font-serif font-bold text-gold mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Довольных клиентов</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-serif font-bold text-gold mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Лет на рынке</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-serif font-bold text-gold mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Гарантия качества</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

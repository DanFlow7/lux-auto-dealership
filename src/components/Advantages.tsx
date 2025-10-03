import { Card } from "@/components/ui/card";
import { Shield, TrendingDown, Clock, Award, Headphones, FileCheck } from "lucide-react";

const advantages = [
  {
    icon: TrendingDown,
    title: "Экономия до 35%",
    description: "Покупка напрямую у дилеров без наценок посредников",
  },
  {
    icon: Shield,
    title: "Гарантия качества",
    description: "Полная проверка технического состояния и юридическая чистота",
  },
  {
    icon: Clock,
    title: "Быстрая доставка",
    description: "Доставка автомобиля от 30 дней с полным таможенным оформлением",
  },
  {
    icon: Award,
    title: "Премиальный сервис",
    description: "Индивидуальный подход и сопровождение на всех этапах",
  },
  {
    icon: Headphones,
    title: "Поддержка 24/7",
    description: "Всегда на связи для решения любых вопросов",
  },
  {
    icon: FileCheck,
    title: "Полный пакет документов",
    description: "Все документы для постановки на учет в ГИБДД",
  },
];

export const Advantages = () => {
  return (
    <section className="py-20 px-4">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Наши <span className="text-gold">преимущества</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Почему более 500 клиентов выбрали нас для покупки автомобиля
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((advantage, index) => (
            <Card 
              key={index}
              className="bg-card border-border p-8 hover:shadow-gold transition-all duration-300 group"
            >
              <div className="mb-5 w-16 h-16 rounded-lg gradient-gold flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <advantage.icon className="w-8 h-8 text-gold-foreground" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">{advantage.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{advantage.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

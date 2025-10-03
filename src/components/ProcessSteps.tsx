import { Card } from "@/components/ui/card";
import { FileText, Search, CheckCircle2, CreditCard } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Оформление заявки",
    description: "Оставьте заявку на сайте или по телефону. Мы свяжемся с вами в течение 15 минут",
  },
  {
    icon: Search,
    title: "Подбор авто",
    description: "Наши специалисты подберут автомобиль согласно вашим требованиям и бюджету",
  },
  {
    icon: CheckCircle2,
    title: "Проверка и доставка",
    description: "Полная техническая проверка, таможенное оформление и доставка к вам",
  },
  {
    icon: CreditCard,
    title: "Оплата и получение",
    description: "Удобная схема оплаты. Получите автомобиль с полным пакетом документов",
  },
];

export const ProcessSteps = () => {
  return (
    <section className="py-20 px-4 bg-card">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Этапы <span className="text-gold">покупки</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Простой и прозрачный процесс от заявки до получения автомобиля
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card 
              key={index}
              className="bg-background border-border p-6 hover:shadow-gold transition-all duration-300 relative"
            >
              <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full gradient-gold flex items-center justify-center font-serif font-bold text-xl text-gold-foreground shadow-gold">
                {index + 1}
              </div>
              <div className="mb-4 w-14 h-14 rounded-lg bg-gold/10 flex items-center justify-center">
                <step.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

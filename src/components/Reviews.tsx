import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Александр Петров",
    car: "BMW X5 2023",
    rating: 5,
    text: "Отличный сервис! Помогли подобрать автомобиль мечты. Все прозрачно, документы в порядке. Сэкономил около 2 миллионов по сравнению с покупкой в России.",
    date: "Январь 2024",
  },
  {
    name: "Мария Соколова",
    car: "Mercedes-Benz E-Class",
    rating: 5,
    text: "Очень довольна покупкой! Менеджеры профессионалы своего дела, всегда на связи. Автомобиль пришел в идеальном состоянии. Рекомендую!",
    date: "Декабрь 2023",
  },
  {
    name: "Дмитрий Волков",
    car: "Audi Q7 2024",
    rating: 5,
    text: "Заказывал через них уже второй автомобиль. Полностью доверяю этой компании. Быстро, качественно, выгодно. Спасибо за работу!",
    date: "Февраль 2024",
  },
];

export const Reviews = () => {
  return (
    <section className="py-20 px-4 bg-card">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Отзывы <span className="text-gold">клиентов</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Истории наших клиентов, которые уже получили автомобили мечты
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card 
              key={index}
              className="bg-background border-border p-6 hover:shadow-gold transition-all duration-300 relative"
            >
              <Quote className="absolute top-4 right-4 w-10 h-10 text-gold/20" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>

              <p className="text-foreground leading-relaxed mb-6 relative z-10">
                "{review.text}"
              </p>

              <div className="pt-4 border-t border-border">
                <div className="font-semibold">{review.name}</div>
                <div className="text-sm text-muted-foreground">{review.car}</div>
                <div className="text-xs text-gold mt-1">{review.date}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

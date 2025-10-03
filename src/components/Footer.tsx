import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-serif text-2xl font-bold text-gold mb-4">AutoLux</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Премиальные автомобили из Азии с гарантией качества и полным сопровождением
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#catalog" className="hover:text-gold transition-colors">Каталог автомобилей</a></li>
              <li><a href="#process" className="hover:text-gold transition-colors">Как мы работаем</a></li>
              <li><a href="#advantages" className="hover:text-gold transition-colors">Наши преимущества</a></li>
              <li><a href="#reviews" className="hover:text-gold transition-colors">Отзывы клиентов</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Информация</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#team" className="hover:text-gold transition-colors">Наша команда</a></li>
              <li><a href="#faq" className="hover:text-gold transition-colors">Вопросы и ответы</a></li>
              <li><a href="#contacts" className="hover:text-gold transition-colors">Контакты</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Политика конфиденциальности</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2 text-muted-foreground">
                <Phone className="w-4 h-4 mt-0.5 text-gold" />
                <div>
                  <a href="tel:+79991234567" className="hover:text-gold transition-colors block">
                    +7 (999) 123-45-67
                  </a>
                  <span className="text-xs">Ежедневно с 9:00 до 21:00</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4 text-gold" />
                <a href="mailto:info@autolux.ru" className="hover:text-gold transition-colors">
                  info@autolux.ru
                </a>
              </div>
              <div className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 text-gold" />
                <span>г. Москва, ул. Примерная, д. 1</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 AutoLux. Все права защищены.
          </p>
          <Button 
            className="gradient-gold hover:scale-105 transition-all duration-300"
          >
            Получить консультацию
          </Button>
        </div>
      </div>
    </footer>
  );
};

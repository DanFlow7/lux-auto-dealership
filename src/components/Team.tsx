import { Card } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";

const team = [
  {
    name: "Максим Иванов",
    position: "Руководитель",
    phone: "+7 (999) 123-45-67",
    email: "ivanov@autolux.ru",
  },
  {
    name: "Анна Кузнецова",
    position: "Менеджер по продажам",
    phone: "+7 (999) 234-56-78",
    email: "kuznetsova@autolux.ru",
  },
  {
    name: "Сергей Морозов",
    position: "Специалист по логистике",
    phone: "+7 (999) 345-67-89",
    email: "morozov@autolux.ru",
  },
  {
    name: "Елена Волкова",
    position: "Юрист",
    phone: "+7 (999) 456-78-90",
    email: "volkova@autolux.ru",
  },
];

export const Team = () => {
  return (
    <section className="py-20 px-4">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Наша <span className="text-gold">команда</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Профессионалы, которые помогут вам на каждом этапе
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <Card 
              key={index}
              className="bg-card border-border overflow-hidden hover:shadow-gold transition-all duration-300 group"
            >
              <div className="h-64 bg-gradient-to-br from-gold/20 to-transparent flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gold/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="text-5xl font-serif text-gold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-serif text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-gold text-sm mb-4">{member.position}</p>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Phone className="w-4 h-4" />
                    <a href={`tel:${member.phone}`} className="hover:text-gold transition-colors">
                      {member.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Mail className="w-4 h-4" />
                    <a href={`mailto:${member.email}`} className="hover:text-gold transition-colors">
                      {member.email}
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

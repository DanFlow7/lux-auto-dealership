import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Car, Calendar, Gauge } from "lucide-react";
import car1 from "@/assets/car-1.jpg";
import car2 from "@/assets/car-2.jpg";
import car3 from "@/assets/car-3.jpg";
import car4 from "@/assets/car-4.jpg";

const cars = [
  {
    id: 1,
    name: "BMW X5",
    model: "xDrive 40i",
    price: "5 890 000",
    year: "2023",
    mileage: "15 000",
    image: car1,
  },
  {
    id: 2,
    name: "Mercedes-Benz E-Class",
    model: "E 300 AMG",
    price: "4 750 000",
    year: "2023",
    mileage: "8 500",
    image: car2,
  },
  {
    id: 3,
    name: "Audi Q7",
    model: "55 TFSI Quattro",
    price: "6 250 000",
    year: "2024",
    mileage: "5 200",
    image: car3,
  },
  {
    id: 4,
    name: "Porsche Cayenne",
    model: "S Coupé",
    price: "8 900 000",
    year: "2023",
    mileage: "12 000",
    image: car4,
  },
];

export const CarCatalog = () => {
  return (
    <section className="py-20 px-4">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Каталог <span className="text-gold">автомобилей</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Подборка премиальных автомобилей с гарантией качества
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cars.map((car) => (
            <Card 
              key={car.id}
              className="bg-card border-border overflow-hidden hover:shadow-gold transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={car.image} 
                  alt={`${car.name} ${car.model}`}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-gold text-gold-foreground px-3 py-1 rounded-full text-xs font-semibold">
                  В наличии
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-serif text-xl font-semibold mb-1">{car.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{car.model}</p>
                
                <div className="flex gap-4 mb-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {car.year}
                  </div>
                  <div className="flex items-center gap-1">
                    <Gauge className="w-3 h-3" />
                    {car.mileage} км
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <div className="text-2xl font-serif font-bold text-gold">{car.price} ₽</div>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-gold hover:bg-gold hover:text-gold-foreground transition-colors"
                  >
                    Подробнее
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            variant="outline"
            className="border-gold hover:bg-gold hover:text-gold-foreground"
          >
            <Car className="mr-2" />
            Смотреть все автомобили
          </Button>
        </div>
      </div>
    </section>
  );
};
